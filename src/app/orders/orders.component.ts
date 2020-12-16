import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  @Output() back = new EventEmitter();
  tableData:any=[];

  constructor(private mainService:MainService) { }

  ngOnInit() {
    this.mainService.getOrders().subscribe(
      data=>{
        this.tableData=data;
      }
    )
  }

  backFun(){
    this.back.emit(true);
  }

}

