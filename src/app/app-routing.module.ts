import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './page/blog/blog.component';
import { SingleBlogComponent } from './page/single-blog/single-blog.component';

const routes: Routes = [
  { path: '', redirectTo: 'blog', pathMatch: 'full' },
  { path: 'blog', component: BlogComponent }, 
  { path: 'singleBlog/:title/:author/:content/:description/:publishedAt/:url/:urlToImage/:name', component: SingleBlogComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
