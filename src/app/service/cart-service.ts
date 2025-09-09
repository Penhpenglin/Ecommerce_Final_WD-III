// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {
//   constructor() {
//     let cart: string = localStorage.getItem('cart_item') ?? '[]';
//     this.card_item = JSON.parse(cart);
//   }

//   private card_item :any[] = [];

//   addToCard(product:any){
//     product.qty = 1
//    this.card_item.push(product);
//    console.log(this.card_item);
//    localStorage.setItem('cart_item',JSON.stringify(this.card_item));
//   }

//   getCartItem():any[]{
//     return this.card_item;
//   }

// }



import { Injectable } from '@angular/core';

declare const Swal:any;
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart_item: any[] = [];

  constructor() {
    let cart: string = localStorage.getItem('cart_item') ?? '[]';
    this.cart_item = JSON.parse(cart);

    
    this.cart_item = this.cart_item.map(item => {
      if (!item.qty) {
        item.qty = 1;
      }
      return item;
    });
  }

  addToCard(product: any): void {
    let dpl_index: number = this.cart_item.findIndex(x => x.id == product.id);
    if(dpl_index > -1){
      this.cart_item[dpl_index].qty++;
      return;
    }else{
      product.qty = 1
      product.is_select = true
      this.cart_item.push(product);
    }
    

    console.log(this.cart_item);
    localStorage.setItem('cart_item', JSON.stringify(this.cart_item));
  }

  getCartItem(): any[] {
    return this.cart_item;
  }

  incrementQty(item: any){
  let index: number = this.cart_item.findIndex(x => x.id === item.id);
   this.cart_item[index].qty++;
   localStorage.setItem('cart_item', JSON.stringify(this.cart_item));
  }

  

  decrementQty(item: any){
    if(item.qty > 1){
      let index: number = this.cart_item.findIndex(x => x.id === item.id);
   this.cart_item[index].qty--; 
   localStorage.setItem('cart_item', JSON.stringify(this.cart_item));
    }
    
  }

  removeCartItem(item: any){
   
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, remove it!"
}).then((result:any  ) => {
  if (result.isConfirmed) {
    let index: number = this.cart_item.findIndex(x => x.id === item.id);
    this.cart_item.splice(index,  1);
    localStorage.setItem('cart_item', JSON.stringify(this.cart_item));
  }
});
    
  }


  getCartTotal(){
    let total = 0;
    this.cart_item.forEach(x => {
      if(x.is_select){
        total += x.price * x.qty;
      }
      
    })
    return total;
  }


  selectCartItem(item: any){
  let index: number = this.cart_item.findIndex(x => x.id === item.id);
  console.log(this.cart_item[index]);
   this.cart_item[index].is_select = !this.cart_item[index].is_select;
   localStorage.setItem('cart_item', JSON.stringify(this.cart_item));
  }

}