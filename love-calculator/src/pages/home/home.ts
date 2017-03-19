import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
name1='';
name2='';
get score() {
  const letters = (this.name1 + this.name2).toLowerCase
  return 100;
}  

}
