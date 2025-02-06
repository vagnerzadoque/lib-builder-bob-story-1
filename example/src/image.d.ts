// images.d.ts

declare module '*.jpg' {
    import { ImageSourcePropType } from 'react-native';
    const content: ImageSourcePropType;
    export default content;
  }
  
  declare module '*.png' {
    import { ImageSourcePropType } from 'react-native';
    const content: ImageSourcePropType;
    export default content;
  }