function XO(str) {
    let count = 0;
    let count1 = 0;
    str.split("").forEach((ele)=>{
      if(ele.toLowerCase()==='x')
        {
          count++;
        }
      else if(ele.toLowerCase()==='o'){
        count1++;
      }
    })
     return count===count1;
  }