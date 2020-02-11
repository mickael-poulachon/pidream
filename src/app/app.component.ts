import {Component} from '@angular/core';
import {ElectronService} from 'ngx-electron';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pidream';

  constructor(private electronService: ElectronService) {
  }

  public playPingPong() {
    if (this.electronService.isElectronApp) {
      const pong: string = this.electronService.ipcRenderer.sendSync('ping', {test: 'ok'});
      console.log('front icic',pong);

      this.electronService.ipcRenderer.on('ping', (event, arg) => {
        console.log('front la',arg); // affiche "pong"
      });
    }
  }
}

