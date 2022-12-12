function highAndLow(numbers){
    let p = numbers.split(' ');
    console.log(p)
    let s = p.map((ele)=> parseInt(ele));
    return  `${Math.max(...s).toString()} ${Math.min(...s).toString()}`
  
  }