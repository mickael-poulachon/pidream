import {Injectable} from '@angular/core';
// @ts-ignore
import gameList from '../../assets/data/gamelist.json';


@Injectable({
  providedIn: 'root'
})
export class GameslistService {
  public gamelistPal = gameList;

  constructor() {}
}
