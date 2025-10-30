export default class Organization {
  constructor(
    id = null,
    organizationName = "",
    ownerName = "",
    country = null,
    address = "",
    logoUrl = "",
    fighters = []
  ) {
    this.id = id;
    this.organizationName = organizationName;
    this.ownerName = ownerName;
    this.country = country;
    this.address = address;
    this.logoUrl = logoUrl;
    this.fighters = fighters;
  }

  getId() {
    return this.id;
  }

  setId(id) {
    this.id = id;
  }

  getOrganizationName() {
    return this.organizationName;
  }

  setOrganizationName(organizationName) {
    this.organizationName = organizationName;
  }

  getOwnerName() {
    return this.ownerName;
  }

  setOwnerName(ownerName) {
    this.ownerName = ownerName;
  }

  getCountry() {
    return this.country;
  }

  setCountry(country) {
    this.country = country;
  }

  getAddress() {
    return this.address;
  }

  setAddress(address) {
    this.address = address;
  }

  getLogoUrl() {
    return this.logoUrl;
  }

  setLogoUrl(logoUrl) {
    this.logoUrl = logoUrl;
  }

  getFighters() {
    return this.fighters;
  }

  setFighters(fighters) {
    this.fighters = fighters;
  }
}
