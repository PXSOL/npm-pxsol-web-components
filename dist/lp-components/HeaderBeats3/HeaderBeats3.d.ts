import React from "react";
interface LogoHeader {
    name: string;
    type: "imageSrc";
    imageSrc: string;
}
interface CtaButtonContent {
    textButton: string;
    link: string;
}
interface CtaButtonHero {
    name: string;
    type: "ctaButton";
    content: CtaButtonContent;
}
interface GroupTextHeroItem {
    ctaButtonHero: CtaButtonHero;
}
interface GroupTextHero {
    name: string;
    type: "group";
    content: GroupTextHeroItem[];
}
interface IProps {
    logoHeader: LogoHeader;
    groupTextHero: GroupTextHero;
}
export declare const HeaderBeats3: React.FC<IProps>;
export default HeaderBeats3;
