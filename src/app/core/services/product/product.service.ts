import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from '../../../shared/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private afs: AngularFirestore) { }

  getBestSellers() {
    return this.afs.collection<Product>('best-sellers').valueChanges();
  }
}
