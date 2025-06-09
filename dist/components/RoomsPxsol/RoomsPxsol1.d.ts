interface StyleData {
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
}
interface ContentProps {
    name: string;
    type: string;
    dataType: string;
    content: string;
    styleData: StyleData;
}
interface RoomsPxsolProps {
    Title?: ContentProps;
    Text?: ContentProps;
    idPos?: ContentProps;
    "Slider Mode"?: ContentProps;
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
export declare const RoomsPxsol1: React.FC<RoomsPxsolProps>;
export default RoomsPxsol1;
