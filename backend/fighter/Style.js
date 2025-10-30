export default class Style {
  static BOXING = new Style("Boxing");
  static MUAY_THAI = new Style("Muay Thai");
  static KICKBOXING = new Style("Kickboxing");
  static KARATE = new Style("Karate");
  static TAEKWONDO = new Style("Taekwondo");
  static BJJ = new Style("Brazilian Jiu-Jitsu");
  static WRESTLING = new Style("Wrestling");
  static JUDO = new Style("Judo");
  static SAMBO = new Style("Sambo");
  static FREESTYLE_WRESTLING = new Style("Freestyle Wrestling");
  static GRECO_ROMAN = new Style("Greco-Roman Wrestling");
  static SANDA = new Style("Sanda (Chinese Kickboxing)");
  static CAPOEIRA = new Style("Capoeira");
  static MMA = new Style("Mixed Martial Arts");
  static JEET_KUNE_DO = new Style("Jeet Kune Do");
  static KUNG_FU = new Style("Kung Fu");
  static CATCH_WRESTLING = new Style("Catch Wrestling");
  static SHOOTFIGHTING = new Style("Shootfighting");
  static LETHWEI = new Style("Lethwei");

  constructor(styleName) {
    this.styleName = styleName;
  }

  getStyleName() {
    return this.styleName;
  }
}
