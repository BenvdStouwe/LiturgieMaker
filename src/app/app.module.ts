import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
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
import { AutofocusDirective } from './formComponents/directives/autofocus.directive';
import { NieuweLiturgieComponent } from './liturgie/nieuwe-liturgie.component';
import { BijbelboekenService } from './liturgie/services/bijbelboeken.service';
import { LiturgieService } from './liturgie/services/liturgie.service';
import localeNl from '@angular/common/locales/nl';
import { registerLocaleData } from '@angular/common';

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
    AutofocusDirective,

    // Liturgie
    NieuweLiturgieComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpModule
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
