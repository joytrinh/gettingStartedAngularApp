import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [] //store the array of the current products in the cart
  constructor(private http: HttpClient){}
  //Define methods to add items to the cart, return cart items, and clear the cart items:
  
  addToCart(product) {
    this.items.push(product);
  }
//collects the items users add to the cart and returns each item with its associated quantity.
  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices(){
    return this.http.get('/assets/shipping.json')
  }
}
