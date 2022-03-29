import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CommunicationService } from '../services/communication.service';

@Component({
  selector: 'app-add-new-blog',
  templateUrl: './add-new-blog.component.html',
  styleUrls: ['./add-new-blog.component.css']
})
export class AddNewBlogComponent implements OnInit {
  @ViewChild("f") form:NgForm | undefined 
  constructor(private sb:CommunicationService,private router:Router) { }

  ngOnInit(): void {
  }

  
  onSubmit(){
    
    this.sb.postBlog(this.form?.value).subscribe(res=>{
      console.log(res);
      alert("Blog Added Successfully ");
      this.form?.reset();
      this.sb.getBlog();
      this.router.navigate(['/home']);
    },
    err=>{
      alert("something went wrong");
    })
  
    

  }
  

}
