export const getWeekDay = (date) => {
    let weekDay = new Date(date).getDay()
   
    switch(weekDay){
        case 1:
            return 'Mo';
        case 2:
            return 'Di';
        case 3:
            return 'Mi';
        case 4:
            return 'Do';
        case 5:
            return 'Fr';
        case 6:
            return 'Sa';
        case 7:
            return 'So';
        default:
            return '';
    }
  };