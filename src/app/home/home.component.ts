import { Component, OnInit, ViewChild } from '@angular/core';
import { filter, map, mergeMap, reduce, tap } from 'rxjs';
import { Product } from '../core/models/product';
import { HttpService } from '../core/services/http/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  headerArr: { img: string; title: string }[] = [
    {
      img: 'https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100',
      title: 'Top Offers',
    },

    {
      img: 'https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100',
      title: 'Mobiles',
    },
    {
      img: 'https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100',
      title: 'Electronics',
    },
    {
      img: 'https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100',
      title: 'Top Offers',
    },

    {
      img: 'https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100',
      title: 'Mobiles',
    },
    {
      img: 'https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100',
      title: 'Mobiles',
    },
    {
      img: 'https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100',
      title: 'Top Offers',
    },

    {
      img: 'https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100',
      title: 'Mobiles',
    },
  ];
  listarr = [
    { title: 1 },
    { title: 2 },
    { title: 3 },
    { title: 4 },
    { title: 5 },
    { title: 6 },
    { title: 7 },
    { title: 8 },
    { title: 9 },
    { title: 10 },
    { title: 11 },
    { title: 12 },
    { title: 13 },
    { title: 14 },
    { title: 15 },
    { title: 16 },
    { title: 17 },
    { title: 18 },
    { title: 18 },
    { title: 18 },
    { title: 18 },
    { title: 18 },
  ];

  //listarr:{title:string} = [{title:''}];
  constructor(private crud: HttpService) {}

  ngOnInit(): void {
    this.crud
      .getData('categories')
      .pipe(mergeMap((res: Product[]) => res))
      .subscribe((res) => console.log(res));
  }
  @ViewChild('slide') slide: any;
  j = this.listarr.length - 5;

  pxtochange = 0;
  //for prev button k will incremented after every next btn click
  k = 0;
  prev() {
    if (this.k != 0) {
      //if (this.j !== this.listarr.length - 1) {
      this.k--;
      this.j++;
      this.pxtochange = this.pxtochange + 275;
      this.slide.nativeElement.style.left = this.pxtochange + 'px';
    }
  }
  next() {
    if (this.j != 0 && this.j > 0) {
      this.j--;
      this.k++;
      console.log(this.j);
      this.pxtochange = this.pxtochange - 275;
      this.slide.nativeElement.style.left = this.pxtochange + 'px';
    }
  }
}
