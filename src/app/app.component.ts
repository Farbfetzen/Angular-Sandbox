import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular-Sandbox';
  navTabs: NavTab[] = [
    { link: '/a', label: 'AAA' },
    { link: '/b', label: 'BBB' },
    { link: '/c', label: 'CCC' },
  ];
}

interface NavTab {
  link: string;
  label: string;
}
