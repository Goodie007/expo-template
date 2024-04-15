export enum EmotionThemeName {
    LIGHT = "light",
    DARK = "dark",
}

export interface ExtendEmotionTheme {
    colors: Theme
}

export type Theme = {
    white: string;
    dark_background: string;
    green: string;
    grey: string;
    blue: string;
    yellow: string;
    black: string;
}