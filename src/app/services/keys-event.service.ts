import {Injectable, Renderer2, RendererFactory2} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KeysEventService {

  globalListenFunc;
  private renderer: Renderer2;
  private eventSubject = new Subject<any>();


  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.eventListener();
  }

  private eventListener() {
    this.globalListenFunc = this.renderer.listen('document', 'keydown', e => {
      this.eventSubject.next(e);
      console.log(e);
    });
  }

  getEvent(): Observable<any> {
    return this.eventSubject.asObservable();
  }
}
