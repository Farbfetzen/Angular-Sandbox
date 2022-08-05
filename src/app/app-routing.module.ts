import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { ChildAComponent } from './b/child-a/child-a.component';
import { ChildBComponent } from './b/child-b/child-b.component';
import { CComponent } from './c/c.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'a' },
  { path: 'a', component: AComponent },
  {
    path: 'b',
    component: BComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'child-a' },
      { path: 'child-a', component: ChildAComponent },
      { path: 'child-b', component: ChildBComponent },
    ],
  },
  { path: 'c', component: CComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
