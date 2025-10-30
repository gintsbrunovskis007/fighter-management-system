export default class Country {
  static UNITED_STATES = new Country(
    "United States",
    "images/CountryImages/usa.png"
  );
  static RUSSIA = new Country("Russia", "images/CountryImages/russia.png");
  static BRAZIL = new Country("Brazil", "images/CountryImages/brazil.png");
  static AUSTRALIA = new Country(
    "Australia",
    "images/CountryImages/australia.png"
  );
  static NEW_ZEALAND = new Country(
    "New Zealand",
    "images/CountryImages/new_zealand.png"
  );
  static NIGERIA = new Country("Nigeria", "images/CountryImages/nigeria.png");
  static ENGLAND = new Country("England", "images/CountryImages/england.png");
  static LATVIA = new Country("Latvia", "images/CountryImages/latvia.png");
  static CANADA = new Country("Canada", "images/CountryImages/canada.png");
  static NEUTRAL = new Country(
    "Neutral",
    "images/CountryImages/neutral_flag.png"
  );

  constructor(countryName, flagImageUrl) {
    this.countryName = countryName;
    this.flagImageUrl = flagImageUrl;
  }

  getCountryName() {
    return this.countryName;
  }

  getFlagImageUrl() {
    return this.flagImageUrl;
  }

  setFlagImageUrl(flagImageUrl) {
    this.flagImageUrl = flagImageUrl;
  }
}
