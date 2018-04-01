import { Input, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './common/contact.component';
import { HomeComponent } from './common/home.component';
import { RoutingNames } from './common/model/routingnames';
import { LiturgieenComponent } from './liturgie/liturgieen.component';
import { NieuweLiturgieComponent } from './liturgie/nieuwe-liturgie.component';

const routes: Routes = [
  { path: RoutingNames.HOME, component: HomeComponent },
  { path: RoutingNames.NIEUWELITURGIE, component: NieuweLiturgieComponent },
  { path: RoutingNames.VOORBEELD, component: NieuweLiturgieComponent },
  { path: RoutingNames.CONTACT, component: ContactComponent },
  { path: `${RoutingNames.LITURGIE}/:id`, component: NieuweLiturgieComponent },
  { path: RoutingNames.LITURGIEEN, component: LiturgieenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  @Input() title: string;
}
