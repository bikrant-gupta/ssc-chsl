import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionBankService {

  constructor() { }
  generateQuestion(apti:number,comp:number,reason:number,general:number):Array<Array<number>>{
    var t1=new Set()
    var t2=new Set()
    var t3=new Set()
    var t4=new Set()
    var questions:Array<Array<number>> = [[],[],[],[]]
    var question = this.aptiQuesion();
    var l = question.length;
    console.log(l)
    for(let i=0;i<apti;i++){
      var r = Math.floor(Math.random()*l)
      questions[0].push(question[r].qid)
    }
    question = this.compQuesion();
    l = question.length;
    for(let i=0;i<comp;i++){
      var r = Math.floor(Math.random()*l)
      questions[1].push(question[r].qid)
    }
    question = this.reasonQuesion();
    l = question.length;
    for(let i=0;i<reason;i++){
      var r = Math.floor(Math.random()*l)
      questions[2].push(question[r].qid)
    }
    question = this.generalQuesion();
    l = question.length;
    for(let i=0;i<general;i++){
      var r = Math.floor(Math.random()*l)
      questions[3].push(question[r].qid)
    }
    
    return questions


  }

  getQuestion(index:number,qid:number):Object|void{
    
    if(index==0){return this.getAptiQuestion(qid)}
    if(index==1){return this.getCompQuestion(qid)}
    if(index==2){return this.getReasonQuestion(qid)}
    if(index==3){return this.getGeneralQuestion(qid)}
  }
  getAptiQuestion(qid:number):Object|void{
    var questions = this.aptiQuesion();
    for(let question of questions){
      // console.log(question.qid,qid)
      if(question.qid==qid)return question
    }
    
  }
  getCompQuestion(qid:number):Object|void{
    var questions = this.compQuesion();
    for(let question of questions){
      if(question.qid==qid)return question
    }
  }
  getReasonQuestion(qid:number):Object|void{
    var questions = this.reasonQuesion();
    for(let question of questions){
      if(question.qid==qid)return question
    }
  }
  getGeneralQuestion(qid:number):Object|void{
    var questions = this.generalQuesion();
    for(let question of questions){
      if(question.qid==qid)return question
    }
  }
  aptiQuesion(){
    var questions=[
      {
        qid:1,
        question:{
          text:"A and B borrowed ` 3000 and ` 3200 respectively at the same rate of interest for 2.5 years. If B paid ` 40 more interest than A, find the rate of interest:",
          image:0
        },
        option:[
          {
            text:'6%',
            image:0
          },
          {
            text:'5%',
            image:0
          },
          {
            text:'8%',
            image:0
          },
          {
            text:'4%',
            image:0
          },
        ],
        correct:'8%'
      },
      {
        qid:2,
        question:{
          text:" A can do a piece of work in 10 days, B in 15 days. They work together for 5 days; the rest of the work is finished by C in two more days. If they get Rs. 3000 as wages for the whole work, what are the daily wages of A, B and C respectively (in Rs)",
          image:0
        },
        option:[
          {
            text:'150, 200, 250',
            image:0
          },
          {
            text:'200, 300, 450',
            image:0
          },
          {
            text:'150, 100, 50',
            image:0
          },
          {
            text:'300, 200, 250',
            image:0
          },
        ],
        correct:'300, 200, 250'
      },
      {
        qid:3,
        question:{
          text:"How many triangles are there in the figure given below?",
          image:1
        },
        option:[
          {
            text:'8',
            image:0
          },
          {
            text:'9',
            image:0
          },
          {
            text:'11',
            image:0
          },
          {
            text:'10',
            image:0
          },
        ],
        correct:'10'
      },
      {
        qid:4,
        question:{
          text:"Select the combination of letters that when sequentially placed in the gaps of the given letter series will complete the series. K _ _ MKXZ _ KX _ MK _ ZM",
          image:0
        },
        option:[
          {
            text:'XZMZK',
            image:0
          },
          {
            text:'MZMZX',
            image:0
          },
          {
            text:'XXMKX',
            image:0
          },
          {
            text:'XZMZX',
            image:0
          },
        ],
        correct:'XZMZX'
      },
      {
        qid:5,
        question:{
          text:"Select the number that can replace the question mark (?) in the following series. 50, 49, 53, 44, 60, 35, ?",
          image:0
        },
        option:[
          {
            text:'71',
            image:0
          },
          {
            text:'117',
            image:0
          },
          {
            text:'70',
            image:0
          },
          {
            text:'104',
            image:0
          },
        ],
        correct:'71'
      },
      {
        qid:6,
        question:{
          text:"The three medians AX, BY and CZ of ABC intersect at point L. If the area of ABC is 30 sq.cm , then the area of the quadrilateral BXLZ is:",
          image:0
        },
        option:[
          {
            text:'10 sq.cm',
            image:0
          },
          {
            text:'12 sq.cm',
            image:0
          },
          {
            text:'16 sq.cm',
            image:0
          },
          {
            text:'14 sq.cm',
            image:0
          },
        ],
        correct:'10 sq.cm'
      },
      {
        qid:7,
        question:{
          text:"The given bar-graph represents the number of teachers in different weight groups. Study the graph and answer the question that follows.",
          image:1
        },
        option:[
          {
            text:'45 - 50',
            image:0
          },
          {
            text:'60 - 65',
            image:0
          },
          {
            text:'65 - 70',
            image:0
          },
          {
            text:'40 - 45',
            image:0
          },
        ],
        correct:'60 - 65'
      },
      {
        qid:8,
        question:{
          text:"The given bar graph shows the biscuit exports of India over a period of five years. Study the graph and answer the question that follow.",
          image:1
        },
        option:[
          {
            text:'2007',
            image:0
          },
          {
            text:'2006',
            image:0
          },
          {
            text:'2009',
            image:0
          },
          {
            text:'2008',
            image:0
          },
        ],
        correct:'2007'
      },
      {
        qid:9,
        question:{
          text:"If X = tan 40∘, then the value of 2 tan 50∘ will be:",
          image:0
        },
        option:[
          {
            text:'2/X',
            image:0
          },
          {
            text:'2X',
            image:0
          },
          {
            text:'1/X',
            image:0
          },
          {
            text:'1/(2X)',
            image:0
          },
        ],
        correct:'2/X'
      },
      {
        qid:10,
        question:{
          text:"If sinA=4/5, find the value of sin3A",
          image:0
        },
        option:[
          {
            text:'12/25',
            image:0
          },
          {
            text:'44/125',
            image:0
          },
          {
            text:'64/125',
            image:0
          },
          {
            text:'32/45',
            image:0
          },
        ],
        correct:'44/125'
      },
      {
        qid:11,
        question:{
          text:"The given chart shows the number of students in Class 4, Class 5, Class 6 and Class 7 who got first class, second class and failed in the final examinations. Which class has the highest number of students who passed?",
          image:1
        },
        option:[
          {
            text:'Class 4',
            image:0
          },
          {
            text:'Class 7',
            image:0
          },
          {
            text:'Class 6',
            image:0
          },
          {
            text:'Class 5',
            image:0
          },
        ],
        correct:'Class 4'
      },
      {
        qid:12,
        question:{
          text:"The difference between a number and one-third of that number is 228. What is 20% of that number?",
          image:0
        },
        option:[
          {
            text:'72.5',
            image:0
          },
          {
            text:'68.4',
            image:0
          },
          {
            text:'58.9',
            image:0
          },
          {
            text:'58.9',
            image:0
          },
        ],
        correct:'68.4'
      },
      {
        qid:13,
        question:{
          text:"Find x, if 2 (Sin x)^2 -1 = 0.",
          image:0
        },
        option:[
          {
            text:'pi/4',
            image:0
          },
          {
            text:'pi/2',
            image:0
          },
          {
            text:'0',
            image:0
          },
          {
            text:'pi',
            image:0
          },
        ],
        correct:'pi/4'
      },
      {
        qid:14,
        question:{
          text:"What is the area of a triangle whose sides measure 5 cm, 6 cm and 7 cm?",
          image:0
        },
        option:[
          {
            text:'16.4545 sq.cm',
            image:0
          },
          {
            text:'14.6969 sq.cm',
            image:0
          },
          {
            text:'10.9797 sq.cm',
            image:0
          },
          {
            text:' 12.8484 sq.cm',
            image:0
          },
        ],
        correct:'14.6969 sq.cm'
      },
      {
        qid:15,
        question:{
          text:"Find one-fifth of three-eighth of one-third of 11760.",
          image:0
        },
        option:[
          {
            text:'294',
            image:0
          },
          {
            text:'645',
            image:0
          },
          {
            text:'467',
            image:0
          },
          {
            text:'598',
            image:0
          },
        ],
        correct:'294'
      },
      {
        qid:16,
        question:{
          text:"If cotA=80/39 find the value of cosecA",
          image:0
        },
        option:[
          {
            text:'89/39',
            image:0
          },
          {
            text:'39/89',
            image:0
          },
          {
            text:'89/80',
            image:0
          },
          {
            text:'39/80',
            image:0
          },
        ],
        correct:'89/39'
      },
      {
        qid:17,
        question:{
          text:"Smith and Ajit can complete a task in 12 days and 18 days, respectively. If they work together on the task for 4 days, then the fraction of the task that will be left is:",
          image:0
        },
        option:[
          {
            text:'4/9',
            image:0
          },
          {
            text:'1/9',
            image:0
          },
          {
            text:'2/9',
            image:0
          },
          {
            text:'5/9',
            image:0
          },
        ],
        correct:'4/9'
      },
      {
        qid:18,
        question:{
          text:"If the height of an equilateral triangle is 12 cm, then what is the area of the triangle?",
          image:0
        },
        option:[
          {
            text:'89.567 sq.cm',
            image:0
          },
          {
            text:'83.1384 sq.cm',
            image:0
          },
          {
            text:'67.9843 sq.cm',
            image:0
          },
          {
            text:'96.897 sq.cm',
            image:0
          },
        ],
        correct:'83.1384 sq.cm'
      },
      {
        qid:19,
        question:{
          text:"A product, whose MRP is 978, is sold for 925 by a wholesale shop owner. What is the percentage of discount given by him?",
          image:0
        },
        option:[
          {
            text:'9.2%',
            image:0
          },
          {
            text:'6.5%',
            image:0
          },
          {
            text:'5.4%',
            image:0
          },
          {
            text:'7.8%',
            image:0
          },
        ],
        correct:'5.4%'
      },
      {
        qid:20,
        question:{
          text:"Which of the following numbers is divisible by 9?",
          image:0
        },
        option:[
          {
            text:'734895',
            image:0
          },
          {
            text:'594327',
            image:0
          },
          {
            text:'346217',
            image:0
          },
          {
            text:'897342',
            image:0
          },
        ],
        correct:'734895'
      },
      {
        qid:21,
        question:{
          text:"The given chart shows the number of students in Class 4, Class 5, Class 6 and Class 7 who got first class, second class and failed in the final examinations. What is the pass percentage of Class 6?",
          image:1
        },
        option:[
          {
            text:'86.66%',
            image:0
          },
          {
            text:'90.12%',
            image:0
          },
          {
            text:'87.83%',
            image:0
          },
          {
            text:'89.96%',
            image:0
          },
        ],
        correct:'86.66%'
      },
      {
        qid:22,
        question:{
          text:"Two cars start from the same place at the same time at right angles to each other. Their speeds are 54 km/hr and 72 km/hr, respectively. After 20 seconds the distance between them will be",
          image:0
        },
        option:[
          {
            text:'720 m',
            image:0
          },
          {
            text:'480 m',
            image:0
          },
          {
            text:'500 m',
            image:0
          },
          {
            text:'540 m',
            image:0
          },
        ],
        correct:'500 m'
      },
      {
        qid:23,
        question:{
          text:"If the difference between two numbers is 6 and the difference between their squares is 60, what is the sum of their cubes ?",
          image:0
        },
        option:[
          {
            text:'894',
            image:0
          },
          {
            text:'945',
            image:0
          },
          {
            text:'678',
            image:0
          },
          {
            text:'520',
            image:0
          },
        ],
        correct:'520'
      },
      {
        qid:24,
        question:{
          text:"What is the equation of a circle with centre of origin and radius is 6 cm?",
          image:0
        },
        option:[
          {
            text:'x^2 + y^2 -y = 36',
            image:0
          },
          {
            text:'x^2 + y^2 -x -y = 36',
            image:0
          },
          {
            text:'x^2 + y^2 -36 = 0',
            image:0
          },
          {
            text:'x^2 + y^2 -x = 36',
            image:0
          },
        ],
        correct:'x^2 + y^2 -36 = 0'
      },
      {
        qid:25,
        question:{
          text:"The ratio of tables and chairs in a room is 7 : 9. If there are 560 tables and chairs in the room, then what is the number of chairs ?",
          image:0
        },
        option:[
          {
            text:'397',
            image:0
          },
          {
            text:'489',
            image:0
          },
          {
            text:'315',
            image:0
          },
          {
            text:'463',
            image:0
          },
        ],
        correct:'315'
      },
      {
        qid:26,
        question:{
          text:"A chord of length 24 cm is at a distance of 5 cm from the centre of a circle. What is its area?",
          image:0
        },
        option:[
          {
            text:'120 sq.cm',
            image:0
          },
          {
            text:'480.67 sq.cm',
            image:0
          },
          {
            text:'531.14 sq.cm',
            image:0
          },
          {
            text:'389.28 sq.cm',
            image:0
          },
        ],
        correct:'531.14 sq.cm'
      },
      {
        qid:27,
        question:{
          text:"The length and breadth of a rectangle are in the ratio 3 : 2. If its perimeter is 730 cm, what is the area of the rectangle?",
          image:0
        },
        option:[
          {
            text:'31,974 sq.cm',
            image:0
          },
          {
            text:'20,567 sq.cm',
            image:0
          },
          {
            text:'28,976 sq.cm',
            image:0
          },
          {
            text:'24,452 sq.cm',
            image:0
          },
        ],
        correct:'31,974 sq.cm'
      },
      {
        qid:28,
        question:{
          text:"The sum of two numbers is 59 and their product is 840. Find the sum of their squares",
          image:0
        },
        option:[
          {
            text:'2961',
            image:0
          },
          {
            text:'1801',
            image:0
          },
          {
            text:'1875',
            image:0
          },
          {
            text:'1754',
            image:0
          },
        ],
        correct:'1801'
      },
      {
        qid:29,
        question:{
          text:"Ram deposited an amount of ₹ 8,000 in a bank’s savings account with interest 6.5% compounded monthly. What amount will he get at the end of 18 months?",
          image:0
        },
        option:[
          {
            text:'₹8816.97',
            image:0
          },
          {
            text:'₹8788.98',
            image:0
          },
          {
            text:'₹8907.56',
            image:0
          },
          {
            text:'₹8790.54',
            image:0
          },
        ],
        correct:'₹8816.97'
      },
      {
        qid:30,
        question:{
          text:"The average age of 16 students in a college is 20. Out of them, the average age of 5 students is 20 and the average age of the other 10 students is 20.4. Find the age of the 16th college student.",
          image:0
        },
        option:[
          {
            text:'24',
            image:0
          },
          {
            text:'16',
            image:0
          },
          {
            text:'20',
            image:0
          },
          {
            text:'22',
            image:0
          },
        ],
        correct:'16'
      },
      {
        qid:31,
        question:{
          text:"By selling an article for Rs.600, a shopkeeper makes a profit of 20%. At what price should he sell the article to incur a loss of 20% ?",
          image:0
        },
        option:[
          {
            text:'₹500',
            image:0
          },
          {
            text:'₹400',
            image:0
          },
          {
            text:'₹300',
            image:0
          },
          {
            text:'₹600',
            image:0
          },
        ],
        correct:'₹400'
      },

    ]
    return questions
  }
  compQuesion(){
    var questions=[
      {
        qid:1,
        question:{
          text:"How are you",
          image:0
        },
        option:[
          {
            text:'Good',
            image:0
          },
          {
            text:'Well',
            image:0
          },
          {
            text:'Exec',
            image:0
          },
          {
            text:'Ppp',
            image:0
          },
        ],
        correct:'Good'
      },
      {
        qid:2,
        question:{
          text:"How are you",
          image:0
        },
        option:[
          {
            text:'Good',
            image:0
          },
          {
            text:'Well',
            image:0
          },
          {
            text:'Exec',
            image:0
          },
          {
            text:'Ppp',
            image:0
          },
        ],
        correct:'Exec'
      },
      {
        qid:3,
        question:{
          text:"How are you",
          image:0
        },
        option:[
          {
            text:'Good',
            image:0
          },
          {
            text:'Well',
            image:0
          },
          {
            text:'Exec',
            image:0
          },
          {
            text:'Ppp',
            image:0
          },
        ],
        correct:'Well'
      }
    ]
    return questions
  }
  reasonQuesion(){
    var questions=[
      {
        qid:1,
        question:{
          text:"How are you",
          image:0
        },
        option:[
          {
            text:'Good',
            image:0
          },
          {
            text:'Well',
            image:0
          },
          {
            text:'Exec',
            image:0
          },
          {
            text:'Ppp',
            image:0
          },
        ],
        correct:'Good'
      },
      {
        qid:2,
        question:{
          text:"How are you",
          image:0
        },
        option:[
          {
            text:'Good',
            image:0
          },
          {
            text:'Well',
            image:0
          },
          {
            text:'Exec',
            image:0
          },
          {
            text:'Ppp',
            image:0
          },
        ],
        correct:'Exec'
      },
      {
        qid:3,
        question:{
          text:"How are you",
          image:0
        },
        option:[
          {
            text:'Good',
            image:0
          },
          {
            text:'Well',
            image:0
          },
          {
            text:'Exec',
            image:0
          },
          {
            text:'Ppp',
            image:0
          },
        ],
        correct:'Well'
      }
    ]
    return questions
  }
  generalQuesion(){
    var questions=[
      {
        qid:1,
        question:{
          text:"How are you",
          image:0
        },
        option:[
          {
            text:'Good',
            image:0
          },
          {
            text:'Well',
            image:0
          },
          {
            text:'Exec',
            image:0
          },
          {
            text:'Ppp',
            image:0
          },
        ],
        correct:'Good'
      },
      {
        qid:2,
        question:{
          text:"How are you",
          image:0
        },
        option:[
          {
            text:'Good',
            image:0
          },
          {
            text:'Well',
            image:0
          },
          {
            text:'Exec',
            image:0
          },
          {
            text:'Ppp',
            image:0
          },
        ],
        correct:'Exec'
      },
      {
        qid:3,
        question:{
          text:"How are you",
          image:0
        },
        option:[
          {
            text:'Good',
            image:0
          },
          {
            text:'Well',
            image:0
          },
          {
            text:'Exec',
            image:0
          },
          {
            text:'Ppp',
            image:0
          },
        ],
        correct:'Well'
      }
    ]
    return questions
  }
}
