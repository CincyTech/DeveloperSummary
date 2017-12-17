import data from "./answers";

function checkNumeric(objName) {
  objName = objName.replace('$','');
  return Number(objName.replace(/\,/g,''));
}

function standardizeExperience(exp){
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


function standardizeCompanySize(size){
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

(()=> {

  let male = 0;
  let female = 0;
  
  const happinessSalary = data.map((item)=> {
    return {x: item.happy, y: checkNumeric(item.salary)}
  });

  const companyHappines = data.map((item)=> {
    return {y: item.happy, x: standardizeCompanySize(item.size)}
  });

  const skills = data.reduce((acc,answer)=>{
    const skills = answer.skills.toLowerCase();

    if(skills.includes('php')) acc.php++;
    if(skills.includes('javascript') || skills.includes('js') || skills.includes('react') || skills.includes('angular') || skills.includes('node')) acc.javascript++;
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

  var counts = {};
  experiences.forEach((x)=> { counts[x] = (counts[x] || 0)+1; });

  const filter = data.forEach((person)=> {
    if(person.gender === "Male") male++;
    if(person.gender === "Female") female++;
  });

  const genders = [male,female];

  Chart.defaults.global.elements.rectangle.borderWidth = 0;

  const experienceBar = document.getElementById('experienceBar');
  var myChart = new Chart(experienceBar, {
    type: 'bar',
    data: {
        labels: ["0-1", "2-4", "4-6", "6-8", "8-10", "10-15", "15+"],
        datasets: [{
            label: 'Years of Experience',
            data: Object.values(counts),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.6)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 0.2)'
            ],
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
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(255, 59, 64, 0.6)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 59, 64, 0.6)'
            ],
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
            data: genders,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)'
            ],
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
  