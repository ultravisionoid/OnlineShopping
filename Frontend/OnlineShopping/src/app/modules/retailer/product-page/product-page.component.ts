import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/Order';
import { Products } from 'src/app/models/Products';
import { Wishlist } from 'src/app/models/Wishlist';
import { CartService } from 'src/app/services/user/cart.service';
import { WishlistService } from 'src/app/services/user/wishlist.service';
import Speech from 'speak-tts';
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  idd:any;
  ID:number;
  product:Products;
  wishlist:Wishlist;
  speech:any;
  speechData:any;
  voice:string;
  constructor(private order_service:CartService,private wishlist_service:WishlistService) {
    this.speech=new Speech();
    this.speech.init({
      'volume': 1,
      'lang': 'en-GB',
      'rate': 1,
      'pitch': 1,
      'voice':'Google UK English Male',
      'splitSentences': true,
      'listeners': {
          'onvoiceschanged': (voices) => {
              console.log("Event voiceschanged", voices)
          }
      }
})
   }
order:Order;
  ngOnInit(): void {
    this.order=new Order();
    this.wishlist=new Wishlist();
    this.product=JSON.parse(localStorage.getItem("Product"));
    console.log(this.product);
    
    this.idd=JSON.parse(localStorage.getItem("userData"));
    console.log(this.idd);
    this.ID=JSON.parse(this.idd["User_Id"]);
    console.log(this.ID);

    this.voice="Product name"+this.product.Product_Name;

  }
  c:number;
  Compare(){
    
    this.c=JSON.parse(localStorage.getItem("compareItems"));
    this.c++;
    this.c=this.c%5;
    if(this.c==0){
      localStorage.setItem("product1",JSON.stringify(this.product));  
    }
    else if(this.c==1){
      localStorage.setItem("product2",JSON.stringify(this.product));
    }
    else if(this.c==2){
      localStorage.setItem("product3",JSON.stringify(this.product));
    }
    else{
      localStorage.setItem("product4",JSON.stringify(this.product));
    }
    localStorage.setItem("compareItems",JSON.stringify(this.c));
  }

  addtoorders()
    {
      this.order.User_Id=this.ID;
      this.order.Product_Id=this.product.Product_Id;
      this.order.Product_Quantity=1;
      this.order.Total_Price=this.product.Product_Price;
      this.order.Retailer_Id=this.product.Retailer_Id;
      this.order_service.addOrders(this.order).subscribe(data=>{
        console.log(data);
        },(e)=>{
          console.log(e);
        }
        );
    }

    addtowishlist()
    {
      this.wishlist.User_Id=this.ID;
      this.wishlist.Product_Id=this.product.Product_Id;
      this.wishlist_service.addItem(this.wishlist).subscribe(data=>{
        console.log(data);
      },(e)=>{
        console.log(e);
      });
    }


    speak(){
      this.speech.speak({
        text: this.voice,
    }).then(() => {
        console.log("Success !")
    }).catch(e => {
        console.error("An error occurred :", e) 
    })
  
    }

}
