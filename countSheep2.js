function countSheeps(arrayOfSheep) {
    let count = 0;
      arrayOfSheep.forEach((ele)=>{
        if(ele===true)
          {
            count++;
          }
      })
      return count;
    }