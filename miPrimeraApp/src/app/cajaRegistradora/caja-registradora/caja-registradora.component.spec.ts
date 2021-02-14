import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajaRegistradoraComponent } from './caja-registradora.component';

describe('CajaRegistradoraComponent', () => {
  let component: CajaRegistradoraComponent;
  let fixture: ComponentFixture<CajaRegistradoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CajaRegistradoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CajaRegistradoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
