import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit, Output ,EventEmitter } from '@angular/core';
//O EVENT EMIITER TEM QUE SER DO ANGULAR

@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.scss']
})
export class YesNoButtonGroupComponent implements OnInit {

  @Input() public value:string=null;

  @Input() public label='';

  @Output() public valueChange=new EventEmitter<string>();
  
  public options=YesNoButtonGroupOptions;

  constructor() { }

  ngOnInit(): void {
  }

  public activate(value:string):void
  {
    this.value=value;
    this.valueChange.emit(this.value);
  }

}

enum YesNoButtonGroupOptions{
  YES='yes',
  NO='no'
}
