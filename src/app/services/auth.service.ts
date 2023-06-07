import { Injectable } from '@angular/core';
import { AES, enc } from 'crypto-js';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

 public SetEncryptEmail(data:any, key:any) {
   const encrypted = AES.encrypt(data, key).toString();
   localStorage.setItem('email', encrypted);
 }

  public getDecryptEmail(key:any) {
    const emailEncrypted = localStorage.getItem('email');
     // @ts-ignore
    return AES.decrypt(emailEncrypted, key).toString(enc.Utf8);

  }


}
