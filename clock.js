export {at};

class Clock{ 
    constructor(hours, minutes){
        if(hours === undefined)
            hours = 0;
        if(minutes === undefined)
            minutes = 0;
        this.sumOfMinutes = standardiseMinutes(60*hours + minutes);
    }

    plus(minutes){
        return new Clock(0, standardiseMinutes(this.sumOfMinutes + minutes));
    }

    minus(minutes){
        return new Clock(0, standardiseMinutes(this.sumOfMinutes - minutes));
    }

    equals(clock){
        if(!(clock instanceof Clock))
            return false;
        return clock.sumOfMinutes === this.sumOfMinutes;        
    }

    toString(){
        const minutes = this.sumOfMinutes % 60;
        const hours = Math.floor(this.sumOfMinutes/60);

        return `${String(hours).padStart(2,"0")}:${String(minutes).padStart(2,"0")}`;
    }
}

function standardiseMinutes(minutes){
    const minutesInDay = 60*24; //1440 minutes in a day
    while(minutes < 0){
        minutes += minutesInDay;
    }
    return minutes % minutesInDay;
}

function at(hours,minutes){
    return new Clock(hours, minutes);
}