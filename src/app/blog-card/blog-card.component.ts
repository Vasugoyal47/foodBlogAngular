import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../services/communication.service';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent implements OnInit {
   posts=[];
   showPost=true;
  constructor(private bs:CommunicationService) {
    
  }
  ngOnInit(): void {
    this.bs.getBlog().subscribe(
      (Response)=>{
        // this.posts=Response
        this.posts=Response
        console.log(Response)},
      (error)=>{console.log(error)},
      ()=>{console.log("Completed")}
    );
   

  }

  
 
   
  getAllPost(){
    this.showPost=false;
   this.bs.getBlog().subscribe(
    (Response)=>{
      // this.posts=Response
      this.posts=Response
      console.log(Response)},
    (error)=>{console.log(error)},
    ()=>{console.log("Completed")}
  );
  }

  
  deletePost(id:String){
    console.log(id);
    // this.bs.deleteBlog(id);
    this.bs.deleteBlog(id)
    .subscribe(res=>{
      alert("Blog Deleted");
      this.getAllPost();
    })
     

  }

}
