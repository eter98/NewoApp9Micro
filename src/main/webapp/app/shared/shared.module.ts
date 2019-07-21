import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NewoApp9MicroSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [NewoApp9MicroSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [NewoApp9MicroSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NewoApp9MicroSharedModule {
  static forRoot() {
    return {
      ngModule: NewoApp9MicroSharedModule
    };
  }
}
