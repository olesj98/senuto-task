import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventTrackerListComponent } from './containers/event-tracker-list/event-tracker-list.component';
import { EventTrackerDropdownComponent } from './containers/event-tracker-dropdown/event-tracker-dropdown.component';


const routes: Routes = [
  {
    path: 'list',
    component: EventTrackerListComponent,
  },
  {
    path: 'dropdown',
    component: EventTrackerDropdownComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventTrackerRoutingModule { }
