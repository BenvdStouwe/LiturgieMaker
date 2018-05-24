import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeNl from '@angular/common/locales/nl';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { ContactComponent } from './common/contact.component';
import { FooterComponent } from './common/footer.component';
import { HeaderComponent } from './common/header.component';
import { HomeComponent } from './common/home.component';
import { ErrorComponent } from './common/infoComponents/error.components';
import { LoaderComponent } from './common/infoComponents/loader.component';
import { LocalStorageService } from './common/services/localstorage.service';
import { ChangeableDateComponent } from './formComponents/changeable-date.component';
import { ChangeableTextComponent } from './formComponents/changeable-text.component';
import { ChangeableTimeComponent } from './formComponents/changeable-time.component';
import { AutofocusDirective } from './formComponents/directives/autofocus.directive';
import { LiturgieBewerkenComponent } from './liturgie/components/liturgie-bewerken.component';
import { LiturgieComponent } from './liturgie/liturgie.component';
import { LiturgieenComponent } from './liturgie/liturgieen.component';
import { NieuweLiturgieComponent } from './liturgie/nieuwe-liturgie.component';
import { BijbelboekenService } from './liturgie/services/bijbelboeken.service';
import { LiturgieService } from './liturgie/services/liturgie.service';
import { VoorbeeldLiturgieComponent } from './liturgie/voorbeeld-liturgie.component';
import { NgbDateMomentAdapter } from './common/injectables/ngbmomentadapter';

registerLocaleData(localeNl);

@NgModule({
  declarations: [
    AppComponent,

    // Basic
    ContactComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ErrorComponent,
    LoaderComponent,

    // Form
    ChangeableDateComponent,
    ChangeableTextComponent,
    ChangeableTimeComponent,
    AutofocusDirective,

    // Liturgie
    LiturgieBewerkenComponent,
    LiturgieComponent,
    LiturgieenComponent,
    NieuweLiturgieComponent,
    VoorbeeldLiturgieComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [
    AppService,
    LocalStorageService,
    { provide: LOCALE_ID, useValue: 'nl-NL' },

    // Liturgie
    BijbelboekenService,
    LiturgieService,
    [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }]
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
