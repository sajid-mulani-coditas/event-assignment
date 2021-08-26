import { NONE_TYPE } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EventAssignment';
  
  currentFeedback1=""
  currentFeedback2=""
  isVisible =false;
  isVisible2 =false;
  changeText= false;
  changeText2= false;
 

  clickEvent(){
    alert('Hey ! You are the First Person Here ... Congratulations!!');
  }

  shouldDisplay(){
    this.isVisible=!this.isVisible
  }

  shouldDisplay2(){
    this.isVisible2=!this.isVisible2
  }

  getFeedback1(val:any){
this.currentFeedback1=val;
alert("Your feedback is submitted Successfully !")
  }
  
  getFeedback2(val :any){
    this.currentFeedback2=val;
    alert("Your feedback is submitted Successfully !")
  }

  
    mouseover1() {
       this.changeText = !this.changeText;
    }

    mouseover2() {
      this.changeText2 = !this.changeText2;
   }

}
