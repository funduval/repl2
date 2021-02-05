class DialPad {
    constructor(range){
      this.numbers = [...Array(range).keys()].shift();
      this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
    }
  
    assignButtonsValues(){
        const allButtonValues = [];
        const valuesToAssign = this.alphabet.split('');
        let index = 0;
        let buttonsAssigned = new Map();
        let number = 2;
       
        while (index < valuesToAssign.length - 1) {
          if(number === 7 || number === 9){
             let size=4
              allButtonValues.push(valuesToAssign.slice(index, index + size));
              buttonsAssigned[number] = valuesToAssign.slice(index, index + size) || [];
              index += size;
              console.log("index of plus 4", index)
  
            } else {
             let size=3;
                allButtonValues.push(valuesToAssign.slice(index, index + size));
                buttonsAssigned[number] = valuesToAssign.slice(index, index + size) || [];
                index += size;
                console.log("index of plus 3", index)
  
            }    
            number++  ;
        }
      
        return buttonsAssigned;
    
    }
}

let dialPad = new DialPad (9);
console.log(dialPad.assignButtonsValues())