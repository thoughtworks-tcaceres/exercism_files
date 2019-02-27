export class GradeSchool{
    constructor(){
        this.rosterDB = {};        
    }
    roster(){
        return JSON.parse(JSON.stringify(this.rosterDB));
    }

    add(studentName, grade){
        if(this.rosterDB[grade])
            this.rosterDB[grade].push(studentName);
        else
            this.rosterDB[grade] = [studentName];
        this.rosterDB[grade].sort();
    }

    grade(grade){
        if(this.rosterDB[grade])
            return JSON.parse(JSON.stringify(this.rosterDB[grade]))
        else
            return JSON.parse(JSON.stringify([]));
    }
}