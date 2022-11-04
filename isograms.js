function isIsogram(str){
    str = str.toLowerCase();
    let p = str.split("");
  //   console.log(p);
  //   console.log((new Set(p)).length);
  //   console.log(p.length)
    return ((new Set(p)).size === p.length)
  }