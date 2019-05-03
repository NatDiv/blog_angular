import { Component, OnInit } from '@angular/core';
import {PostService} from '../services/post-service.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Post} from '../models/post.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  constructor(private  postService: PostService,
              private router: Router) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    const title = form.value.title;
    const description = form.value.description;
    const post = new Post(title, description);
    this.postService.ajouterPost(post);
    this.router.navigate(['/posts']);
  }

}
