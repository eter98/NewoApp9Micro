/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { NewoApp9MicroTestModule } from '../../../test.module';
import { ChatGrupoDeleteDialogComponent } from 'app/entities/chat-grupo/chat-grupo-delete-dialog.component';
import { ChatGrupoService } from 'app/entities/chat-grupo/chat-grupo.service';

describe('Component Tests', () => {
  describe('ChatGrupo Management Delete Component', () => {
    let comp: ChatGrupoDeleteDialogComponent;
    let fixture: ComponentFixture<ChatGrupoDeleteDialogComponent>;
    let service: ChatGrupoService;
    let mockEventManager: any;
    let mockActiveModal: any;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [NewoApp9MicroTestModule],
        declarations: [ChatGrupoDeleteDialogComponent]
      })
        .overrideTemplate(ChatGrupoDeleteDialogComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(ChatGrupoDeleteDialogComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(ChatGrupoService);
      mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
      mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
    });

    describe('confirmDelete', () => {
      it('Should call delete service on confirmDelete', inject(
        [],
        fakeAsync(() => {
          // GIVEN
          spyOn(service, 'delete').and.returnValue(of({}));

          // WHEN
          comp.confirmDelete(123);
          tick();

          // THEN
          expect(service.delete).toHaveBeenCalledWith(123);
          expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
          expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
        })
      ));
    });
  });
});
