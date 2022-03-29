import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';

import { AddNewBlogComponent } from './add-new-blog.component';

describe('AddNewBlogComponent', () => {
  let component: AddNewBlogComponent;
  let fixture: ComponentFixture<AddNewBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewBlogComponent ],
      imports:[HttpClientTestingModule,RouterTestingModule,FormsModule],
      
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
