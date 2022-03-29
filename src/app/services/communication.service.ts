import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  food= {
    "id": 1234,
    "title": "Chole Chai",
    "desciption": 25,
    "Author":"Vasu Goyal"
  }
  newfood= {
    "id": 334,
    "title": "Chole Chai bhauture",
    "desciption": 25,
    "Author":"Vasu Goyal"
  }
  postArray=[];

  constructor(private http:HttpClient) { }


    // Read the blogs
    getBlog():Observable<any>{
       return this.http.get("http://localhost:3000/posts");
     }
    
    //Create the blogs
    postBlog(temp:Observable<any>):Observable<any>{
     return this.http.post("http://localhost:3000/posts",temp);
     }
   
      //Delete the blogs
     deleteBlog(id:String):Observable<any>{
     return  this.http.delete("http://localhost:3000/posts/"+id);
      }

      //update the blogs
    updateBlog(id:String,temp:any):Observable<any>{
      return this.http.put("http://localhost:3000/posts/"+id,temp);
      }


    //Reading single blog for update
    getOneBlog(id:String):Observable<any>{
       return this.http.get("http://localhost:3000/posts/"+id);
    }
    
    
}
