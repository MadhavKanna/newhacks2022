// match a list of tutors to a student
function findTutors(student, tutors){
    priceMatch = false;
    subjectMatch = false;
    locationMatch = false;

    orderedMatches = []
    

    for(let i = 0; i <= tutors.length; i++){
        curTutor = tutors[i]
        if(curTutor._wage <= student._price){
            priceMatch = true;
        }
        if(curTutor._location == student._location){
            locationMatch = true;
        }
        if(student._subject in curTutor._subjects){
            subjectMatch = true;
        }
        // this filters the tutors that meets all three requirements of the student
        if(priceMatch && subjectMatch && locationMatch){
            orderedMatches.push(curTutor);
        // this filters the tutors that meets two requirements
        } else if ((priceMatch && subjectMatch) || (priceMatch && locationMatch) || (locationMatch && subjectMatch)){
            orderedMatches.push(curTutor);
        
        } else if(priceMatch || subjectMatch || locationMatch){
            orderedMatches.push(curTutor);
        } 
    }
}