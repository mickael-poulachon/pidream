import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuletterComponent } from './menuletter.component';

describe('MenuletterComponent', () => {
  let component: MenuletterComponent;
  let fixture: ComponentFixture<MenuletterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuletterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
