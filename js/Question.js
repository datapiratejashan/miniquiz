class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("Enter Correct Option No..");
    this.button = createButton('Submit');
    this.question = createElement('h2');
    this.option1 = createElement('h3');
    this.option2 = createElement('h3');
    this.option3 = createElement('h3');
    this.option4 = createElement('h3');

    
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

    this.question.html("Question:-who was the first president of free india" );
    this.question.position(150, 80);
    this.option1.html("1: Pandit Jawaharlal Nehru " );
    this.option1.position(150, 110);
    this.option2.html("2: Dr Rajendra Prasad" );                       
    this.option2.position(150, 140);
    this.option3.html("3:  DR B. R. Ambedkar " );
    this.option3.position(150, 170);
    this.option4.html("4:  C. Rajagopalachari" );
    this.option4.position(150, 200);

    this.input1.position(150, 250);
    this.input2.position(350, 250);
    this.button.position(290, 300);
    

    this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    });
  }
}