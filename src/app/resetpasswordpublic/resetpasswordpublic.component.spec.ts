import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetpasswordpublicComponent } from './resetpasswordpublic.component';

describe('ResetpasswordpublicComponent', () => {
  let component: ResetpasswordpublicComponent;
  let fixture: ComponentFixture<ResetpasswordpublicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetpasswordpublicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetpasswordpublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
