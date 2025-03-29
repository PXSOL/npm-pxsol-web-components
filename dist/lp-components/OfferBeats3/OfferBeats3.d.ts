export interface IFlatTextContent {
    name: string;
    type: "title" | "subtitle";
    dataType: "flatText";
    content: string;
}
export interface IImageContent {
    name: string;
    type: "imageSrc";
    imageSrc: string;
}
export interface ICtaButtonContent {
    name: string;
    type: "ctaButton";
    content: {
        textButton: string;
        link: string;
    };
}
export interface IProps {
    titleOffer: IFlatTextContent;
    TextSection: IFlatTextContent;
    imgSection: IImageContent;
    ctaButtonCard: ICtaButtonContent;
}
export declare const OfferBeats3: React.FC<IProps>;
export default OfferBeats3;
