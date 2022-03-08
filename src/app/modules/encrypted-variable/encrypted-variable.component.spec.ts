import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncryptedVariableComponent } from './encrypted-variable.component';

describe('EncryptedVariableComponent', () => {
  let component: EncryptedVariableComponent;
  let fixture: ComponentFixture<EncryptedVariableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncryptedVariableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncryptedVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
