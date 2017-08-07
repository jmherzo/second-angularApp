import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef, ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @Input('srvrElement') element: {type: string, name: string, content: string}; // Defining the type with ":"
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;


  constructor() {
    console.log('Constructor started');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges started');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit started');
    console.log('Text content: ' + this.header.nativeElement.textContent);
    console.log('Text content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngDoCheck started');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit started');
    console.log('Text content of paragraph: ' + this.paragraph.nativeElement.textContent);

  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked started');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit started');
    console.log('Text content: ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked started');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy started');
  }

}
