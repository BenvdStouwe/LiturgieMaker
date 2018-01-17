import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { ContactComponent } from './basicComponents/contact.component';
import { FooterComponent } from './basicComponents/footer.component';
import { HeaderComponent } from './basicComponents/header.component';
import { HomeComponent } from './basicComponents/home.component';
import { ChangeableDateComponent } from './formComponents/changeable-date.component';
import { ChangeableTextComponent } from './formComponents/changeable-text.component';
import { AutofocusDirective } from './formComponents/directives/autofocus.directive';
import { NieuweLiturgieComponent } from './liturgie/nieuwe-liturgie.component';
import { BijbelboekenService } from './liturgie/services/bijbelboeken.service';
import { LiturgieService } from './liturgie/services/liturgie.service';



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
    BijbelboekenService,
    LiturgieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
