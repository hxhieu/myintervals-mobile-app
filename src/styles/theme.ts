import { ThemeManager, ButtonProps } from 'react-native-ui-lib';
import { Typography } from 'react-native-ui-lib/style';

Typography.loadTypographies({
  txtDefault: { fontSize: 24, fontWeight: '300', lineHeight: 80 },
});

ThemeManager.setComponentTheme('Text', {
  text70: true, // will set the text70 typography modifier prop to be true by default
  grey10: true, // will set the grey10 color modifier prop to be true by default
});

ThemeManager.setComponentTheme('Button', (props: ButtonProps) => {
  return {
    // this will apply a different backgroundColor
    // depending on whether the Button has an outline or not
    // backgroundColor: props.outline ? 'black' : 'red',
  };
});

console.log('quack');
