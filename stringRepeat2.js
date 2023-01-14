function repeatStr (n, s) {
    let string = "";
    for(let i=n;i>0;i--)
      {
        string = string.concat(s);
      }
    return string;
      
  }