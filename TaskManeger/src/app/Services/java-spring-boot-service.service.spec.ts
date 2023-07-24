import { TestBed } from '@angular/core/testing';

import { JavaSpringBootServiceService } from './java-spring-boot-service.service';

describe('JavaSpringBootServiceService', () => {
  let service: JavaSpringBootServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JavaSpringBootServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
