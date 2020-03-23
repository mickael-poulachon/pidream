import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-menuletter',
  templateUrl: './menuletter.component.html',
  styleUrls: ['./menuletter.component.scss']
})
export class MenuletterComponent implements OnInit {

  letters = [];

  constructor() {
  }

  ngOnInit() {
    for (let i = 0; i < 26; i++) {
      this.letters.push(String.fromCharCode(97 + i));
    }
  }

}
