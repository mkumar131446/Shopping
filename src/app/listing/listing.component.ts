import { Component } from '@angular/core';
import { ApiService } from "../core/api.service";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ImageCarousal } from '../image-carousal/image-carousal.component';

import { GetSetService } from '../data.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent {

  images: any = [];
  constructor(private apiService: ApiService, public modalService: NgbModal, public getSetService: GetSetService) {
    this.getData();
  }

  getData() {
    this.apiService.getJson().subscribe(res => {
      this.images = res;
    })
  }

  openpopup(data) {
    this.getSetService.set(data)
    this.modalService.open(ImageCarousal)
  }
}
