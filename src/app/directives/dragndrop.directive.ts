import { Directive, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appDragndrop]',
})
export class DragndropDirective {
  @HostBinding('class.fileover') fileover: boolean;
  @Output() fileDropped = new EventEmitter<any>();

  constructor() {}

  /**
   * Drag over listener
   * @param event
   */
  @HostListener('dragover', ['$event']) onDragOver(event) {
    event.preventDefault();
    event.stopPropagation();

    this.fileover = true;
    console.log('onDragOver');
  }
  /**
   * Drag leave listener
   * @param event
   */
  @HostListener('dragleave', ['$event']) onDragOLeave(event) {
    event.preventDefault();
    event.stopPropagation();

    console.log('onDragOLeave');
  }
  /**
   * on drop listener
   * @param event
   */
  @HostListener('drop', ['$event']) onDrop(event) {
    debugger;
    event.preventDefault();
    event.stopPropagation();

    this.fileover = false;
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      this.fileDropped.emit(files);
    }
  }
}
