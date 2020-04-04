import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatSidenav, MatSidenavContainer} from '@angular/material/sidenav';
import {KeysEventService} from '../../services/keys-event.service';

@Component({
  selector: 'app-gameinformations',
  templateUrl: './gameinformations.component.html',
  styleUrls: ['./gameinformations.component.scss']
})
export class GameinformationsComponent implements OnInit {

  subscriptionKeyEvent;
  videoSource = 'assets/videos/Cannon Spike (USA).mp4';

  @ViewChild('videoPlayer') videoplayer: ElementRef;
  @ViewChild('sidenav', {static: false}) sidenavContent: MatSidenav;

  constructor(private keysEventService: KeysEventService) {
    this.subscriptionKeyEvent = this.keysEventService.getEventKeyPressObservable();
    this.subscriptionKeyEvent.subscribe(evt => {
      console.log(evt.key);
      if (evt.key.toLowerCase() === 'a') {
        this.openClose();
        this.toggleVideo();
      }
    });
  }

  ngOnInit(): void {
  }

  openClose() {
    this.sidenavContent.toggle();
  }

  toggleVideo() {
    if (this.videoplayer.nativeElement.paused) {
      this.videoplayer.nativeElement.play();
    } else {
      this.videoplayer.nativeElement.pause();
    }

  }

}
