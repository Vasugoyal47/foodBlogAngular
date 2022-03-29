// import { TestBed } from '@angular/core/testing';



// xdescribe('CommunicationService', () => {
//   let service: CommunicationService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(CommunicationService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });

import { CommunicationService } from './communication.service';

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

interface Blog{
  id:String,
  title:String,
  desciption:String,
  Author:String
}

const blog1:Blog={
  "id": "4556",
  "title": "Chilli ptatato with Sauce",
  "desciption": "Chinesse Dish for indians",
  "Author": "Sun sa li"
};

const blog2:any={
  
    "id": "345",
    "title": "Naan and Shai Panner",
    "desciption": "Served with Daal Makhni",
    "Author": "Namita Thappar"
  }
  const blog3:any={
    "id": "768",
    "title": "Chaat",
    "desciption": "Available in marriage",
    "Author": "Naksh Bhardwaj"
  }

  const mockBlogs:Blog[]=[blog1,blog2,blog3];







describe('CommunicationService', () => {
  let service: CommunicationService;
  let httpController: HttpTestingController;

  // let url = 'localhost:3000/';
  let url='http://localhost:3000';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CommunicationService);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getBlog and return an array of Blogs', () => {
    service.getBlog().subscribe((res) => {
      expect(res).toEqual(mockBlogs);
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: `${url}/posts`,
    });

    req.flush(mockBlogs);
  });

  it('should call getOneBlog and return the specific Blog', () => {
    const id = '345';

    service.getOneBlog(id).subscribe((data) => {
      expect(data).toEqual(blog2);
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: `${url}/posts/${id}`,
    });

    req.flush(blog2);
  });

  it('should call updateBlog and return the updated blog from the API', () => {
    const updatedBlog: Blog = {
      id: '334',
      title: 'Makhan chole',
      Author: 'Author 1',
      desciption: "New Dish in the house"
    };

    service.updateBlog(blog2.id,updatedBlog).subscribe((data:any) => {
      expect(data).toEqual(updatedBlog);
    });

    const req = httpController.expectOne({
      method: 'PUT',
      url: `${url}/posts/${blog2.id}`,
    });

    req.flush(updatedBlog);
  });

  it('should call postBlog and the API should return the blog that was added', () => {
    service.postBlog(blog2).subscribe((data) => {
      expect(data).toEqual(blog2);
    });

    const req = httpController.expectOne({
      method: 'POST',
      url: `${url}/posts`,
    });

    req.flush(blog2);
  });

  // it('should call deleteBlog and return the blog that was deleted from the API', () => {
  //   service.deleteBlog(blog3).subscribe((data) => {
  //     expect(data).toEqual(blog3);
  //   });

  //   const req = httpController.expectOne({
  //     method: 'DELETE',
  //     url: `${url}/posts/${blog3.id}`,
  //   });

  //   req.flush(blog3);
  // });
});


