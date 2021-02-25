import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostraPerfilComponent } from './mostra-perfil.component';

describe('MostraPerfilComponent', () => {
  let component: MostraPerfilComponent;
  let fixture: ComponentFixture<MostraPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostraPerfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostraPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
