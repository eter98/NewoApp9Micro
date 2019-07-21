import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { NewoApp9MicroSharedModule } from 'app/shared';
import {
  ComentarioFeedComponent,
  ComentarioFeedDetailComponent,
  ComentarioFeedUpdateComponent,
  ComentarioFeedDeletePopupComponent,
  ComentarioFeedDeleteDialogComponent,
  comentarioFeedRoute,
  comentarioFeedPopupRoute
} from './';

const ENTITY_STATES = [...comentarioFeedRoute, ...comentarioFeedPopupRoute];

@NgModule({
  imports: [NewoApp9MicroSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    ComentarioFeedComponent,
    ComentarioFeedDetailComponent,
    ComentarioFeedUpdateComponent,
    ComentarioFeedDeleteDialogComponent,
    ComentarioFeedDeletePopupComponent
  ],
  entryComponents: [
    ComentarioFeedComponent,
    ComentarioFeedUpdateComponent,
    ComentarioFeedDeleteDialogComponent,
    ComentarioFeedDeletePopupComponent
  ],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NewoApp9MicroComentarioFeedModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey !== undefined) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
