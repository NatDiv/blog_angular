import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/post.model';
import {PostService} from '../services/post-service.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: Post;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  onDontLoveIt(postId: number) {
    this.postService.dontLoveIt(postId);
  }

  onLoveIt(postId: number) {
    this.postService.loveIt(postId);
  }
  onDelete(postId: number) {
    this.postService.deletePost(postId);
  }
}
