this["JST"] = this["JST"] || {};

this["JST"]["assets/templates/about.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="about">\n\t<h1> Why Codify? </h1>\n\t<p> Codify exists because I believe code schools like the Iron Yard are a vital bridge to the future of education. These insututions are not only helping fulfill a need in the tech industry, but they also transform lives. They help people become creators and builders in their world rather than simply consumers and users. Programming and it\'s related skills allow individuals to bring their ideas to life and share them with the world. No other one skill has such a profound impact upon a person in our modern world.</p>\n\n\t<p> But code schools face a unique challenge. Many of those who enter their doors have little to no experience with programming in any shape or form. They come from all walks of lives - from all ages and backgrounds. Classes may have students ranging from industry veterans looking to freshen up or change skillsets to users whose backgrounds may have not emphasized even light computer use. This presents a peculiar challenge to these schools as they mold their students into developers from often a blank slate. </p>\n\n\t<p> Codify seeks to assist in basic core evaluation of students once they have been accepted into a code school. Codify provides the instructors and insututions detailed breakdowns of their student\'s and classes skills before they even show up day one. An instructor who has twelve weeks to rapidaly transform a pupil into a marketable developer has no time to spare. Codify gives them the information to help craft curriculum to each and every cohort that comes through their doors as well as target specific individuals weaknesses with additional pre-course work or assistance throughout.</p>\n</section>';

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
__p += '<section class="landing">\n\t<h1> Welcome to Codify! </h1>\n\t\t<a class="col-xs-12 col-sm-6 col-lg-6" ui-sref="studentLogIn"> <div class="push_button blue"> I\'m A Student </div> </a>\n\t\t<a class="col-xs-12 col-sm-6 col-lg-6" ui-sref="schoolLogIn"> <div class="push_button blue"> I\'m A Code School </div> </a>\n</section>\n';

}
return __p
};

this["JST"]["assets/templates/managePrograms.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="manage-programs">\n\t<h1> Program Management </h1>\n\t<div>\n\t\t<p> Here you can manage the programs that your school offers. Just enter the different programs or tracks you offer and click add. For example, you might add "Front End Development", "Web Design", "Python" or "iOS Development". </p>\n\t\t<div>\n\t\t\t<input ng-model="programAdded" type="text" placeholder="Program You Offer"> \n\t\t\t<button ng-click="addProgram(programAdded)"> \n\t\t\t\t<i class="fa fa-plus"></i> Add Program\n\t\t\t</button>\n\t\t\t<p class="program-display" ng-repeat="program in programs track by $index"> {{ program }} </p>\n\t\t\t<div>\n\t\t\t\t<button ng-click="saveClick()"> Save </button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>';

}
return __p
};

this["JST"]["assets/templates/manageStudents.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="manage-students">\n\t<section class="header">\n\t\t<h1> Student Management </h1>\n\t\t<h2 ng-bind="programName"> No Program Selected </h2>\n\t\t<select ng-change="changeName(programSelected)" ng-model="programSelected">\n\t\t\t<option> Front End Development </option>\n\t\t\t<option> Ruby on Rails </option>\n\t\t\t<option> Web Development & Design </option>\n\t\t</select>\n\t</section>\n\t<table>\n\t\t<tr>\n\t\t\t<th> Student</th>\n\t\t\t<th> Javascript </th>\n\t\t\t<th> Mac OSX Command Line </th>\n\t\t\t<th> Networking Basics </th>\n\t\t\t<th> Finished </th>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td> Travis Czerw </td>\n\t\t\t<td> <i class="fa fa-check-circle-o "></i> </td>\n\t\t\t<td> <i class="fa fa-check-circle-o "></i> </td>\n\t\t\t<td> <i class="fa fa-times-circle-o "></i> </td>\n\t\t\t<td> <i class="fa fa-times-circle-o "></i> </td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td> Jacob Burkhart </td>\n\t\t\t<td> <i class="fa fa-check-circle-o "></i> </td>\n\t\t\t<td> <i class="fa fa-times-circle-o "></i> </td>\n\t\t\t<td> <i class="fa fa-times-circle-o "></i> </td>\n\t\t\t<td> <i class="fa fa-times-circle-o "></i> </td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td> Student McStudent </td>\n\t\t\t<td> <i class="fa fa-check-circle-o "></i> </td>\n\t\t\t<td> <i class="fa fa-check-circle-o "></i> </td>\n\t\t\t<td> <i class="fa fa-check-circle-o "></i> </td>\n\t\t\t<td> <i class="fa fa-check-circle-o "></i> </td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td> Student McClassFace </td>\n\t\t\t<td> <i class="fa fa-times-circle-o "></i> </td>\n\t\t\t<td> <i class="fa fa-times-circle-o "></i></td>\n\t\t\t<td> <i class="fa fa-check-circle-o "></i> </td>\n\t\t\t<td> <i class="fa fa-times-circle-o "></i> </td>\n\t\t</tr>\n\t</table>\n</section>';

}
return __p
};

