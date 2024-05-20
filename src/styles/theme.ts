import { ThemeManager, ButtonProps, Colors } from 'react-native-ui-lib';
import { Typography } from 'react-native-ui-lib/style';

Colors.loadColors({
  error: '#ff2442',
  success: '#00CD8B',
  text: '#20303C',
});

Colors.loadSchemes({
  light: {
    screenBG: 'transparent',
    textColor: Colors.grey10,
    moonOrSun: Colors.yellow30,
    mountainForeground: Colors.green30,
    mountainBackground: Colors.green50,
    $backgroundSuccess: Colors.green40,
    $backgroundSuccessLight: Colors.green70,
  },
  dark: {
    screenBG: Colors.grey10,
    textColor: Colors.white,
    moonOrSun: Colors.grey80,
    mountainForeground: Colors.violet10,
    mountainBackground: Colors.violet20,
    $backgroundSuccess: Colors.green40,
    $backgroundSuccessLight: Colors.green20,
  },
});

Typography.loadTypographies({
  txtDefault: { fontSize: 20, fontWeight: '300', lineHeight: 80 },
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
