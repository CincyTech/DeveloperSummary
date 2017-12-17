(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var data = [{
  "Timestamp": "11/30/2017 20:44:41",
  "experience": "15+",
  "size": "100+",
  "salary": "$110,000.00",
  "happy": 5,
  "gender": "Male",
  "position": "Sr Software Enginner",
  "skills": "java, web services",
  "work": "I work remotely",
  "education": "Bachelors",
  "degree": "BS Electrical Engineering, minors math & cs "
}, {
  "Timestamp": "11/30/2017 20:59:23",
  "experience": "4-6",
  "size": "50-100",
  "salary": "$112,000.00",
  "happy": 4,
  "gender": "Male",
  "position": "Senior Software Engineer",
  "skills": "Ruby, JavaScript, Java, RabbitMQ",
  "work": "I work remotely",
  "education": "Bachelors",
  "degree": "Literature"
}, {
  "Timestamp": "11/30/2017 21:04:20",
  "experience": "2-4",
  "size": "1-5",
  "salary": "$60,000.00",
  "happy": 5,
  "gender": "Male",
  "position": "CEO",
  "skills": "Javascript",
  "work": "Work at a company in or around Cincinnati",
  "education": "Some college",
  "degree": ""
}, {
  "Timestamp": "11/30/2017 21:05:08",
  "experience": "6-8",
  "size": "10-50",
  "salary": "$110,000.00",
  "happy": 5,
  "gender": "Male",
  "position": "Front End Engineer",
  "skills": "Javascript, Node, Laravel, MySQL, NoSQL,  React, Redux, Ember",
  "work": "Work at a company in or around Cincinnati",
  "education": "Some college",
  "degree": ""
}, {
  "Timestamp": "11/30/2017 21:14:16",
  "experience": "4-6",
  "size": "100+",
  "salary": "$91,000.00",
  "happy": 4,
  "gender": "Male",
  "position": "Developer",
  "skills": "PHP, JavaScript, Python, Ruby, Elm, Java, Node, Golang",
  "work": "Work at a company in or around Cincinnati",
  "education": "Bachelors",
  "degree": "Computer Science"
}, {
  "Timestamp": "11/30/2017 21:28:40",
  "experience": "6-8",
  "size": "1-5",
  "salary": "$60,000.00",
  "happy": 4,
  "gender": "Male",
  "position": "Developer",
  "skills": "Javascript, Java, PHP, Android",
  "work": "Work at a company in or around Cincinnati",
  "education": "Some college",
  "degree": "Information Technology"
}, {
  "Timestamp": "11/30/2017 21:40:42",
  "experience": "15+",
  "size": "10-50",
  "salary": "$130,000.00",
  "happy": 4,
  "gender": "Male",
  "position": "Director (Senior Dev or something)",
  "skills": "SQL, Elixir, Ruby, JavaScript, Java, etc, etc.",
  "work": "Work at a company in or around Cincinnati",
  "education": "Bachelors",
  "degree": ""
}, {
  "Timestamp": "11/30/2017 21:44:29",
  "experience": "4-6",
  "size": "100+",
  "salary": "$115,000.00",
  "happy": 5,
  "gender": "Male",
  "position": "Developer",
  "skills": "JavaScript, C#, Java, Kotlin, SQL, React, docker, Git",
  "work": "Work at a company in or around Cincinnati",
  "education": "Bachelors",
  "degree": "Mathematics"
}, {
  "Timestamp": "11/30/2017 21:48:36",
  "experience": "0-1",
  "size": "1-5",
  "salary": "$49,000.00",
  "happy": 4,
  "gender": "Male",
  "position": "Front End Developer",
  "skills": "Javascript",
  "work": "Work at a company in or around Cincinnati",
  "education": "Some college",
  "degree": ""
}, {
  "Timestamp": "11/30/2017 22:08:57",
  "experience": "10-15",
  "size": "10-50",
  "salary": "$98,000.00",
  "happy": 4,
  "gender": "Male",
  "position": "Engineer",
  "skills": "JavaScript iOS java sql",
  "work": "Work at a company in or around Cincinnati",
  "education": "Some college",
  "degree": ""
}, {
  "Timestamp": "11/30/2017 23:31:54",
  "experience": "2-4",
  "size": "100+",
  "salary": "$83,000.00",
  "happy": 5,
  "gender": "Male",
  "position": "Developer",
  "skills": "JavaScript, CSS, Java, React, Angular",
  "work": "Work at a company in or around Cincinnati",
  "education": "Bachelors",
  "degree": "Mathematics"
}, {
  "Timestamp": "12/1/2017 0:22:30",
  "experience": "4-6",
  "size": "10-50",
  "salary": "$65,000.00",
  "happy": 4,
  "gender": "Male",
  "position": "Consultant",
  "skills": "C#, JS, SQL",
  "work": "Work at a company in or around Cincinnati",
  "education": "Bachelors",
  "degree": "Computer Science"
}, {
  "Timestamp": "12/1/2017 2:36:08",
  "experience": "2-4",
  "size": "6-10",
  "salary": "$90,000.00",
  "happy": 1,
  "gender": "Male",
  "position": "Principal Engineer",
  "skills": "Node, Go, AWS, React",
  "work": "Work at a company in or around Cincinnati",
  "education": "Bachelors",
  "degree": "IT"
}, {
  "Timestamp": "12/1/2017 7:21:03",
  "experience": "2-4",
  "size": "6-10",
  "salary": "$55,000.00",
  "happy": 3,
  "gender": "Female",
  "position": "Application Designer and Developer",
  "skills": "Front End Development, UI/UX Design/ CSS/SCSS/HTML, JavaScript, React",
  "work": "Work at a company in or around Cincinnati",
  "education": "Bachelors",
  "degree": "Bachelor of Fine Arts in Digital Art with Computer Science Minor"
}, {
  "Timestamp": "12/1/2017 7:51:39",
  "experience": "15+",
  "size": "10-50",
  "salary": "$120,000.00",
  "happy": 4,
  "gender": "Male",
  "position": "Senior Software Developer",
  "skills": "Ruby/JS/SQL",
  "work": "Work at a company in or around Cincinnati",
  "education": "Bachelors",
  "degree": "Information Technology/Accounting"
}, {
  "Timestamp": "12/1/2017 8:24:03",
  "experience": "10-15",
  "size": "100+",
  "salary": "$102,000.00",
  "happy": 4,
  "gender": "Male",
  "position": "Senior Software Developer",
  "skills": "Go, C, C++, Ruby, Perl, Design/Architecture, Ops",
  "work": "Work at a company in or around Cincinnati",
  "education": "Bachelors",
  "degree": "Computer Science"
}, {
  "Timestamp": "12/1/2017 8:35:01",
  "experience": "4-6",
  "size": "1-5",
  "salary": "$75,000.00",
  "happy": 5,
  "gender": "Male",
  "position": "CEO",
  "skills": "Name it.",
  "work": "Work at a company in or around Cincinnati",
  "education": "Masters",
  "degree": "AI"
}, {
  "Timestamp": "12/1/2017 8:40:39",
  "experience": "2-4",
  "size": "100+",
  "salary": "$57,000.00",
  "happy": 3,
  "gender": "Female",
  "position": "Software Developer",
  "skills": "Python/Django, C#/.NET",
  "work": "Work at a company in or around Cincinnati",
  "education": "Masters",
  "degree": "Spanish & Biology"
}, {
  "Timestamp": "12/1/2017 8:52:24",
  "experience": "2-4",
  "size": "50-100",
  "salary": "$65,000.00",
  "happy": 4,
  "gender": "Male",
  "position": "Mobile Native Developer",
  "skills": "Objective-C, Swift, HTML, JavaScript, Alexa Skill Development, Jenkins CI",
  "work": "Just moved to Cleveland from Cinci ",
  "education": "Bachelors",
  "degree": "Kinesiology "
}, {
  "Timestamp": "12/1/2017 8:54:44",
  "experience": "8-10",
  "size": "10-50",
  "salary": "$105,000.00",
  "happy": 5,
  "gender": "Male",
  "position": "Senior Developer",
  "skills": "php, ruby, javascript, python, sass/less/css, html, sql",
  "work": "Work at a company in or around Cincinnati",
  "education": "Bachelors",
  "degree": "Computer Information Technology"
}, {
  "Timestamp": "12/1/2017 9:09:33",
  "experience": "4-6",
  "size": "6-10",
  "salary": "$75,000.00",
  "happy": 4,
  "gender": "Male",
  "position": "Application Engineer",
  "skills": "Javascript, CSS, HTML",
  "work": "Work at a company in or around Cincinnati",
  "education": "Some college",
  "degree": "Information Technology"
}, {
  "Timestamp": "12/1/2017 9:19:53",
  "experience": "8-10",
  "size": "100+",
  "salary": "$82,000.00",
  "happy": 4,
  "gender": "Male",
  "position": "Mobile Team Lead",
  "skills": "Java, .NET, C#, Kotlin, many others",
  "work": "Work at a company in or around Cincinnati",
  "education": "Bachelors",
  "degree": "Computer Information Systems"
}, {
  "Timestamp": "12/1/2017 9:24:56",
  "experience": "4-6",
  "size": "100+",
  "salary": "$103,000.00",
  "happy": 4,
  "gender": "Female",
  "position": "Senior Software Developer",
  "skills": "Ruby, Rails, Javascript, React",
  "work": "Work at a company in or around Cincinnati",
  "education": "Bachelors",
  "degree": "Computer Science and Engineering"
}, {
  "Timestamp": "12/1/2017 9:27:22",
  "experience": "10-15",
  "size": "100+",
  "salary": "$104,000.00",
  "happy": 4,
  "gender": "Male",
  "position": "Director",
  "skills": "PHP, Javascript, React, Laravel, Go, AWS, Node, Webpack",
  "work": "Work at a company in or around Cincinnati",
  "education": "Bachelors",
  "degree": "Computer Information Science"
}, {
  "Timestamp": "12/1/2017 10:02:48",
  "experience": "2-4",
  "size": "10-50",
  "salary": "$55,000.00",
  "happy": 4,
  "gender": "Female",
  "position": "Web Developer",
  "skills": "HTML/CSS, JS, Python, Java, MongoDB",
  "work": "Work at a company in or around Cincinnati",
  "education": "Bachelors",
  "degree": "Biology"
}, {
  "Timestamp": "12/1/2017 10:05:04",
  "experience": "0-1",
  "size": "10-50",
  "salary": "$59,000.00",
  "happy": 5,
  "gender": "Male",
  "position": "Front End Developer / UX and UI",
  "skills": "Ruby, Javascript",
  "work": "Work at a company in or around Cincinnati",
  "education": "Some college",
  "degree": ""
}, {
  "Timestamp": "12/1/2017 10:19:01",
  "experience": "15+",
  "size": "6-10",
  "salary": "$150,000.00",
  "happy": 5,
  "gender": "Male",
  "position": "Director",
  "skills": "Ruby, Javascript, Java ",
  "work": "I work remotely",
  "education": "Masters",
  "degree": "Computer Science"
}, {
  "Timestamp": "12/1/2017 10:23:40",
  "experience": "2-4",
  "size": "100+",
  "salary": "$58,000.00",
  "happy": 3,
  "gender": "Male",
  "position": "Software Developer",
  "skills": "Python, C#, Java, JavaScript",
  "work": "Work at a company in or around Cincinnati",
  "education": "Bachelors",
  "degree": "Information Technology"
}, {
  "Timestamp": "12/1/2017 10:35:44",
  "experience": "15+",
  "size": "10-50",
  "salary": "$125,000.00",
  "happy": 4,
  "gender": "Male",
  "position": "Software Developer",
  "skills": "Polyglot",
  "work": "Work at a company in or around Cincinnati",
  "education": "Bachelors",
  "degree": "Computer Engineering"
}, {
  "Timestamp": "12/1/2017 10:38:46",
  "experience": "4-6",
  "size": "100+",
  "salary": "$85,000.00",
  "happy": 5,
  "gender": "Male",
  "position": "Software Engineer",
  "skills": "Javascript",
  "work": "Work at a company in or around Cincinnati",
  "education": "Bachelors",
  "degree": "Computer Science"
}, {
  "Timestamp": "12/1/2017 10:50:04",
  "experience": "4-6",
  "size": "10-50",
  "salary": "$84,000.00",
  "happy": 4,
  "gender": "Male",
  "position": "developer",
  "skills": "Ruby, Python, PHP, Javascript, etc etc",
  "work": "Work at a company in or around Cincinnati",
  "education": "Some college",
  "degree": ""
}, {
  "Timestamp": "12/1/2017 10:56:19",
  "experience": "6-8",
  "size": "6-10",
  "salary": "$65,000.00",
  "happy": 5,
  "gender": "Female",
  "position": "Frontend Developer",
  "skills": "JS, HTML, CSS",
  "work": "Work at a company in or around Cincinnati",
  "education": "Bachelors",
  "degree": "Electronic Media"
}, {
  "Timestamp": "12/1/2017 10:58:44",
  "experience": "15+",
  "size": "10-50",
  "salary": "$115,000.00",
  "happy": 5,
  "gender": "Male",
  "position": "Lead Developer",
  "skills": "JS, PHP, Ruby",
  "work": "Work at a company in or around Cincinnati",
  "education": "Masters",
  "degree": "CompE, CS"
}, {
  "Timestamp": "12/1/2017 12:10:08",
  "experience": "0-1",
  "size": "10-50",
  "salary": "$50,000.00",
  "happy": 4,
  "gender": "Male",
  "position": "Junior PHP developer",
  "skills": "PHP, MySQL",
  "work": "Work at a company in or around Cincinnati",
  "education": "Some college",
  "degree": "Web/Computer programming"
}, {
  "Timestamp": "12/1/2017 12:19:25",
  "experience": "2-4",
  "size": "100+",
  "salary": "$72,000.00",
  "happy": 3,
  "gender": "Female",
  "position": "SFCC developer",
  "skills": "html5, css3, javascript, jquery, SFCC, sass, gulp, grunt",
  "work": "I work remotely",
  "education": "Bachelors",
  "degree": "photography"
}, {
  "Timestamp": "12/1/2017 12:40:27",
  "experience": "6-8",
  "size": "1-5",
  "salary": "$52,000.00",
  "happy": 4,
  "gender": "Female",
  "position": "Marketing Manager",
  "skills": "CSS, Basic HTML, Wordpress, Adobe Creative Suite",
  "work": "Work at a company in or around Cincinnati",
  "education": "Bachelors",
  "degree": "Design Studies"
}, {
  "Timestamp": "12/1/2017 13:23:48",
  "experience": "10-15",
  "size": "1-5",
  "salary": "$24,000.00",
  "happy": 5,
  "gender": "Male",
  "position": "Co-Founder + CTO",
  "skills": "Python, Ruby, C#, C++, Java, Swift, Javascript, HTML/CSS",
  "work": "Work at a company in or around Cincinnati",
  "education": "Some college",
  "degree": ""
}, {
  "Timestamp": "12/1/2017 13:32:15",
  "experience": "4-6",
  "size": "10-50",
  "salary": "$85,000.00",
  "happy": 5,
  "gender": "Female",
  "position": "Designer + Front End Developer + Director of HR",
  "skills": "HTML, CSS, Javascript, React, ReactNative",
  "work": "Work at a company in or around Cincinnati",
  "education": "Bachelors",
  "degree": "Bachelor of Science in Design"
}, {
  "Timestamp": "12/1/2017 14:03:07",
  "experience": "4-6",
  "size": "100+",
  "salary": "$62,000.00",
  "happy": 4,
  "gender": "Male",
  "position": "Jr Web Developer",
  "skills": "PHP, HTML, CSS, JS, SQL",
  "work": "Work at a company in or around Cincinnati",
  "education": "Bachelors",
  "degree": "Computer Science"
}, {
  "Timestamp": "12/1/2017 14:39:07",
  "experience": "2-4",
  "size": "10-50",
  "salary": "$78,000.00",
  "happy": 4,
  "gender": "Male",
  "position": "Software Developer",
  "skills": "JavaScript, TypeScript, Elixir, Ruby, C#",
  "work": "Work at a company in or around Cincinnati",
  "education": "Bachelors",
  "degree": "Humanities"
}, {
  "Timestamp": "12/1/2017 15:17:25",
  "experience": "2-4",
  "size": "10-50",
  "salary": "$70,000.00",
  "happy": 3,
  "gender": "Male",
  "position": "Software Developer",
  "skills": "Full Stack .Net, JQuery, HTML, CSS, Java ",
  "work": "Work at a company in or around Cincinnati",
  "education": "Some college",
  "degree": ""
}, {
  "Timestamp": "12/1/2017 18:29:48",
  "experience": "15+",
  "size": "100+",
  "salary": "$115,000.00",
  "happy": 5,
  "gender": "Male",
  "position": "Lead dev",
  "skills": "hadoop, java, python",
  "work": "Work at a company in or around Cincinnati",
  "education": "Masters",
  "degree": "computer science"
}, {
  "Timestamp": "12/1/2017 18:57:28",
  "experience": "Still in school",
  "size": "100+",
  "salary": "$22,500.00",
  "happy": 4,
  "gender": "Male",
  "position": "Software Developer Coop",
  "skills": "c++, java, js, c#",
  "work": "Work at a company in or around Cincinnati",
  "education": "Some college",
  "degree": "Computer Engineering"
}, {
  "Timestamp": "12/1/2017 19:04:50",
  "experience": "2-4",
  "size": "6-10",
  "salary": "$67,000.00",
  "happy": 3,
  "gender": "Male",
  "position": "UX/Front-end",
  "skills": "HTML,CSS,UX,design",
  "work": "Work at a company in or around Cincinnati",
  "education": "Bachelors",
  "degree": ""
}, {
  "Timestamp": "12/1/2017 19:19:17",
  "experience": "10-15",
  "size": "100+",
  "salary": "$120,000.00",
  "happy": 5,
  "gender": "Male",
  "position": "Software Developer",
  "skills": "JavaScript, HTML, CSS, Java, Python ...",
  "work": "Work at a company in or around Cincinnati",
  "education": "Bachelors",
  "degree": "Information Systems"
}, {
  "Timestamp": "12/1/2017 21:35:42",
  "experience": "8-10",
  "size": "100+",
  "salary": "$80,000.00",
  "happy": 4,
  "gender": "Male",
  "position": "Software Developer",
  "skills": ".Net, C#, SQL, ColdFusion, JavaScript,  jQuery and some angular/ react framework exposure. IIS. ",
  "work": "Work at a company in or around Cincinnati",
  "education": "Bachelors",
  "degree": "Information Engineering Technology"
}, {
  "Timestamp": "12/2/2017 10:24:46",
  "experience": "15+",
  "size": "10-50",
  "salary": "$125,000.00",
  "happy": 5,
  "gender": "Male",
  "position": "Principal Consultant",
  "skills": "Java, others",
  "work": "Work at a company in or around Cincinnati",
  "education": "Masters",
  "degree": "Computer Engineering"
}, {
  "Timestamp": "12/2/2017 12:25:57",
  "experience": "10-15",
  "size": "100+",
  "salary": "$125,000.00",
  "happy": 5,
  "gender": "Male",
  "position": "Senior Software Engineer",
  "skills": "Java, Javascript, React, Backbone",
  "work": "Work at a company in or around Cincinnati",
  "education": "Bachelors",
  "degree": "Information Systems"
}, {
  "Timestamp": "12/2/2017 22:29:38",
  "experience": "4-6",
  "size": "10-50",
  "salary": "$85,000.00",
  "happy": 5,
  "gender": "Male",
  "position": "Software Developer",
  "skills": "C#, Apex, JS, Web Development, Salesforce",
  "work": "I work remotely",
  "education": "Masters",
  "degree": "Computer information Systems"
}, {
  "Timestamp": "12/3/2017 5:22:13",
  "experience": "6-8",
  "size": "100+",
  "salary": "$73,500.00",
  "happy": 5,
  "gender": "Male",
  "position": "Python developer",
  "skills": "Python, Django, AWS, GIT",
  "work": "Work at a company in or around Cincinnati",
  "education": "Bachelors",
  "degree": "Computer science"
}, {
  "Timestamp": "12/3/2017 10:14:28",
  "experience": "2-4",
  "size": "50-100",
  "salary": "$60,000.00",
  "happy": 3,
  "gender": "Male",
  "position": "Dev",
  "skills": "Java, gwt, app engine, cloud data store",
  "work": "Work at a company in or around Cincinnati",
  "education": "Some college",
  "degree": "Software Engineering "
}, {
  "Timestamp": "12/3/2017 10:25:02",
  "experience": "0-1",
  "size": "50-100",
  "salary": "$51,000.00",
  "happy": 5,
  "gender": "Male",
  "position": "Front end developer",
  "skills": "HTML, css, JavaScript ",
  "work": "Work at a company in or around Cincinnati",
  "education": "Bachelors",
  "degree": "Political science "
}, {
  "Timestamp": "12/3/2017 12:10:35",
  "experience": "10-15",
  "size": "100+",
  "salary": "$113,345.00",
  "happy": 4,
  "gender": "Male",
  "position": "DevOps Engineer ",
  "skills": "C#, TypeScript, PowerShell, Bash, Groovy, Java ",
  "work": "Work at a company in or around Cincinnati",
  "education": "Masters",
  "degree": "MBA"
}, {
  "Timestamp": "12/3/2017 22:28:04",
  "experience": "10-15",
  "size": "100+",
  "salary": "$85,000.00",
  "happy": 3,
  "gender": "Female",
  "position": "Sr. Developer",
  "skills": "Java, AngularJS",
  "work": "Work at a company in or around Cincinnati",
  "education": "Doctorate",
  "degree": "Physics"
}, {
  "Timestamp": "12/4/2017 7:56:34",
  "experience": "0-1",
  "size": "100+",
  "salary": "$65,000.00",
  "happy": 4,
  "gender": "Male",
  "position": "Developer",
  "skills": "Js, Java ",
  "work": "Work at a company in or around Cincinnati",
  "education": "Some college",
  "degree": ""
}, {
  "Timestamp": "12/4/2017 9:52:54",
  "experience": "8-10",
  "size": "10-50",
  "salary": "$120,000.00",
  "happy": 5,
  "gender": "Male",
  "position": "Senior Software Engineer",
  "skills": "Java, Kotlin, Docker, Gradle, Spring, Play",
  "work": "Based in SF with small office in Blue Ash",
  "education": "Bachelors",
  "degree": "Management"
}, {
  "Timestamp": "12/4/2017 10:34:57",
  "experience": "10-15",
  "size": "10-50",
  "salary": "$140,000.00",
  "happy": 5,
  "gender": "Male",
  "position": "Partner",
  "skills": "Java, Kotlin, Android, Spring",
  "work": "Work at a company in or around Cincinnati",
  "education": "Bachelors",
  "degree": "Computer Science"
}, {
  "Timestamp": "12/4/2017 12:16:14",
  "experience": "10-15",
  "size": "1-5",
  "salary": "$60,000.00",
  "happy": 3,
  "gender": "Male",
  "position": "Frontend Developer/CMS Guru",
  "skills": "html, css, js, php, mysql, WordPress, ExpressionEngine, SEO",
  "work": "I work remotely",
  "education": "Bachelors",
  "degree": "CSCI"
}, {
  "Timestamp": "12/4/2017 12:46:52",
  "experience": "2-4",
  "size": "50-100",
  "salary": "$65,000.00",
  "happy": 5,
  "gender": "Male",
  "position": "Consultant",
  "skills": "JavaScript, C#, Selenium",
  "work": "Work at a company in or around Cincinnati",
  "education": "Masters",
  "degree": "Masters of Fine Arts in Writing"
}, {
  "Timestamp": "12/4/2017 13:14:29",
  "experience": "15+",
  "size": "1-5",
  "salary": "$75,700.00",
  "happy": 3,
  "gender": "Female",
  "position": "Sr. consultant",
  "skills": "Multi value database, basic, JavaScript,. Php",
  "work": "I work remotely",
  "education": "Masters",
  "degree": "Master of Library Science, BABA Information Systems"
}, {
  "Timestamp": "12/4/2017 16:53:25",
  "experience": "4-6",
  "size": "10-50",
  "salary": "$80,000.00",
  "happy": 5,
  "gender": "Male",
  "position": "Engineer",
  "skills": "HTML, Javascript, CSS,",
  "work": "Work at a company in or around Cincinnati",
  "education": "Some college",
  "degree": ""
}, {
  "Timestamp": "12/4/2017 22:46:55",
  "experience": "0-1",
  "size": "10-50",
  "salary": "$55,000.00",
  "happy": 2,
  "gender": "Male",
  "position": "Software Developer",
  "skills": "Java, HTML, CSS, SQL, database design, UI design, UX design",
  "work": "Work at a company in or around Cincinnati",
  "education": "Bachelors",
  "degree": "Computer Science"
}, {
  "Timestamp": "12/4/2017 22:50:01",
  "experience": "15+",
  "size": "10-50",
  "salary": "$135,000.00",
  "happy": 5,
  "gender": "Male",
  "position": "Principal Consultant",
  "skills": "Java, C++",
  "work": "Work at a company in or around Cincinnati",
  "education": "Bachelors",
  "degree": "Computer Science"
}, {
  "Timestamp": "12/4/2017 23:43:04",
  "experience": "8-10",
  "size": "10-50",
  "salary": "$72,000.00",
  "happy": 3,
  "gender": "Male",
  "position": "Senior Development",
  "skills": "Elixir, JavaScript, Java, Scala, Elm",
  "work": "Work at a company in or around Cincinnati",
  "education": "Bachelors",
  "degree": "Software Development"
}, {
  "Timestamp": "12/5/2017 10:44:49",
  "experience": "2-4",
  "size": "10-50",
  "salary": "$73,000.00",
  "happy": 5,
  "gender": "Female",
  "position": "Front End Engineer",
  "skills": "React, JavaScript, HTML, CSS",
  "work": "Work at a company in or around Cincinnati",
  "education": "Some college",
  "degree": "Web Design"
}, {
  "Timestamp": "12/5/2017 10:56:56",
  "experience": "4-6",
  "size": "100+",
  "salary": "$87,000.00",
  "happy": 4,
  "gender": "Male",
  "position": "Software Engineer 3",
  "skills": "Javascript, Java, Kotlin, React, Angular ",
  "work": "Work at a company in or around Cincinnati",
  "education": "Some college",
  "degree": ""
}, {
  "Timestamp": "12/5/2017 18:20:30",
  "experience": "15+",
  "size": "100+",
  "salary": "$120,000.00",
  "happy": 5,
  "gender": "Male",
  "position": "Architect",
  "skills": "Java, Swift, Python, machine learning, JavaScript, etc.",
  "work": "Work at a company in or around Cincinnati",
  "education": "Bachelors",
  "degree": "Mathematics with Computer Science"
}, {
  "Timestamp": "12/6/2017 13:59:44",
  "experience": "2-4",
  "size": "100+",
  "salary": "$60,000.00",
  "happy": 5,
  "gender": "Male",
  "position": ".net developer",
  "skills": "C#",
  "work": "I work remotely",
  "education": "Masters",
  "degree": ""
}, {
  "Timestamp": "12/6/2017 16:15:09",
  "experience": "15+",
  "size": "100+",
  "salary": "$60,000.00",
  "happy": 4,
  "gender": "Male",
  "position": "Software Developer",
  "skills": "C#, Javascript, WPF, SQL",
  "work": "Work at a company in or around Cincinnati",
  "education": "Bachelors",
  "degree": "Computer Science"
}, {
  "Timestamp": "12/6/2017 17:56:29",
  "experience": "8-10",
  "size": "100+",
  "salary": "$120,000.00",
  "happy": 5,
  "gender": "Male",
  "position": "Dept Head",
  "skills": "Many",
  "work": "Work at a company in or around Cincinnati",
  "education": "Some college",
  "degree": ""
}, {
  "Timestamp": "12/7/2017 10:37:58",
  "experience": "10-15",
  "size": "10-50",
  "salary": "$115,000.00",
  "happy": 5,
  "gender": "Male",
  "position": "Developer",
  "skills": "Ruby, Javascript, Elixir",
  "work": "Work at a company in or around Cincinnati",
  "education": "High School",
  "degree": ""
}, {
  "Timestamp": "12/7/2017 11:51:57",
  "experience": "10-15",
  "size": "100+",
  "salary": "$86,000.00",
  "happy": 3,
  "gender": "Male",
  "position": "Software Developer",
  "skills": "Java, Bootstrap, Spring",
  "work": "Work at a company in or around Cincinnati",
  "education": "Bachelors",
  "degree": "Computer Science"
}, {
  "Timestamp": "12/7/2017 17:15:56",
  "experience": "2-4",
  "size": "100+",
  "salary": "$60,000.00",
  "happy": 4,
  "gender": "Female",
  "position": "Consultant",
  "skills": "Javascript, React, CSS, Node",
  "work": "Work at a company in or around Cincinnati",
  "education": "Bachelors",
  "degree": "Graphic Design"
}, {
  "Timestamp": "12/7/2017 21:01:48",
  "experience": "0-1",
  "size": "10-50",
  "salary": "$55,000.00",
  "happy": 4,
  "gender": "Male",
  "position": "Integration Engineer",
  "skills": "Javascipt, Java, Python, SQL, Mirth",
  "work": "Work at a company in or around Cincinnati",
  "education": "Bachelors",
  "degree": "VCD: Animation, Illustration"
}, {
  "Timestamp": "12/11/2017 16:51:41",
  "experience": "10-15",
  "size": "50-100",
  "salary": "$125,000.00",
  "happy": 4,
  "gender": "Male",
  "position": "Senior Software Engineer & Cloud Architect",
  "skills": "Professional full-stack development in most primary languages.",
  "work": "Work at a company in or around Cincinnati",
  "education": "High School",
  "degree": ""
}, {
  "Timestamp": "12/15/2017 15:02:37",
  "experience": "15+",
  "size": "100+",
  "salary": "$102,000.00",
  "happy": 3,
  "gender": "Male",
  "position": "Senior Software Engineer",
  "skills": "C, C++, Python, JavaScript, AngularJS, Perl, Java, Couchbase, Elasticsearch, SQL, HTML 5, Bash",
  "work": "Work at a company in or around Cincinnati",
  "education": "Masters",
  "degree": "Information Systems"
}];

exports.default = data;
},{}],2:[function(require,module,exports){
'use strict';

var _answers = require('./answers');

var _answers2 = _interopRequireDefault(_answers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function checkNumeric(objName) {
  objName = objName.replace('$', '');
  return Number(objName.replace(/\,/g, ''));
}

function standardizeExperience(exp) {
  switch (exp) {
    case '0-1':
      return 1;
      break;
    case '2-4':
      return 2;
      break;
    case '4-6':
      return 3;
      break;
    case '6-8':
      return 4;
      break;
    case '8-10':
      return 5;
      break;
    case '10-15':
      return 6;
      break;
    default:
      return 7;
  }
}

function standardizeCompanySize(size) {
  switch (size) {
    case '1-5':
      return 1;
      break;
    case '6-10':
      return 2;
      break;
    case '10-50':
      return 3;
      break;
    case '50-100':
      return 4;
      break;
    case '100+':
      return 5;
      break;
      return 6;
  }
}

(function () {

  var male = 0;
  var female = 0;

  var dataset = _answers2.default.map(function (item) {
    return { x: item.happy, y: checkNumeric(item.salary) };
  });

  var companyHappines = _answers2.default.map(function (item) {
    return { y: item.happy, x: standardizeCompanySize(item.size) };
  });

  var skills = _answers2.default.reduce(function (acc, answer) {
    var skills = answer.skills.toLowerCase();

    if (skills.includes('php')) acc.php++;
    if (skills.includes('javascript') || skills.includes('js') || skills.includes('react') || skills.includes('angular') || skills.includes('node')) acc.javascript++;
    if (skills.includes('.net')) acc.net++;
    if (skills.includes('rails') || skills.includes('ruby')) acc.rails++;
    if (skills.includes('python')) acc.python++;
    if (skills.includes('java ') || skills.includes('java,')) acc.java++;
    if (skills.includes('c++')) acc.cplus++;
    if (skills.includes('c#')) acc.csharp++;

    return acc;
  }, { php: 0, java: 0, javascript: 0, net: 0, rails: 0, python: 0, cplus: 0, csharp: 0 });

  console.log(skills);

  var experiences = _answers2.default.map(function (item) {
    return standardizeExperience(item.experience);
  });

  var counts = {};
  experiences.forEach(function (x) {
    counts[x] = (counts[x] || 0) + 1;
  });

  var filter = _answers2.default.forEach(function (person) {
    if (person.gender === "Male") male++;
    if (person.gender === "Female") female++;
  });

  var genders = [male, female];

  Chart.defaults.global.elements.rectangle.borderWidth = 0;

  var experienceBar = document.getElementById('experienceBar');
  var myChart = new Chart(experienceBar, {
    type: 'bar',
    data: {
      labels: ["0-1", "2-4", "4-6", "6-8", "8-10", "10-15", "15+"],
      datasets: [{
        label: 'Years of Experience',
        data: Object.values(counts),
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(255, 159, 64, 0.6)'],
        borderColor: ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 0.2)'],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });

  var skillsBar = document.getElementById('skillsBar');
  var myChart = new Chart(skillsBar, {
    type: 'bar',
    data: {
      labels: ["PHP", "Java", "Javascript", ".Net", "Ruby/Rails", "Python", "C+", "C#"],
      datasets: [{
        label: 'Languages',
        data: Object.values(skills),
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(255, 159, 64, 0.6)', 'rgba(255, 59, 64, 0.6)'],
        borderColor: ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 0.2)', 'rgba(255, 59, 64, 0.6)'],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });

  var genderBar = document.getElementById('genderBar');
  var myChart = new Chart(genderBar, {
    type: 'bar',
    data: {
      labels: ["Male", "Female"],
      datasets: [{
        label: 'Genders',
        data: genders,
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
        borderColor: ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)'],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });

  var ctx = document.getElementById('myChart');
  var scatterChart = new Chart.Line(ctx, {
    data: {
      datasets: [{
        label: 'Happiness and Salary',
        borderColor: "rgba(220,220,220,0)",
        backgroundColor: "rgba(220,220,220,0)",
        pointBorderColor: 'rgba(255, 99, 132, 1)',
        pointBackgroundColor: 'rgba(255, 99, 132, 1)',
        pointBorderWidth: "1",
        data: dataset
      }]
    },
    options: {
      scales: {
        xAxes: [{
          type: 'linear',
          position: 'bottom'
        }]
      }
    }
  });
})(_answers2.default, checkNumeric, standardizeExperience, standardizeCompanySize);
},{"./answers":1}]},{},[2]);
