
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { buildTheme } from '../common/theme';
import { BrandTypes } from "./brandTypes";



export interface GayaProviderProp {
    brand: BrandTypes
    mode: 'light' | 'dark'
    children: React.ReactNode
}


export const GayaProvider = ({children, brand, mode }: GayaProviderProp): JSX.Element => {

    const themeSelect = buildTheme(brand, mode)
    return (
        <ThemeProvider theme={themeSelect}>
            {children}
        </ThemeProvider>
    )

}

