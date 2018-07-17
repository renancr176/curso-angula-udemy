import { Routes } from '@angular/router';

import { App1Component } from './app1/app1.component';
import { App2Component } from './app2/app2.component';

export const rootRouterConfig: Routes = [
    {path: 'app1', component: App1Component},
    {path: 'app2', component: App2Component}
]