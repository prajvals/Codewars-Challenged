function findShort(s){
    let minimum = 10000;
    let miniumWord;
    let sa = s.split(" ").forEach((ele)=>{
      if(ele.length<minimum)
        {
          minimum = ele.length;
          miniumWord = ele;
        }
    })
    return minimum;
  }