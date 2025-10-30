class FighterImage {
  constructor(
    fullHeightImageUrl = "",
    closeUpImageUrl = "",
    headToWaistImageUrl = ""
  ) {
    this.fullHeightImageUrl = fullHeightImageUrl;
    this.closeUpImageUrl = closeUpImageUrl;
    this.headToWaistImageUrl = headToWaistImageUrl;
  }

  getFullHeightImageUrl() {
    return this.fullHeightImageUrl;
  }

  setFullHeightImageUrl(fullHeightImageUrl) {
    this.fullHeightImageUrl = fullHeightImageUrl;
  }

  getCloseUpImageUrl() {
    return this.closeUpImageUrl;
  }

  setCloseUpImageUrl(closeUpImageUrl) {
    this.closeUpImageUrl = closeUpImageUrl;
  }

  getHeadToWaistImageUrl() {
    return this.headToWaistImageUrl;
  }

  setHeadToWaistImageUrl(headToWaistImageUrl) {
    this.headToWaistImageUrl = headToWaistImageUrl;
  }
}

module.exports = FighterImage;
