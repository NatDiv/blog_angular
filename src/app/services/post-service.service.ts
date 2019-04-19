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

  constructor() { }

  emitPost(){
    this.postSubject.next(this.posts);
  }

  supprimerPost(id_post: number){

  }

  ajouterPost(post: Post){

  }
}
