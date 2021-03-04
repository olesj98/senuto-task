import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';

import { EventTrackerRoutingModule } from './event-tracker-routing.module';
import { EventTrackerListComponent } from './containers/event-tracker-list/event-tracker-list.component';
import { EventTrackerDropdownComponent } from './containers/event-tracker-dropdown/event-tracker-dropdown.component';
import { EventTrackerListRendererComponent } from './components/event-tracker-list-renderer/event-tracker-list-renderer.component';


@NgModule({
  declarations: [
    EventTrackerListComponent,
    EventTrackerDropdownComponent,
    EventTrackerListRendererComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatExpansionModule,
    EventTrackerRoutingModule
  ]
})
export class EventTrackerModule { }
