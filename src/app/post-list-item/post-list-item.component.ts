import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostService} from '../services/post-service.service';
import {Post} from '../models/post.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  postsSubscription: Subscription;
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postsSubscription = this.postService.postSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postService.emitPost();
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }

}
