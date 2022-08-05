import { Component } from '@angular/core';

import { NavTab } from '../shared/nav-tab';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
})
export class BComponent {
  navTabs: NavTab[] = [
    { link: 'child-a', label: 'Child A' },
    { link: 'child-b', label: 'Child B' },
    { link: '.', label: 'go to B default' },
    { link: '', label: 'go to app default' },
    // The leading slash before c is necessary because the link
    // must be relative to root not relative to the current path.
    { link: '/c', label: 'go to C' },
  ];
}
