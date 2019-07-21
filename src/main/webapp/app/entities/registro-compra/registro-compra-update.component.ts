import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiAlertService } from 'ng-jhipster';
import { IRegistroCompra, RegistroCompra } from 'app/shared/model/registro-compra.model';
import { RegistroCompraService } from './registro-compra.service';
import { IUser, UserService } from 'app/core';
import { IFacturacion } from 'app/shared/model/facturacion.model';
import { FacturacionService } from 'app/entities/facturacion';
import { IReservas } from 'app/shared/model/reservas.model';
import { ReservasService } from 'app/entities/reservas';
import { IEntradaInvitados } from 'app/shared/model/entrada-invitados.model';
import { EntradaInvitadosService } from 'app/entities/entrada-invitados';
import { IEntradaMiembros } from 'app/shared/model/entrada-miembros.model';
import { EntradaMiembrosService } from 'app/entities/entrada-miembros';

@Component({
  selector: 'jhi-registro-compra-update',
  templateUrl: './registro-compra-update.component.html'
})
export class RegistroCompraUpdateComponent implements OnInit {
  isSaving: boolean;

  users: IUser[];

  facturacions: IFacturacion[];

  reservas: IReservas[];

  entradainvitados: IEntradaInvitados[];

  entradamiembros: IEntradaMiembros[];

  editForm = this.fb.group({
    id: [],
    consumoMarket: [],
    miembroId: [],
    facturacionId: [],
    reservasId: [],
    entradaInvitadosId: [],
    entradaMiembrosId: []
  });

  constructor(
    protected jhiAlertService: JhiAlertService,
    protected registroCompraService: RegistroCompraService,
    protected userService: UserService,
    protected facturacionService: FacturacionService,
    protected reservasService: ReservasService,
    protected entradaInvitadosService: EntradaInvitadosService,
    protected entradaMiembrosService: EntradaMiembrosService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ registroCompra }) => {
      this.updateForm(registroCompra);
    });
    this.userService
      .query()
      .pipe(
        filter((mayBeOk: HttpResponse<IUser[]>) => mayBeOk.ok),
        map((response: HttpResponse<IUser[]>) => response.body)
      )
      .subscribe((res: IUser[]) => (this.users = res), (res: HttpErrorResponse) => this.onError(res.message));
    this.facturacionService
      .query()
      .pipe(
        filter((mayBeOk: HttpResponse<IFacturacion[]>) => mayBeOk.ok),
        map((response: HttpResponse<IFacturacion[]>) => response.body)
      )
      .subscribe((res: IFacturacion[]) => (this.facturacions = res), (res: HttpErrorResponse) => this.onError(res.message));
    this.reservasService
      .query()
      .pipe(
        filter((mayBeOk: HttpResponse<IReservas[]>) => mayBeOk.ok),
        map((response: HttpResponse<IReservas[]>) => response.body)
      )
      .subscribe((res: IReservas[]) => (this.reservas = res), (res: HttpErrorResponse) => this.onError(res.message));
    this.entradaInvitadosService
      .query()
      .pipe(
        filter((mayBeOk: HttpResponse<IEntradaInvitados[]>) => mayBeOk.ok),
        map((response: HttpResponse<IEntradaInvitados[]>) => response.body)
      )
      .subscribe((res: IEntradaInvitados[]) => (this.entradainvitados = res), (res: HttpErrorResponse) => this.onError(res.message));
    this.entradaMiembrosService
      .query()
      .pipe(
        filter((mayBeOk: HttpResponse<IEntradaMiembros[]>) => mayBeOk.ok),
        map((response: HttpResponse<IEntradaMiembros[]>) => response.body)
      )
      .subscribe((res: IEntradaMiembros[]) => (this.entradamiembros = res), (res: HttpErrorResponse) => this.onError(res.message));
  }

  updateForm(registroCompra: IRegistroCompra) {
    this.editForm.patchValue({
      id: registroCompra.id,
      consumoMarket: registroCompra.consumoMarket,
      miembroId: registroCompra.miembroId,
      facturacionId: registroCompra.facturacionId,
      reservasId: registroCompra.reservasId,
      entradaInvitadosId: registroCompra.entradaInvitadosId,
      entradaMiembrosId: registroCompra.entradaMiembrosId
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const registroCompra = this.createFromForm();
    if (registroCompra.id !== undefined) {
      this.subscribeToSaveResponse(this.registroCompraService.update(registroCompra));
    } else {
      this.subscribeToSaveResponse(this.registroCompraService.create(registroCompra));
    }
  }

  private createFromForm(): IRegistroCompra {
    return {
      ...new RegistroCompra(),
      id: this.editForm.get(['id']).value,
      consumoMarket: this.editForm.get(['consumoMarket']).value,
      miembroId: this.editForm.get(['miembroId']).value,
      facturacionId: this.editForm.get(['facturacionId']).value,
      reservasId: this.editForm.get(['reservasId']).value,
      entradaInvitadosId: this.editForm.get(['entradaInvitadosId']).value,
      entradaMiembrosId: this.editForm.get(['entradaMiembrosId']).value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IRegistroCompra>>) {
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

  trackFacturacionById(index: number, item: IFacturacion) {
    return item.id;
  }

  trackReservasById(index: number, item: IReservas) {
    return item.id;
  }

  trackEntradaInvitadosById(index: number, item: IEntradaInvitados) {
    return item.id;
  }

  trackEntradaMiembrosById(index: number, item: IEntradaMiembros) {
    return item.id;
  }
}