this["JST"]["assets/templates/manageTests.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="manage-tests">\n\t<section class="header">\n\t\t<h1 ng-bind="testName"> Test Suite Management </j1>\n\t</section>\n\t<p> Here you can manage which tests you have in each of your schools specific programs. First select the program you wish to manage, then select to either add or remove a test to that suite. </p>\n\t<span> Select a Program To Manage </span>\n\t<select ng-change="testChanged(testSelected)" ng-model="testSelected">\n  \t\t<option ng-repeat="program in retrievedPrograms"> {{ program.name }}</option>\n\t</select>\n\t<ul>\n\t\t<button ng-click="buttonClick(\'Add\')"> \n\t\t\t<i ng-hide="Add" class="fa fa-caret-right"></i> <i ng-show="Add" class="fa fa-caret-down"></i> Add Test\n\t\t</button>\n\t\t<button ng-repeat="test in retrievedTests" class="test" ng-show="Add"> {{ test.name }} </button>\n\t\t<button ng-click="buttonClick(\'Remove\')">\n\t\t\t<i ng-hide="visible" class="fa fa-caret-right"></i> <i ng-show="visible" class="fa fa-caret-down"></i> Remove Test \n\t\t</button>\n\t\t<button ng-click="buttonClick(\'Create\')"> \n\t\t\t<i ng-hide="visible" class="fa fa-caret-right"></i> <i ng-show="visible" class="fa fa-caret-down"></i> Create Custom Test \n\t\t</button>\n\t\t<button class="test" ng-show="Create"> Coming Soon! </button>\n\t</ul>\n</section>';

}
return __p
};

this["JST"]["assets/templates/schoolDashboard.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="school-dashboard">\n\t<h1> Welcome {{ currentUser }} </h1>\n\t<nav>\n\t\t<a ui-sref="manageTests"> Manage Test Suites </a>\n\t\t<a ui-sref="managePrograms"> Manage School Programs </a>\n\t\t<a ui-sref="#"> Add Student </a>\n\t\t<a ui-sref="#"> Manage Students </a>\n\t</nav>\n</section>';

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
__p += '<section class="school-register">\n\t<form ng-submit="schoolRegister(username, email, password)">\n\t\t<div>\n\t\t\t<h3> Enter your instution\'s name </h3>\n\t\t\t<input ng-model="username" type="text" placeholder="School Name">\n\t\t</div>\n\t\t<div>\n\t\t\t<h3> Enter your email </h3>\n\t\t\t<input ng-model="email" type="text" placeholder="Email">\n\t\t</div>\n\t\t<div>\n\t\t\t<h3> Enter a password. It must be at least 8 characters long. </h3>\n\t\t\t<input ng-model="password" type="password" placeholder="Password">\n\t\t</div>\n\t\t<button> Register New Code School </button>\n\t</form>\n</section>\n';

}
return __p
};

