import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about/:name', component: AboutComponent },
  { path: 'pagenotfound', component: PagenotfoundComponent },
  { path: '**', redirectTo: '/pagenotfound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
