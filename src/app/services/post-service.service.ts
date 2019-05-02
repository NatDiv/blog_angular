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
    this.postSubject.next(this.posts);
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
    // this.emitPost();
  }

  dontLoveIt(postId: number) {
    // @ts-ignore
    // tslint:disable-next-line:prefer-for-of
    for (const i = 0; i < this.posts.length; i += 1 ) {
      if (this.posts[i].id === postId) {
        this.posts[i].loveIts--;
      }
    }
    // this.emitPost();
  }
}
