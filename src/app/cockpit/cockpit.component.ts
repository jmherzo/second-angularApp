import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  /**To use this both we would need to use in the html
    * [(ngModel)]="newServerContent"*/
  // newServerName = '';
  // newServerContent = '';

  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  @Output('srvrC' /*this is an alias*/) serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  constructor() { }

  ngOnInit() {
  }

/*  onAddServer() {
    this.serverCreated.emit(
      {serverName: this.newServerName,
        serverContent: this.newServerContent });
  }*/

  onAddServer(serverInput: HTMLInputElement) {
    this.serverCreated.emit(
      {serverName: serverInput.value,
        serverContent: this.serverContentInput.nativeElement.value });
  }

  onAddBlueprint(serverInput: HTMLInputElement) {
    this.blueprintCreated.emit(
      {serverName: serverInput.value,
        serverContent: this.serverContentInput.nativeElement.value });
  }
}
