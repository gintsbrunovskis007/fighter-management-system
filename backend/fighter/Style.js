class Style {
  static BOXING = new FightingStyle("Boxing");
  static MUAY_THAI = new FightingStyle("Muay Thai");
  static KICKBOXING = new FightingStyle("Kickboxing");
  static KARATE = new FightingStyle("Karate");
  static TAEKWONDO = new FightingStyle("Taekwondo");
  static BJJ = new FightingStyle("Brazilian Jiu-Jitsu");
  static WRESTLING = new FightingStyle("Wrestling");
  static JUDO = new FightingStyle("Judo");
  static SAMBO = new FightingStyle("Sambo");
  static FREESTYLE_WRESTLING = new FightingStyle("Freestyle Wrestling");
  static GRECO_ROMAN = new FightingStyle("Greco-Roman Wrestling");
  static SANDA = new FightingStyle("Sanda (Chinese Kickboxing)");
  static CAPOEIRA = new FightingStyle("Capoeira");
  static MMA = new FightingStyle("Mixed Martial Arts");
  static JEET_KUNE_DO = new FightingStyle("Jeet Kune Do");
  static KUNG_FU = new FightingStyle("Kung Fu");
  static CATCH_WRESTLING = new FightingStyle("Catch Wrestling");
  static SHOOTFIGHTING = new FightingStyle("Shootfighting");
  static LETHWEI = new FightingStyle("Lethwei");

  constructor(styleName) {
    this.styleName = styleName;
  }

  getStyleName() {
    return this.styleName;
  }
}

module.exports = Style;
