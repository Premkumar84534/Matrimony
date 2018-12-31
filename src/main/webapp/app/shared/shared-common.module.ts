import { NgModule } from '@angular/core';

import { MatrimonySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [MatrimonySharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [MatrimonySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class MatrimonySharedCommonModule {}
