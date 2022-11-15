import { MouseEventHandler } from "react";

export interface CreditCardProps {
    name: string;
    accountNo: string;
    expiryDate: string;
    cvv: string;
    contactlessPaymentIcon: any;
    visaIcon: any;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};