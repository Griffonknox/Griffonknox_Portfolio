import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkateboardingComponent } from './skateboarding.component';

describe('SkateboardingComponent', () => {
  let component: SkateboardingComponent;
  let fixture: ComponentFixture<SkateboardingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkateboardingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkateboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
