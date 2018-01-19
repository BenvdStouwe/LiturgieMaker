import { Input, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './common/contact.component';
import { HomeComponent } from './common/home.component';
import { NieuweLiturgieComponent } from './liturgie/nieuwe-liturgie.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'nieuweLiturgie', component: NieuweLiturgieComponent },
  { path: 'voorbeeld', component: NieuweLiturgieComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  @Input() title: string;
}
