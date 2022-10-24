import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolizaSegurosPageComponent } from './poliza-seguros-page.component';

describe('PolizaSegurosPageComponent', () => {
  let component: PolizaSegurosPageComponent;
  let fixture: ComponentFixture<PolizaSegurosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolizaSegurosPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolizaSegurosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
