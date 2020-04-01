import {Injectable, Renderer2, RendererFactory2} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KeysEventService {

  globalListenFunc;
  private renderer: Renderer2;
  private eventKeyPressSubject = new Subject<any>();


  constructor(private rendererFactory: RendererFactory2) {
    this.createEventListenerFromRenderer();
  }

  private createEventListenerFromRenderer() {
    this.renderer = this.rendererFactory.createRenderer(null, null);
    this.globalListenFunc = this.renderer.listen('document', 'keydown', e => {
      this.eventKeyPressSubject.next(e);
    });
  }

  getEventKeyPressObservable(): Observable<any> {
    return this.eventKeyPressSubject.asObservable();
  }

  public getEventKeyPressSubject() {
    return this.eventKeyPressSubject;
  }
}
