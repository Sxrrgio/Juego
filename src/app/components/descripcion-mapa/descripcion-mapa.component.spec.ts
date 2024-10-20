import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionMapaComponent } from './descripcion-mapa.component';

describe('DescripcionMapaComponent', () => {
  let component: DescripcionMapaComponent;
  let fixture: ComponentFixture<DescripcionMapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescripcionMapaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescripcionMapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
