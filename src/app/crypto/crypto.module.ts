import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AgmCoreModule } from '@agm/core';
import { MatMenuModule } from '@angular/material/menu';


import { FuseSharedModule } from '@fuse/shared.module';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';


import { CryptoOverviewComponent } from './crypto-overview/crypto-overview.component';

import { ChartsModule } from 'ng2-charts';

import { CryptoService } from '../../@fuse/services/crypto.service';
import { TranslateModule } from '@ngx-translate/core';
import { CryptoDetailComponent } from '../crypto/crypto-detail/crypto-detail.component';

import { CryptoDetaildService } from '../crypto/crypto-detail/crypto.details.service';




const routes = [



    {
        path     : 'crypto',
        component: CryptoOverviewComponent,
        resolve  : {
            academy: CryptoService
        }
    },
    {
        path     : 'crypto/: orderId',
        component: CryptoDetailComponent,
        resolve  : {
            academy: CryptoDetaildService
        }
    },
    {
        path      : '**',
        redirectTo: 'crypto'
    }

    

];


@NgModule({
    declarations: [
        CryptoOverviewComponent,
        CryptoDetailComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        TranslateModule,

        ChartsModule,
        MatButtonModule,
        MatChipsModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatPaginatorModule,
        MatRippleModule,
        MatSelectModule,
        MatMenuModule,
        MatSortModule,
        MatCardModule,
        MatSnackBarModule,
        MatTableModule,
        MatTabsModule,

        NgxChartsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyD81ecsCj4yYpcXSLFcYU97PvRsE_X8Bx8'
        }),


        FuseSharedModule
    ],
    exports     : [
        CryptoOverviewComponent,
        CryptoDetailComponent
    ],
    providers   : [
         CryptoService,
         CryptoDetaildService
    ]
})



export class CryptoModule
{
}
