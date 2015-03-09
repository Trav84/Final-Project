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
__p += 'School Log In Page';

}
return __p
};

this["JST"]["assets/templates/studentLogIn.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += 'Student Log In Page';

}
return __p
};