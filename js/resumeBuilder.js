// function locationizer(work_obj) {
//     return [work.jobs[0].location,
//            work.jobs[1].location,
//            work.jobs[2].location,
//            work.jobs[3].location];            
// }

// function locationizer(work_obj){
//     var locations = [];
//     for(var jobIndex in work.jobs) {
//         locations.push(work.jobs[jobIndex].location);  
//     }
//     return locations;
// }

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



var education = {
	"schools": [
	{
	"name": "Ivory Tower",
	"location": "Wellington, NZ",
	"Majors": ["Theories, Unrequited love, Coffee and Cigarettes"],
	"graduationYear": 2011
},
{
	"name": "Real World",
	"location": "Planet Earth", 
	"majors": "Other Humans, Money, Emotions, Inequality",
	"graduationYear": "TBA"
}
]
};

var displayEducation = function() {
	for (schoolsIndex in educationArray){
		$("#education").append(HTMLschoolStart);
		formattedSchoolName = HTMLschoolName.replace("%data%", education.schools.name);		
		$(".education-entry:last").append(formattedSchoolName);

		formattedSchoolLocation = HTMLschoolLocation.replace("%data%", educationArray.location);
		$(".education-entry:last").append(formattedSchoolLocation);

		formattedSchoolMajor = HTMLschoolMajor.replace("%data%", educationArray.majors);
		$(".education-entry:last").append(formattedSchoolMajor);

		formattedSchoolDates = HTMLschoolDates.replace("%data%", educationArray.graduationYear);
		$(".education-entry:last").append(formattedSchoolDates);

	}
};


var educationArray = education.schools;

displayEducation();

var work = {
	jobs: [
		{
			"employer": "Fat Cats Inc",
			"title": "Top Dog",
			"location": "Cuba",
			"dates": "2015",
			"description": "Top dog at Fat Cats Inc. Specialising in cigars and champagne for rich white catitalists."
		},
		{
			"employer": "Space Kittens Against Neo-Liberalism",
			"title": "Mother Kitteh",
			"location": "Russia",
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
},
{
	"title": "Kitties and Chickies Unite for Change",
	"dates": 2014,
	"description": "A solidarity project for cats who want to use their priviledge to help chickens living in poor and overcrowded conditions.",
	"images": "images/catAndChook.jpg"
}
	]
};


 var skills = ["Meow Skillz", "space-travel", "alternative purring techniques", "Neo-liberal catitalism"];

 var bio = {
 	name: "Lizzie LaShark",
 	role: "Student Web Developer",
 	contacts: {
 		location: "Auckland NZ",
  	},
 	contactInfo: { 
	 	"email": "Lizzie@lizzielashark.email",
	 	"twitter": "@lizzielashark",
	 	"github": "LizzieLaShark",
	 	"location": "Aotearoa / New Zealand"
	 },
 	picture: "images/fatCat.gif",
 	welcomeMessage: "Kitteh got back",
 	skills: skills
 };


var displayTwitter = function() {
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contactInfo.twitter);
	$("#header").append(formattedTwitter);
};
var displayGitHub = function() {
	var formattedGitHub = HTMLgithub.replace("%data%", bio.contactInfo.github);
	$("#header").append(formattedGitHub);
};

displayTwitter();
displayGitHub();

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
// var displayTwitter = function() {
// 	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contactInfo.[1]);
// 	$("#header").append(formattedTwitter);
// };

// var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';

// displayContactDeets();

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


	// $(document).click(function(loc) {
	// 	 var x = loc.pageX;
	// 	 var y = loc.pageY;

	// 	 logClicks(x,y);
	// });


var inName = function(){

	var headerElement = document.getElementById('name');
	var name = headerElement.innerText;

	name = name.split(" ");
	name[1] = name[1].toUpperCase(); 
	return name[0] + " " + name[1];
};

// var headerElement = document.getElementById('name');
// var headerName = headerElement.innerText;
// var newHeaderName = inName(headerName);
// headerElement.innerText = newHeaderName;

$('#main').append(internationalizeButton);

// $(document).ready(function() {
//   $('button').click(function() {

//   });
// });

projects.display = function() {
	for (project in projects.projects) {
	$("#projects").append(HTMLprojectStart);
	
	var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
	$(".project-entry:last").append(formattedprojectTitle);

	var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
	$(".project-entry:last").append(formattedprojectDates);

	var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
	$(".project-entry:last").append(formattedprojectDescription);

	if (projects.projects[project].images.length > 0) {
			var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
			$(".project-entry:last").append(formattedImage);
	}
}
};

projects.display();

$("#mapDiv").append(googleMap);