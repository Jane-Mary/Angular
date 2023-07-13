import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseListComponent } from './showcase-list.component';

describe('ShowcaseListComponent', () => {
  let component: ShowcaseListComponent;
  let fixture: ComponentFixture<ShowcaseListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowcaseListComponent]
    });
    fixture = TestBed.createComponent(ShowcaseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
