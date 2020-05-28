import { Component, OnInit } from '@angular/core';
//Add these
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product
  /*
  The ActivatedRoute is specific to each routed component that the Angular Router loads.
  It contains information about the route, its parameters, and additional data associated
  with the route. By injecting the ActivatedRoute, you are configuring the component to 
  use a service.
  In the ngOnInit() method, subscribe to route parameters and fetch the product based on 
  the productId.
  The route parameters correspond to the path variables you define in the route. The URL 
  that matches the route provides the productId. Angular uses the productId to display 
  the details for each unique product.
  */
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }
  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
