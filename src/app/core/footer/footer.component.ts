import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  initialDate: number;
  dateNow: Date = new Date();
  dateNowToString: string;
  constructor() {
    this.initialDate = 2020;
  }

  ngOnInit(): void {
    if ((this.dateNow.getFullYear() - this.initialDate) !== 0) {
      this.dateNowToString = ' - ' + this.dateNow.getFullYear();
    }
  }
}
