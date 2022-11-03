function filter_list(l) {
    return l.filter((ele)=>{
      return typeof ele == 'number' ? true : false;
    })
  }