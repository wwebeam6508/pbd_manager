import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pbd-website',
  templateUrl: './pbd-website.page.html',
  styleUrls: ['./pbd-website.page.scss'],
})
export class PbdWebsitePage implements OnInit {

  constructor(private routes:Router) { }

  goToJobType(id){
    this.routes.navigate(['/pbd_website/type_job/'+id])
  }

  ngOnInit() {
  }

}
