/*
This is empty on purpose! Your code to build the resume will go here.
 */
 // $("#main").append("Lizzie");
// var awesomeThoughts = "I am Lizzie and I am AWESOME!"
 // console.log(awesomeThoughts);

 var formattedName = HTMLheaderName.replace("%data%", "Lizzie LaShark");
 $("#header").prepend(formattedName);

var formattedRole = HTMLheaderRole.replace("%data%", "Junior Web Developer");
$("#header").append(formattedRole);


// var work = {};
// work.city="Auckland";
// work.currentPosition="Environmental Campaigner";
// work.Employer="350.org Aotearoa";
// work.yearsWorked=1.5;

// var education = {};

// education["name"] = ["Victoria University"];
// education["yearsAttended"] = ["2008 - 2011"];
// education["location"] = ["Wellington"];

// $("#main").append(work.currentPosition);
// $("#main").append(education["name"]);

var education = {
	"schools": [
	{
	"name": "Victoria University",
	"location": "Wellington, NZ",
	"Majors": ["Environmental Science", "Maori Resource Management"],
	"graduationYear": 2011
},
{
	"name": "Enspiral Dev Academy",
	"location": "Wellington NZ", 
	"majors": "Web Development",
	"graduationYear": 2016
}
]
};

var work = {
	jobs: [
		{
			"employer": "Fat Cats Inc",
			"title": "Top Dog",
			"location": "Aotearoa",
			"dates": "2015",
			"description": "Top dog at Fat Cats Inc. Specialising in cigars and champagne for rich white catitalists."
		},
		{
			"employer": "Space Kittens Against Neo-Liberalism",
			"title": "Mother Kitteh",
			"location": "Pluto",
			"dates": 2014,
			"description": "Main duties: organising street blockades of earth with the notorious K.L.C (Kitteh Litter Crew)."
		}
	]
};

var jobsArray = work.jobs;

// for (jobIndex in jobsArray) {
// 	$("#workExperience").append(HTMLworkStart);
// 	var formattedEmployer = HTMLworkEmployer.replace("%data%", jobsArray[jobIndex].employer);
// 	var formattedWorkTitle = HTMLworkTitle.replace("%data%", jobsArray[jobIndex].title);
// 	var formattedDates = HTMLworkDates.replace("%data%", jobsArray[jobIndex].dates);
// 	var formattedLocation = HTMLworkLocation.replace("%data%", jobsArray[jobIndex].location);
// 	var formattedDescription = HTMLworkDescription.replace("%data%", jobsArray[jobIndex].description);
// 	$(".work-entry:last").append(formattedEmployer + formattedWorkTitle + formattedDates + formattedLocation + formattedDescription);
	
// };

var displayWork = function() {
	for (jobIndex in jobsArray) {
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", jobsArray[jobIndex].employer);
	var formattedWorkTitle = HTMLworkTitle.replace("%data%", jobsArray[jobIndex].title);
	var formattedDates = HTMLworkDates.replace("%data%", jobsArray[jobIndex].dates);
	var formattedLocation = HTMLworkLocation.replace("%data%", jobsArray[jobIndex].location);
	var formattedDescription = HTMLworkDescription.replace("%data%", jobsArray[jobIndex].description);
	$(".work-entry:last").append(formattedEmployer + formattedWorkTitle + formattedDates + formattedLocation + formattedDescription);
}
};

displayWork();



var projects = {
	projects: [
	{
	"title": "We Can Haz Space-Shipz Too",
	"dates": 2015,
	"description": "A space-travel empowerment project, for cats, by cats",
	"images": "images/catSpaceShip.gif"
}
	]
};


 var skills = ["Meow Skillz", "space-travel", "alternative purring techniques", "Neo-liberal catitalism"];

 var bio = {
 	name: "Lizzie LaShark",
 	role: "Student Web Developer",
 	location: "Auckland NZ",
 	contactInfo: { 
	 	"email": "Lizzie@lizzielashark.email",
	 	"twitter": "@lizzielashark",
	 	"github": "LizzieLaShark"
	 },
 	picture: "images/fatCat.gif",
 	welcomeMessage: "Kitteh got back",
 	skills: skills
 };

var myFunc = function(param1, param2) {
         //function code lives in here
}
var displayBioPic = function() {
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
	$("#header").append(formattedBioPic);
};
var displayWelcomeMsg = function() {
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcomeMsg);
};
var displayContactDeets = function() {
	var formattedContactDeets = HTMLcontactGeneric.replace("%data%", bio.contactInfo);
	$("#header").append(formattedContactDeets);
};

displayContactDeets();

displayBioPic();
displayWelcomeMsg();

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	// var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	// $("#skills").append(formattedSkill);
	// formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	// $("#skills").append(formattedSkill);
	// formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	// $("#skills").append(formattedSkill);
};

// code below does same as code above
var printSkill = function (skill) {
	var formattedSkill = HTMLskills.replace("%data%", skill);
	$("#skills").append(formattedSkill);
	jQuery()
};

bio.skills.forEach(printSkill);


	$(document).click(function(loc) {
		 var x = loc.pageX;
		 var y = loc.pageY;

		 logClicks(x,y);
	});








