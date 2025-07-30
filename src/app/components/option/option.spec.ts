import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Option } from './option';

describe('Option', () => {
  let component: Option;
  let fixture: ComponentFixture<Option>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Option]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Option);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
