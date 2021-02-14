import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemaforComponent } from './semafor.component';

describe('SemaforComponent', () => {
  let component: SemaforComponent;
  let fixture: ComponentFixture<SemaforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemaforComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SemaforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
