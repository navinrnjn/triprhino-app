import { Component, OnInit, Input, EventEmitter, Output, ElementRef } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-modalcomponent',
  templateUrl: './modalcomponent.component.html',
  styleUrls: ['./modalcomponent.component.css']
})
export class ModalcomponentComponent implements OnInit {

  @Input()
  dialogTitle: string;

  @Input()
  showSave: boolean = true;

  @Input()
  showFooter: boolean = true;

  @Input()
  showCancel: boolean = false;

  @Output() onClose: EventEmitter<any> = new EventEmitter();

  @Output() onCancel: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
  }



  modalEl = null;
  id: string = uniqueId('modal_');

  constructor(private _rootNode: ElementRef) { }

  open() {
    this.modalEl.modal('show');
  }

  close() {
    this.modalEl.modal('hide');
  }

  closeInternal() { // close modal when click on times button in up-right corner
    this.onClose.next(null); // emit event
    this.close();
  }

  cancelInternal() {
    this.onCancel.next(null); // emit event
  }

  ngAfterViewInit() {
    this.modalEl = $(this._rootNode.nativeElement).find('div.modal');
  }

  has(selector) {
    return $(this._rootNode.nativeElement).find(selector).length;
  }
}

let modal_id: number = 0;
export function uniqueId(prefix: string): string {
  return prefix + ++modal_id;
}
