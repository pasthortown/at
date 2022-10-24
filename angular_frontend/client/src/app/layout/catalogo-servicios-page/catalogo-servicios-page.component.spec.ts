import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoServiciosPageComponent } from './catalogo-servicios-page.component';

describe('CatalogoServiciosPageComponent', () => {
  let component: CatalogoServiciosPageComponent;
  let fixture: ComponentFixture<CatalogoServiciosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogoServiciosPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoServiciosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
