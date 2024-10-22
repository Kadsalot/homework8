console.log("Hello World!");

const userName = "Kaleb";
let hasDownloadedResume = false;

addEventListener('click', resumeDownload);

function resumeDownload() 
{
    alert("Your resume downloaded successfully!");
}

function showGreeting(userName) 
{
    alert("Hello, my name is " + userName + "! Welcome to my portfolio!");
}

showGreeting(userName)

var dueDate = new Date(12, 4 ,2002);

function daysUntilDeadline(dueDate) 
    {
        var currentDate = new Date(10, 14, 2002);
        var dateDif = dueDate - currentDate;
        console.log(dateDif);
        return(dateDif);
    }

daysUntilDeadline(dueDate)

var myBusiness = ["My Business","I am slowly developing a business that is currently not very impressive but its something I can use as a creative outlet to design and build whatever I like.", " deadline:1/02/3000" ];

var myWebsite = ["My Website","This website is now technically one of my projects in terms of being a way to practice future web development.", "deadline:1/02/3000" ];

var projectTitle;
var projectDescription;
var projectDeadline;

for(var i=0; i !== 3; i++){
    if (i=0) {
        projectTitle = myBusiness[i];
    }
    if (i=1) {
        projectDescription = myBusiness[i];
    }
    if (i=2) {
        projectDeadline = myBusiness[i];
    }
}

for(var i=0; i !== 3; i++){
    if (i=0) {
        projectTitle = myWebsite[i];
    }
    if (i=1) {
        projectDescription = myWebsite[i];
    }
    if (i=2) {
        projectDeadline = myWebsite[i];
    }
}

var projectStatus;
var deadline = 11022025;
var currentDate = 10212024;

if(currentDate === deadline) {
    projectStatus = "Completed";
}

if(currentDate < deadline) {
    projectStatus = "Ongoing";
}

if(currentDate > deadline) {
    projectStatus = "Completed";
}