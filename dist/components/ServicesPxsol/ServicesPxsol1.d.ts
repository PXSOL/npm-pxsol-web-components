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
interface ServicesPxsolProps {
    Title?: ContentProps;
    Text?: ContentProps;
    idPos?: ContentProps;
    token?: string;
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
export declare const ServicesPxsol1: React.FC<ServicesPxsolProps>;
export default ServicesPxsol1;
