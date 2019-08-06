import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileuploadserverComponent } from './fileuploadserver.component';

describe('FileuploadserverComponent', () => {
  let component: FileuploadserverComponent;
  let fixture: ComponentFixture<FileuploadserverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileuploadserverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileuploadserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
