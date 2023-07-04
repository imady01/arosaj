import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../service/homeservice';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.page.html',
  styleUrls: ['./annonce.page.scss'],
})
export class AnnoncePage implements OnInit {
  annonces: any[] = []; // initialiser la variable pour stocker les annonces

  constructor(
    private homeService: HomeService,
    protected activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.homeService.getAllAnnonce().subscribe((data) => {
      console.log(data);
      this.annonces = data; // stocker les annonces dans la variable
    });
  }
}
