import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnademComponent } from './bnadem.component';

describe('BnademComponent', () => {
  let component: BnademComponent;
  let fixture: ComponentFixture<BnademComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BnademComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BnademComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
