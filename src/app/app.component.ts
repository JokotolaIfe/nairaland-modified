import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'web';
  
public blogs: any;

constructor(public http: HttpClient) { }

  ngOnInit() {
    // this.getBlogs()
  }


  // getBlogs(){
  //   var url = 'https://newsapi.org/v2/top-headlines?' +
  //   'country=us&' +
  //   'apiKey=e8d536249a9e44949e0b222d1890bcf1'

  //   return this.http.get(url).subscribe(res=>{
  //     console.log(res)
  //       if(res){
  //         this.blogs = res;
  //         console.log(this.blogs)
  //         console.log(this.blogs.articles)
  //       }
  //   })
  // }
}
