import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './page/header/header.component';
import { BannerComponent } from './page/banner/banner.component';
import { BlogComponent } from './page/blog/blog.component';
import { FooterComponent } from './page/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { SingleBlogComponent } from './page/single-blog/single-blog.component';
// import { MdBootstrapModule } from 'mdbootstrap'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    BlogComponent,
    FooterComponent,
    BlogComponent,
    SingleBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // MdBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:  [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
