import { Directive, ElementRef, Renderer, OnInit } from "@angular/core";
import { Input } from "@angular/core";
import { UserService } from "../../../core/user/user.service";

@Directive({
  selector: '[PhotoOwnerOnly]'
})
export class PhotoOwnerOnlyDirective implements OnInit {

  @Input() ownerUser: number;
  
  constructor(
    private element: ElementRef,
    private renderer: Renderer,
    private userService: UserService) {}
    
    ngOnInit(): void {
      this.userService.getUser().subscribe(user => {
        if (user.id != this.ownerUser) {
          this.renderer.setElementStyle(this.element.nativeElement, 'display', 'none');
        }
      })
    }
}