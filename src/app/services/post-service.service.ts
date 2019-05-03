import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class PostService {

  posts: Post[] = [];
  postSubject =  new Subject<Post[]>();

  constructor() {
    this.getPosts();
   }

  emitPost() {
    this.postSubject.next(this.posts);
  }

  getPosts() {
    firebase.database().ref('/posts').on(
      'value',
      (data: firebase.database.DataSnapshot) => {
        this.posts = data.val() ? data.val() : [];
        this.emitPost();
      });
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
    this.savePosts();
    this.emitPost();
  }

  savePosts() {
    // tslint:disable-next-line:indent
  	this.trier();
   firebase.database().ref('/posts').set(this.posts);
  }

  ajouterPost(post: Post) {
    post.id = this.posts.length;
    this.posts.push(post);
    this.trier();
    this.savePosts();
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
    this.savePosts();
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
    this.savePosts();
    this.emitPost();
  }
}
