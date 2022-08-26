import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-productfilters',
  templateUrl: './productfilters.component.html',
  styleUrls: ['./productfilters.component.scss'],
})
export class ProductfiltersComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  filterCompanyNames: any = [];
  filterForm: FormGroup = this.fb.group({
    checkArray: this.fb.array([]),
  });
  ngOnInit(): void {}
  onCheckboxChange(e: any) {
    const checkArray: FormArray = this.filterForm.get(
      'checkArray'
    ) as FormArray;

    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: any) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
}
