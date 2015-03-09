this["JST"] = this["JST"] || {};

this["JST"]["assets/templates/landing.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="landing">\n\t<section class="wrapper">\n\t\t<a ui-sref="studentLogIn"> <div> I\'m A Student </div> </a>\n\t\t<a ui-sref="schoolLogIn"> <div> I\'m A Code School </div> </a>\n\t</section>\n</section>\n';

}
return __p
};

this["JST"]["assets/templates/schoolLogIn.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="school-login">\n\t<form>\n\t\t<input type="text" placeholder="Email">\n\t\t<input type="password" placeholder="Password">\n\t\t<button> Log In </button>\n\t</form>\n\n\t<button ng-click="schoolRegisterClick()"> Register New Code School </button>\n</section>';

}
return __p
};

this["JST"]["assets/templates/schoolRegister.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="school-register">\n\t<form>\n\t\t<div>\n\t\t\t<h3> Enter your instution\'s name </h3>\n\t\t\t<input type="text" placeholder="School Name">\n\t\t</div>\n\t\t<div>\n\t\t\t<h3> Enter your email </h3>\n\t\t\t<input type="text" placeholder="Email">\n\t\t</div>\n\t\t<div>\n\t\t\t<h3> Enter the different programs or tracks you offer. For example, you might add "Front End Development", "Web Design", "Python" or "iOS Development". </h3>\n\t\t\t<input type="text" placeholder="Programs/Tracks You Offer">\n\t\t</div>\n\t\t<input type="password" placeholder="Password">\n</section>';

}
return __p
};

this["JST"]["assets/templates/studentDashboard.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="student-dash">\n\t<h2> Welcome [name] </h2>\n\t<p> You are here because you\'ve been accepted into a code school and are about to embark on a new journey.Congratulations! [School Name] has selected a set of simple assessment tests for you to complete so they can better understand the basic skill set you are bringing into class. This helps them tailor their cirriculum and course work to better suit the needs of you and your fellow classmates. Just click on a test below to get started. </p> \n\t<button ng-click="testClick()" class="test"> Terminal Line Assessment </button>\n\t<button ng-click="testClick()" class="test"> JavaScript Assessment </button>\n</section>';

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