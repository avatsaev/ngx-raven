import { TestBed, inject } from '@angular/core/testing';
import {RavenService} from './raven.service';
import {RavenConfig} from './raven-config';


describe('Raven Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RavenService, {provide: RavenConfig, useValue: {enabled: false}}]
    });
  });

  it('should be created', inject([RavenService], (service: RavenService) => {
    expect(service).toBeTruthy();
  }));
});
