import React from "react";
export interface IFlatTextContent {
    name: string;
    type: "title";
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
export interface IProductItem {
    ctaButtonHero: ICtaButtonContent;
    imgProduct: IImageContent;
    productPrice: IFlatTextContent;
}
export interface IGroupProductsSection {
    name: string;
    type: "group";
    content: IProductItem[];
}
export interface IProps {
    titleHero: IFlatTextContent;
    groupProductsSection: IGroupProductsSection;
}
export declare const ProductsBeats3: React.FC<IProps>;
export default ProductsBeats3;
