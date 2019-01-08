import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListingComponent } from './listing/listing.component';
import { ApiService } from "./core/api.service";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule, NgModel } from "@angular/forms";
import { routing } from "./app.routing";
import { ImageCarousal } from './image-carousal/image-carousal.component';

import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ImageCarousal,
    ListingComponent,


  ],
  imports: [
    BrowserModule,
    routing,
    NgbModule,


    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApiService, NgbCarouselConfig

  ],
  bootstrap: [AppComponent],
  entryComponents: [ImageCarousal]

})
export class AppModule { }
