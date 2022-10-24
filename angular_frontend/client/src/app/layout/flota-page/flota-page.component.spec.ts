import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlotaPageComponent } from './flota-page.component';

describe('FlotaPageComponent', () => {
  let component: FlotaPageComponent;
  let fixture: ComponentFixture<FlotaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlotaPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlotaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
