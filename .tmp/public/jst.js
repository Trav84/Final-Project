this["JST"] = this["JST"] || {};

this["JST"]["assets/templates/about.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="about">\n\t<h1> Why Codify? </h1>\n\t<p> Codify exists because I believe code schools like the Iron Yard are a vital bridge to the future of education. These insututions are not only helping fulfill a need in the tech industry, but they also transform lives and help people become creators and builders in their world rather than simply consumers and users. Programming and it\'s related skills allow individuals to bring their ideas to life and share them with the world. No other one skill has such a profound impact upon a person in our modern world.</p>\n\n\t<p> But code schools face a unique challenge. Many of those who enter their doors have little to no experience with programming in any shape or form. They come from all walks of lives - from all ages and backgrounds. Classes may have students ranging from industry veterans looking to freshen up or change skillsets to users whose backgrounds may have not ehmphasized even light computer use. This presents a peculiar challenge to these schools as they mold their students into developers from often a blank slate. </p>\n\n\t<p> Codify seeks to assist in basic core evaluation of students once they have been accepted into a code school. Codify provides the instructors and insututions detailed breakdowns of their student\'s and clsses skills before they even show up for day one. An instructor who has twelve weeks to rapidaly transform a pupil into a marketable developer has no time to spare. Codify gives them the information to help craft cirriculum to each and every cohert that comes through their doors as well as target specific individuals weaknesses with additional pre-course work or assistance throughout.</p>\n</section>';

}
return __p
};

this["JST"]["assets/templates/codeSchools.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class=\'code-schools\'>\n\t<h1> Check Out Some Code Schools </h1>\n\t<p> Just a smattering of code schools, more are springing up everyday. If you\'re interested in breaking into the tech industry and getting started in a whole new career, check these places out. </p>\n\n\t<nav>\n\t\t<div class="dojo">  </div> \n\t\t<div class="flat">  </div> \n\t\t<div class="ga">  </div> \n\t\t<div class="makers">  </div> \n\t\t<div class="boot">  </div> \n\t\t<div class="hack">  </div> \n\t\t<div class="iron">  </div> \n\t</nav>\n</section>';

}
return __p
};

this["JST"]["assets/templates/landing.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="landing">\n\t<section class="wrapper">\n\t\t<a ui-sref="studentLogIn"> <div> I\'m A Student </div> </a>\n\t\t<a ui-sref="schoolLogIn"> <div> I\'m A Code School </div> </a>\n\t</section>\n</section>\n';

}
return __p
};

this["JST"]["assets/templates/manageStudents.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '';

}
return __p
};

this["JST"]["assets/templates/manageTests.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="manage-tests">\n\t<section class="header">\n\t\t<h1 ng-bind="testName"> Test Suite Management </j1>\n\t</section>\n\t<p> Here you can manage which tests you have in each of your schools specific programs. First select the program you wish to manage, then select to either add or remove a test to that suite. </p>\n\t<span> Select a Suite To Manage </span>\n\t<select ng-change="testChanged(testSelected)" ng-model="testSelected">\n  \t\t<option> Front End Development </option>\n\t\t<option> Ruby On Rails </option>\n\t\t<option> Web Design </option>\n\t\t<option> iOS Development </option>\n\t</select>\n\t<ul>\n\t\t<button ng-click="buttonClick(\'Add\')"> \n\t\t\t<i ng-hide="Add" class="fa fa-caret-right"></i> <i ng-show="Add" class="fa fa-caret-down"></i> Add Test\n\t\t </button>\n\t\t<button ng-click="buttonClick(\'Remove\')">\n\t\t\t<i ng-hide="visible" class="fa fa-caret-right"></i> <i ng-show="visible" class="fa fa-caret-down"></i> Remove Test \n\t\t</button>\n\t\t<button ng-click="buttonClick(\'Create\')"> \n\t\t\t<i ng-hide="visible" class="fa fa-caret-right"></i> <i ng-show="visible" class="fa fa-caret-down"></i> Create Custom Test \n\t\t</button>\n\t</ul>\n</section>';

}
return __p
};

this["JST"]["assets/templates/schoolDashboard.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="school-dashboard">\n\t<h1> Welcome {{ currentUser }} </h1>\n\t<nav>\n\t\t<a ui-sref="manageTests"> Manage Test Suites </a>\n\t\t<a ui-sref="#"> Add Student </a>\n\t\t<a ui-sref="#"> Manage Students </a>\n\t</nav>\n</section>';

}
return __p
};

