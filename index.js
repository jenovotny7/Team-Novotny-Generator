const inquirer = require("inquirer");
const jest = require("jest");
const fs = require("fs");
const path = require("path");
const Employee = require("./lib/Employee.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");

// const OUTPUT_DIR=path.resolve(_dirname,"output")
// const outputPath=path.join(OUTPUT_DIR, "team.html") 


//empty array 
const jabronies = [];

// main function
function appRun() {

//inner functions
    freshHtml();
    newGuy();
}


// prompts questions in cmdline 

function newGuy() {
    inquirer.prompt([{
        message: "Name please?",
        name: "name"
    },
    {
        type: "list",
        message: "Role Please?",
        choices: [
            "Engineer",
            "Intern",
            "Manager"
        ],
        name: "role"
    },
    {
        message: "ID Please?",
        name: "id"
    },
    {
        message: " Email Address?",
        name: "email"
    }])
    .then(function({name, role, id, email}) {
        let roleInfo = "";
        if (role === "Engineer") {
            roleInfo = "GitHub username";
        } else if (role === "Intern") {
            roleInfo = "University";
        } else {
            roleInfo = "Extension";
        }
        inquirer.prompt([{
            message: `Enter co-worker's ${roleInfo}`,
            name: "roleInfo"
        },
        {
            type: "list",
            message: "Do you want to add any co-workers?",
            choices: [
                "yes",
                "no"
            ],
            name: "coWorkers"
        }])

        //if additional coworker is added

        .then(function({roleInfo, coWorkers}) {
            let freshMeat;
            if (role === "Engineer") {
                freshMeat = new Engineer(name, id, email, roleInfo);
            } else if (role === "Intern") {
                freshMeat = new Intern(name, id, email, roleInfo);
            } else {
                freshMeat = new Manager(name, id, email, roleInfo);
            }
              jabronies.push(freshMeat);
            plusHtml(freshMeat)
            .then(function() {
                if (coWorkers === "yes") {
                    newGuy();
                } else {
                    finalHtml();
                }
            });
            
        });
    });
}






// function for the layout 
function freshHtml() {
    const outline = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Employees</title>
    </head>



    <body>
        <nav class="navbar navbar-light bg-primary mb-3">
            <span class="navbar-brand mb-3 h1 w-100 text-center">Yay Team</span>
        </nav>
        <div class="container">
            <div class="row">`;
    fs.writeFile("./output/team.html", outline, function(err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("begin");
}




//Function for specifically making the coworker card

function plusHtml(member) {
    return new Promise(function(resolve, reject) {
        const name = member.getName();
        const role = member.getRole();
        const id = member.getId();
        const email = member.getEmail();
        let officedata = "";
        if (role === "Engineer") {
            const gitHub = member.getGithub();
            officedata = `<div class="col-6">
            <div class="card mx-auto mb-4" style="width: 20rem">
            <h4 class="card-header">${name}<br /><br />Engineer</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">GitHub: ${gitHub}</li></ul>
            </div>
        </div>`;


      // Intern Card
        } else if (role === "Intern") {
            const school = member.getSchool();
            officedata = `<div class="col-6">
            <div class="card mx-auto mb-4" style="width: 20rem">
            <h4 class="card-header">${name}<br /><br />Intern</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">School: ${school}</li>
            </ul>
            </div>
        </div>`;



      // Manager card
        } else {const officePhone = member.getOfficeNumber();
            officedata = `<div class="col-6">
            <div class="card mx-auto mb-4" style="width: 20rem">
            <h4 class="card-header">${name}<br /><br />Manager</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">Office Phone: ${officePhone}</li>
            </ul>
            </div>
        </div>`
        }



        console.log("creating new coworker");
        fs.appendFile("./output/team.html", officedata, function (err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    });
        
}


//Appends
function finalHtml() {
    const final = 
    
` </div>
</div>    
</body>
</html>`;


    fs.appendFile("./output/team.html", final, function (err) {
        if (err) {
            console.log(err);
        };
    });
    console.log("now in output");
}








appRun();


  




