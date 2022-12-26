function squareSum(numbers){
    return s = numbers.reduce((accumulator,ele)=>{
      return (ele*ele+accumulator);
    },0);
    }