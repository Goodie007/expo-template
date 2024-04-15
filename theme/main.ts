import { ExtendEmotionTheme } from "./interface";

export const EmothionThemeColorBase: ExtendEmotionTheme['colors'] = {
    white: "#FFFFFF",
    dark_background: "#3B454E",
    green: "#009688",
    grey: "#DBDBDB",
    blue: "#4253B7",
    yellow: "#F2D74A",
    black: "#202020",
}

export const EmotionTheme: Record<string, ExtendEmotionTheme> = {
    light: {
      colors: {
        ...EmothionThemeColorBase
      }
    },
    dark: {
      colors: {
        ...EmothionThemeColorBase
      }
    },
  };