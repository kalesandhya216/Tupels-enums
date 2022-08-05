var cl = console.log;
// tupels >> fixed length array
// enum >> 
// role_no, role type, can_see_other_candidate, can_see_company
// candidate >> 1, candidate, false, true
// admin >> 2, admin, true, false
// recruiter >> 3, recruiter, true, true
var p2;
p2 = {
    fname: 'Jhon',
    lname: 'Doe',
    age: 55,
    hobbies: ['reading', 'coding', 1234],
    child: {
        fname: 'Jen',
        lname: 'Doe',
        age: 25
    },
    role: [1, 'candidate', false, true]
};
// p2.role[4] = 'can drive'
// p2.role[0] = 2;
cl(p2.role);
// enum 
var Role;
(function (Role) {
    Role[Role["admin"] = 0] = "admin";
    Role[Role["read_only_user"] = 1] = "read_only_user";
    Role[Role["recruiter"] = 2] = "recruiter";
})(Role || (Role = {}));
var cand1 = {
    fname: 'sangram',
    lname: 'deshmukh',
    email: 'sangram@gmail.com',
    usertype: Role.read_only_user,
    userno: Role.read_only_user
};
cl(cand1.usertype);
cl(cand1.userno);
if (cand1.usertype === Role.read_only_user) {
    cl('you have entered correct value');
}
// ======================= Ex. 1) ========================
var person;
person = {
    fname: 'Neha',
    lname: 'Kalyankar',
    age: 50,
    email: 'neha12@gmail.com',
    Child: {
        fname: 'Sakshi',
        lname: 'Kalyankar',
        age: 23,
        skills: ['HTML5', 'CSS3', 'Angular']
    },
    role: [1, 'candidate', false]
};
cl(person.role);
// enum 
var Colors;
(function (Colors) {
    Colors[Colors["aqua"] = 0] = "aqua";
    Colors[Colors["climson"] = 1] = "climson";
    Colors[Colors["lightgreen"] = 50] = "lightgreen";
})(Colors || (Colors = {}));
var cand2 = {
    fname: 'Nikita',
    lname: 'Kadam',
    email: 'nikita445@gmail.com',
    usertype: Colors.lightgreen,
    userno: Colors.lightgreen
};
cl(cand2.usertype);
cl(cand2.userno);
if (cand2.usertype === Colors.lightgreen) {
    cl('you have logged in');
}
// ======================= Ex. 2) ========================
var Directions;
(function (Directions) {
    Directions[Directions["up"] = 0] = "up";
    Directions[Directions["down"] = 1] = "down";
    Directions[Directions["left"] = 2] = "left";
    Directions[Directions["right"] = 3] = "right";
})(Directions || (Directions = {}));
var d1 = {
    Up: Directions.up,
    Down: Directions.down,
    Left: Directions.left,
    Right: Directions.right
};
cl(d1.Left);
// ======================= Ex. 3) ========================
var Profile;
Profile = {
    fname: 'Madhavi',
    lname: 'Patil',
    experience: 5,
    profile: 'hr',
    role: [2, 'admin', true, false]
};
cl(Profile.role);
// enum
var roles;
(function (roles) {
    roles[roles["read_hiring_only"] = 10] = "read_hiring_only";
    roles[roles["admin"] = 11] = "admin";
    roles[roles["recruiter"] = 12] = "recruiter";
})(roles || (roles = {}));
var admin1 = {
    fname: 'Samar',
    lname: 'Rathod',
    email: 'samar@gmail.com',
    usertype: roles.read_hiring_only,
    userno: roles.read_hiring_only
};
cl(admin1.usertype);
cl(admin1.userno);
if (admin1.userno === roles.read_hiring_only) {
    cl('entered correct user no');
}
// ======================= Ex. 4) ========================
var circle;
(function (circle) {
    circle[circle["rad"] = 0] = "rad";
    circle[circle["kind"] = 1] = "kind";
    circle[circle["circum"] = 2] = "circum";
})(circle || (circle = {}));
var c1 = {
    radius: circle.rad,
    shapekind: circle.kind,
    circumference: circle.circum
};
cl(circle.kind);
if (c1.radius === circle.rad) {
    cl('radius is available');
}
