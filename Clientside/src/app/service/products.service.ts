import { Injectable } from '@angular/core';
import { provideHttpClient, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<any[]> {
    return of([
      { name: 'Apple Bonsai', image: 'assets/images/flower2.jpg' },
      { name: 'Mango Bonsai', image: 'assets/images/flower3.jpg' },
      { name: 'Grape Bonsai', image: 'assets/images/flower4.jpg' },
      { name: 'Orange Bonsai', image: 'assets/images/flower5.jpg' },
      { name: 'BitterGuard Plant', image: 'https://storage.googleapis.com/a1aa/image/feAyce9YOdKJaoXEG1FSyGuGTGYIlkRowvbfpGerGsQhchXeE.jpg' },
      { name: 'Pumpkin Plant', image: 'https://storage.googleapis.com/a1aa/image/M1QgD87rwfwGFKoyjZlz7OfputCSg2jbWqu2fOef1NO4bhXeE.jpg' },
      { name: 'Ladies Finger Plant', image: 'assets/images/flower1.jpg' },
      { name: 'Chilli Plant', image: './assets/images/flower6.jpg' },
     { name: 'Mango Plant', image: './assets/images/flower7.jpg' },
     { name: 'Banana Plant', image: './assets/images/flower8.jpg' },
     { name: 'Rubber Plant', image: './assets/images/flower9.jpg' },
     { name: 'Frotiners Plant', image: './assets/images/plant10.jpg' },
     { name: 'Spider Plant', image: './assets/images/plant11.jpg' },
     { name: 'Cammellia Plant', image: './assets/images/plant12.jpg' },
     { name: 'Hydra Plant', image: './assets/images/plant13.jpg' },
     { name: 'Water Plant', image: './assets/images/plant15.jpg' }
    ]);
  }
}


