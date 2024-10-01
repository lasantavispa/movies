import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlixListElementComponent } from './flix-list-element.component';

describe('FlixListElementComponent', () => {
  let component: FlixListElementComponent;
  let fixture: ComponentFixture<FlixListElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlixListElementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlixListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
