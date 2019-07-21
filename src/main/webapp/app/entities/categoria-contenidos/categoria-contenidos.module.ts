import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { NewoApp9MicroSharedModule } from 'app/shared';
import {
  CategoriaContenidosComponent,
  CategoriaContenidosDetailComponent,
  CategoriaContenidosUpdateComponent,
  CategoriaContenidosDeletePopupComponent,
  CategoriaContenidosDeleteDialogComponent,
  categoriaContenidosRoute,
  categoriaContenidosPopupRoute
} from './';

const ENTITY_STATES = [...categoriaContenidosRoute, ...categoriaContenidosPopupRoute];

@NgModule({
  imports: [NewoApp9MicroSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    CategoriaContenidosComponent,
    CategoriaContenidosDetailComponent,
    CategoriaContenidosUpdateComponent,
    CategoriaContenidosDeleteDialogComponent,
    CategoriaContenidosDeletePopupComponent
  ],
  entryComponents: [
    CategoriaContenidosComponent,
    CategoriaContenidosUpdateComponent,
    CategoriaContenidosDeleteDialogComponent,
    CategoriaContenidosDeletePopupComponent
  ],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NewoApp9MicroCategoriaContenidosModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey !== undefined) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