this["JST"]["assets/templates/schoolLogIn.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="school-login">\n\t<form ng-submit="schoolLogin(user)">\n\t\t<input ng-model="user.email" type="text" placeholder="Email">\n\t\t<input ng-model="user.password" type="password" placeholder="Password">\n\t\t<button> Log In </button>\n\t</form>\n\n\t<button ng-click="schoolRegisterClick()"> Register New Code School </button>\n\n\t<h1 ng-bind="currentUser"> </h1>\n</section>';

}
return __p
};

this["JST"]["assets/templates/schoolRegister.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="school-register">\n\t<form ng-submit="schoolRegister(username, email, password)">\n\t\t<div>\n\t\t\t<h3> Enter your instution\'s name </h3>\n\t\t\t<input ng-model="username" type="text" placeholder="School Name">\n\t\t</div>\n\t\t<div>\n\t\t\t<h3> Enter your email </h3>\n\t\t\t<input ng-model="email" type="text" placeholder="Email">\n\t\t</div>\n\t\t<!-- <div>\n\t\t\t<h3> Enter the number of different programs of tracks you offer (i.e. 4 or 5). </h3>\n\t\t\t<input ng-change="programNumber(numOfPrograms)" ng-model="numOfPrograms" type="text" placeholder="6">\n\t\t\t<h3> Enter the different programs or tracks you offer. For example, you might add "Front End Development", "Web Design", "Python" or "iOS Development". </h3>\n\t\t\t<div ng-repeat="program in programs track by $index">\n\t\t\t\t Program: <input type="text" placeholder="Program/Track You Offer"> \n\t\t\t</div>\n\t\t</div> -->\n\t\t<div>\n\t\t\t<h3> Enter a password. It must be at least 8 characters long. </h3>\n\t\t\t<input ng-model="password" type="password" placeholder="Password">\n\t\t</div>\n\t\t<button> Register New Code School </button>\n</section>\n';

}
return __p
};

this["JST"]["assets/templates/studentDashboard.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="student-dash">\n\t<h2> Welcome [name] </h2>\n\t<p> You are here because you\'ve been accepted into a code school and are about to embark on a new journey.Congratulations! [School Name] has selected a set of simple assessment tests for you to complete so they can better understand the basic skill set you are bringing into class. This helps them tailor their cirriculum and course work to better suit the needs of you and your fellow classmates. Just click on a test below to get started. </p> \n\t<button ng-click="testClick(test.id)" class="test" ng-repeat="test in tests"> {{ test.name }} </button>\n</section>';

}
return __p
};

this["JST"]["assets/templates/studentInfo.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '';

}
return __p
};

this["JST"]["assets/templates/studentLogIn.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="student-login">\n\t<h2> Please enter the key you were emailed to log in </h2>\n\t<form ng-submit="studentLoginSubmit(uniqueKey)">\n\t\t<input ng-model="uniqueKey" type="text" placeholder="Key">\n\t\t<button> Log In </button>\n\t</form>\n\t<p ng-bind="errorMsg"> </p>\n</section>';

}
return __p
};

this["JST"]["assets/templates/test.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="test">\n\t<h1 ng-bind="title"> [Test Name] </h1>\n\t<h2> 1. {{question}}</h2>\n\t<section class="wrapper">\n\t\t<ul ng-repeat="choice in choices">\n\t\t\t<div ng-click="choiceClick(choice.answer)"> {{ choice.displayText }} </div>\n\t\t</ul>\n\t</section>\n</section>';

}
return __p
};

this["JST"]["assets/templates/testEnd.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="test-end">\n\t<h1> You\'re all done! </h1>\n\t<p> If there are more assessements assigned to you, you can return to the dashboard to complete them. </P>\n\t<p> If not, we wish you the best of luck on your journey as you enter your program. We look forward to seeing all the awesome things you come up with and build! Your input will be used by your school and instructors to help talior cirriculum and course work with the needs of you and your fellow students in mind. <p>\n\t<div>\n\t\t<button ng-click="buttonClick()"> Back to Dashboard </button>\n\t</div>\n</section>';

}
return __p
};