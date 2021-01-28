import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public basicInfo : string = "I’m Vishwanath Arora, I’m a self-taught Full stack developer and a Software Engineer. I love creating software that solves real-world problems, adding value to the society through technology.. I'm really interested in Technology & solving technical problems. You can know more about me by reading my articles."; 

  public designation : string  = "Currently I'm working for Star Agribazaar Technology Limited as a Full stack developer.";

  public contactInfo : string = "For business inquiries feel free to get in touch with me at .";

  public mail : string = "vishwanatharoraengineer@gmail.com";

  public location : string = "Somewhere in Delhi/NCR, India";
  
  constructor() { }

  ngOnInit(): void {
  }

}
