import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss']
})
export class CarrouselComponent implements OnInit {

  @Input() elements: Array<any> = [];
  transformTo = 0;
  transformToPx;
  current = 2;

  constructor() {
    if (!this.elements.length) {
      this.elements = [
        {
          title: 'element 1',
          image: 'https://cdn.thegamesdb.net/images/original/boxart/front/3657-2.jpg',
          description: 'lorepm ipsum'
        },
        {
          title: 'element 2',
          image: 'https://images-na.ssl-images-amazon.com/images/I/618RC0GB8CL._AC_SX342_.jpg',
          description: 'lorepm ipsum'
        }, {
          title: 'element 1',
          image: 'https://cdn.thegamesdb.net/images/original/boxart/front/3634-1.jpg',
          description: 'lorepm ipsum'
        }, {
          title: 'element 1',
          image: 'https://cdn.thegamesdb.net/images/original/boxart/front/3669-1.jpg',
          description: 'lorepm ipsum'
        }, {
          title: 'element 1',
          image: 'https://cdn.thegamesdb.net/images/original/boxart/front/3660-1.jpg',
          description: 'lorepm ipsum'
        }, {
          title: 'element 1',
          image: 'https://cdn.thegamesdb.net/images/original/boxart/front/3650-1.jpg',
          description: 'lorepm ipsum'
        }, {
          title: 'element 1',
          image: 'https://cdn.thegamesdb.net/images/original/boxart/front/3645-1.jpg',
          description: 'lorepm ipsum'
        }, {
          title: 'element 1',
          image: 'https://cdn.thegamesdb.net/images/original/boxart/front/3640-1.jpg',
          description: 'lorepm ipsum'
        }
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
}
