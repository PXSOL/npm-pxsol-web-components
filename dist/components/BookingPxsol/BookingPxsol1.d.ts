import React from "react";
import "../reset.css";
interface ContentProps {
    name: string;
    type: string;
    dataType: string;
    content: string;
    styleData: {
        titleColor?: {
            name: string;
            styleType: string;
            styleContent: string;
        };
        titleSize?: {
            name: string;
            styleType: string;
            styleContent: string;
        };
    };
}
interface CtaButtonProps {
    name: string;
    type: string;
    dataType: string;
    content: {
        textButton: string;
        link: string;
    };
    styleData: {
        textColor?: {
            name: string;
            styleType: string;
            styleContent: string;
        };
        backgroundColor?: {
            name: string;
            styleType: string;
            styleContent: string;
        };
        buttonTextSize?: {
            name: string;
            styleType: string;
            styleContent: string;
        };
    };
}
interface BookingPxsolProps {
    Title?: ContentProps;
    Text?: ContentProps;
    "Cta button"?: CtaButtonProps;
    Section?: {
        content: string;
        styleData: {
            backgroundColor: {
                styleContent: string;
            };
            margin: {
                styleContent: string;
            };
            padding: {
                styleContent: string;
            };
            borderRadius: {
                styleContent: string;
            };
        };
        type: string;
        dataType: string;
        name: string;
        _id?: string;
    };
}
export declare const BookingPxsol1: React.FC<BookingPxsolProps>;
export default BookingPxsol1;
