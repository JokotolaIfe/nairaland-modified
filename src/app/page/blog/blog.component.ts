    
import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent implements OnInit {

public blogs: any;

constructor(public http: HttpClient, public router: Router) { }

  ngOnInit() {
    this.getBlogs()
  }


  getBlogs(){
    var url = 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=e8d536249a9e44949e0b222d1890bcf1'

    return this.http.get(url).subscribe(res=>{
      console.log(res)
        if(res){
          this.blogs = res;
          console.log(this.blogs)
          console.log(this.blogs.articles)
      
        }
    })
  }

  goto(title, author, content, description, publishedAt, url, urlToImage, name){
    this.router.navigate(['/singleBlog', title, author, content, description, publishedAt, url, urlToImage, name]);
  }
}
