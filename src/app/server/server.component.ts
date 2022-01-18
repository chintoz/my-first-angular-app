import {Component} from "@angular/core";

// Selector by new tag. Example: "selector": "app-server". Usage <app-server>
// Selector by attribute. Example: "selector": "[app-server]". Usage: <div app-server>
// Selector by class. Example: "selector": ".app-server". Usage: <div class="app-server"/>
@Component({
  selector: '[app-server]',
  template: `<p [ngStyle]="{backgroundColor: getColor()}" [ngClass]="{online: serverStatus === 'online'}">Server with ID {{serverId}} has status {{serverStatus}}</p>`,
  styles: [`
    .online {
      color: white;
    }
  `]
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
  }

  getColor(): string {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
