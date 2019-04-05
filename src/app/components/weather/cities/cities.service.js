export class CitiesService {
  constructor() {
    'ngInject';
    this.favorites = ['Vilnius', 'Kaunas', 'Klaipeda', 'Panevezys', 'Siauliai', 'Palanga'];

    //  IDEA get all the biggest cities in the country and display it.
  }

  getFavorites() {
    return this.favorites;
  }
}
