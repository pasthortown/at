import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('src/app/layout/dashboard-page/dashboard-page.module').then(m => m.DashboardPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('src/app/layout/profile-page/profile-page.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'flota',
        loadChildren: () => import('src/app/layout/flota-page/flota-page.module').then(m => m.FlotaPageModule)
      },
      {
        path: 'operadores',
        loadChildren: () => import('src/app/layout/operadores-page/operadores-page.module').then(m => m.OperadoresPageModule)
      },
      {
        path: 'proveedores',
        loadChildren: () => import('src/app/layout/proveedores-page/proveedores-page.module').then(m => m.ProveedoresPageModule)
      },
      {
        path: 'mantenimientos',
        loadChildren: () => import('src/app/layout/mantenimientos-page/mantenimientos-page.module').then(m => m.MantenimientosPageModule)
      },
      {
        path: 'catalogo-servicios',
        loadChildren: () => import('src/app/layout/catalogo-servicios-page/catalogo-servicios-page.module').then(m => m.CatalogoServiciosPageModule)
      },
      {
        path: 'poliza-seguros',
        loadChildren: () => import('src/app/layout/poliza-seguros-page/poliza-seguros-page.module').then(m => m.PolizaSegurosPageModule)
      },
      // ADMINISTRACION
      {
        path: 'admin-accounts',
        loadChildren: () => import('src/app/layout/admin/admin-users-page/admin-users-page.module').then(m => m.AdminUsersPageModule)
      },
      {
        path: 'admin-roles',
        loadChildren: () => import('src/app/layout/admin/admin-rols-page/admin-rols-page.module').then(m => m.AdminRolsPageModule)
      },

      {
        path: 'not-found',
        loadChildren: () => import('src/app/layout/not-found-page/not-found-page.module').then(m => m.NotFoundPageModule)
      },
      {
         path: '**',
         redirectTo: 'not-found'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
