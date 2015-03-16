this["JST"] = this["JST"] || {};

this["JST"]["assets/templates/about.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="about">\n\t<h1> Why Codify? </h1>\n\t<p> Codify exists because I believe code schools like the Iron Yard are a vital bridge to the future of education. These insututions are not only helping fulfill a need in the tech industry, but they also transform lives. They help people become creators and builders in their world rather than simply consumers and users. Programming and it\'s related skills allow individuals to bring their ideas to life and share them with the world. No other one skill has such a profound impact upon a person in our modern world.</p>\n\n\t<p> But code schools face a unique challenge. Many of those who enter their doors have little to no experience with programming in any shape or form. They come from all walks of lives - from all ages and backgrounds. Classes may have students ranging from industry veterans looking to freshen up or change skillsets to users whose backgrounds may have not emphasized even light computer use. This presents a peculiar challenge to these schools as they mold their students into developers from often a blank slate. </p>\n\n\t<p> Codify seeks to assist in basic core evaluation of students once they have been accepted into a code school. Codify provides the instructors and insututions detailed breakdowns of their student\'s and classes skills before they even show up day one. An instructor who has twelve weeks to rapidaly transform a pupil into a marketable developer has no time to spare. Codify gives them the information to help craft curriculum to each and every cohort that comes through their doors as well as target specific individuals weaknesses with additional pre-course work or assistance throughout.</p>\n</section>';

}
return __p
};

this["JST"]["assets/templates/addStudent.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="add-student">\n\t<h1> Add Student </h2>\n\t<form class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">\n\t\t<div class="form-group">\n\t\t\t<label for="student-name">Student\'s Name </label>\n\t\t\t<input type="text" class="form-control" id="student-name" placeholder="Student Name">\n\t\t</div>\n\t\t<div class="form-group">\n\t\t\t<label for="student-email">Student\'s Email </label>\n\t\t\t<input type="text" class="form-control" id="student-email" placeholder="Email">\n\t\t</div>\n\t\t<!-- Single button -->\n\n\t\t\t<div class="btn-group" dropdown is-open="status.isopen">\n\t\t\t\t<button type="button" class="btn btn-primary dropdown-toggle" dropdown-toggle ng-disabled="disabled">\n\t\t\t\tProgram <span class="caret"></span>\n\t\t\t\t</button>\n\t\t\t<ul class="dropdown-menu" role="menu">\n\t\t\t\t<li><a href="#">Action</a></li>\n\t\t\t\t<li><a href="#">Another action</a></li>\n\t\t\t\t<li><a href="#">Something else here</a></li>\n\t\t\t\t<li class="divider"></li>\n\t\t\t\t<li><a href="#">Separated link</a></li>\n\t\t\t</ul>\n\t\t\t</div>\n\n\t\t<div class="centered">\n\t\t\t<button type="submit" class="btn btn-default add-student-btn"> Add Student </button>\n\t\t</div>\n\t</form>\n</section>';

}
return __p
};

this["JST"]["assets/templates/codeSchools.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class=\'code-schools\'>\n\t<h1> Check Out Some Code Schools </h1>\n\t<h2>  If you\'re interested in breaking into the tech industry and getting started in a whole new career, check these places out. </h2>\n\t<nav class="col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">\n\t\t<a ng-href="http://www.codingdojo.com/"> \n\t\t\t<div class="dojo"> </div> \n\t\t</a> \n\t\t<a ng-href="http://flatironschool.com/"> \n\t\t\t<div class="flat">  </div> \n\t\t</a>\n\t\t<a ng-href="http://theironyard.com/"> \n\t\t\t<div class="iron">  </div> \n\t\t</a>\n\t\t<a ng-href="https://generalassemb.ly/"> \n\t\t\t<div class="ga">  </div> \n\t\t</a>\n\t\t<a ng-href="http://www.makersquare.com/"> \n\t\t\t<div class="makers">  </div> \n\t\t</a>\n\t\t<a ng-href="http://devbootcamp.com/"> \n\t\t\t<div class="boot">  </div> \n\t\t</a>\n\t\t<a ng-href="http://www.hackreactor.com/"> \n\t\t\t<div class="hack">  </div> \n\t\t</a>\n\t\t<a ng-href="http://launchacademy.com"> \n\t\t\t<div class="launch">  </div> \n\t\t</a>\n\t\t<a ng-href="http://thinkful.com"> \n\t\t\t<div class="think">  </div> \n\t\t</a>\n\t\t<a ng-href="http://anyonecanlearntocode.com/"> \n\t\t\t<div class="anyone">  </div> \n\t\t</a>\n\t</nav>\n</section>';

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
__p += '<section class="manage-programs">\n\t<h1> Program Management </h1>\n\t<div>\n\t\t<p> Here you can manage the programs that your school offers. Just enter the different programs or tracks you offer and click add. For example, you might add "Front End Development", "Web Design", "Python" or "iOS Development". </p>\n\t\t<form class="col-xs-9 col-sm-11 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">\n\t\t\t<label for="programOffered"> Program Name </label>\n\t\t\t<input ng-model="programAdded" type="text" id="programOffered" class="form-control" placeholder="Program You Offer">  \n\t\t\t<div class="program-display blue" ng-repeat="program in programs track by $index"> {{ program }} </div>\n\t\t\t<div class="centered">\n\t\t\t\t<button ng-click="saveClick()" class="save btn btn-default"> Save </button>\n\t\t\t\t<div class="message" ng-bind="confirmMsg"> </div>\n\t\t\t</div>\n\t\t</form>\n\t\t<button ng-click="addProgram(programAdded)" class="btn btn-default col-xs-2 col-sm-1"> \n\t\t\t<i class="fa fa-plus"></i> \n\t\t</button>\n\t</div>\n</section>';

}
return __p
};

