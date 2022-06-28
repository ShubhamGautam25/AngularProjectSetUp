import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDataListingComponent } from './client-data-listing.component';

describe('ClientDataListingComponent', () => {
  let component: ClientDataListingComponent;
  let fixture: ComponentFixture<ClientDataListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientDataListingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientDataListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
