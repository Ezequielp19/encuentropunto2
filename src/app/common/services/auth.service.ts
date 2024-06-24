import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../models/users.models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth,private firestore: AngularFirestore) { }

  async login(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return await this.afAuth.signInWithEmailAndPassword(email, password);
  }


  async logout(): Promise<void> {
    return await this.afAuth.signOut();
  }

  async resetPassword(email: string): Promise<void> {
    return await this.afAuth.sendPasswordResetEmail(email);
  }

   async loginWithGoogle(): Promise<firebase.auth.UserCredential> {
    const provider = new firebase.auth.GoogleAuthProvider();
    return await this.afAuth.signInWithPopup(provider);

  }

  async loginWithFacebook(): Promise<firebase.auth.UserCredential> {
    const provider = new firebase.auth.FacebookAuthProvider();
    return await this.afAuth.signInWithPopup(provider);
  }

  async register(email: string, password: string, nombre: string, tipo_usuario: string): Promise<void> {
    const userCredential = await this.afAuth.createUserWithEmailAndPassword(email, password);
    const uid = userCredential.user?.uid;
    if (uid) {
      await this.firestore.collection('usuarios').doc(uid).set({
        id: uid,
        nombre: nombre,
        correo: email,
        tipo_usuario: tipo_usuario,
        fecha_registro: firebase.firestore.FieldValue.serverTimestamp()
      });
    }
  }



  getCurrentUser() {
    return this.afAuth.authState;
  }
}
