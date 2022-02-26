import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLoadPageComponent } from './test-load-page.component';

describe('TestLoadPageComponent', () => {
  let component: TestLoadPageComponent;
  let fixture: ComponentFixture<TestLoadPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestLoadPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLoadPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