this["JST"]["assets/templates/manageStudents.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="manage-students">\n\t<section class="header">\n\t\t<h1> Student Management </h1>\n\t\t<h2 ng-bind="programName"> No Program Selected </h2>\n\t\t<select ng-change="changeName(programSelected)" ng-model="programSelected">\n\t\t\t<option>Front End Development</option>\n\t\t\t<option>Ruby on Rails</option>\n\t\t\t<option>Web Development & Design</option>\n\t\t</select>\n\t</section>\n\t<table>\n\t\t<tr>\n\t\t\t<th> Student</th>\n\t\t\t<th> Javascript </th>\n\t\t\t<th> Mac OSX Command Line </th>\n\t\t\t<th> Networking Basics </th>\n\t\t\t<th> Finished </th>\n\t\t</tr>\n\t\t<tr ng-show="showTable">\n\t\t\t<td class="student" ng-click="studentResults(\'Travis Czerw\')"> Travis Czerw </td>\n\t\t\t<td> <i class="fa fa-check-circle-o "></i> </td>\n\t\t\t<td> <i class="fa fa-check-circle-o "></i> </td>\n\t\t\t<td> <i class="fa fa-times-circle-o "></i> </td>\n\t\t\t<td> <i class="fa fa-times-circle-o "></i> </td>\n\t\t</tr>\n\t\t<tr ng-show="showTable">\n\t\t\t<td class="student" ui-sref="studentResults(\'Jacob Burkhart\')"> Jacob Burkhart </td>\n\t\t\t<td> <i class="fa fa-check-circle-o "></i> </td>\n\t\t\t<td> <i class="fa fa-times-circle-o "></i> </td>\n\t\t\t<td> <i class="fa fa-times-circle-o "></i> </td>\n\t\t\t<td> <i class="fa fa-times-circle-o "></i> </td>\n\t\t</tr>\n\t\t<tr ng-show="showTable">\n\t\t\t<td class="student" ui-sref="studentResults"> Student McStudent </td>\n\t\t\t<td> <i class="fa fa-check-circle-o "></i> </td>\n\t\t\t<td> <i class="fa fa-check-circle-o "></i> </td>\n\t\t\t<td> <i class="fa fa-check-circle-o "></i> </td>\n\t\t\t<td> <i class="fa fa-check-circle-o "></i> </td>\n\t\t</tr>\n\t\t<tr ng-show="showTable">\n\t\t\t<td class="student" ui-sref="studentResults"> Student McClassFace </td>\n\t\t\t<td> <i class="fa fa-times-circle-o "></i> </td>\n\t\t\t<td> <i class="fa fa-times-circle-o "></i></td>\n\t\t\t<td> <i class="fa fa-check-circle-o "></i> </td>\n\t\t\t<td> <i class="fa fa-times-circle-o "></i> </td>\n\t\t</tr>\n\t\t<tr ng-show="showTable1">\n\t\t\t<td class="student" ui-sref="studentResults"> Student McStudent </td>\n\t\t\t<td> <i class="fa fa-check-circle-o "></i> </td>\n\t\t\t<td> <i class="fa fa-check-circle-o "></i> </td>\n\t\t\t<td> <i class="fa fa-check-circle-o "></i> </td>\n\t\t\t<td> <i class="fa fa-check-circle-o "></i> </td>\n\t\t</tr>\n\t\t<tr ng-show="showTable1">\n\t\t\t<td class="student" ui-sref="studentResults"> Student McClassFace </td>\n\t\t\t<td> <i class="fa fa-times-circle-o "></i> </td>\n\t\t\t<td> <i class="fa fa-times-circle-o "></i></td>\n\t\t\t<td> <i class="fa fa-check-circle-o "></i> </td>\n\t\t\t<td> <i class="fa fa-times-circle-o "></i> </td>\n\t\t</tr>\n\t</table>\n\t<div>\n\t\t<div ng-bind="message"> </div>\n\t</div>\n</section>';

}
return __p
};

