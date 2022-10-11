function match(candidate, job) {

    if(candidate.minSalary === undefined || job.maxSalary===undefined)
      {
        throw "Error";
      }
    else {
      let minSal = candidate.minSalary - candidate.minSalary * 0.10; 
      if(minSal<=job.maxSalary)
        {
          return true;
        }
      else{
        return false;
        
      }
    }
  }