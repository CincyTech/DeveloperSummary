"use strict";

var _answers = require("./answers");

var _answers2 = _interopRequireDefault(_answers);

var _helpers = require("./helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {

  var happinessSalary = _answers2.default.map(function (item) {
    return { x: item.happy, y: (0, _helpers.checkNumeric)(item.salary) };
  });

  var companyHappines = _answers2.default.map(function (item) {
    return { y: item.happy, x: (0, _helpers.standardizeCompanySize)(item.size) };
  });

  // Super ugly but WFN.
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

  var experiences = _answers2.default.map(function (item) {
    return (0, _helpers.standardizeExperience)(item.experience);
  });

  var experienceCounts = {};
  experiences.forEach(function (x) {
    experienceCounts[x] = (experienceCounts[x] || 0) + 1;
  });

  var genders = _answers2.default.reduce(function (acc, person) {
    if (person.gender === "Male") acc.males++;
    if (person.gender === "Female") acc.females++;

    return acc;
  }, { males: 0, females: 0 });

  // Build the charts.
  var experienceBar = document.getElementById('experienceBar');
  var myChart = new Chart(experienceBar, {
    type: 'bar',
    data: {
      labels: ["0-1", "2-4", "4-6", "6-8", "8-10", "10-15", "15+"],
      datasets: [{
        label: 'Years of Experience',
        data: Object.values(experienceCounts),
        backgroundColor: _helpers.colors,
        borderColor: _helpers.colors,
        borderWidth: 1
      }]
    },
    options: _helpers.options
  });

  var skillsBar = document.getElementById('skillsBar');
  var myChart = new Chart(skillsBar, {
    type: 'bar',
    data: {
      labels: ["PHP", "Java", "Javascript", ".Net", "Ruby/Rails", "Python", "C+", "C#"],
      datasets: [{
        label: 'Languages',
        data: Object.values(skills),
        backgroundColor: _helpers.colors,
        borderColor: _helpers.colors,
        borderWidth: 1
      }]
    },
    options: _helpers.options
  });

  var genderBar = document.getElementById('genderBar');
  var myChart = new Chart(genderBar, {
    type: 'bar',
    data: {
      labels: ["Male", "Female"],
      datasets: [{
        label: 'Genders',
        data: Object.values(genders),
        backgroundColor: _helpers.colors,
        borderColor: _helpers.colors,
        borderWidth: 1
      }]
    },
    options: _helpers.options
  });

  var ctx = document.getElementById('happinessAndSalary');
  var scatterChart = new Chart.Line(ctx, {
    data: {
      datasets: [{
        label: 'Happiness and Salary',
        borderColor: "rgba(220,220,220,0)",
        backgroundColor: "rgba(220,220,220,0)",
        pointBorderColor: 'rgba(255, 99, 132, 1)',
        pointBackgroundColor: 'rgba(255, 99, 132, 1)',
        pointBorderWidth: "1",
        data: happinessSalary
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
})(_answers2.default, _helpers.checkNumeric, _helpers.standardizeExperience, _helpers.standardizeCompanySize, _helpers.options);