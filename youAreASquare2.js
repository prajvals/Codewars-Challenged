var isSquare = function(n){
    let number = parseInt(n);
    if(number<0)
      {
        return false;
      }
    else {
      for(let i=0;i<=Math.ceil(number/2);i++)
        {
          if(i*i===number)
            {
              return true;
            }
        }
      return false;
    }
  }