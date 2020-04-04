import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {KeysEventService} from '../../services/keys-event.service';
import {GameslistService} from '../../services/gameslist.service';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss']
})
export class CarrouselComponent implements OnInit, OnDestroy {

  transformTo = 0;
  transformToPx;
  current = 2;
  currentLetter = '';
  gamesliste = [];
  subscriptionKeyEvent;
  subscriptionLetterChangeEvent;

  constructor(private keysEventService: KeysEventService,
              private gamesListService: GameslistService) {
    this.subscriptionKeyEvent = this.keysEventService.getEventKeyPressObservable();
    this.subscriptionKeyEvent.subscribe(evt => {
      if (evt.key === 'ArrowLeft') {
        this.navigateToFromKey(20);
      }
      if (evt.key === 'ArrowRight') {
        this.navigateToFromKey(-20);
      }
    });

    this.gamesListService.getLetterChangeObservable().subscribe(data => {

      if (data.from === 'carrousel') {
        return;
      }
      const index = this.gamesliste.map(e => e.letter).indexOf(data.letter);
      const value = (this.current >= index) ? (this.current - index) * 20 : (index - this.current) * -20;
      this.transformTo = this.transformTo + value;
      this.transformToPx = 'translateX(' + this.transformTo + 'vw)';
      this.current = index;
    });
  }

  ngOnInit() {
    this.initGameList();
  }

  navigateToFromKey(value: any) {
    if (Math.sign(value) === -1 && !this.onMaxIndex()) {
      this.current++;
    } else if (!this.onMinIndex()) {
      this.current--;
    }

    if (this.currentLetter !== this.gamesliste[this.current].letter) {
      this.currentLetter = this.gamesliste[this.current].letter;
      this.gamesListService.getLetterChangeSubject().next({
        letter: this.gamesliste[this.current].letter,
        from: 'carrousel'
      });
    }

    if (this.current > 2 || (this.current == 2 && Math.sign(value) !== -1)) {
      this.transformTo = this.transformTo + value;
      this.transformToPx = 'translateX(' + this.transformTo + 'vw)';
    }


  }

  ngOnDestroy() {
    this.subscriptionKeyEvent.unsubscribe();
    //this.subscriptionLetterChangeEvent.unsubscribe();
  }

  initGameList() {
    this.gamesListService.gamelistPal.data.forEach((gameListByLetter) => {
      gameListByLetter.titles.forEach((title) => {
        this.gamesliste.push({
          letter: gameListByLetter.letter,
          title: title,
          image: 'assets/covers/' + title + '.jpg',
          description: 'lorepm ipsum'
        });
      });

    });
  }

  onMaxIndex() {
    return this.current === this.gamesliste.length - 1;
  }

  onMinIndex() {
    return this.current === 0;
  }
}
