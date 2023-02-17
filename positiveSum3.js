function positiveSum(arr) {
    let sum = 0;
    console.log(arr);
    arr.forEach((ele)=>{
      if(ele>0)
        {
          sum=sum+ele;
      console.log(sum);    
        }
      
    })
    return sum;
  }