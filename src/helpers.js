function checkNumeric(objName) {
  const newObjName = objName.replace('$','');
  return Number(newObjName.replace(/\,/g,''));
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

const colors = [
  'rgba(255, 99, 132, 0.2)',
  'rgba(54, 162, 235, 0.2)',
  'rgba(255, 206, 86, 0.2)',
  'rgba(75, 192, 192, 0.2)',
  'rgba(153, 102, 255, 0.2)',
  'rgba(255, 159, 64, 0.2)',
  'rgba(255, 159, 64, 0.6)'
]

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

export {standardizeCompanySize,standardizeExperience,checkNumeric, colors}