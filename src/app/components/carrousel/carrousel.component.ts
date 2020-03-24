import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {KeysEventService} from '../../services/keys-event.service';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss']
})
export class CarrouselComponent implements OnInit, OnDestroy {

  @Input() elements: Array<any> = [];
  transformTo = 0;
  transformToPx;
  current = 2;
  subscriptionKeyEvent;

  constructor(private keysEventService: KeysEventService) {
    this.subscriptionKeyEvent = this.keysEventService.getEvent();
    this.subscriptionKeyEvent.subscribe(evt => {
      if (evt.key === 'ArrowLeft') {
        this.navigateTo(20);
      }
      if (evt.key === 'ArrowRight') {
        this.navigateTo(-20);
      }
    });


    if (!this.elements.length) {
      this.elements = [
        {
          title: 'element 1',
          image: 'https://cdn.thegamesdb.net/images/original/boxart/front/3657-2.jpg',
          description: 'lorepm ipsum'
        }, {
          title: 'element 1',
          image: 'https://cdn.thegamesdb.net/images/original/boxart/front/3657-2.jpg',
          description: 'lorepm ipsum'
        }, {
          title: 'element 1',
          image: 'https://cdn.thegamesdb.net/images/original/boxart/front/3657-2.jpg',
          description: 'lorepm ipsum'
        }, {
          title: 'element 1',
          image: 'https://cdn.thegamesdb.net/images/original/boxart/front/3657-2.jpg',
          description: 'lorepm ipsum'
        }, {
          title: 'element 1',
          image: 'https://cdn.thegamesdb.net/images/original/boxart/front/3657-2.jpg',
          description: 'lorepm ipsum'
        }, {
          title: 'element 1',
          image: 'https://cdn.thegamesdb.net/images/original/boxart/front/3657-2.jpg',
          description: 'lorepm ipsum'
        }, {
          title: 'element 1',
          image: 'https://cdn.thegamesdb.net/images/original/boxart/front/3657-2.jpg',
          description: 'lorepm ipsum'
        }, {
          title: 'element 1',
          image: 'https://cdn.thegamesdb.net/images/original/boxart/front/3657-2.jpg',
          description: 'lorepm ipsum'
        }, {
          title: 'element 1',
          image: 'https://cdn.thegamesdb.net/images/original/boxart/front/3657-2.jpg',
          description: 'lorepm ipsum'
        }, {
          title: 'element 1',
          image: 'https://cdn.thegamesdb.net/images/original/boxart/front/3657-2.jpg',
          description: 'lorepm ipsum'
        }, {
          title: 'element 1',
          image: 'https://cdn.thegamesdb.net/images/original/boxart/front/3657-2.jpg',
          description: 'lorepm ipsum'
        }, {
          title: 'element 1',
          image: 'https://cdn.thegamesdb.net/images/original/boxart/front/3657-2.jpg',
          description: 'lorepm ipsum'
        }, {
          title: 'element 1',
          image: 'https://cdn.thegamesdb.net/images/original/boxart/front/3657-2.jpg',
          description: 'lorepm ipsum'
        }, {
          title: 'element 1',
          image: 'https://cdn.thegamesdb.net/images/original/boxart/front/3657-2.jpg',
          description: 'lorepm ipsum'
        },
      ];
    }
  }

  ngOnInit() {
  }

  navigateTo(value: any) {
    if (Math.sign(value) === -1) {
      this.current++;
    } else {
      this.current--;
    }
    this.transformTo = this.transformTo + value;
    this.transformToPx = 'translateX(' + this.transformTo + 'vw)';
  }

  ngOnDestroy() {
    this.subscriptionKeyEvent.unsubscribe();
  }
}
