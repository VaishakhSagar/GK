import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { MainService } from '../main.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  selectedTile:any='';

  constructor(
    private Router:Router,
    private mainService:MainService
  ) { }

  ngOnInit() {
  }

  logout(){
    this.mainService.logout().subscribe(data=>{
      this.Router.navigate(['/login'])
    })
  }

  backFun(e){
    this.selectedTile="";
  }

}

