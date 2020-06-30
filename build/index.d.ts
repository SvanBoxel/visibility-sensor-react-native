import React from 'react';
export interface IDemensionData {
    rectTop: number;
    rectBottom: number;
    rectWidth: number;
}
export interface Props {
    /** Function that is triggered when component enters viewport */
    onChange(visible: boolean): any;
    /** The component that needs to be in the viewport */
    children: React.ReactNode;
}
declare const InViewPort: React.FC<Props>;
export default InViewPort;
