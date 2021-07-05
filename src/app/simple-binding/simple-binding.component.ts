import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-binding',
  templateUrl: './simple-binding.component.html',
  styleUrls: ['./simple-binding.component.css']
})
export class SimpleBindingComponent implements OnInit {

  kingName: string | undefined;
  firstName: string = '';
  middleName: string = '';
  lastName: string = '';
  boxSize: number = 0;

  constructor() { }

  ngOnInit() {
    this.boxSize = 100;
  }

  changeToDavid() {
    this.kingName = "דוד המלך"
  }

  changeToSolomon() {
    this.kingName = "שלמה המלך"
  }

  setFirstNameByEvent(event: Event) {
    this.firstName = (<HTMLInputElement>event.target).value;
  }

  setMiddleNameByInput(input: HTMLInputElement) {
    this.middleName = input.value;
  }

  setMiddleNameByValue(value: string) {
    this.middleName = value;
  }

  incBoxSize() {
    if (this.boxSize < 200) {
      this.boxSize += 10;
    }

    return false;
  }

  decBoxSize() {
    if (this.boxSize > 100) {
      this.boxSize -= 10;
    }

    return false;
  }

}
