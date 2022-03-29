import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AddNewBlogComponent } from './add-new-blog/add-new-blog.component';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { UpdateBlogComponent } from './update-blog/update-blog.component';
import { ActivatedRoute, RouterModule } from '@angular/router';

import{HttpClientModule} from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { DefaultComponent } from './default/default.component';
// import{HttpModule} from'angular/http';

const routes=[
  {path:"home",component:BlogCardComponent},
  {path:"contact",component:ContactFormComponent},
  {path:"add",component:AddNewBlogComponent},
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"update/:id",component:UpdateBlogComponent}
  
  // {path:"**",component:BlogCardComponent,pathMatch:"full"}
]

@NgModule({
  declarations: [
    AppComponent,
  
    HomePageComponent,
    NavbarComponent,
    ContactFormComponent,
    AddNewBlogComponent,
    BlogCardComponent,
    UpdateBlogComponent,
   
  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    CommonModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
