import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommunicationService } from '../services/communication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-update-blog',
  templateUrl: './update-blog.component.html',
  styleUrls: ['./update-blog.component.css']
})
export class UpdateBlogComponent implements OnInit {

  data:any;
id:any;
@ViewChild("f") form:NgForm | undefined 
  constructor(private route:ActivatedRoute,private st:CommunicationService,private router:Router) { }

  ngOnInit(): void {
   
    this.id=this.route.snapshot.params['id'];
    this.getOne();
  }
 


  getOne(){

    this.st.getOneBlog(this.id).subscribe(
      (res:any)=>{
        this.data=res;
      }
    )

  }

  onSubmit(){
  
    this.st.updateBlog(this.id,this.data).subscribe(
      (Response)=>{
         console.log(Response)},
         (error)=>{console.log(error)},
         ()=>{console.log("Update Completed")}
    );
     alert("Data updated");
      this.st.getBlog();
      this.form?.reset();
      this.router.navigate(['/home']);
  }


}
