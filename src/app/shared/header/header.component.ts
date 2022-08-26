import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Product } from 'src/app/core/models/product';
import { CartService } from 'src/app/core/services/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  actionType: string = 'SignIn';
  isUserLoggedIn: boolean = false;
  selectedItems: Observable<Product[]> | null = null;
  user: any;
  @ViewChild('buttonClose') closeButton: any;
  constructor(
    private authService: AuthService,
    private router: Router,
    private renderer: Renderer2,
    private cart: CartService
  ) {}

  ngOnInit(): void {
    this.getUserDetails();

    this.selectedItems = this.cart.selectItems;
  }

  handleAction() {
    this.actionType = 'SignUp';
  }

  signUpHandler(event: boolean) {
    if (event) {
      this.actionType = 'SignIn';
    }
  }

  getUserDetails() {
    let responseObj = this.authService.getUser();
    if (responseObj != null) {
      this.isUserLoggedIn = true;
      this.user = responseObj;
    }
  }

  signInHandler(event: boolean) {
    if (event) {
      this.closeButton.nativeElement.click();
      // this.renderer.listen(this.closeButton.nativeElement, 'click', (event) => {
      //   console.log('Clicked');
      // });
      this.getUserDetails();
    }
  }

  logout() {
    localStorage.removeItem('user');
    this.isUserLoggedIn = false;
    this.router.navigate(['']);
  }
}
