import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExamService } from 'src/app/services/exam.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { QuestionBankService } from 'src/app/services/question-bank.service';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.scss']
})
export class InfoPageComponent implements OnInit {

  current:Array<any> = []
  old:Array<any> = []
  date1:Date = new Date();

  constructor(
    private examService:ExamService,
    private questionService:QuestionBankService,
    private localService:LocalstorageService,
    private router:Router
    ) { }

  ngOnInit(): void {
    var allExam = JSON.parse(this.localService.get('exams')||'[]')
    console.log(allExam)
    for(let exam of allExam){
      var date2 = new Date(exam.startTime);
      date2.setHours(date2.getHours()+1);
      var dif = this.date1.getTime() - date2.getTime();
      if(dif<0 && !exam.ended){
        this.current.push(exam)
      }
      else{
        this.old.push(exam)
      }
    }
  }
  startExam(){
    var noq = 25;
    var questions = this.questionService.generateQuestion(noq,noq,noq,noq)
    var answers:Array<Array<string>> = [[],[],[],[]]
    for(let i=0;i<noq;i++){
      answers[0].push('')
      answers[1].push('')
      answers[2].push('')
      answers[3].push('')
    }
    var examDetail={
      startTime:new Date(),
      examid:'exam1',
      questions,
      answers,
      ended:false
    }
    var allExam = JSON.parse(this.localService.get('exams')||'[]')
    var l = allExam.length+1
    examDetail.examid = `exam${l}`
    console.log(examDetail)
    allExam.push(examDetail)
    this.localService.set('exams',JSON.stringify(allExam))
    this.router.navigateByUrl('/exam/'+`exam${l}`)
    // this.examService.startExamEvent.next(true)
  }


}
