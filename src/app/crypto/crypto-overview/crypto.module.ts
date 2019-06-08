import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';
import { CryptoOverviewComponent } from './crypto-overview.component';


import { CryptoService } from '../../../@fuse/services/crypto.service';
import { TranslateModule } from '@ngx-translate/core';



const routes = [
    {
        path     : '**',
        component: CryptoOverviewComponent,
        resolve  : {
            // data: CryptoService
        }
    },

];


@NgModule({
    declarations: [
        CryptoOverviewComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        TranslateModule,

        FuseSharedModule
    ],
    exports     : [
        CryptoOverviewComponent
    ],
    providers   : [
        // CryptoService
    ]
})



export class CryptoModule
{
}
