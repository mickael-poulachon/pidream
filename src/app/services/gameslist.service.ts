import {Injectable} from '@angular/core';
// @ts-ignore
import gameList from '../../assets/data/gamelist.json';
import {Observable, Subject} from 'rxjs';

interface LetterConfig {
  letter: string;
  from: string;
}

@Injectable({
  providedIn: 'root'
})
export class GameslistService {
  public gamelistPal = gameList;
  private letterChangeSubject = new Subject<LetterConfig>();

  constructor() {}

  getLetterChangeObservable(): Observable<LetterConfig> {
    return this.letterChangeSubject.asObservable();
  }

  getLetterChangeSubject() {
    return this.letterChangeSubject;
  }
}
