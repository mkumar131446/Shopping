import { RouterModule, Routes } from '@angular/router';
import { ListingComponent } from "./listing/listing.component";


const routes: Routes = [
  { path: '', component: ListingComponent }
];

export const routing = RouterModule.forRoot(routes);
