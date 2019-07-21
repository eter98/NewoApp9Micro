import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';
import { JhiAlertService } from 'ng-jhipster';
import { IReservas, Reservas } from 'app/shared/model/reservas.model';
import { ReservasService } from './reservas.service';
import { IUser, UserService } from 'app/core';
import { IEspaciosReserva } from 'app/shared/model/espacios-reserva.model';
import { EspaciosReservaService } from 'app/entities/espacios-reserva';

@Component({
  selector: 'jhi-reservas-update',
  templateUrl: './reservas-update.component.html'
})
export class ReservasUpdateComponent implements OnInit {
  isSaving: boolean;

  users: IUser[];

  espaciosreservas: IEspaciosReserva[];

  editForm = this.fb.group({
    id: [],
    registroFechaEntrada: [null, [Validators.required]],
    registroFechaSalida: [null, [Validators.required]],
    estadoReserva: [],
    miembroId: [],
    espacioId: []
  });

  constructor(
    protected jhiAlertService: JhiAlertService,
    protected reservasService: ReservasService,
    protected userService: UserService,
    protected espaciosReservaService: EspaciosReservaService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ reservas }) => {
      this.updateForm(reservas);
    });
    this.userService
      .query()
      .pipe(
        filter((mayBeOk: HttpResponse<IUser[]>) => mayBeOk.ok),
        map((response: HttpResponse<IUser[]>) => response.body)
      )
      .subscribe((res: IUser[]) => (this.users = res), (res: HttpErrorResponse) => this.onError(res.message));
    this.espaciosReservaService
      .query()
      .pipe(
        filter((mayBeOk: HttpResponse<IEspaciosReserva[]>) => mayBeOk.ok),
        map((response: HttpResponse<IEspaciosReserva[]>) => response.body)
      )
      .subscribe((res: IEspaciosReserva[]) => (this.espaciosreservas = res), (res: HttpErrorResponse) => this.onError(res.message));
  }

  updateForm(reservas: IReservas) {
    this.editForm.patchValue({
      id: reservas.id,
      registroFechaEntrada: reservas.registroFechaEntrada != null ? reservas.registroFechaEntrada.format(DATE_TIME_FORMAT) : null,
      registroFechaSalida: reservas.registroFechaSalida != null ? reservas.registroFechaSalida.format(DATE_TIME_FORMAT) : null,
      estadoReserva: reservas.estadoReserva,
      miembroId: reservas.miembroId,
      espacioId: reservas.espacioId
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const reservas = this.createFromForm();
    if (reservas.id !== undefined) {
      this.subscribeToSaveResponse(this.reservasService.update(reservas));
    } else {
      this.subscribeToSaveResponse(this.reservasService.create(reservas));
    }
  }

  private createFromForm(): IReservas {
    return {
      ...new Reservas(),
      id: this.editForm.get(['id']).value,
      registroFechaEntrada:
        this.editForm.get(['registroFechaEntrada']).value != null
          ? moment(this.editForm.get(['registroFechaEntrada']).value, DATE_TIME_FORMAT)
          : undefined,
      registroFechaSalida:
        this.editForm.get(['registroFechaSalida']).value != null
          ? moment(this.editForm.get(['registroFechaSalida']).value, DATE_TIME_FORMAT)
          : undefined,
      estadoReserva: this.editForm.get(['estadoReserva']).value,
      miembroId: this.editForm.get(['miembroId']).value,
      espacioId: this.editForm.get(['espacioId']).value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IReservas>>) {
    result.subscribe(() => this.onSaveSuccess(), () => this.onSaveError());
  }

  protected onSaveSuccess() {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError() {
    this.isSaving = false;
  }
  protected onError(errorMessage: string) {
    this.jhiAlertService.error(errorMessage, null, null);
  }

  trackUserById(index: number, item: IUser) {
    return item.id;
  }

  trackEspaciosReservaById(index: number, item: IEspaciosReserva) {
    return item.id;
  }
}
