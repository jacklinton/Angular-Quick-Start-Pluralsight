import { Component } from '@angular/core';

// {{}} interpolation - Component to DOM
// []   property binding - Component to DOM
// ()   event binding - DOM to Component

@Component({
  selector: 'my-app', // to use me, put <my-app> in index.html
  template: `
  <h1>{{name}}</h1>

  <fieldset>
    <div [hidden] = "hideAddress">
      <p [innerText] = "street"></p>
      <p [innerText] = "city"></p>
    </div>
  <button (click) = "addressClick()">Show/Hide Address</button>
</fieldset>

  <fieldset>
    <!-- <img src={{image}}/> -->
    <!-- <img src="{{image}}"/> -->
    <img [src]="image"/>
  </fieldset>

  <fieldset>
    <label [style.color]="color">Favorite Color</label>
    <button (click)="clicked()">Toggle color</button>

    <!-- <select #selector (change)="colorChange(selector.value)"> -->

    <select (change)="colorChange($event.target.value)">
      <option>red</option>
      <option>blue</option>
      <option>green</option>
    </select>
  </fieldset>
  `,
})

export class AppComponent  {
  name = 'Jack Linton';
  image = 'favicon.ico';
  color = 'red';
  street = '4826 Osage Ave';
  city = 'Philadelphia, PA 19143';
  region = 'Pennsylvania';
  hideAddress = false;

  clicked() {
    this.color = this.color === 'red' ? 'blue' : 'red';
  }

  colorChange(color: string) {
    this.color = color;
  }

  addressClick() {
    this.hideAddress = !this.hideAddress;
  }
}
