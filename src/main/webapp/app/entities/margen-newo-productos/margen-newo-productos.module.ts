import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { NewoApp9MicroSharedModule } from 'app/shared';
import {
  MargenNewoProductosComponent,
  MargenNewoProductosDetailComponent,
  MargenNewoProductosUpdateComponent,
  MargenNewoProductosDeletePopupComponent,
  MargenNewoProductosDeleteDialogComponent,
  margenNewoProductosRoute,
  margenNewoProductosPopupRoute
} from './';

const ENTITY_STATES = [...margenNewoProductosRoute, ...margenNewoProductosPopupRoute];

@NgModule({
  imports: [NewoApp9MicroSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    MargenNewoProductosComponent,
    MargenNewoProductosDetailComponent,
    MargenNewoProductosUpdateComponent,
    MargenNewoProductosDeleteDialogComponent,
    MargenNewoProductosDeletePopupComponent
  ],
  entryComponents: [
    MargenNewoProductosComponent,
    MargenNewoProductosUpdateComponent,
    MargenNewoProductosDeleteDialogComponent,
    MargenNewoProductosDeletePopupComponent
  ],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NewoApp9MicroMargenNewoProductosModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey !== undefined) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
