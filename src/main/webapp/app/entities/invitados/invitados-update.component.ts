import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiAlertService } from 'ng-jhipster';
import { IInvitados, Invitados } from 'app/shared/model/invitados.model';
import { InvitadosService } from './invitados.service';
import { IUser, UserService } from 'app/core';

@Component({
  selector: 'jhi-invitados-update',
  templateUrl: './invitados-update.component.html'
})
export class InvitadosUpdateComponent implements OnInit {
  isSaving: boolean;

  users: IUser[];

  editForm = this.fb.group({
    id: [],
    nombre: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
    apellido: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
    tipoDocumento: [null, [Validators.required]],
    identificacion: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
    correo: [null, [Validators.required]],
    telefono: [null, [Validators.minLength(7), Validators.maxLength(12)]],
    miembroId: []
  });

  constructor(
    protected jhiAlertService: JhiAlertService,
    protected invitadosService: InvitadosService,
    protected userService: UserService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ invitados }) => {
      this.updateForm(invitados);
    });
    this.userService
      .query()
      .pipe(
        filter((mayBeOk: HttpResponse<IUser[]>) => mayBeOk.ok),
        map((response: HttpResponse<IUser[]>) => response.body)
      )
      .subscribe((res: IUser[]) => (this.users = res), (res: HttpErrorResponse) => this.onError(res.message));
  }

  updateForm(invitados: IInvitados) {
    this.editForm.patchValue({
      id: invitados.id,
      nombre: invitados.nombre,
      apellido: invitados.apellido,
      tipoDocumento: invitados.tipoDocumento,
      identificacion: invitados.identificacion,
      correo: invitados.correo,
      telefono: invitados.telefono,
      miembroId: invitados.miembroId
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const invitados = this.createFromForm();
    if (invitados.id !== undefined) {
      this.subscribeToSaveResponse(this.invitadosService.update(invitados));
    } else {
      this.subscribeToSaveResponse(this.invitadosService.create(invitados));
    }
  }

  private createFromForm(): IInvitados {
    return {
      ...new Invitados(),
      id: this.editForm.get(['id']).value,
      nombre: this.editForm.get(['nombre']).value,
      apellido: this.editForm.get(['apellido']).value,
      tipoDocumento: this.editForm.get(['tipoDocumento']).value,
      identificacion: this.editForm.get(['identificacion']).value,
      correo: this.editForm.get(['correo']).value,
      telefono: this.editForm.get(['telefono']).value,
      miembroId: this.editForm.get(['miembroId']).value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IInvitados>>) {
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
}
