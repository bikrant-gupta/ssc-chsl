import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { EncryptionService } from './encryption.service';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  setEvent:Subject<void> = new Subject<void>();

  constructor(private secure:EncryptionService) { }
  set(key:string,value:string):void{
    var b = this.secure.encrypt(value);
    localStorage.setItem(key,b);
    this.setEvent.next()
  }
  get(key:string):string | null{
    var value = localStorage[key];
    if(!value) return null
    return this.secure.decrypt(value);
  }
  remove(key:string):void{
    localStorage.removeItem(key);
    this.setEvent.next()
  }
}