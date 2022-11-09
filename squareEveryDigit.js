function squareDigits(num){
    num = num.toString();
    return parseInt(num.split("").map((ele)=>{
  //     ele = parseInt(ele);
      ele = ele*ele;
      return ele;
    }).join(''));
    
  }