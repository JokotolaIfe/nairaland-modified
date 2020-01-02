import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrls: ['./single-blog.component.css']
})
export class SingleBlogComponent implements OnInit {
  public author:  string;
  public content:  string;
  public description:  string;
  public publishedAt:  string;
  public url:  string;
  public urlToImage:  string;
  public name:  string;
  public title:  string;
  public image: string;
  constructor(public ar: ActivatedRoute,) { }

  ngOnInit() {
    this.title = this.ar.snapshot.paramMap.get('title')
    this.author = this.ar.snapshot.paramMap.get('author')
    this.content = this.ar.snapshot.paramMap.get('content')
    this.description = this.ar.snapshot.paramMap.get('description')
    this.publishedAt = this.ar.snapshot.paramMap.get('publishedAt')
    this.url = this.ar.snapshot.paramMap.get('url')
    this.image = this.ar.snapshot.paramMap.get('urlToImage')
    this.name = this.ar.snapshot.paramMap.get('name')
  }

}
