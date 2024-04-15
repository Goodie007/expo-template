import { ExtendEmotionTheme } from "../../theme"

export interface ThemeModesProviderProps {
    extendTheme?: Record<string, ExtendEmotionTheme>
    children: any
}