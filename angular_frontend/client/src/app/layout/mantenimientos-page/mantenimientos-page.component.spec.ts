import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientosPageComponent } from './mantenimientos-page.component';

describe('MantenimientosPageComponent', () => {
  let component: MantenimientosPageComponent;
  let fixture: ComponentFixture<MantenimientosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantenimientosPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenimientosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
