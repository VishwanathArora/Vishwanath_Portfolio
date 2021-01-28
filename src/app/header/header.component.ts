import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {


  myControl = new FormControl();
  options: string[] = ['Chennai', 'Salem', 'Coimbatore'];
  public showSearchPane: boolean;
  private mediaSub: Subscription;

  public detail: any = [
  {
    detail: 'Lorem ipsum dolor sit amet',
    image: 'https://picsum.photos/id/888/300/200',
    // tslint:disable-next-line: max-line-length
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur, ante eu auctor blandit, diam libero suscipit metus, sit amet lacinia nulla urna sed libero.',
  },
  {
    title: 'Sit amet lacinia nulla urna sed libero',
    image: 'https://picsum.photos/id/888/300/200',
    // tslint:disable-next-line: max-line-length
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur, ante eu auctor blandit, diam libero suscipit metus, sit amet lacinia nulla urna sed libero.',
  },
  {
    title: 'Aiam libero suscipit metus',
    image: 'https://picsum.photos/id/888/300/200',
    // tslint:disable-next-line: max-line-length
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur, ante eu auctor blandit, diam libero suscipit metus, sit amet lacinia nulla urna sed libero.',
  },
  {
    title: 'Aiam libero suscipit metus',
    image: 'https://picsum.photos/id/888/300/200',
    // tslint:disable-next-line: max-line-length
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur, ante eu auctor blandit, diam libero suscipit metus, sit amet lacinia nulla urna sed libero.',
  },
  {
    title: 'Ante eu auctor blandit',
    image: 'https://picsum.photos/id/888/300/200',
    // tslint:disable-next-line: max-line-length
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur, ante eu auctor blandit, diam libero suscipit metus, sit amet lacinia nulla urna sed libero.',
  },
  {
    title: 'Pellentesque efficitur',
    image: 'https://picsum.photos/id/888/300/200',
    // tslint:disable-next-line: max-line-length
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur, ante eu auctor blandit, diam libero suscipit metus, sit amet lacinia nulla urna sed libero.',
  },
  {
    title: 'consectetur adipiscing elit',
    image: 'https://picsum.photos/id/888/300/200',
    // tslint:disable-next-line: max-line-length
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur, ante eu auctor blandit, diam libero suscipit metus, sit amet lacinia nulla urna sed libero.',
  },
];

  constructor() { }

  ngOnInit() {
    this.showSearchPane = false;
  }

  ngOnDestroy() {
    if (this.mediaSub) {
      this.mediaSub.unsubscribe();
    }
  }

  searchItems(styleDisplay: string): void {
    console.log(styleDisplay);
    if (styleDisplay === 'none') {
      this.showSearchPane = !this.showSearchPane;
    } else {
      this.doSearch();
    }
  }

  doSearch(): void {
    console.log('Do actual search');
  }

}
