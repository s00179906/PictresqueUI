import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { PostDetailsComponent } from './pages/post-details/post-details.component';
import { CategoryComponent } from './pages/category/category.component';

const routes: Routes = [
  { path: '', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'post/:id', component: PostDetailsComponent },
  { path: 'category/:id', component: CategoryComponent }
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [
  HomeComponent,
  RegisterComponent,
  PostDetailsComponent,
  CategoryComponent
];
