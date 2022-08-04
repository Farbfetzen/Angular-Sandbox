import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular-Sandbox';
  navTabs = [
    {
      link: 'a',
      label: 'A-Component',
    },
    {
      link: 'b',
      label: 'B-Component',
    },
    {
      link: 'c',
      label: 'C-Component',
    },
  ];
  // Sorgt dafür, dass der falsche Tab gehighlighted wird, wenn man per URL eine andere Komponente ansteuert.
  // Muss irgendwie an den aktuellen Pfad kommen.
  activeTab = this.navTabs[0];
}
