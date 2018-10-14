import { NgModule } from "@angular/core";
import { PhotoCommentsComponent } from "../photo-comments/photo-comments.component";
import { PhotoOwnerOnlyDirective } from "./photo-owner-only.directive";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [PhotoOwnerOnlyDirective],
  imports: [CommonModule],
  exports: [PhotoOwnerOnlyDirective]
})
export class PhotoOwnerOnlyModule {}