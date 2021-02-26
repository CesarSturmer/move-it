import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      bodyColor: string;
      background: string;
      grayLine: string;
      text: string;
      textHighlight: string;
      title: string;
      invertWhite: string;
      invertBlack: string;
      overlay: string;
    }
  }
}
