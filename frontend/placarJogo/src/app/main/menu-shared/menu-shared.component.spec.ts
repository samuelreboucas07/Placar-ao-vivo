import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSharedComponent } from './menu-shared.component';

describe('MenuSharedComponent', () => {
  let component: MenuSharedComponent;
  let fixture: ComponentFixture<MenuSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
