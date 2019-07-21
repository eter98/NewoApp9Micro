import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';
import { JhiAlertService } from 'ng-jhipster';
import { IChatGrupo, ChatGrupo } from 'app/shared/model/chat-grupo.model';
import { ChatGrupoService } from './chat-grupo.service';
import { IUser, UserService } from 'app/core';
import { IGrupos } from 'app/shared/model/grupos.model';
import { GruposService } from 'app/entities/grupos';

@Component({
  selector: 'jhi-chat-grupo-update',
  templateUrl: './chat-grupo-update.component.html'
})
export class ChatGrupoUpdateComponent implements OnInit {
  isSaving: boolean;

  users: IUser[];

  grupos: IGrupos[];

  editForm = this.fb.group({
    id: [],
    mensaje: [null, [Validators.required]],
    fecha: [],
    leido: [],
    deId: [],
    paraId: [],
    grupoId: []
  });

  constructor(
    protected jhiAlertService: JhiAlertService,
    protected chatGrupoService: ChatGrupoService,
    protected userService: UserService,
    protected gruposService: GruposService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ chatGrupo }) => {
      this.updateForm(chatGrupo);
    });
    this.userService
      .query()
      .pipe(
        filter((mayBeOk: HttpResponse<IUser[]>) => mayBeOk.ok),
        map((response: HttpResponse<IUser[]>) => response.body)
      )
      .subscribe((res: IUser[]) => (this.users = res), (res: HttpErrorResponse) => this.onError(res.message));
    this.gruposService
      .query()
      .pipe(
        filter((mayBeOk: HttpResponse<IGrupos[]>) => mayBeOk.ok),
        map((response: HttpResponse<IGrupos[]>) => response.body)
      )
      .subscribe((res: IGrupos[]) => (this.grupos = res), (res: HttpErrorResponse) => this.onError(res.message));
  }

  updateForm(chatGrupo: IChatGrupo) {
    this.editForm.patchValue({
      id: chatGrupo.id,
      mensaje: chatGrupo.mensaje,
      fecha: chatGrupo.fecha != null ? chatGrupo.fecha.format(DATE_TIME_FORMAT) : null,
      leido: chatGrupo.leido,
      deId: chatGrupo.deId,
      paraId: chatGrupo.paraId,
      grupoId: chatGrupo.grupoId
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const chatGrupo = this.createFromForm();
    if (chatGrupo.id !== undefined) {
      this.subscribeToSaveResponse(this.chatGrupoService.update(chatGrupo));
    } else {
      this.subscribeToSaveResponse(this.chatGrupoService.create(chatGrupo));
    }
  }

  private createFromForm(): IChatGrupo {
    return {
      ...new ChatGrupo(),
      id: this.editForm.get(['id']).value,
      mensaje: this.editForm.get(['mensaje']).value,
      fecha: this.editForm.get(['fecha']).value != null ? moment(this.editForm.get(['fecha']).value, DATE_TIME_FORMAT) : undefined,
      leido: this.editForm.get(['leido']).value,
      deId: this.editForm.get(['deId']).value,
      paraId: this.editForm.get(['paraId']).value,
      grupoId: this.editForm.get(['grupoId']).value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IChatGrupo>>) {
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

  trackGruposById(index: number, item: IGrupos) {
    return item.id;
  }
}
