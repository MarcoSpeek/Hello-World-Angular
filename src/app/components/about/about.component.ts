import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  private sub: any;
  name?: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.name = params['name'];
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
