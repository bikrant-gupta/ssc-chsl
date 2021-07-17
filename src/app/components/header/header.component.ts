import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExamService } from 'src/app/services/exam.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  date1:Date=new Date()
  time:string=""
  showEndButton:boolean = false
  stopped:boolean = false

  constructor(private examService:ExamService,
    private activeRouter:ActivatedRoute,
    private router:Router) {
    
   }

  ngOnInit(): void {
    this.examService.startExamEvent.subscribe((res:boolean | any)=>{
      if(res){
        this.date1 = new Date(res.time);
        this.startExam();
      }
    })
    
  }
  startExam(){
    this.date1.setHours(this.date1.getHours()+1)
    this.timeDifference()
    this.showEndButton = true;
  }

  timeDifference(){
    var date2 = new Date();
    var dif = this.date1.getTime() - date2.getTime() ;
    if(this.stopped)return;
    if(dif<0){
     this.stopExam();
      return;
    }
    this.time = this.msConversion(dif)
    console.log()
    setTimeout(() => {
      this.timeDifference();
    }, 1000);
  }
  msConversion(millis:number) {
    let sec:any = Math.floor(millis / 1000);
    let hrs:any = Math.floor(sec / 3600);
    sec -= hrs * 3600;
    let min:any = Math.floor(sec / 60);
    sec -= min * 60;
  
    sec = '' + sec;
    sec = ('00' + sec).substring(sec.length);
  
    if (hrs > 0) {
      min = '' + min;
      min = ('00' + min).substring(min.length);
      return hrs + ":" + min + ":" + sec;
    }
    else {
      return min + ":" + sec;
    }
  }
  stopExam(){
    console.log('ended')
    var examid:any = this.router.url
    examid = examid.split('/')[2]
    this.stopped = true;
    this.router.navigateByUrl('/analysis/'+examid)
    // this.examService.stopExamEvent.next(true)
    this.showEndButton = false

  }
  
}

