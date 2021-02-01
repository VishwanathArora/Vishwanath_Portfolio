import { Component, OnInit, HostListener,ChangeDetectorRef } from '@angular/core';
import { Testimonials } from './../classes/testimonials'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private cdRef:ChangeDetectorRef) { 
    console.log("home");
    // this.getScreenSize();
  }

  public reviews : Testimonials[] = [];
  public currentTestimonial : Testimonials;// | undefined;
  public currentIndex : number = 0;
  public innerWidth : number = 0;
  public innerHeight : number = 0;
  

  ngOnInit(): void {
    console.log("home");

    console.log(this.currentTestimonial,"a");
    this.assignReviews();
    console.log(this.currentTestimonial,"b");
    this.currentTestimonial = this.reviews[0];
    console.log(this.currentTestimonial,"c");
    // console.log(this.getTestimonial("A"));
  }

  assignReviews () : void {
    this.reviews = [
      {
        id:0,
        name:"A",
        designation:"Software Engineer",
        comments:"Vishwanath is a techie and always developing applications or products. He is a quick learner and has good understanding of the requirements and purpose of the project that he is working on. He is always keen on developing use cases that can help the society to progress. He has the zeal to contribute to the developing world with his technological contributions."
      },
      {
        id:1,
        name:"B",
        designation:"Software Engineer",
        comments:"I have worked with Vishwanath on two complex projects and in both cases, the work was done on time, on budget, and with a high degree of professionalism. Across the board, everyone enjoyed working with Vishwanath. Vishwanath not only did exceptional work based on the specs we gave him for each project, but he also gave input on how to make the end product even better and cared about how users would engage with the builds. I would love to work with Vishwanath again in the future and would highly recommend his services to anyone."
      },
      {
        id:2,
        name:"C",
        designation:"Software Engineer",
        comments:"Vishwanath is actually a wonderful person, I've known him for a while now. He's a very humble person, he helps me like all the time! I got the chance to meet him in the Google Developer Community Meetup held in Hyd. Vishwanath is a very talented person he is the kind of person that if he is going to do something he will do it well!"
      }
  ];
  }

//   @HostListener('window:resize', ['$event'])
//   onResize(event?) {
//   // this.innerWidth = window.innerWidth;
//   console.log(window.innerWidth);
// }
// @HostListener('window:resize', ['$event'])
// getScreenSize(event?) {
//       console.log(window);
// }
@HostListener("window:resize", [])
public onResize() {
  this.detectScreenSize();
}

public ngAfterViewInit() {
    this.detectScreenSize();
}

private detectScreenSize() {
    this.innerHeight = window.innerHeight;
    this.innerWidth = window.innerWidth;
    console.log("height=>",this.innerHeight,"width=>",this.innerWidth);
}
  getTestimonial (name : string) : Testimonials | void {
    if(this.reviews.length)
      this.currentTestimonial = <Testimonials>this.reviews.find((testimonial:Testimonials) => testimonial.name === name);
    return this.reviews.find((testimonial:Testimonials) => testimonial.name === name);
  }

  prevCarousel () : void {
    this.currentIndex = (this.currentIndex === 0) ? this.reviews.length - 1 : this.currentIndex - 1;
    console.log(this.currentTestimonial,this.currentIndex,"prev");
    this.currentTestimonial = this.reviews[this.currentIndex];
  }

  nextCarousel () : void {
    this.currentIndex = ((this.reviews.length - 1) === this.currentIndex) ? 0 : this.currentIndex + 1;
    console.log(this.currentTestimonial,this.currentIndex,"next");
    this.currentTestimonial = this.reviews[this.currentIndex];
  }

  public isSmallScreen  = ()  : boolean => this.innerWidth < 700;
  // isSmallScreen () : boolean {
  //   return (this.innerWidth < 700);
  // }
  ngAfterViewChecked() : void {
  this.cdRef.detectChanges();
}
}
