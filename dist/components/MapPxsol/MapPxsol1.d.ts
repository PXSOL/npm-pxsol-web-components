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
interface MapPxsolProps {
    Title?: ContentProps;
    Text?: ContentProps;
    idPos?: ContentProps;
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
export declare const MapPxsol1: React.FC<MapPxsolProps>;
export default MapPxsol1;
