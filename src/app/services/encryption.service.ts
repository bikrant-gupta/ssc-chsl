import { Injectable } from '@angular/core';
import { AES } from 'crypto-js'
import * as Utf8 from 'crypto-js/enc-utf8';

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {
  secret:string =""
  constructor() { }
  encrypt(value:string){
    return AES.encrypt(value,this.secret).toString()
  }
  decrypt(value:string){
    try{
      return AES.decrypt(value,this.secret).toString(Utf8);
    }
    catch(err){
      return null
    }
    
  }
}
