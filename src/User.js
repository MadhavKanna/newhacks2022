class User{
    constructor(username, password){
        this._username = username;
        this._password = password;
    }
    getusername(){
        return this._username;
    }
    getpassword(){
        return this._password;
    }
}

class Tutor extends User{
    constructor(username, password){
        super(username, password);3
        this._location = "";
        this._rating = 0;
        this._subjects = [];
        this._openToWork = true;
        this._contact = "";
    }
    getusername(){
        return this._username;
    }
    getpassword(){
        return this._password;
    }
    
    getlocation(){
        return this._location;
    }

    setlocation(location){
        this._location = location;
    }

    getrating(){
        return this._rating;
    }

    setrating(rating){
        this._rating = rating;
    }
    getsubjects(){
        return this._subjects;
    }
    setsubjects(subjects){
        this._subjects = subjects;
    }
    getopenToWork(){
        return this._openToWork;
    }
    setopenToWork(availability){
        this._openToWork = availability;
    }
    getcontact(){
        return this._contact;
    }
    setcontact(contact){
        this._contact = contact;
    }
}

class Student extends User {
    constructor(username, password) {
        super(username, password);
        this._price = 0;
        this._subject = " ";
        this._location = " ";
    }
    getusername() {
        return this._username;
    }

    getprice() {
        return this._price;
    }

    setprice(price) {
        this._price = price;
    }

    getsubject() {
        return this._subject;
    }

    setsubject (subject) {
        this._subject = subject;
    }

    getlocation() {
        return this._location;
    }

    setlocation (location) {
        this._location = location;
    }

    }


