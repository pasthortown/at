import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadoresPageComponent } from './operadores-page.component';

describe('OperadoresPageComponent', () => {
  let component: OperadoresPageComponent;
  let fixture: ComponentFixture<OperadoresPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperadoresPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperadoresPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
