import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeNl from '@angular/common/locales/nl';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { ContactComponent } from './common/contact.component';
import { FooterComponent } from './common/footer.component';
import { HeaderComponent } from './common/header.component';
import { HomeComponent } from './common/home.component';
import { LocalStorageService } from './common/services/localstorage.service';
import { ChangeableDateComponent } from './formComponents/changeable-date.component';
import { ChangeableTextComponent } from './formComponents/changeable-text.component';
import { ChangeableTimeComponent } from './formComponents/changeable-time.component';
import { AutofocusDirective } from './formComponents/directives/autofocus.directive';
import { LiturgieenComponent } from './liturgie/liturgieen.component';
import { NieuweLiturgieComponent } from './liturgie/nieuwe-liturgie.component';
import { BijbelboekenService } from './liturgie/services/bijbelboeken.service';
import { LiturgieService } from './liturgie/services/liturgie.service';

registerLocaleData(localeNl);

@NgModule({
  declarations: [
    AppComponent,

    // Basic
    ContactComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,

    // Form
    ChangeableDateComponent,
    ChangeableTextComponent,
    ChangeableTimeComponent,
    AutofocusDirective,

    // Liturgie
    LiturgieenComponent,
    NieuweLiturgieComponent
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
    LiturgieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
