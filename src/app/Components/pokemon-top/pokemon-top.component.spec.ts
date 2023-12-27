import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonTopComponent } from './pokemon-top.component';

describe('PokemonTopComponent', () => {
  let component: PokemonTopComponent;
  let fixture: ComponentFixture<PokemonTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonTopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokemonTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
