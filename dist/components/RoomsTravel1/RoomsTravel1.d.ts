import React from "react";
import "../reset.css";
interface RoomsProps {
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
export declare const RoomsTravel1: React.FC<RoomsProps>;
export default RoomsTravel1;
