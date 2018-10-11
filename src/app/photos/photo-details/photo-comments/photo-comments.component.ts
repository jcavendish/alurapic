import { Component, OnInit } from "@angular/core";
import { PhotoComment } from "../../photo/photo-comment";
import { Observable } from "rxjs";
import { PhotoService } from "../../photo/photo.service";
import { Input } from "@angular/core";

@Component({
  selector: 'ap-photo-comments',
  templateUrl: './photo-comments.component.html'
})
export class PhotoCommentsComponent implements OnInit {

  comments$: Observable<PhotoComment[]>;
  @Input() photoId: number;
  
  constructor(private photoService: PhotoService) {
    
  }
  
  ngOnInit(): void {
    this.comments$ = this.photoService.findComments(this.photoId);
  }

}