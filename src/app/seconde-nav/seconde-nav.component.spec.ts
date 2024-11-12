import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondeNavComponent } from './seconde-nav.component';

describe('SecondeNavComponent', () => {
  let component: SecondeNavComponent;
  let fixture: ComponentFixture<SecondeNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondeNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondeNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