this["JST"]["assets/templates/manageTests.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="manage-tests">\n\t<section class="header">\n\t\t<h1 ng-bind="testName"> Test Suite Management </j1>\n\t</section>\n\t<p> Here you can manage which tests you have in each of your schools specific programs. First select the program you wish to manage, then select to either add or remove a test to that suite. </p>\n\t<span> Select a Program To Manage </span>\n\t<select ng-change="testChanged(testSelected)" ng-model="testSelected">\n  \t\t<option ng-repeat="program in retrievedPrograms"> {{ program.name }}</option>\n\t</select>\n\t<ul>\n\t\t<button ng-click="buttonClick(\'Add\')"> \n\t\t\t<i ng-hide="Add" class="fa fa-caret-right"></i> <i ng-show="Add" class="fa fa-caret-down"></i> Add Test\n\t\t</button>\n\t\t<button ng-repeat="test in retrievedTests" class="test" ng-show="Add"> {{ test.name }} </button>\n\t\t<button ng-click="buttonClick(\'Remove\')">\n\t\t\t<i ng-hide="visible" class="fa fa-caret-right"></i> <i ng-show="visible" class="fa fa-caret-down"></i> Remove Test \n\t\t</button>\n\t\t<button class="test" ng-show="Remove"> Coming Soon! </button>\n\t\t<button ng-click="buttonClick(\'Create\')"> \n\t\t\t<i ng-hide="visible" class="fa fa-caret-right"></i> <i ng-show="visible" class="fa fa-caret-down"></i> Create Custom Test \n\t\t</button>\n\t\t<button class="test" ng-show="Create"> Coming Soon! </button>\n\t</ul>\n</section>';

}
return __p
};

this["JST"]["assets/templates/schoolDashboard.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="school-dashboard">\n\t<h1> Welcome {{ currentUser }} </h1>\n\t<nav>\n\t\t<a ui-sref="manageTests"> Manage Test Suites </a>\n\t\t<a ui-sref="managePrograms"> Manage School Programs </a>\n\t\t<a ui-sref="addStudent"> Add Student </a>\n\t\t<a ui-sref="manageStudents"> Manage Students </a>\n\t</nav>\n</section>';

}
return __p
};

this["JST"]["assets/templates/schoolLogIn.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="school-login">\n\t<form class="col-xs-12 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3 row" ng-submit="schoolLogin(user.email, user.password)">\n\t\t<div class="form-group">\n\t \t\t<label for="inputEmail">Email address</label>\n\t\t\t<input class="form-control" ng-model="user.email" type="text" id="inputEmail" placeholder="Email">\n\t\t\t<p ng-bind="emailErrorMsg"> </p>\n\t\t</div>\n\t\t<div class="form-group">\n\t\t\t<label for="inputPassword">Password</label>\n\t\t\t<input class="form-control" ng-model="user.password" type="password" id="inputPassword" placeholder="Password">\n\t\t\t<p ng-bind="passErrorMsg"> </p>\n\t\t</div>\n\t\t<div class="text-center">\n\t\t\t<button class="btn btn-default"> Log In </button>\n\t\t\t<p ng-bind="loginErrorMsg"> </p>\n\t\t</div>\n\t</form>\n\t<div class="text-center row col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">\n\t\t<button type="button" class="btn btn-default register-button" ng-click="schoolRegisterClick()"> Register New Code School </button>\n\t</div>\n</section>';

}
return __p
};

