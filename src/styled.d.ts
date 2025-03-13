import "styled-components";
import { Theme } from "./features/shared/shared.consts";

type ThemeType = typeof Theme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
