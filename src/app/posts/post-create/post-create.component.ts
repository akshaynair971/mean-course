import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html'
})
export class PostCreateComponent {
  enteredValue = '';
  newPost = 'NEW CONTENT';
  onAddPost() {
    console.dir();
    this.newPost = this.enteredValue;
  }
}
