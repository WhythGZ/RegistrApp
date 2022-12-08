import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full'
  },
  {
    path: 'signin',
    loadChildren: () => import('./pages/signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'forgotpass',
    loadChildren: () => import('./pages/forgotpass/forgotpass.module').then( m => m.ForgotpassPageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./pages/crud/create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'update/:id',
    loadChildren: () => import('./pages/crud/update/update.module').then( m => m.UpdatePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/crud/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'create-Class',
    loadChildren: () => import('./pages/crud-Class/create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'list-Class',
    loadChildren: () => import('./pages/crud-Class/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'update-Class',
    loadChildren: () => import('./pages/crud-Class/update/update.module').then( m => m.UpdatePageModule)
  },  {
    path: 'subject-list',
    loadChildren: () => import('./pages/subject/subject-list/subject-list.module').then( m => m.SubjectListPageModule)
  },
  {
    path: 'subject-detail',
    loadChildren: () => import('./pages/subject/subject-detail/subject-detail.module').then( m => m.SubjectDetailPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
