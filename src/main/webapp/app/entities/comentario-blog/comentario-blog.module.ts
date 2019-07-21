import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { NewoApp9MicroSharedModule } from 'app/shared';
import {
  ComentarioBlogComponent,
  ComentarioBlogDetailComponent,
  ComentarioBlogUpdateComponent,
  ComentarioBlogDeletePopupComponent,
  ComentarioBlogDeleteDialogComponent,
  comentarioBlogRoute,
  comentarioBlogPopupRoute
} from './';

const ENTITY_STATES = [...comentarioBlogRoute, ...comentarioBlogPopupRoute];

@NgModule({
  imports: [NewoApp9MicroSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    ComentarioBlogComponent,
    ComentarioBlogDetailComponent,
    ComentarioBlogUpdateComponent,
    ComentarioBlogDeleteDialogComponent,
    ComentarioBlogDeletePopupComponent
  ],
  entryComponents: [
    ComentarioBlogComponent,
    ComentarioBlogUpdateComponent,
    ComentarioBlogDeleteDialogComponent,
    ComentarioBlogDeletePopupComponent
  ],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NewoApp9MicroComentarioBlogModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey !== undefined) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
