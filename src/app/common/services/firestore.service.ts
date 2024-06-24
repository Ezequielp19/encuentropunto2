import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  collectionData,
  collection,
  doc,
  docData,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  DocumentReference,
  DocumentData,
  WithFieldValue,
  UpdateData,
  getDocs,
  query,
  where
} from '@angular/fire/firestore';





import { Observable } from 'rxjs';

const { v4: uuidv4 } = require('uuid');


// import { UserI } from '../models/users.models';





@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  private firestore: Firestore = inject(Firestore);



  constructor() { }

  getFirestoreInstance(): Firestore {
    return this.firestore;
  }



  





}




