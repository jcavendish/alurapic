import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { PhotosModule } from './photos/photos.module';
import { AppRoutingModule } from './app.routing.module';
import { ErrorsModule } from './errors/errors.module';
import { HomeModule } from './home/home.module';
import { CoreModule } from './core/core.module';
import { HomeRoutingModule } from './home/home.routing.module';
import { PhotoDetailsModule } from './photos/photo-details/photo-details.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PhotosModule,
    AppRoutingModule,
    ErrorsModule,
    CoreModule,
    PhotoDetailsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
