// import original module declarations
import 'styled-components';

type COLOR = {
  lighter: string;
  light: string;
  base: string;
  dark: string;
  darker: string;
};

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: COLOR;
      secondary: COLOR;
      success: COLOR;
      danger: COLOR;
      warning: COLOR;
      white: { base: string };
      black: { base: string };
    };
    fontSizes: {
      [key: number]: string;
    };
    spaces: {
      [key: number]: string;
    };
  }
}