class Country {
  static UNITED_STATES = new FighterCountry(
    "United States",
    "images/CountryImages/usa.png"
  );
  static RUSSIA = new FighterCountry(
    "Russia",
    "images/CountryImages/russia.png"
  );
  static BRAZIL = new FighterCountry(
    "Brazil",
    "images/CountryImages/brazil.png"
  );
  static AUSTRALIA = new FighterCountry(
    "Australia",
    "images/CountryImages/australia.png"
  );
  static NEW_ZEALAND = new FighterCountry(
    "New Zealand",
    "images/CountryImages/new_zealand.png"
  );
  static NIGERIA = new FighterCountry(
    "Nigeria",
    "images/CountryImages/nigeria.png"
  );
  static ENGLAND = new FighterCountry(
    "England",
    "images/CountryImages/england.png"
  );
  static LATVIA = new FighterCountry(
    "Latvia",
    "images/CountryImages/latvia.png"
  );
  static CANADA = new FighterCountry(
    "Canada",
    "images/CountryImages/canada.png"
  );
  static NEUTRAL = new FighterCountry(
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

module.exports = Country;
