import {Component, OnInit} from '@angular/core';

// Example with tag as selector +  additional file for template and style
@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus: string = "No server created yet";
  serverName = '';
  serverNameTwoWays = 'Initial Value';
  serverCreated: boolean = false;
  servers = ["TestServer 1", "TestServer 2"]

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName)
    this.serverCreationStatus = "Server was created with name " + this.serverName;
  }

  onCreateServerTwoWays() {
    this.serverCreationStatus = "Server was created with name " + this.serverNameTwoWays;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
