import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRapideComponent } from './main-rapide.component';

describe('MainRapideComponent', () => {
  let component: MainRapideComponent;
  let fixture: ComponentFixture<MainRapideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainRapideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainRapideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
