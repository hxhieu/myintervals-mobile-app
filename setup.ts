// Require to be loaded before everything else for dark mode to work
require('react-native-ui-lib/config').setConfig({ appScheme: 'default' });

import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday';
dayjs.extend(weekday);
