import {Component, OnDestroy, OnInit} from '@angular/core';
import {KeysEventService} from '../../services/keys-event.service';
import {GameslistService} from '../../services/gameslist.service';

@Component({
  selector: 'app-menuletter',
  templateUrl: './menuletter.component.html',
  styleUrls: ['./menuletter.component.scss']
})
export class MenuletterComponent implements OnInit, OnDestroy {

  letters = [];
  subscriptionKeyEvent;

  constructor(private keysEventService: KeysEventService,
              private gamesListService: GameslistService) {
    this.subscriptionKeyEvent = this.keysEventService.getEvent().subscribe(evt => console.log('push ici ', evt));
  }

  ngOnInit() {
    this.initGameListLetter();
  }

  ngOnDestroy() {
    this.subscriptionKeyEvent.unsubscribe();
  }

  initGameListLetter() {
    this.gamesListService.gamelistPal.data.forEach((gameListByLetter) => {
      this.letters.push(gameListByLetter.letter);
    });
  }

}
