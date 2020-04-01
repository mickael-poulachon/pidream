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
  letterSelected = '';
  subscriptionKeyEvent;
  subscriptionLetterChangeEvent;
  test;

  constructor(private keysEventService: KeysEventService,
              private gamesListService: GameslistService) {
    this.gamesListService.getLetterChangeObservable().subscribe(data => {
      this.letterSelected = data.letter;
    });

  }

  ngOnInit() {
    this.initGameListLetter();
  }

  ngOnDestroy() {

  }

  initGameListLetter() {
    this.gamesListService.gamelistPal.data.forEach((gameListByLetter) => {
      this.letters.push(gameListByLetter.letter);
    });
  }

  emitLetter(letter) {
    this.gamesListService.getLetterChangeSubject().next({letter, from: 'menuletter'});
  }

}
