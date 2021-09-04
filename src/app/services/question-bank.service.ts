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
  //no-touch
  aptiQuesion(){
    var questions=[
      {
        qid:1,
        question:{
          text:"A and B borrowed Rs.3000 and Rs.3200 respectively at the same rate of interest for 2.5 years. If B paid Rs.40 more interest than A, find the rate of interest:",
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
  //English Language 1-25
  compQuesion(){
    var questions=[
      {
        qid:1,
        question:{
          text:"Select the word which means the same as the group of words given. A place where wild animals live",
          image:0
        },
        option:[
          {
            text:'Cage',
            image:0
          },
          {
            text:'Kennel',
            image:0
          },
          {
            text:'Hutch',
            image:0
          },
          {
            text:'Lair',
            image:0
          },
        ],
        correct:'Lair'
      },
      {
        qid:2,
        question:{
          text:"Select the word which means the same as the group of words given. A solution or remedy for all difficulties or diseases",
          image:0
        },
        option:[
          {
            text:'Medicine',
            image:0
          },
          {
            text:'Treatment',
            image:0
          },
          {
            text:'Therapy',
            image:0
          },
          {
            text:'Panacea',
            image:0
          },
        ],
        correct:'Panacea'
      },
      {
        qid:3,
        question:{
          text:"Select the alternative that will improve the underlined part of the sentence. In case there is no improvement select ‘No improvement’. There was no sign of recognition on his face when they met after ten years.",
          image:0
        },
        option:[
          {
            text:'no sign to recognise',
            image:0
          },
          {
            text:'no any sign of recognition',
            image:0
          },
          {
            text:'No improvement',
            image:0
          },
          {
            text:'no sign for recognition',
            image:0
          },
        ],
        correct:'No improvement'
      },
      {
        qid:4,
        question:{
          text:"Select the segment in the sentence, which contains the grammatical error. We were busy at the work and went for lunch only at 2.30 pm.",
          image:0
        },
        option:[
          {
            text:'only at 2.30 pm',
            image:0
          },
          {
            text:'at the work',
            image:0
          },
          {
            text:'and went for lunch',
            image:0
          },
          {
            text:'We were busy',
            image:0
          },
        ],
        correct:'at the work'
      },
      {
        qid:5,
        question:{
          text:`
          Instructions
In the following passage some words have been deleted. Fill in the blanks with the help of the alternatives given. Select the most
appropriate option for each blank.
Valley of Flowers National Park, an Indian national park located in North Chamoli in the state of Uttarakhand, is known for its meadows
of endemic alpine flowers and variety of flora. (1)______ richly diverse area is also home (2)______ rare and endangered animals,
including the Asiatic black bear, snow leopard, musk deer, brown bear, red fox, and blue sheep. Birds (3)______ in the park include the
Himalayan monal pheasant and other (4)______ altitude birds. At 3352 to 3658 meters above sea level, the gentle (5)______ of the Valley
of Flowers National Park complements the rugged mountain wilderness of Nanda Devi National Park to the east.

Select the most appropriate option to fill in blank No.1.`,
          image:0
        },
        option:[
          {
            text:'That',
            image:0
          },
          {
            text:'These',
            image:0
          },
          {
            text:'This',
            image:0
          },
          {
            text:'Which',
            image:0
          },
        ],
        correct:'This'
      },
      {
        qid:6,
        question:{
          text:`
          Instructions
In the following passage some words have been deleted. Fill in the blanks with the help of the alternatives given. Select the most
appropriate option for each blank.
Valley of Flowers National Park, an Indian national park located in North Chamoli in the state of Uttarakhand, is known for its meadows
of endemic alpine flowers and variety of flora. (1)______ richly diverse area is also home (2)______ rare and endangered animals,
including the Asiatic black bear, snow leopard, musk deer, brown bear, red fox, and blue sheep. Birds (3)______ in the park include the
Himalayan monal pheasant and other (4)______ altitude birds. At 3352 to 3658 meters above sea level, the gentle (5)______ of the Valley
of Flowers National Park complements the rugged mountain wilderness of Nanda Devi National Park to the east.

Select the most appropriate option to fill in blank No.2.`,
          image:0
        },
        option:[
          {
            text:'of',
            image:0
          },
          {
            text:'to',
            image:0
          },
          {
            text:'with',
            image:0
          },
          {
            text:'in',
            image:0
          },
        ],
        correct:'to'
      },
      {
        qid:7,
        question:{
          text:`
          Instructions
          In the following passage some words have been deleted. Fill in the blanks with the help of the alternatives given. Select the most
          appropriate option for each blank.
          Valley of Flowers National Park, an Indian national park located in North Chamoli in the state of Uttarakhand, is known for its meadows
          of endemic alpine flowers and variety of flora. (1)______ richly diverse area is also home (2)______ rare and endangered animals,
          including the Asiatic black bear, snow leopard, musk deer, brown bear, red fox, and blue sheep. Birds (3)______ in the park include the
          Himalayan monal pheasant and other (4)______ altitude birds. At 3352 to 3658 meters above sea level, the gentle (5)______ of the Valley
          of Flowers National Park complements the rugged mountain wilderness of Nanda Devi National Park to the east.
          
          Select the most appropriate option to fill in blank No.2.`,
          image:0
        },
        option:[
          {
            text:'finding',
            image:0
          },
          {
            text:'are found',
            image:0
          },
          {
            text:'found',
            image:0
          },
          {
            text:'find',
            image:0
          },
        ],
        correct:'found'
      },
      {
        qid:8,
        question:{
          text:`
          Instructions
          In the following passage some words have been deleted. Fill in the blanks with the help of the alternatives given. Select the most
          appropriate option for each blank.
          Valley of Flowers National Park, an Indian national park located in North Chamoli in the state of Uttarakhand, is known for its meadows
          of endemic alpine flowers and variety of flora. (1)______ richly diverse area is also home (2)______ rare and endangered animals,
          including the Asiatic black bear, snow leopard, musk deer, brown bear, red fox, and blue sheep. Birds (3)______ in the park include the
          Himalayan monal pheasant and other (4)______ altitude birds. At 3352 to 3658 meters above sea level, the gentle (5)______ of the Valley
          of Flowers National Park complements the rugged mountain wilderness of Nanda Devi National Park to the east.
          
          Select the most appropriate option to fill in blank No.3.`,
          image:0
        },
        option:[
          {
            text:'high',
            image:0
          },
          {
            text:'flight',
            image:0
          },
          {
            text:'far',
            image:0
          },
          {
            text:'soaring',
            image:0
          },
        ],
        correct:'high'
      },
      {
        qid:9,
        question:{
          text:`
          Instructions
          In the following passage some words have been deleted. Fill in the blanks with the help of the alternatives given. Select the most
          appropriate option for each blank.
          Valley of Flowers National Park, an Indian national park located in North Chamoli in the state of Uttarakhand, is known for its meadows
          of endemic alpine flowers and variety of flora. (1)______ richly diverse area is also home (2)______ rare and endangered animals,
          including the Asiatic black bear, snow leopard, musk deer, brown bear, red fox, and blue sheep. Birds (3)______ in the park include the
          Himalayan monal pheasant and other (4)______ altitude birds. At 3352 to 3658 meters above sea level, the gentle (5)______ of the Valley
          of Flowers National Park complements the rugged mountain wilderness of Nanda Devi National Park to the east.
          
          Select the most appropriate option to fill in blank No.4.`,
          image:0
        },
        option:[
          {
            text:'shore',
            image:0
          },
          {
            text:'scene',
            image:0
          },
          {
            text:'movement',
            image:0
          },
          {
            text:'landscape',
            image:0
          },
        ],
        correct:'landscape'
      },
      {
        qid:10,
        question:{
          text:"Select the most appropriate meaning of the idiom. Back in saddle",
          image:0
        },
        option:[
          {
            text:'Resume duty',
            image:0
          },
          {
            text:'Put a new saddle',
            image:0
          },
          {
            text:'Teach someone riding',
            image:0
          },
          {
            text:'Learn how to ride',
            image:0
          },
        ],
        correct:'Resume duty'
      },
      {
        qid:11,
        question:{
          text:`Given below are four jumbled sentences. Select the option that gives their correct order.
          A. Just before the sacrifice, however, he noticed that one of the king’s fingers was missing.
          B. Once when travelling across a forest, the king was captured by a powerful tribe.
          C. Since it was not acceptable to sacrifice an incomplete person to God, the king was released.
          D. The tribal priest decided to sacrifice the king to their God.`,
          image:0
        },
        option:[
          {
            text:'BDAC',
            image:0
          },
          {
            text:'CDBA',
            image:0
          },
          {
            text:'ADBC',
            image:0
          },
          {
            text:'DACB',
            image:0
          },
        ],
        correct:'BDAC'
      },
      {
        qid:12,
        question:{
          text:`Select the most appropriate option to fill in the blank.
          By accelerating digitisation and leveraging next generation technologies, the life insurance sector can double its ______ to Rupees 70
          lakh crores, a study said.`,
          image:0
        },
        option:[
          {
            text:'funding',
            image:0
          },
          {
            text:'reports',
            image:0
          },
          {
            text:'policies',
            image:0
          },
          {
            text:'assets',
            image:0
          },
        ],
        correct:'assets'
      },
      {
        qid:13,
        question:{
          text:"Select the most appropriate ANTONYM of the given word. PRIM",
          image:0
        },
        option:[
          {
            text:'Principle',
            image:0
          },
          {
            text:'Intellectual',
            image:0
          },
          {
            text:'Dishevelled',
            image:0
          },
          {
            text:'Mature',
            image:0
          },
        ],
        correct:'Dishevelled'
      },
      {
        qid:14,
        question:{
          text:"Select the most appropriate ANTONYM of the given word. EXHALE",
          image:0
        },
        option:[
          {
            text:'Expel',
            image:0
          },
          {
            text:'Inspire',
            image:0
          },
          {
            text:'Inhale',
            image:0
          },
          {
            text:'Respite',
            image:0
          },
        ],
        correct:'Inhale'
      },
      {
        qid:15,
        question:{
          text:`Given below are four jumbled sentences. Select the option that gives their correct order.
          A. Problems in absorption of vitamins is the main cause of vitamin deficiency.
          B. This is the reason why people with metabolic disorders such as obesity, often suffer from vitamin deficiency
          C. Hence, digestion and the absorption mechanism in the body is very important.
          D. Vitamin deficiency is not just caused by lack of vitamins in the diet.`,
          image:0
        },
        option:[
          {
            text:'BCAD',
            image:0
          },
          {
            text:'CBDA',
            image:0
          },
          {
            text:'DABC',
            image:0
          },
          {
            text:'ACBD',
            image:0
          },
        ],
        correct:'DABC'
      },
      {
        qid:16,
        question:{
          text:"Select the word with the incorrect spelling",
          image:0
        },
        option:[
          {
            text:'Denounce',
            image:0
          },
          {
            text:'Ascertain',
            image:0
          },
          {
            text:'Systemetic',
            image:0
          },
          {
            text:'Combination',
            image:0
          },
        ],
        correct:'Systemetic'
      },
      {
        qid:17,
        question:{
          text:`Select the most appropriate synonym of the given word.
          RESILIENT`,
          image:0
        },
        option:[
          {
            text:'Supple',
            image:0
          },
          {
            text:'Furious',
            image:0
          },
          {
            text:'Lazy',
            image:0
          },
          {
            text:'Baseless',
            image:0
          },
        ],
        correct:'Supple'
      },
      {
        qid:18,
        question:{
          text:"Select the alternative that will improve the underlined part of the sentence. In case there is no improvement select ‘No improvement’.Carrots and sweet potatoes were airdrop for animals starving during the tragic bushfires in Australia.",
          image:0
        },
        option:[
          {
            text:' are airdropped for animals starved',
            image:0
          },
          {
            text:'were airdropped for animals starving',
            image:0
          },
          {
            text:'No improvement',
            image:0
          },
          {
            text:'will be airdropping for animals starving',
            image:0
          },
        ],
        correct:'were airdropped for animals starving'
      },
      {
        qid:19,
        question:{
          text:"Select the most appropriate meaning of the underlined idiom in the given sentence. When they read about the proposed strike of buses they said, “We’ll cross that bridge when we come to it.”",
          image:0
        },
        option:[
          {
            text:'Call them for talks ',
            image:0
          },
          {
            text:'Cancel our plans',
            image:0
          },
          {
            text:'Prevent them',
            image:0
          },
          {
            text:'Solve the problem',
            image:0
          },
        ],
        correct:'Solve the problem'
      },
      {
        qid:20,
        question:{
          text:"Select the segment in the sentence, which contains the grammatical error. No matter what that the mother did the baby didn’t stop crying.",
          image:0
        },
        option:[
          {
            text:'the mother did',
            image:0
          },
          {
            text:' what that',
            image:0
          },
          {
            text:'No matter',
            image:0
          },
          {
            text:'the baby didn’t stop crying',
            image:0
          },
        ],
        correct:'what that'
      },
      {
        qid:21,
        question:{
          text:"Select the option that is the direct form of the sentence. Experts said that several steps were being taken to promote foreign trade as it constituted 45% of the country’s economy.",
          image:0
        },
        option:[
          {
            text:'Experts are saying, “Several steps were taken to promote foreign trade as it constituted 45% of the country’s economy”.',
            image:0
          },
          {
            text:'Experts said, “Several steps should be taken to promote foreign trade as they constitute 45% of the country’s economy”.',
            image:0
          },
          {
            text:'Experts said, “Several steps are being taken to promote foreign trade as it constitutes 45% of the country’s economy”.',
            image:0
          },
          {
            text:'Experts said, “Several steps had been taken for promoting foreign trade as it constitute 45% of the country’s economy”.',
            image:0
          },
        ],
        correct:'Experts said, “Several steps are being taken to promote foreign trade as it constitutes 45% of the country’s economy”.'
      },
      {
        qid:22,
        question:{
          text:"Select the most appropriate synonym of the given word. OCCUR",
          image:0
        },
        option:[
          {
            text:'Hasten',
            image:0
          },
          {
            text:'Happen',
            image:0
          },
          {
            text:'Hinder',
            image:0
          },
          {
            text:'Hamper',
            image:0
          },
        ],
        correct:'Happen'
      },
      {
        qid:23,
        question:{
          text:"Select the option that is the passive form of the sentence. Jiya wrote the research paper with the help of her tutor.",
          image:0
        },
        option:[
          {
            text:'The research paper was wrote by Jiya with the help of the tutor.',
            image:0
          },
          {
            text:'The research paper is being written by Jiya with the help of her tutor.',
            image:0
          },
          {
            text:'The research paper can be written by the tutor with the help of Jiya.',
            image:0
          },
          {
            text:'The research paper was written by Jiya with the help of her tutor.',
            image:0
          },
        ],
        correct:'The research paper was written by Jiya with the help of her tutor.'
      },
      {
        qid:24,
        question:{
          text:`Select the most appropriate option to fill in the blank.
          Madhuri is bringing ______ her sister’s daughter after the death of the child’s parents.`,
          image:0
        },
        option:[
          {
            text:'in',
            image:0
          },
          {
            text:'out',
            image:0
          },
          {
            text:'up',
            image:0
          },
          {
            text:'over',
            image:0
          },
        ],
        correct:'up'
      },
      {
        qid:25,
        question:{
          text:"Select the word with the correct spelling.",
          image:0
        },
        option:[
          {
            text:'Avalaunche',
            image:0
          },
          {
            text:'Capricious',
            image:0
          },
          {
            text:'Ecstacy',
            image:0
          },
          {
            text:'Complasent',
            image:0
          },
        ],
        correct:'Capricious'
      },
      {
        qid:1,
        question:{
          text:"aaaaaaaa",
          image:0
        },
        option:[
          {
            text:'aaaaaaaa',
            image:0
          },
          {
            text:'aaaaaaaa',
            image:0
          },
          {
            text:'aaaaaaaa',
            image:0
          },
          {
            text:'aaaaaaaa',
            image:0
          },
        ],
        correct:'aaaaaaaa'
      },
      {
        qid:1,
        question:{
          text:"aaaaaaaa",
          image:0
        },
        option:[
          {
            text:'aaaaaaaa',
            image:0
          },
          {
            text:'aaaaaaaa',
            image:0
          },
          {
            text:'aaaaaaaa',
            image:0
          },
          {
            text:'aaaaaaaa',
            image:0
          },
        ],
        correct:'aaaaaaaa'
      },
      {
        qid:1,
        question:{
          text:"aaaaaaaa",
          image:0
        },
        option:[
          {
            text:'aaaaaaaa',
            image:0
          },
          {
            text:'aaaaaaaa',
            image:0
          },
          {
            text:'aaaaaaaa',
            image:0
          },
          {
            text:'aaaaaaaa',
            image:0
          },
        ],
        correct:'aaaaaaaa'
      },
      {
        qid:1,
        question:{
          text:"aaaaaaaa",
          image:0
        },
        option:[
          {
            text:'aaaaaaaa',
            image:0
          },
          {
            text:'aaaaaaaa',
            image:0
          },
          {
            text:'aaaaaaaa',
            image:0
          },
          {
            text:'aaaaaaaa',
            image:0
          },
        ],
        correct:'aaaaaaaa'
      },
      
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

  // General Awareness 76-100
  generalQuesion(){ 
    var questions=[
      {
        qid:76,
        question:{
          text:"In which of the following states is the Nizam Sagar Dam situated?",
          image:0
        },
        option:[
          {
            text:'Karnataka',
            image:0
          },
          {
            text:'Telangana',
            image:0
          },
          {
            text:'West Bengal',
            image:0
          },
          {
            text:'Andhra Pradesh',
            image:0
          },
        ],
        correct:'Telangana'
      },
      {
        qid:77,
        question:{
          text:"Atal Bhujal Yojana (ABY) is related to _____________.",
          image:0
        },
        option:[
          {
            text:'employment',
            image:0
          },
          {
            text:'climate change',
            image:0
          },
          {
            text:'ground water',
            image:0
          },
          {
            text:' organic farming',
            image:0
          },
        ],
        correct:'ground water'
      },
      {
        qid:78,
        question:{
          text:"In which state is the Bankapura Peacock Sanctuary situated?",
          image:0
        },
        option:[
          {
            text:'Rajasthan',
            image:0
          },
          {
            text:'Maharashtra',
            image:0
          },
          {
            text:'Madhya Pradesh',
            image:0
          },
          {
            text:'Karnataka',
            image:0
          },
        ],
        correct:'Karnataka'
      },
      {
        qid:79,
        question:{
          text:"The first Commonwealth Games were held in:",
          image:0
        },
        option:[
          {
            text:'1925',
            image:0
          },
          {
            text:'1935',
            image:0
          },
          {
            text:'1930',
            image:0
          },
          {
            text:'1920',
            image:0
          },
        ],
        correct:'1930'
      },
      {
        qid:80,
        question:{
          text:"The first Regional Rural Bank was established in India in the year:",
          image:0
        },
        option:[
          {
            text:'1991',
            image:0
          },
          {
            text:'1975',
            image:0
          },
          {
            text:'1982',
            image:0
          },
          {
            text:'1980',
            image:0
          },
        ],
        correct:'1975'
      },
      {
        qid:81,
        question:{
          text:"Which instrument was used to detect gravitational waves for the very first time ?",
          image:0
        },
        option:[
          {
            text:'GIGO',
            image:0
          },
          {
            text:'TRIGO',
            image:0
          },
          {
            text:'WIGO',
            image:0
          },
          {
            text:'LIGO',
            image:0
          },
        ],
        correct:'LIGO'
      },
      {
        qid:82,
        question:{
          text:"When was the Muslim League founded?",
          image:0
        },
        option:[
          {
            text:'1906',
            image:0
          },
          {
            text:'1901',
            image:0
          },
          {
            text:'1905',
            image:0
          },
          {
            text:'1903',
            image:0
          },
        ],
        correct:'1906'
      },
      {
        qid:83,
        question:{
          text:"What is the approximate length of the navigable inland waterways of India?",
          image:0
        },
        option:[
          {
            text:'15,600 km',
            image:0
          },
          {
            text:'16,400 km',
            image:0
          },
          {
            text:'14,500 km',
            image:0
          },
          {
            text:' 12,800 km',
            image:0
          },
        ],
        correct:'14,500 km'
      },
      {
        qid:84,
        question:{
          text:"Python is a _______.",
          image:0
        },
        option:[
          {
            text:'low level language',
            image:0
          },
          {
            text:'high level language',
            image:0
          },
          {
            text:'machine language',
            image:0
          },
          {
            text:'assembly language',
            image:0
          },
        ],
        correct:'high level language'
      },
      {
        qid:85,
        question:{
          text:"How many windows are there on the outside walls of Hawa Mahal of Jaipur?",
          image:0
        },
        option:[
          {
            text:'953',
            image:0
          },
          {
            text:'964',
            image:0
          },
          {
            text:'965',
            image:0
          },
          {
            text:'973',
            image:0
          },
        ],
        correct:'953'
      },
      {
        qid:86,
        question:{
          text:"When did Ibrahim Lodhi become the Sultan of Delhi?",
          image:0
        },
        option:[
          {
            text:'1526',
            image:0
          },
          {
            text:'1517',
            image:0
          },
          {
            text:'1527',
            image:0
          },
          {
            text:'1516',
            image:0
          },
        ],
        correct:'1517'
      },
      {
        qid:87,
        question:{
          text:`When was a landmark Motor Vehicles Agreement (MVA) for the Regulation of Passenger, Personnel and Cargo Vehicular Traffic
          signed between sub-grouping of four SAARC nations, Bangladesh, Bhutan, India and Nepal (BBIN)?`,
          image:0
        },
        option:[
          {
            text:'2012',
            image:0
          },
          {
            text:'2015',
            image:0
          },
          {
            text:'2013',
            image:0
          },
          {
            text:'2010',
            image:0
          },
        ],
        correct:'2015'
      },
      {
        qid:88,
        question:{
          text:"With which game was Khashaba Dadasaheb Jadhav associated?",
          image:0
        },
        option:[
          {
            text:'Weight lifting',
            image:0
          },
          {
            text:' Gymnastic',
            image:0
          },
          {
            text:'Shooting',
            image:0
          },
          {
            text:'Wrestling',
            image:0
          },
        ],
        correct:'Wrestling'
      },
      {
        qid:89,
        question:{
          text:"After which former Indian Prime Minister was Rohtang pass tunnel named, in December 2019?",
          image:0
        },
        option:[
          {
            text:'Atal Bihari Vajpayee',
            image:0
          },
          {
            text:' Rajiv Gandhi',
            image:0
          },
          {
            text:'Lal Bahadur Shastri',
            image:0
          },
          {
            text:'Jawahar Lal Nehru',
            image:0
          },
        ],
        correct:'Atal Bihari Vajpayee'
      },
      {
        qid:90,
        question:{
          text:"Who won the Nobel prize 2019 in literature?",
          image:0
        },
        option:[
          {
            text:' Peter Handke',
            image:0
          },
          {
            text:'biswajit kumar shaw',
            image:0
          },
          {
            text:'Kazuo Ishiguro',
            image:0
          },
          {
            text:'Bob Dylan',
            image:0
          },
        ],
        correct:' Peter Handke'
      },
      {
        qid:91,
        question:{
          text:"Who won the Miss World 2019 beauty pageant?",
          image:0
        },
        option:[
          {
            text:'Toni-Ann Singh',
            image:0
          },
          {
            text:' Suman Rao',
            image:0
          },
          {
            text:'Vanessa Ponce de Leon',
            image:0
          },
          {
            text:'Manushi Chillar ',
            image:0
          },
        ],
        correct:'Toni-Ann Singh'
      },
      {
        qid:92,
        question:{
          text:"What is the tenure of the Chief Election Commissioner of India?",
          image:0
        },
        option:[
          {
            text:'4 years or up to the age of 65 years, whichever is earlier. ',
            image:0
          },
          {
            text:'3 years or up to the age of 65 years, whichever is earlier.',
            image:0
          },
          {
            text:'5 years or up to the age of 65 years, whichever is earlier.',
            image:0
          },
          {
            text:'6 years or up to the age of 65 years, whichever is earlier.',
            image:0
          },
        ],
        correct:'6 years or up to the age of 65 years, whichever is earlier.'
      },
      {
        qid:93,
        question:{
          text:"Linux is ______.",
          image:0
        },
        option:[
          {
            text:'an operating system',
            image:0
          },
          {
            text:'an assembly language',
            image:0
          },
          {
            text:'a high level language',
            image:0
          },
          {
            text:'an interpreter',
            image:0
          },
        ],
        correct:'an operating system'
      },
      {
        qid:94,
        question:{
          text:"Which tissue has heavily thickened lignified walls?",
          image:0
        },
        option:[
          {
            text:'Sclerenchyma',
            image:0
          },
          {
            text:'Parenchyma',
            image:0
          },
          {
            text:'Aerenchyma',
            image:0
          },
          {
            text:'Collenchyma',
            image:0
          },
        ],
        correct:'Sclerenchyma'
      },
      {
        qid:95,
        question:{
          text:"The concept of fundamental duties in the Constitution of India was taken from:",
          image:0
        },
        option:[
          {
            text:'USSR',
            image:0
          },
          {
            text:'USA',
            image:0
          },
          {
            text:'Germany',
            image:0
          },
          {
            text:'Australia',
            image:0
          },
        ],
        correct:'USSR'
      },
      {
        qid:96,
        question:{
          text:"The term 'white revolution' is related with:",
          image:0
        },
        option:[
          {
            text:'crops',
            image:0
          },
          {
            text:'fish',
            image:0
          },
          {
            text:'milk',
            image:0
          },
          {
            text:'egg',
            image:0
          },
        ],
        correct:'milk'
      },
      {
        qid:97,
        question:{
          text:"Which country publishes the Wisden Cricketers’ Almanack - often labelled the ‘Bible of cricket’?",
          image:0
        },
        option:[
          {
            text:'Australia',
            image:0
          },
          {
            text:'South Africa',
            image:0
          },
          {
            text:'New Zealand',
            image:0
          },
          {
            text:'United Kingdom',
            image:0
          },
        ],
        correct:'United Kingdom'
      },
      {
        qid:98,
        question:{
          text:"Dhimsa is an official folk dance of which state?",
          image:0
        },
        option:[
          {
            text:'Karnataka',
            image:0
          },
          {
            text:'Maharashtra',
            image:0
          },
          {
            text:'Andhra Pradesh',
            image:0
          },
          {
            text:'Rajasthan',
            image:0
          },
        ],
        correct:'Andhra Pradesh'
      },
      {
        qid:99,
        question:{
          text:"Which of the following is an example of a pair of Isobars?",
          image:0
        },
        option:[
          {
            text:'Chlorine and oxygen',
            image:0
          },
          {
            text:'Calcium and argon',
            image:0
          },
          {
            text:'Oxygen and carbon',
            image:0
          },
          {
            text:'Hydrogen and helium',
            image:0
          },
        ],
        correct:'Calcium and argon'
      },
      {
        qid:100,
        question:{
          text:"Which country ranked first among 97 countries in breastfeeding rate, according to a new survey conducted by the World Breastfeeding Trends Initiative (WBTi)?",
          image:0
        },
        option:[
          {
            text:'Sri Lanka',
            image:0
          },
          {
            text:'India',
            image:0
          },
          {
            text:'China',
            image:0
          },
          {
            text:'Japan',
            image:0
          },
        ],
        correct:'Sri Lanka'
      },
    ]
    return questions
  }
}
