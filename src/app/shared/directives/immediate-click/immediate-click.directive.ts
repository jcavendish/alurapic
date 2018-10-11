import { Directive, OnInit } from "@angular/core";
import { ElementRef } from "@angular/core";
import { PlatformDetectorService } from "../../../core/platform-detector/platform-detector.service";

@Directive({
  selector: '[ImmediateClick]'
})
export class ImmediateClickDirective implements OnInit {

  constructor(
    private element: ElementRef<any>,
    private platform: PlatformDetectorService) {}
  
  ngOnInit(): void {
    this.platform.isPlatformBrowser &&
      this.element.nativeElement.click();
  }

}