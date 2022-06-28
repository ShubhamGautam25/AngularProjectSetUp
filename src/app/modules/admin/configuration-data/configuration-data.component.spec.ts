import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationDataComponent } from './configuration-data.component';

describe('ConfigurationDataComponent', () => {
  let component: ConfigurationDataComponent;
  let fixture: ComponentFixture<ConfigurationDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigurationDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigurationDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
