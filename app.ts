
let cl = console.log;

// tupels >> fixed length array
// enum >> 

// role_no, role type, can_see_other_candidate, can_see_company

// candidate >> 1, candidate, false, true
// admin >> 2, admin, true, false
// recruiter >> 3, recruiter, true, true



let p2 : {
    fname : string,
    lname : string,
    age : number,
    hobbies : (string | number)[],
    child : {
        fname : string,
        lname : string,
        age : number
    },
    role : [number, string, boolean, boolean]
}

p2 = {
    fname : 'Jhon',
    lname : 'Doe',
    age : 55,
    hobbies : ['reading', 'coding', 1234],
    child : {
        fname : 'Jen',
        lname : 'Doe',
        age : 25
    },
    role : [1, 'candidate', false, true]
}

// p2.role[4] = 'can drive'
// p2.role[0] = 2;

cl(p2.role);

// enum 


enum Role {admin, read_only_user, recruiter}

let cand1 = {
    fname : 'sangram',
    lname : 'deshmukh',
    email : 'sangram@gmail.com',
    usertype : Role.read_only_user,
    userno : Role.read_only_user
}

cl(cand1.usertype);
cl(cand1.userno);


if(cand1.usertype === Role.read_only_user){
    cl('you have entered correct value')
}


// ======================= Ex. 1) ========================

let person : {
    fname : string,
    lname : string,
    age : number,
    email : string,
    Child : {
        fname : string,
        lname : string,
        age : number,
        skills : string[],
    },
    role : [number, string, boolean]
}



person = {
    fname : 'Neha',
    lname : 'Kalyankar',
    age : 50,
    email : 'neha12@gmail.com',
    Child : {
        fname : 'Sakshi',
        lname : 'Kalyankar',
        age : 23,
        skills : ['HTML5', 'CSS3', 'Angular'],
    },
    role : [1, 'candidate', false]
}



cl(person.role);




// enum 

enum Colors {aqua, climson, lightgreen = 50}

let cand2 = {
    fname : 'Nikita',
    lname : 'Kadam',
    email : 'nikita445@gmail.com',
    usertype : Colors.lightgreen,
    userno : Colors.lightgreen
}

cl(cand2.usertype);
cl(cand2.userno);

if(cand2.usertype === Colors.lightgreen){
    cl('you have logged in');
}


// ======================= Ex. 2) ========================


enum Directions {up, down, left, right}

let d1 = {
    Up : Directions.up,
    Down : Directions.down,
    Left : Directions.left,
    Right : Directions.right,
}

cl(d1.Left);


// ======================= Ex. 3) ========================


let Profile : {
    fname : string,
    lname : string,
    experience : number,
    profile : string,
    role : [number, string, boolean, boolean]
}

Profile = {
    fname : 'Madhavi',
    lname : 'Patil',
    experience : 5,
    profile : 'hr',
    role : [2, 'admin', true, false]
}

cl(Profile.role);


// enum

enum roles {read_hiring_only = 10, admin, recruiter}

let admin1 = {
    fname : 'Samar',
    lname : 'Rathod',
    email : 'samar@gmail.com',
    usertype : roles.read_hiring_only,
    userno : roles.read_hiring_only
}

cl(admin1.usertype);
cl(admin1.userno);

if(admin1.userno === roles.read_hiring_only){
    cl('entered correct user no');
}


// ======================= Ex. 4) ========================


enum circle {rad, kind, circum}

let c1 = {
    radius : circle.rad,
    shapekind : circle.kind,
    circumference : circle.circum
}


cl(circle.kind);



if(c1.radius === circle.rad){
    cl('radius is available');
}