import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  linksArray = [
    { routerLink: '/', pageName: 'Tasks' },
    { routerLink: '/taskType', pageName: 'Tasks Type' },
  ];
}
