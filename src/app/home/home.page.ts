import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../service/homeservice';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  constructor(
    private homeService: HomeService,
    protected activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.homeService.getAllClient().subscribe((data) => {
      console.log(data); // afficher les données dans la console
    });
  }

}
