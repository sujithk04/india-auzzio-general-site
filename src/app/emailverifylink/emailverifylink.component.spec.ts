import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailverifylinkComponent } from './emailverifylink.component';

describe('EmailverifylinkComponent', () => {
  let component: EmailverifylinkComponent;
  let fixture: ComponentFixture<EmailverifylinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailverifylinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailverifylinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
