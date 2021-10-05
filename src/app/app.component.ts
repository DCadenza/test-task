import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-task';
  startDate = new Date(2020, 0, 2);

  constructor(private httpService: HttpClient) {
  }

  arrDataJson: string [];

  ngOnInit() {
    this.httpService.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json').subscribe(
      data => {
        this.arrDataJson = data as string [];
         // var name = data.find(r030);
         console.log(name);
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }
}
// "r030":840,"txt":"Долар США","rate":27.0566,"cc":"USD","exchangedate":"18.03.2020"
