import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nw-receive-product',
  templateUrl: './receive-product.component.html',
  styleUrls: ['./receive-product.component.css'],
  styles: [`#orderContents img{
          height:50px;
          border: blue dashed 1px;
  }`]
})
export class ReceiveProductComponent implements OnInit {

  private showForm:boolean;
  private receivedProducts:Array<any>;
  private productID:string;
  private quantity:number;
  constructor() { }

  ngOnInit() {
    this.showForm = false;
    this.receivedProducts = [];
  }

  saveTrackingNumber(trackingTR){
    console.log(trackingTR);
    this.showForm = true;
  }

  receiveProduct(prodID, quant){
    console.log(prodID+quant);
    const recProduct = {
      "productID":prodID,
      "quantity":quant
    }
    console.log(recProduct);
    this.receivedProducts.push(recProduct);
    this.productID="";
    this.quantity;
  }

  finishedReceiving(){
    console.log("What do you know!! It works!");
  }

}