this["JST"]["assets/templates/schoolRegister.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="school-register">\n\t<h1> Register A New School </h1>\n\t<form ng-submit="schoolRegister(username, email, password)" class="col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">\n\t\t<label for="user-name"> School Name </label>\n\t\t<input class="form-control" ng-model="username" id="user-name" type="text" placeholder="School Name">\n\t\t<p ng-bind="nameErrorMsg"> </p>\n\t\t<label for="email-input"> Email </label>\n\t\t<input class="form-control" ng-model="email" type="text" id="email-input" placeholder="Email">\n\t\t<p ng-bind="emailErrorMsg"> </p>\n\t\t<label for="password-input"> Password </label>\n\t\t<input class="form-control" ng-model="password" type="password" id="password-input" placeholder="Must be at least 8 characters">\n\t\t<p ng-bind="passErrorMsg"> </p>\n\t\t<div class="centered">\n\t\t\t<button class="btn btn-default centered"> Register New Code School </button>\n\t\t\t<p ng-bind="registerErrorMsg"> </p>\n\t\t</div>\n\t</form>\n</section>\n';

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

this["JST"]["assets/templates/studentLogIn.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="student-login">\n\t<p> This process is designed to be as simple and painless for you as possible. All you need to do is enter the key that was emailed to you in the space below. Once in, you\'ll have some assessment tests to take. Don\'t stress over the questions or panic if you don\'t know the answers. No one expects you to be awesome at programing or be a computer whiz. </p>\n\t<section class="login-area col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"> \n\t\t<form ng-submit="studentLoginSubmit(uniqueKey)">\n\t\t\t<input class="form-control" ng-model="uniqueKey" type="text" placeholder="Key">\n\t\t\t<div>\n\t\t\t\t<button class="blue"> Log In </button>\n\t\t\t</div>\n\t\t</form>\n\t\t<span ng-bind="errorMsg"> </span>\n\t</section>\n</section>';

}
return __p
};

this["JST"]["assets/templates/studentResults.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="student-results">\n\t<section class="header">\n\t\t<h1> Travis Czerw </h1>\n\t</section>\n\t<h2> Front End Development </h2>\n\t<div class="col-md-10 col-md-offset-1 progress-box">\n\t\t<p> JavaScript Assessment </p>\n\t\t<div class="progress">\n\t\t\t<div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">\n\t\t\t60%\n\t\t\t</div>\n\t\t</div>\n\t\t<p> Mac OSX Command Line </p>\n\t\t<div class="progress">\n\t\t\t<div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%;">\n\t\t\t40%\n\t\t\t</div>\n\t\t</div>\n\t\t<p> Basics of Networking </p>\n\t\t<div class="progress">\n\t\t\t<div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style="width: 90%;">\n\t\t\t90%\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!-- <section class="results">\n\t\t<div class="results-row">\n\t\t\t<div class="test-name"></div>\n\t\t\t<div>\n\t\t\t\t<p class="category weak" title="Weak means a score of 25% or less"> Weak </p>\n\t\t\t\t<p class="category moderate" title="Moderate means a score between 25% and 75%"> Moderate </p>\n\t\t\t\t<p class="category last strong" title="Strong means a score of 75% or more"> Strong </p>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="results-row">\n\t\t\t<div class="test-name"> JavaScript Assessment: </div>\n\t\t\t<div class="stretchRight box">  </div>\n\t\t</div>\n\t\t<div class="results-row">\n\t\t\t<div class="test-name"> Mac OSX Command Line: </div>\n\t\t\t<div class="stretchRight box two"> </div>\n\t\t</div>\n\t\t<div class="results-row">\n\t\t\t<div class="test-name"> Basic Networking: </div>\n\t\t\t<div class="stretchRight box three">  </div>\n\t\t</div>\n\t</section> -->\n</section>';

}
return __p
};

this["JST"]["assets/templates/test.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="test">\n\t<h1 ng-bind="title"> [Test Name] </h1>\n\t<h2> Question {{ questionNum}} : {{question}}</h2>\n\t<div class="choice-box">\n\t\t<div ng-repeat="choice in choices" class="col-xs-12 push_button blue" ng-click="choiceClick(choice.answer)"> {{ choice.displayText }} </div>\n\t</div>\n</section>';

}
return __p
};

this["JST"]["assets/templates/testEnd.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="test-end">\n\t<h1> Test Finished! </h1>\n\t<p> First off - don\'t stress about how well you did. These questions are for your instructors to have a better grasp on your skills coming into program, not to disqualify or worry you.\n\tIf there are more assessements assigned to you, you can return to the dashboard to complete them.\n\tIf not, we wish you the best of luck on your journey as you enter your program. We look forward to seeing all the awesome things you come up with and build! </p>\n\t<div>\n\t\t<button ng-click="buttonClick()"> Dashboard </button>\n\t</div>\n</section>';

}
return __p
};