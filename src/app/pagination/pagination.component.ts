import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() totalResults: number = 0
  @Output() pageChange = new EventEmitter<number>();
  // @Input() handleSelect: (page: number) => void = () => {}

  onPageIndexChange($event: number) {
    this.pageChange.emit($event)
  }
}
