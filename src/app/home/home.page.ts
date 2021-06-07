import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(private browser: InAppBrowser) {}

  ngOnInit(): void {
    //const browser = this.browser.create('https://www.stackoverflow.com','_self',{location:'yes'}); 
  }

}
