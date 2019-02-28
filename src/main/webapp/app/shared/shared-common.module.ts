import { NgModule } from '@angular/core';

import { WorkLoggerGatewaySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [WorkLoggerGatewaySharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [WorkLoggerGatewaySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class WorkLoggerGatewaySharedCommonModule {}
