import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  actionType: string = 'SignIn';
  isUserLoggedIn: boolean = false;
  user: any;
  @ViewChild('buttonClose') closeButton: any;
  constructor(
    private authService: AuthService,
    private router: Router,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.getUserDetails();
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
