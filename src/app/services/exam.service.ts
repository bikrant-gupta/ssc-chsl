import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  startExamEvent:Subject<Object> = new Subject<Object>();
  stopExamEvent:Subject<boolean> = new Subject<boolean>();


  constructor() { }
}
 