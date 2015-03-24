# Codify

## Description

I am building Codify because I believe code schools like the Iron Yard are a vital bridge to the future of education. These insututions are not only helping fulfill a need in the tech industry, but they also transform lives and help people become creators and builders in their world rather than simply consumers and users. Programming and it's related skills allow individuals to bring their ideas to life - and share them with the world. No other one skill has such a profound impact upon a person in our modern world. 

But code schools face a unique challenge. Many of those who enter their doors have little to no experience with programming in any shape or form. They come from all walks of lives - from all ages and backgrounds. Classes may have students ranging from industry veterans looking to freshen up or change skillsets to users whose backgrounds may have not ehmphasized even light computer use. This presents a peculiar challenge to these schools as they mold their students into developers from often a blank slate. 

Codify seeks to assist in basic core evaluation of students once they have been accepted into a code school. It provides the instructors and insututions detailed breakdowns of their student's and clsses skills before they even show up for day one. An instructor who has twelve weeks to rapidaly transform a pupil into a marketable developer has no time to spare. Codify gives them the information to help craft cirriculum to each and every cohert that comes through their doors as well as target specific individuals weaknesses with additional pre-course work or assistance throughout. 

## Wire Frames

Images of basic wire frames located in this root directory of this GitHub repo.

## User Stories

https://trello.com/b/7VdYtPS1/final-project

## Data Models

**Student Model** |
----------------- |
name : string, required |
email: string, required, unique |
login key : string, required, unique |
program : collection of Program model |
tests answers : collection of Student Answers models |

The student model will track an individual student. They will be able to log into the site with a unique key sent to them and then take tests assigned to them by their school. There will be many students to one school (one to many relation). The only information a student will enter is their key and that will need to be verified. The rest is managed for them. Validation will be done on the front-end by angular. Each student has a program associated with them, which is a one to many relation, and also a collection of answer models, that is also a one to many relation.


**Student Answer Model** |
---------------------- |
correct: boolean, required |
answer: string, required |
studentID: refers to a owning student model |
questioID: refers to the owning question model |
suiteID: refers to the owning test suite model |

Each time a student answers a test question, this model gets posted. This is so the results of a student can be tracked, stored, and caculated.


**Program Model** |
---------------- |
name: string, required, unique |
programID: refers to the registered user (the school) who owns this program |
stuites: a collection of test suite models associated with the program |
students: a collection of student models who are enrolled in the program |

The program model will track the information about a specific code schools program. A code school can have one or many program. Each program has students and tests associated with it dynamically.

**Suite Model** |
----------------|
name: string, required |
questions: collection of question models associated with the suite |
programs: collection of program models associated with the suite |

The Suite model are the tests that student's can take. Each test has questions assocaited with it as well as programs that have been assigned the test.

**Suite Questions Model** |
--------------------------|
title: string, required |
answer: integer, required |
owner: refers to a suite model that owns the test |
choices: a collection of question answer models |
student answers: a collection of student answer models |

The Suite Questions model are all the questions for the various tests. They are identifed with a specific test and also have student answers associated with them.

**Suite Answer Model** |
-----------------------|
answer: integer, required |
displayText: string, required |
suiteQuestionID: refers to which question model owns this model |

Each Suite Question model has 4 Suite Answer models (which are the question's possible answers). The model has which answer it is (from 1 to 4) and the text of the answer.

## API/Framework/Library List

Libraries/Frameworks |
-------------------- |
Database: Postgres |
Backend : Sails.js |
MCV Framework: Angular.js |
Angular:  Angular-ui-router |
Library: validator.js |
Library: lodash.js |
Library: jQuery |

## Contact Information

Email: travis.czerw@gmail.com 

Twitter: https://twitter.com/TRexCzerw 

linkedIn: www.linkedin.com/in/TravisCzerw 
