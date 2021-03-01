import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubDetalPerfilComponent } from './sub-detal-perfil.component';

describe('SubDetalPerfilComponent', () => {
  let component: SubDetalPerfilComponent;
  let fixture: ComponentFixture<SubDetalPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubDetalPerfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubDetalPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
