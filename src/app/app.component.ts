import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  arrNum = [1,2,541,123,61,123,26,12,7,985,23,234,7,345,234,357,2354,234,.234,2342,34]
  title = 'Bruh'
  getMax(a: number[]) {
    let temp = 0
    a.forEach((number) => {
      if(temp < number)
        temp = number
    })
    return temp
  }
}
