import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';
import { JhiAlertService } from 'ng-jhipster';
import { IEntradaInvitados, EntradaInvitados } from 'app/shared/model/entrada-invitados.model';
import { EntradaInvitadosService } from './entrada-invitados.service';
import { IEspacioLibre } from 'app/shared/model/espacio-libre.model';
import { EspacioLibreService } from 'app/entities/espacio-libre';
import { IEspaciosReserva } from 'app/shared/model/espacios-reserva.model';
import { EspaciosReservaService } from 'app/entities/espacios-reserva';
import { IInvitados } from 'app/shared/model/invitados.model';
import { InvitadosService } from 'app/entities/invitados';
import { IUser, UserService } from 'app/core';

@Component({
  selector: 'jhi-entrada-invitados-update',
  templateUrl: './entrada-invitados-update.component.html'
})
export class EntradaInvitadosUpdateComponent implements OnInit {
  isSaving: boolean;

  espaciolibres: IEspacioLibre[];

  espaciosreservas: IEspaciosReserva[];

  invitados: IInvitados[];

  users: IUser[];

  editForm = this.fb.group({
    id: [],
    registroFecha: [null, [Validators.required]],
    tipoEntrada: [],
    tipoIngreso: [],
    tiempoMaximo: [],
    espacioId: [],
    espacioReservaId: [],
    invitadoId: [],
    miembroId: []
  });

  constructor(
    protected jhiAlertService: JhiAlertService,
    protected entradaInvitadosService: EntradaInvitadosService,
    protected espacioLibreService: EspacioLibreService,
    protected espaciosReservaService: EspaciosReservaService,
    protected invitadosService: InvitadosService,
    protected userService: UserService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ entradaInvitados }) => {
      this.updateForm(entradaInvitados);
    });
    this.espacioLibreService
      .query()
      .pipe(
        filter((mayBeOk: HttpResponse<IEspacioLibre[]>) => mayBeOk.ok),
        map((response: HttpResponse<IEspacioLibre[]>) => response.body)
      )
      .subscribe((res: IEspacioLibre[]) => (this.espaciolibres = res), (res: HttpErrorResponse) => this.onError(res.message));
    this.espaciosReservaService
      .query()
      .pipe(
        filter((mayBeOk: HttpResponse<IEspaciosReserva[]>) => mayBeOk.ok),
        map((response: HttpResponse<IEspaciosReserva[]>) => response.body)
      )
      .subscribe((res: IEspaciosReserva[]) => (this.espaciosreservas = res), (res: HttpErrorResponse) => this.onError(res.message));
    this.invitadosService
      .query()
      .pipe(
        filter((mayBeOk: HttpResponse<IInvitados[]>) => mayBeOk.ok),
        map((response: HttpResponse<IInvitados[]>) => response.body)
      )
      .subscribe((res: IInvitados[]) => (this.invitados = res), (res: HttpErrorResponse) => this.onError(res.message));
    this.userService
      .query()
      .pipe(
        filter((mayBeOk: HttpResponse<IUser[]>) => mayBeOk.ok),
        map((response: HttpResponse<IUser[]>) => response.body)
      )
      .subscribe((res: IUser[]) => (this.users = res), (res: HttpErrorResponse) => this.onError(res.message));
  }

  updateForm(entradaInvitados: IEntradaInvitados) {
    this.editForm.patchValue({
      id: entradaInvitados.id,
      registroFecha: entradaInvitados.registroFecha != null ? entradaInvitados.registroFecha.format(DATE_TIME_FORMAT) : null,
      tipoEntrada: entradaInvitados.tipoEntrada,
      tipoIngreso: entradaInvitados.tipoIngreso,
      tiempoMaximo: entradaInvitados.tiempoMaximo,
      espacioId: entradaInvitados.espacioId,
      espacioReservaId: entradaInvitados.espacioReservaId,
      invitadoId: entradaInvitados.invitadoId,
      miembroId: entradaInvitados.miembroId
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const entradaInvitados = this.createFromForm();
    if (entradaInvitados.id !== undefined) {
      this.subscribeToSaveResponse(this.entradaInvitadosService.update(entradaInvitados));
    } else {
      this.subscribeToSaveResponse(this.entradaInvitadosService.create(entradaInvitados));
    }
  }

  private createFromForm(): IEntradaInvitados {
    return {
      ...new EntradaInvitados(),
      id: this.editForm.get(['id']).value,
      registroFecha:
        this.editForm.get(['registroFecha']).value != null
          ? moment(this.editForm.get(['registroFecha']).value, DATE_TIME_FORMAT)
          : undefined,
      tipoEntrada: this.editForm.get(['tipoEntrada']).value,
      tipoIngreso: this.editForm.get(['tipoIngreso']).value,
      tiempoMaximo: this.editForm.get(['tiempoMaximo']).value,
      espacioId: this.editForm.get(['espacioId']).value,
      espacioReservaId: this.editForm.get(['espacioReservaId']).value,
      invitadoId: this.editForm.get(['invitadoId']).value,
      miembroId: this.editForm.get(['miembroId']).value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IEntradaInvitados>>) {
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

  trackEspacioLibreById(index: number, item: IEspacioLibre) {
    return item.id;
  }

  trackEspaciosReservaById(index: number, item: IEspaciosReserva) {
    return item.id;
  }

  trackInvitadosById(index: number, item: IInvitados) {
    return item.id;
  }

  trackUserById(index: number, item: IUser) {
    return item.id;
  }
}
