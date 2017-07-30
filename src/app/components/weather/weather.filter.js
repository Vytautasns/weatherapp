/*
Format input to correct temperature string;
*/
export function weatherFilter($translate) {
  'ngInject';

  return (input, params)=> {
    let units = $translate.instant('UNITS');

    if(!input) return;
    let formated = '';

    if (!isNaN(parseInt(input))) {
      input = Math.floor(input);
      (input > 0 && units !== 'imperial') ? formated = '+' : '';
    }

     formated += input + '°';
     return formated;
  }
}
