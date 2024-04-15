import { useContext } from "react";
import { ThemeModeProviderContext } from "./theme_provider";


export const useThemeMode = () => useContext(ThemeModeProviderContext);


