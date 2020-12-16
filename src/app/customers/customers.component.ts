import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MainService } from '../main.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  @Output() back = new EventEmitter();

  customerForm = new FormGroup({
    Name: new FormControl('',Validators.required),
    Age: new FormControl('',Validators.required),
    Address: new FormControl('',Validators.required)
  });

  constructor(private mainService:MainService) { }

  ngOnInit() {
  }

  backFun(){
    this.back.emit(true);
  }

  save(){
    if(this.customerForm.valid){
      let params = {customerName:this.customerForm.value["Name"],customerAge:this.customerForm.value["Age"],customerAddress:this.customerForm.value["Address"]}
      this.mainService.postCustomer(params).subscribe(
        data=>{
         alert('customer added')
        },
        err=>{
          alert('failed');
        }
      )
    }
    else{
      alert('invalid form');
    }
  }

}