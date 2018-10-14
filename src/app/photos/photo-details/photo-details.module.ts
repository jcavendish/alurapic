import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PhotoDetailsComponent } from "./photo-details.component";
import { PhotoModule } from "../photo/photo.module";
import { RouterModule } from "@angular/router";
import { PhotoCommentsComponent } from "./photo-comments/photo-comments.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PhotoOwnerOnlyModule } from "./photo-owner-only/photo-owner-only.module";

@NgModule({
  declarations: [
    PhotoDetailsComponent,
    PhotoCommentsComponent
  ],
  imports: [
    CommonModule,
    PhotoModule,
    RouterModule,
    ReactiveFormsModule,
    PhotoOwnerOnlyModule
  ],
  exports: [PhotoDetailsComponent]
})
export class PhotoDetailsModule {}