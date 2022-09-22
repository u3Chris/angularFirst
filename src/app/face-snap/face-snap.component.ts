import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent{
  title!: string;
  description!: string;
  createDate!: Date;
  snaps!: number;
  imageUrl!: string;

  ngOnInit() {
    this.title = "Chris";
    this.description = "Olatundé";
    this.createDate = new Date();
    this.snaps = 9;
    this.imageUrl = "C:\Users\Aurus ODOUBOUROU\Desktop\Test Blog\img\img-blog.jpg";
  }
}
