/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Observable, of } from 'rxjs';

import { NewoApp9MicroTestModule } from '../../../test.module';
import { ComentarioBlogUpdateComponent } from 'app/entities/comentario-blog/comentario-blog-update.component';
import { ComentarioBlogService } from 'app/entities/comentario-blog/comentario-blog.service';
import { ComentarioBlog } from 'app/shared/model/comentario-blog.model';

describe('Component Tests', () => {
  describe('ComentarioBlog Management Update Component', () => {
    let comp: ComentarioBlogUpdateComponent;
    let fixture: ComponentFixture<ComentarioBlogUpdateComponent>;
    let service: ComentarioBlogService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [NewoApp9MicroTestModule],
        declarations: [ComentarioBlogUpdateComponent],
        providers: [FormBuilder]
      })
        .overrideTemplate(ComentarioBlogUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(ComentarioBlogUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(ComentarioBlogService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new ComentarioBlog(123);
        spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
        comp.updateForm(entity);
        // WHEN
        comp.save();
        tick(); // simulate async

        // THEN
        expect(service.update).toHaveBeenCalledWith(entity);
        expect(comp.isSaving).toEqual(false);
      }));

      it('Should call create service on save for new entity', fakeAsync(() => {
        // GIVEN
        const entity = new ComentarioBlog();
        spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
        comp.updateForm(entity);
        // WHEN
        comp.save();
        tick(); // simulate async

        // THEN
        expect(service.create).toHaveBeenCalledWith(entity);
        expect(comp.isSaving).toEqual(false);
      }));
    });
  });
});
