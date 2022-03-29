import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';

import { UpdateBlogComponent } from './update-blog.component';

xdescribe('UpdateBlogComponent', () => {
  let component: UpdateBlogComponent;
  let fixture: ComponentFixture<UpdateBlogComponent>;

 
  const fakeActivatedRoute = {
    snapshot: { data: { } }
  } as ActivatedRoute

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBlogComponent ],
      
         providers:[{
           provide:ActivatedRoute,
           useValue:{
             params:of({id:345})
           }
         }],
         imports:[HttpClientTestingModule,RouterTestingModule,FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
