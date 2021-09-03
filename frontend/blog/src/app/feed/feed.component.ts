import { Post } from './../model/Post';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  listPost: Post[] | any ;
  post: Post = new Post;


  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.findPosts()
  }

  
  findPosts(){
    this.postService.getPosts().subscribe((data: Post[] | any )=>{
      this.listPost = data;
    })
  }

  cadastrarMensagem(){
    this.postService.postMensagem(this.post).subscribe((data: Post | any)=>{
      this.post = data
      location.assign('/feed')
    })
  }
}
