export class CitiesService {
  constructor($resource) {
    'ngInject';
    this.favorites = ['Vilnius', 'Kaunas', 'Klaipėda', 'Panevėžys', 'Šiauliai', 'Palanga'];

    //  IDEA get all the biggest cities in the country and display it.
  }

  getFavorites() {
    return this.favorites;
  }
}
