// var userFirstName = "Cody";
// var userLastName = "Thaller";
// var userAge = 30;
// var userEmail = "sthaller@codingdojo.com";
// var workingRemote = true;
// var numberOfStudents = 50;

// var user = ["Cody","Thaller",30,"sthaller@codingdojo.com",true,50]

// object is going to be split up into pairs of data (key value pairs)

// var student1 = {
//     firstName: "John",
//     lastName: "Doe"
// }
// var student2 = {
//     firstName: "Jane",
//     lastName: "Doe"
// }
// var student3 = {
//     firstName: "Bob",
//     lastName: "Humanperson"
// }
// var student4 = {
//     firstName: "Sally",
//     lastName: "Personbeing"
// }
// var student5 = {
//     firstName: "Slim",
//     lastName: "Shady"
// }



var cody = {
    firstName: "Cody",
    lastName: "Thaller",
    age: 30,
    email: "sthaller@codingdojo.com",
    remote: true,
    students: [
        {
            firstName: "John",
            lastName: "Doe"
        },
        {
            firstName: "Jane",
            lastName: "Doe"
        },
        {
            firstName: "Bob",
            lastName: "Humanperson"
        },
        {
            firstName: "Sally",
            lastName: "Personbeing"
        },
        {
            firstName: "Slim",
            lastName: "Shady"
        }
    ],
    location: {
        city: "Seattle",
        state: "Washington"
    }
}



function printUserInfo(user){
    // code that will print out a table of user info
    console.log(`First Name: ${user.firstName}`);
    console.log(`Last Name: ${user.lastName}`);
    console.log(`Age: ${user.age}`);
    console.log(`Email: ${user.email}`);
    console.log(`Remote: ${user.remote}`);
    console.log('Students:');

    for(var i = 0; i < user.students.length; i++) {
        console.log(`- ${user.students[i].firstName} ${user.students[i].lastName}`);
    }

    console.log(`Location: ${user.location.city}, ${user.location.state}`);
}


printUserInfo(cody)
