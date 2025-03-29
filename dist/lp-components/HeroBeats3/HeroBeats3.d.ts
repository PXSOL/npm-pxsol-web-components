interface IFlatText {
    name: string;
    type: "title" | "subtitle";
    dataType: "flatText";
    content: string;
}
interface ICtaButton {
    name: string;
    type: "ctaButton";
    content: {
        textButton: string;
        link: string;
    };
}
interface IImageSrc {
    name: string;
    type: "imageSrc";
    imageSrc: string;
}
interface IHeroProps {
    titleHero: IFlatText;
    subtitleHero: IFlatText;
    subtitleTextHero: IFlatText;
    TextHero: IFlatText;
    ctaButtonHero: ICtaButton;
    priceButton: IFlatText;
    imageHero: IImageSrc;
}
declare const HeroBeats3: React.FC<IHeroProps>;
export default HeroBeats3;
