import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

interface Product {
  id: number;
  serialNumber: number;
  name: string;
}

const serialNumberValidatorFactory = (httpClient: HttpClient) => {

  const serialNumberValidator = (c: AbstractControl) => {
    return httpClient
      .get<Product[]>('http://localhost:3050/products?serialNumber=' + encodeURIComponent(c.value))
      .toPromise()
      .then(products => products.length === 1 ? null : { serialNumber: true });
  };

  return serialNumberValidator;
};


@Component({
  selector: 'product-support-form',
  templateUrl: './product-support-form.component.html',
  styleUrls: ['./product-support-form.component.css']
})
export class ProductSupportFormComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private httpClient: HttpClient,
  ) {

    this.form = this.fb.group({
      serialNumberInput: [ '', {
        validators: [ Validators.required ],
        asyncValidators: [ serialNumberValidatorFactory(this.httpClient) ]
      }],
    });

  }

  ngOnInit() {
    console.dir(this.form);
  }

}
