import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedyerbaComponent } from './selectedyerba.component';

describe('SelectedyerbaComponent', () => {
  let component: SelectedyerbaComponent;
  let fixture: ComponentFixture<SelectedyerbaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedyerbaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedyerbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
