import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ExportEventParams } from 'src/app/models/export-event-params';
import { WsEvent } from 'src/app/models/ws-event';
import { EventTrackerService } from '../../services/event-tracker.service';

@Component({
  selector: 'app-event-tracker-dropdown',
  templateUrl: './event-tracker-dropdown.component.html',
  styleUrls: ['./event-tracker-dropdown.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventTrackerDropdownComponent {
  exportEvents$: Observable<WsEvent<ExportEventParams>[]>;

  constructor(eventTracker: EventTrackerService) {
    this.exportEvents$ = eventTracker.getExportEvents();
  }

}
