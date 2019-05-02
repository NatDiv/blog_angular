import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class PostService {

  posts: Post[] = [];
  postSubject =  new Subject<Post[]>();

  constructor() {
   }

  emitPost() {
    this.trier();
    this.postSubject.next(this.posts);
  }

  trier() {
    let tempon;
    for (let i = 0; i < this.posts.length - 1; i += 1) {
      for (let j = i; j < this.posts.length; j += 1) {
        if (this.posts[i].loveIts < this.posts[j].loveIts) {
          tempon = this.posts[i];
          this.posts[i] = this.posts[j];
          this.posts[j] = tempon;
        }
      }
    }
  }
  deletePost(postId: number) {
    // @ts-ignore
    // tslint:disable-next-line:prefer-for-of
    for (const i = 0; i < this.posts.length; i++ ) {
      if (this.posts[i].id === postId) {
        this.posts.splice(i, 1);
      }
    }
    this.emitPost();
  }

  ajouterPost(post: Post) {
    post.id = this.posts.length;
    this.posts.push(post);
    this.emitPost();
  }

  loveIt(postId: number) {
    // @ts-ignore
    // tslint:disable-next-line:prefer-for-of
    for ( const i = 0; i < this.posts.length; i++ ) {
      if (this.posts[i].id === postId) {
        this.posts[i].loveIts++;
      }
    }
    this.emitPost();
  }

  dontLoveIt(postId: number) {
    // @ts-ignore
    // tslint:disable-next-line:prefer-for-of
    for (const i = 0; i < this.posts.length; i += 1 ) {
      if (this.posts[i].id === postId) {
        this.posts[i].loveIts--;
      }
    }
    this.emitPost();
  }
}
