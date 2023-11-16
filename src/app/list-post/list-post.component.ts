import { Component } from '@angular/core';
import { ApiIntegrationService } from '../apiintegration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent {
  newdata: any;
  constructor(private apiservice: ApiIntegrationService, private router: Router) { }
  ngOnInit() {
    this.apiservice.getTodo().subscribe({
      next: (newdata) => {
        this.newdata = newdata;
        console.log(this.newdata);
      },

    });
  }

  goToAddPost(): void {
    const addPostRoute: string[] = ['./add-post'];
    this.router.navigate(addPostRoute)
  }
}

