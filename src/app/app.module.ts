import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostService } from './services/post-service.service';
import { Routes } from '@angular/router';
import { NewPostComponent } from './post/new-post/new-post.component';

const appRoutes: Routes = [
  {path: 'posts', component: PostComponent},
  {path: 'posts/new', component: NewPostComponent},
  {path: '', redirectTo: 'posts', pathMatch: 'full'},
  {path: '', redirectTo: 'post'}
];

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
