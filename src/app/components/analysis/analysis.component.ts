import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExamService } from 'src/app/services/exam.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { QuestionBankService } from 'src/app/services/question-bank.service';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss']
})
export class AnalysisComponent implements OnInit {

  currentExam:any = {}
  examid:string='exam2'
  index:number = 0
  question:number = 0
  currentQuestion:any = null
  currentQuestionNumber:number = 0
  data:any={
    0:{
      attempt:0,
      correct:0,
      total:25,
    },
    1:{
      attempt:0,
      correct:0,
      total:25,
    },
    2:{
      attempt:0,
      correct:0,
      total:25,
    },
    3:{
      attempt:0,
      correct:0,
      total:25,
    }
  }

  constructor(
    private localService:LocalstorageService,
    private questionService:QuestionBankService,
    private examService:ExamService,
    private activeRouter:ActivatedRoute,
    private router:Router
    ) { 
      this.examid = this.activeRouter.snapshot.paramMap.get('id') || ""
      if(!this.examid){
        this.router.navigate(['info'])
        return;
      }
    var allExam:Array<any> = JSON.parse(this.localService.get('exams')||'[]')
    this.currentExam = allExam.filter(exam=>exam.examid==this.examid)
    if(!this.currentExam.length){
      this.router.navigate(['info'])
      return;
    }
    this.currentExam = this.currentExam[0]
    if(!this.currentExam.ended){
      for(let exam of allExam){
        console.log(exam)
        if(exam.examid==this.examid){
          if(!exam.ended){
            exam.ended=true
            console.log(allExam)
            this.localService.set('exams',JSON.stringify(allExam));
            break;
          }
        }
      }

    }
    this.currentExam.correct=[]
    for(var i=0;i<4;i++){
      this.currentExam.correct.push([])
      for(var j=0;j<25;j++){
        var correctAns:any = this.questionService.getQuestion(i,this.currentExam.questions[i][j])
        this.currentExam.correct[i].push(correctAns.correct)
        if(this.currentExam.answers[i][j]!=""){
          this.data[i].attempt++;
          if(correctAns.correct==this.currentExam.answers[i][j]){
            this.data[i].correct++;
          }
        }
      }
    }
  
    console.log(this.currentExam)
  }

  ngOnInit(): void {
    this.changeIndex(0)
    // this.examService.startExamEvent.next({time:this.currentExam.startTime})
  }
  changeIndex(index:number):void{
    this.index = index
    this.changeQuestion(0)
    
  }
  changeQuestion(qno:number){
    if(qno>=this.currentExam.questions[this.index].length)return;
    this.currentQuestionNumber = qno;
    this.question = this.currentExam.questions[this.index][qno]
    // console.log(this.currentExam)
    this.getQuestionDetail();
  }
  getQuestionDetail(){
    this.currentQuestion = this.questionService.getQuestion(this.index,this.question)
    // console.log(this.currentQuestion)
    // console.log(this.currentExam.questions[this.index])
  }
  counter(i: number) {
    return new Array(i);
}



}
