import {Component, OnDestroy, OnInit} from '@angular/core';
import {KeysEventService} from '../../services/keys-event.service';

@Component({
  selector: 'app-menuletter',
  templateUrl: './menuletter.component.html',
  styleUrls: ['./menuletter.component.scss']
})
export class MenuletterComponent implements OnInit, OnDestroy {

  letters = [];
  subscriptionKeyEvent;

  constructor(private keysEventService: KeysEventService) {
    this.subscriptionKeyEvent = this.keysEventService.getEvent().subscribe(evt => console.log('push ici ', evt));
  }

  ngOnInit() {
    for (let i = 0; i < 26; i++) {
      this.letters.push(String.fromCharCode(97 + i));
    }
  }

  ngOnDestroy() {
    this.subscriptionKeyEvent.unsubscribe();
  }

}
