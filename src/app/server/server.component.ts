import {Component} from "@angular/core";

// Selector by new tag. Example: "selector": "app-server". Usage <app-server>
// Selector by attribute. Example: "selector": "[app-server]". Usage: <div app-server>
// Selector by class. Example: "selector": ".app-server". Usage: <div class="app-server"/>
@Component({
  selector: '[app-server]',
  template : '<p>Server with ID {{serverId}} has status {{serverStatus}}</p>'
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';
}
