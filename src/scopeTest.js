export class BabelTest
{

  testFunction()
  {
    this.myVar = { myValue : 10 };
    let myFunc = ()=>{
      debugger;
      console.log(this);
      // If you inspect 'this' with sourcemaps turned on it's shown as undefined
      // however it's correctly indirecting to the babel generated _this variable and
      // the code works as expected
      if(this.myVar.myValue == 10)
      {
        console.log('As expected');
      }
    };

    myFunc();
  }

}

new BabelTest().testFunction();
