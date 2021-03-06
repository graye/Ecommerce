import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceiptComponent } from './receipt/receipt.component';
import { ReceiptSelectorComponent } from './receipt-selector/receipt-selector.component';

import { AboutComponent } from './about/about.component';

import { ReceiptEditorComponent } from './receipt-editor/receipt-editor.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: ReceiptSelectorComponent
    },
    {
        path: 'receipt/:id',
        component: ReceiptComponent
    },
    {
        path: 'receipt',
        component: ReceiptSelectorComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'editor/:id',
        component: ReceiptEditorComponent
    },
    {
        path: 'editor',
        component: ReceiptEditorComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);