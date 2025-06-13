import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThesisDirComponent } from './thesis-dir.component';

describe('ThesisDirComponent', () => {
  let component: ThesisDirComponent;
  let fixture: ComponentFixture<ThesisDirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThesisDirComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThesisDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
