import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent implements OnInit {

  display: boolean = true;
  log = [];

  constructor() { }

  ngOnInit(): void {
  }

  onChangeDisplay() {
    this.display = !this.display;
    this.log.push(new Date().toLocaleString());
  }

  getStyleByPosition(position:number): any {
    return position > 5 ? {backgroundColor: 'green'} : {};
  }

  getClassByPosition(position: number): string {
    return position > 5 ? 'white':'';
  }

}


/*
1. Add a button which says "Display Details"
2. Add a paragraph with any content of your choice (e.g "Secret Password = tuna")
3. Toggle the displaying of that paragraph with the button created in the first step
4. Log all button clicks in an array and output that array below the secret paragraph (maybe log a timestamp or simply an incrementing number)
5. Starting at the 5th log item, give all future log items a blue background (via ngStyle) and white color (ngClass)
 */
