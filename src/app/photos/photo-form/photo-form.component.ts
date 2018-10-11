import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PhotoService } from '../photo/photo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ap-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent implements OnInit {

  photoFormGroup: FormGroup;
  file: File;
  preview: string;

  constructor(
    private builder: FormBuilder,
    private photoService: PhotoService,
    private router: Router) { }

  ngOnInit() {
    this.photoFormGroup = this.builder.group({
      file: ['', Validators.required],
      description: ['', 
        [
          Validators.required, 
          Validators.maxLength(300)
        ]
      ],
      allowComments: [true]
    })
  }

  upload() {
    const description = this.photoFormGroup.get('description').value;
    const allowComments = this.photoFormGroup.get('allowComments').value;
    this.photoService.upload(description, allowComments, this.file)
    .subscribe(() => this.router.navigate(['']),
    (err) => console.log(err));
  }
  
  handleFile(file: File) {
    this.file = file;
    const fileReader = new FileReader();
    fileReader.onload = (event: any) => this.preview = event.target.result;
    fileReader.readAsDataURL(this.file);
  }

}
