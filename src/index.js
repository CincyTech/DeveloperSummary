import data from "./answers";

import { 
  standardizeCompanySize,
  standardizeExperience,
  checkNumeric,
  colors 
} from "./helpers";

(()=> {

  const happinessSalary = data.map((item)=> {
    return {x: item.happy, y: checkNumeric(item.salary)}
  });

  const companyHappines = data.map((item)=> {
    return {y: item.happy, x: standardizeCompanySize(item.size)}
  });

  // Super ugly but WFN.
  const skills = data.reduce((acc,answer)=>{
    const skills = answer.skills.toLowerCase();

    if(skills.includes('php')) acc.php++;

    if(skills.includes('javascript') || 
    skills.includes('js') || 
    skills.includes('react') || 
    skills.includes('angular') || 
    skills.includes('node')) acc.javascript++;

    if(skills.includes('.net')) acc.net++;

    if(skills.includes('rails') || skills.includes('ruby')) acc.rails++;

    if(skills.includes('python')) acc.python++;

    if(skills.includes('java ') || skills.includes('java,')) acc.java++;

    if(skills.includes('c++')) acc.cplus++;
    
    if(skills.includes('c#')) acc.csharp++;

    return acc;
  },{php:0, java:0, javascript:0, net:0, rails:0, python:0, cplus:0, csharp:0})
  
  const experiences = data.map((item)=>{
    return standardizeExperience(item.experience);
  });

  let experienceCounts = {};
  experiences.forEach((x)=> { experienceCounts[x] = (experienceCounts[x] || 0)+1; });

  const genders = data.reduce((acc, person)=> {
    if(person.gender === "Male") acc.males++;
    if(person.gender === "Female") acc.females++;

    return acc;
  }, {males:0, females:0});

  // Build the charts.
  const experienceBar = document.getElementById('experienceBar');
  var myChart = new Chart(experienceBar, {
    type: 'bar',
    data: {
        labels: ["0-1", "2-4", "4-6", "6-8", "8-10", "10-15", "15+"],
        datasets: [{
            label: 'Years of Experience',
            data: Object.values(experienceCounts),
            backgroundColor: colors,
            borderColor: colors,
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
  });

  const skillsBar = document.getElementById('skillsBar');
  var myChart = new Chart(skillsBar, {
    type: 'bar',
    data: {
        labels: ["PHP", "Java", "Javascript", ".Net", "Ruby/Rails", "Python", "C+", "C#"],
        datasets: [{
            label: 'Languages',
            data: Object.values(skills),
            backgroundColor: colors,
            borderColor: colors,
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
  });

  const genderBar = document.getElementById('genderBar');
  var myChart = new Chart(genderBar, {
    type: 'bar',
    data: {
        labels: ["Male", "Female"],
        datasets: [{
            label: 'Genders',
            data: Object.values(genders),
            backgroundColor: colors,
            borderColor: colors,
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
  });

  const ctx = document.getElementById('myChart');
  const scatterChart = new Chart.Line(ctx, {
    data: {
      datasets: [{
        label: 'Happiness and Salary',
        borderColor: "rgba(220,220,220,0)",
        backgroundColor: "rgba(220,220,220,0)",
        pointBorderColor: 'rgba(255, 99, 132, 1)',
        pointBackgroundColor: 'rgba(255, 99, 132, 1)',
        pointBorderWidth: "1",
        data:happinessSalary,
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

})(data, checkNumeric, standardizeExperience, standardizeCompanySize);
  