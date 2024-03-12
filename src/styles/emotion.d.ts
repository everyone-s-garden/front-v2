import '@emotion/react';
import { Colors, Devices, FontWeight } from './theme';

declare module '@emotion/react' {
  export interface Theme {
    colors: Colors;
    devices: Devices;
    fontWeight: FontWeight;
  }
}
