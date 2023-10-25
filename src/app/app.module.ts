import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

import { NavbarComponent } from './components/navbar/navbar.component';
import { UploadComponent } from './pages/upload/upload.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, UploadComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
