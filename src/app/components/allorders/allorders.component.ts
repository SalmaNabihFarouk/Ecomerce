import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/service/cart.service';;

@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.css']
})
export class AllordersComponent implements OnInit {

  constructor(private _HttpClient:HttpClient,private _CartService: CartService){

  }
ngOnInit(): void {
  this._CartService.getorder().subscribe({
    next:(r)=>{
      console.log(r)
    }
  })
}
}
