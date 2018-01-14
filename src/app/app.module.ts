import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { FooterComponent } from './basicComponents/footer.component';
import { HeaderComponent } from './basicComponents/header.component';
import { HomeComponent } from './basicComponents/home.component';
import { NieuweLiturgieComponent } from './liturgie/nieuwe-liturgie.component';
import { BijbelboekenService } from './liturgie/services/bijbelboeken.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,

    // Liturgie
    NieuweLiturgieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpModule
  ],
  providers: [
    AppService,
    BijbelboekenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
