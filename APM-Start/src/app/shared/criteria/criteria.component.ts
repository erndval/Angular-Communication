import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit,
  Input,
} from "@angular/core";

@Component({
  selector: "pm-criteria",
  templateUrl: "./criteria.component.html",
  styleUrls: ["./criteria.component.css"],
})
export class CriteriaComponent implements OnInit, AfterViewInit {
  listFilter: string;
  @Input() displayDetail: boolean;

  @ViewChild("filterElement") filterElementRef: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {
    this.filterElementRef.nativeElement.focus();
  }

  ngOnInit() {}
}
