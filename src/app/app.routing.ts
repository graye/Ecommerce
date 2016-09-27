import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceiptComponent } from './receipt/receipt.component';
import { ReceiptSelectorComponent } from './receipt-selector/receipt-selector.component'

const appRoutes: Routes = [
    {
        path: 'home',
        component: ReceiptSelectorComponent
    },
    {
        path: 'receipt',
        component: ReceiptComponent
    },
];
