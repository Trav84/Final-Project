# Student Eval - CodeEval - Codify

## Description

I am building Student Eval because I believe code schools like the Iron Yard are a vital bridge to the future of education. These insututions are not only helping fulfill a need in the tech industry, but they also transform lives and help people become creators and builders in their world rather than simply consumers and users. Programming and it's related skills allow individuals to bring their ideas to life - and share them with the world. No other one skill has such a profound impact upon a person in our modern world. 

But code schools face a unique challenge. Many of those who enter their doors have little to no experience with programming in any shape or form. They come from all walks of lives - from all ages and backgrounds. Classes may have students ranging from industry veterans looking to freshen up or change skillsets to users whose backgrounds may have not ehmphasized even light computer use. This presents a peculiar challenge to these schools as they mold their students into developers from often a blank slate. 

Student Eval seeks to assist in basic core evaluation of students once they have been accepted into a code school. Student Eval provides the instructors and insututions detailed breakdowns of their student's and clsses skills before they even show up for day one. An instructor who has twelve weeks to rapidaly transform a pupil into a marketable developer has no time to spare. Student Eval gives them the information to help craft cirriculum to each and every cohert that comes through their doors as well as target specific individuals weaknesses with additional pre-course work or assistance throughout. 

## Wire Frames

## User Stories

https://trello.com/b/7VdYtPS1/final-project

## Data Models

**Student Model** |
----------------- |
school : string, required | 
name : string, required |
email: string, required, unique |
program : string, required |
login key : string, required, unique |
tests complete : boolean, required |

The student model will track an individual student. They will be able to log into the site with a unique key sent to them and then take tests assigned to them by their school. There will be many students to one school (one to many relation). The only information a student will enter is their key and that will need to be verified. The rest is managed for them. Validation will be done on the front-end by angular.


**Test Results Model** |
---------------------- |
test name: string, required, unique |
questions: array, required |
results: array, required |


**School Model** |
---------------- |
name: string, required, unique |
programs: array, required |
username: string, required, unique |
password: string, required, unique |
email: string, required, unique |

The school model will track the information about a specific code school. The school will be able to log in and manage their students/tests. There will be one school for many students (one to many relation). The password and email will need to be verified (strong enough password, valid email). The rest needs to be verified that they are valid inputs (not empety strings or null). Validation will be done on the front-end by angular.

## API/Framework/Library List

Libraries/Frameworks |
-------------------- |
Database: Postgres |
Backend : Sails.js |
Node Library: https://github.com/andris9/Nodemailer |
MCV Framework: Angular.js |
Angular:  Angular-ui-router |
Library: validator.js |
Library: lodash.js |

## Contact Information

------------------------------------------- |
Email: travis.czerw@gmail.com |
Twitter: https://twitter.com/TRexCzerw |
linkedIn: www.linkedin.com/in/TravisCzerw |




