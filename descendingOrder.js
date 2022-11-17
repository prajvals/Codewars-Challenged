function descendingOrder(n){
    let s = parseInt(n);
    let a = s;
    let p = [];
    if(a==0)
      {
        return 0;
      }
    while(a!=0)
      {
        p.push(a%10);
        a = Math.floor(a/10);
      }
    return parseInt(p.sort().reverse().join(''));
  }