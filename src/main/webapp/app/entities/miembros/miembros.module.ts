import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { NewoApp9MicroSharedModule } from 'app/shared';
import {
  MiembrosComponent,
  MiembrosDetailComponent,
  MiembrosUpdateComponent,
  MiembrosDeletePopupComponent,
  MiembrosDeleteDialogComponent,
  miembrosRoute,
  miembrosPopupRoute
} from './';

const ENTITY_STATES = [...miembrosRoute, ...miembrosPopupRoute];

@NgModule({
  imports: [NewoApp9MicroSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    MiembrosComponent,
    MiembrosDetailComponent,
    MiembrosUpdateComponent,
    MiembrosDeleteDialogComponent,
    MiembrosDeletePopupComponent
  ],
  entryComponents: [MiembrosComponent, MiembrosUpdateComponent, MiembrosDeleteDialogComponent, MiembrosDeletePopupComponent],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NewoApp9MicroMiembrosModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey !== undefined) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
