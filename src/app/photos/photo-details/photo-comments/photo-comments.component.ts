import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Observable, Subscriber } from "rxjs";
import { switchMap, tap } from "rxjs/operators";

import { PhotoComment } from "../../photo/photo-comment";
import { PhotoService } from "../../photo/photo.service";
import { Photo } from "../../photo/photo";

@Component({
  selector: 'ap-photo-comments',
  templateUrl: './photo-comments.component.html',
  styleUrls: ['./photo-comments.css']
})
export class PhotoCommentsComponent implements OnInit {

  comments$: Observable<PhotoComment[]>;
  @Input() photoId: number;
  commentForm: FormGroup;
  
  constructor(
    private photoService: PhotoService,
    private formBuilder: FormBuilder) {
  }
  
  ngOnInit(): void {
    this.commentForm = this.formBuilder.group({
      commentText: ['', Validators.maxLength(300)]
    })
    this.comments$ = this.photoService.findComments(this.photoId);
  }

  addComment() {
    const commentText = this.commentForm.get('commentText').value as string;
    
    this.comments$ = this.photoService.addComment(this.photoId, commentText)
      .pipe(switchMap(() => this.photoService.findComments(this.photoId)))
      .pipe(tap(() => this.commentForm.reset()));
  }

}