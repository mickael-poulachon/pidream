import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameinformationsComponent } from './gameinformations.component';

describe('GameinformationsComponent', () => {
  let component: GameinformationsComponent;
  let fixture: ComponentFixture<GameinformationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameinformationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameinformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
