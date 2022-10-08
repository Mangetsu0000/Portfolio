import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagesToolsComponent } from './languages-tools.component';

describe('LanguagesToolsComponent', () => {
  let component: LanguagesToolsComponent;
  let fixture: ComponentFixture<LanguagesToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguagesToolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguagesToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
