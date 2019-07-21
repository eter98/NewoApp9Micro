import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiAlertService } from 'ng-jhipster';
import { IBeneficio, Beneficio } from 'app/shared/model/beneficio.model';
import { BeneficioService } from './beneficio.service';
import { IUser, UserService } from 'app/core';

@Component({
  selector: 'jhi-beneficio-update',
  templateUrl: './beneficio-update.component.html'
})
export class BeneficioUpdateComponent implements OnInit {
  isSaving: boolean;

  users: IUser[];

  editForm = this.fb.group({
    id: [],
    tipoBeneficio: [null, [Validators.required]],
    descuento: [null, [Validators.required]],
    miembroId: []
  });

  constructor(
    protected jhiAlertService: JhiAlertService,
    protected beneficioService: BeneficioService,
    protected userService: UserService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ beneficio }) => {
      this.updateForm(beneficio);
    });
    this.userService
      .query()
      .pipe(
        filter((mayBeOk: HttpResponse<IUser[]>) => mayBeOk.ok),
        map((response: HttpResponse<IUser[]>) => response.body)
      )
      .subscribe((res: IUser[]) => (this.users = res), (res: HttpErrorResponse) => this.onError(res.message));
  }

  updateForm(beneficio: IBeneficio) {
    this.editForm.patchValue({
      id: beneficio.id,
      tipoBeneficio: beneficio.tipoBeneficio,
      descuento: beneficio.descuento,
      miembroId: beneficio.miembroId
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const beneficio = this.createFromForm();
    if (beneficio.id !== undefined) {
      this.subscribeToSaveResponse(this.beneficioService.update(beneficio));
    } else {
      this.subscribeToSaveResponse(this.beneficioService.create(beneficio));
    }
  }

  private createFromForm(): IBeneficio {
    return {
      ...new Beneficio(),
      id: this.editForm.get(['id']).value,
      tipoBeneficio: this.editForm.get(['tipoBeneficio']).value,
      descuento: this.editForm.get(['descuento']).value,
      miembroId: this.editForm.get(['miembroId']).value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IBeneficio>>) {
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
