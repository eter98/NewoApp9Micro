import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';
import { JhiAlertService } from 'ng-jhipster';
import { IChat, Chat } from 'app/shared/model/chat.model';
import { ChatService } from './chat.service';
import { IUser, UserService } from 'app/core';

@Component({
  selector: 'jhi-chat-update',
  templateUrl: './chat-update.component.html'
})
export class ChatUpdateComponent implements OnInit {
  isSaving: boolean;

  users: IUser[];

  editForm = this.fb.group({
    id: [],
    mensaje: [null, [Validators.required]],
    fecha: [],
    leido: [],
    deId: [],
    paraId: []
  });

  constructor(
    protected jhiAlertService: JhiAlertService,
    protected chatService: ChatService,
    protected userService: UserService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ chat }) => {
      this.updateForm(chat);
    });
    this.userService
      .query()
      .pipe(
        filter((mayBeOk: HttpResponse<IUser[]>) => mayBeOk.ok),
        map((response: HttpResponse<IUser[]>) => response.body)
      )
      .subscribe((res: IUser[]) => (this.users = res), (res: HttpErrorResponse) => this.onError(res.message));
  }

  updateForm(chat: IChat) {
    this.editForm.patchValue({
      id: chat.id,
      mensaje: chat.mensaje,
      fecha: chat.fecha != null ? chat.fecha.format(DATE_TIME_FORMAT) : null,
      leido: chat.leido,
      deId: chat.deId,
      paraId: chat.paraId
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const chat = this.createFromForm();
    if (chat.id !== undefined) {
      this.subscribeToSaveResponse(this.chatService.update(chat));
    } else {
      this.subscribeToSaveResponse(this.chatService.create(chat));
    }
  }

  private createFromForm(): IChat {
    return {
      ...new Chat(),
      id: this.editForm.get(['id']).value,
      mensaje: this.editForm.get(['mensaje']).value,
      fecha: this.editForm.get(['fecha']).value != null ? moment(this.editForm.get(['fecha']).value, DATE_TIME_FORMAT) : undefined,
      leido: this.editForm.get(['leido']).value,
      deId: this.editForm.get(['deId']).value,
      paraId: this.editForm.get(['paraId']).value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IChat>>) {
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