this["JST"]["assets/templates/studentDashboard.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="student-dash">\n\t<h2> Welcome {{ studentName }}</h2>\n\t<h3> A brand new student in {{ studentProgram }} </h3>\n\t<p> You are here because you\'ve been accepted into your code school and are about to embark on a new journey. Congratulations! Your school has selected a set of simple assessment tests for you to complete so they can better understand the basic skill set you are bringing into class. This helps them tailor their cirriculum and course work to better suit the needs of you and your fellow classmates. Just click on a test below to get started. </p> \n\t<div>\n\t\t<button ng-click="testClick(test.id)" class="col-xs-12 test-display" ng-repeat="test in tests"> {{ test.name }} </button>\n\t</div>\n</section>';

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
__p += '<section class="student-login">\n\t<h1> Hi! </h1>\n\t<p> This process is designed to be as simple and painless for you as possible. All you need to do is enter the key that was emailed to you in the space below. Once in, you\'ll have some assessment tests to take. Don\'t stress over the questions or panic if you don\'t know the answers. No one expects you to be awesome at programing or be a computer whiz - that\'s why you are entering a code school! We are just here to help your school understand where you are in terms of your basic skills. </p>\n\t<section class="login-area"> \n\t\t<h2> Please enter the key you were emailed to log in </h2>\n\t\t<form ng-submit="studentLoginSubmit(uniqueKey)">\n\t\t\t<input ng-model="uniqueKey" type="text" placeholder="Key">\n\t\t\t<div>\n\t\t\t\t<button> Log In </button>\n\t\t\t</div>\n\t\t</form>\n\t\t<span ng-bind="errorMsg"> </span>\n\t</section>\n</section>';

}
return __p
};

this["JST"]["assets/templates/studentResults.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="student-results">\n\t<section class="header">\n\t\t<h1> Travis Czerw </h1>\n\t</section>\n\t<h2> Front End Development </h2>\n\t<section class="results">\n\t\t<div class="results-row">\n\t\t\t<div class="test-name"></div>\n\t\t\t<div>\n\t\t\t\t<p class="category weak" title="Weak means a score of 25% or less"> Weak </p>\n\t\t\t\t<p class="category moderate" title="Moderate means a score between 25% and 75%"> Moderate </p>\n\t\t\t\t<p class="category last strong" title="Strong means a score of 75% or more"> Strong </p>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="results-row">\n\t\t\t<div class="test-name"> JavaScript Assessment: </div>\n\t\t\t<div class="stretchRight box">  </div>\n\t\t</div>\n\t\t<div class="results-row">\n\t\t\t<div class="test-name"> Mac OSX Command Line: </div>\n\t\t\t<div class="stretchRight box two"> </div>\n\t\t</div>\n\t\t<div class="results-row">\n\t\t\t<div class="test-name"> Basic Networking: </div>\n\t\t\t<div class="stretchRight box three">  </div>\n\t\t</div>\n</section>';

}
return __p
};

this["JST"]["assets/templates/test.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="test">\n\t<h1 ng-bind="title"> [Test Name] </h1>\n\t<h2> {{question}}</h2>\n\t<div class="choice-box">\n\t\t<div ng-repeat="choice in choices" class="col-xs-12 push_button blue" ng-click="choiceClick(choice.answer)"> {{ choice.displayText }} </div>\n\t</div>\n</section>';

}
return __p
};

this["JST"]["assets/templates/testEnd.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="test-end">\n\t<h1> You\'re all done! </h1>\n\t<p> First off - don\'t stress about how well you did. These questions are for your instructors to have a better grasp on your skills coming into program, not to disqualify or worry you. </p>\n\t<p> If there are more assessements assigned to you, you can return to the dashboard to complete them. </P>\n\t<p> If not, we wish you the best of luck on your journey as you enter your program. We look forward to seeing all the awesome things you come up with and build! Your input will be used by your school and instructors to help talior cirriculum and course work with the needs of you and your fellow students in mind. <p>\n\t<div>\n\t\t<button ng-click="buttonClick()"> Back to Dashboard </button>\n\t</div>\n</section>';

}
return __p
};