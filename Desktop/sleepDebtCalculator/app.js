const getSleepHours = day =>{
    if(day === 'monday'){
      return 9;
    }
    else if(day === 'tuesday'){
      return 9;
    }
    else if(day === 'wednesday'){
      return 9;
    }
    else if(day === 'thursday'){
      return 9;
    }
    else if(day === 'friday'){
      return 9;
    }
    else if(day === 'saturday'){
      return 9;
    }
    else if(day === 'sunday'){
      return 9;
    }
    else{
      return "Error!"
    }
  };
  getActualSleepHours = () =>{
    return getSleepHours('monday')+
     getSleepHours('tuesday')+
     getSleepHours('wednesday')+
     getSleepHours('thursday')+
     getSleepHours('friday')+
     getSleepHours('saturday')+
     getSleepHours('sunday')
   }
   const getIdealSleepHours = () =>{
    const idealHours = 8;
    return idealHours * 7 ;
  }