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
			"employer": "350.org Aotearoa",
			"title": "Mobilisation Manager",
			"location": "Auckland NZ",
			"dates": "Oct 2014 - Nov 2015",
			"description": "Offline mobilisation and advocacy on climate change issues, " + 
			"specialising in fossil fuel divestment"
		},
		{
			"employer": "RockEnrol",
			"title": "Co-Founder",
			"location": "Auckland NZ",
			"dates": 2014,
			"description": "Co-founded and did strategic planning and offline campaign " +
			"implementation in the lead up to the 2014 general election."
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
	"title": "Show Us Ya Text / Real Choice",
	"dates": 2015,
	"description": "NVDA group promoting democratic transparency around the TPPA",
	"images": "http://placekitten.com/200/300"
}
	]
};


 var skills = ["communication", "management", "teaching"];

 var bio = {
 	name: "Lizzie LaShark",
 	role: "Student Web Developer",
 	location: "Auckland NZ",
 	contactInfo: { 
	 	"email": "Lizzie@lizzielashark.com",
	 	"twitter": "@lizzielashark",
	 	"github": "LizzieLaShark"
	 },
 	picture: "images/catBud.gif",
 	welcomeMessage: "Haere mai ki Lizzzie's Resume site!",
 	skills: skills
 };

var myFunc = function(param1, param2) {
         //function code lives in here
}
var displayBioPic = function() {
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
	$("#header").append(formattedBioPic);
};

displayBioPic();


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








