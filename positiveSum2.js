function positiveSum(arr) {
    return sum = arr.filter((ele)=> ele>0).reduce((accumulator,element)=>{
      return accumulator+element;
    },0); 
}