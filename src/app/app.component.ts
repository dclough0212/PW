import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pw';

  password = '';
  length =0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  numbers: string = "123456789";
  letters: string = "abcdefghijklmnopqrstuvwxyz";
  symbols: string = "!@#$%^&*()_";

  onChangeLength(value: string) {

    const parsedValue = parseInt(value);

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
    else
    {
      this.length = 0;
    }

    console.log(`Length is : ${this.length}`)
  };

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  };

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  };
  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  };

  getPassword() {
    var availablechars = "";
    this.password = "";
    if (this.includeLetters){
      availablechars += this.letters;
    }
      
    if (this.includeNumbers){
      availablechars += this.numbers;
    }
      
    if (this.includeSymbols){
      availablechars += this.symbols;
    }

    console.log(availablechars);

     var i = this.length - 1; 
    var randchar = "";

    if (this.length > 0)
    {
      for (i; i >= 0; i--)
      {
        randchar = availablechars.charAt(getRandomInt(availablechars.length));
        this.password += randchar;
        //console.log(randchar);
      }
    } 
  }

  onButtonClick() {
    this.getPassword();
  }
}


function getRandomInt(max: number) {
  return Math.floor(Math.random() * Math.floor(max));
}