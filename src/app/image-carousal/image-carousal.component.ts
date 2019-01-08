import { Component } from '@angular/core';
import { NgbCarouselConfig, NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { GetSetService } from '../data.service';

@Component({
  selector: 'app-image-carousal',
  templateUrl: './image-carousal.component.html',
  styleUrls: ['./image-carousal.component.css'],
  providers: [NgbCarouselConfig, NgbActiveModal]

})
export class ImageCarousal {

  private imagesData = {};
  constructor(config: NgbCarouselConfig, private getSetService: GetSetService, public activeModal: NgbActiveModal) {
    config.interval = 200000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
    this.imagesData = this.getSetService.get();
  }
}
