const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if(!Array.isArray(members)){
    return false;
  }

  let teamsName = [];

  for (let i = 0; i < members.length; i++) {
    if (typeof(members[i]) === 'string') {
      teamsName.push(members[i].trim().toUpperCase().split('')[0]);
    }
  }

  teamsName.sort();

  return teamsName.join('');
};
