import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExamService } from 'src/app/services/exam.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { QuestionBankService } from 'src/app/services/question-bank.service';

@Component({
  selector: 'app-exam-page',
  templateUrl: './exam-page.component.html',
  styleUrls: ['./exam-page.component.scss']
})
export class ExamPageComponent implements OnInit {
  currentExam:any = {}
  examid:string=''
  index:number = 0
  question:number = 0
  currentQuestion:any = null
  currentQuestionNumber:number = 0

  constructor(private localService:LocalstorageService,
    private questionService:QuestionBankService,
    private examService:ExamService,
    private activeRouter:ActivatedRoute,
    private router:Router
    ) { 
      this.examid = this.activeRouter.snapshot.paramMap.get('id') || ""
      console.log(this.examid.length)
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
    console.log(this.currentExam)
    if(this.currentExam.ended==true){
      var examid:any = this.router.url
      examid = examid.split('/')[2]
      // console.log(examid)
      this.router.navigateByUrl('/analysis/'+examid)
    }
    // console.log(this.currentExam)
  }

  ngOnInit(): void {
    this.changeIndex(0)
    this.examService.startExamEvent.next({time:this.currentExam.startTime})
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

  setAnswer(ans:string){
    this.currentExam.answers[this.index][this.currentQuestionNumber]=ans;
    var allExam = JSON.parse(this.localService.get('exams')||'[]')
    allExam[allExam.length-1] = this.currentExam
    this.localService.set('exams',JSON.stringify(allExam))
    // console.log(this.currentExam)
  }
  counter(i: number) {
    return new Array(i);
}



}
