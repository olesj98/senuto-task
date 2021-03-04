import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { EventTrackerService } from '../../services/event-tracker.service';

import { ExportEventParams } from 'src/app/models/export-event-params';
import { WsEvent } from 'src/app/models/ws-event';

@Component({
  selector: 'app-event-tracker-list',
  templateUrl: './event-tracker-list.component.html',
  styleUrls: ['./event-tracker-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventTrackerListComponent {
  exportEvents$: Observable<WsEvent<ExportEventParams>[]>;

  constructor(eventTracker: EventTrackerService) {
    this.exportEvents$ = eventTracker.getExportEvents();
  }

}
