import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPokemonsComponent } from './show-pokemons.component';

describe('ShowPokemonsComponent', () => {
  let component: ShowPokemonsComponent;
  let fixture: ComponentFixture<ShowPokemonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPokemonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
