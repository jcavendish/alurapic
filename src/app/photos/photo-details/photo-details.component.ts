import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PhotoService } from "../photo/photo.service";
import { Observable } from "rxjs";
import { Photo } from "../photo/photo";

@Component({
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.css']
})
export class PhotoDetailsComponent implements OnInit {

  photo$: Observable<Photo>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.photoId;
    this.photo$ = this.photoService.findById(id) as Observable<Photo>;
  }

}