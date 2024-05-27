import dayjs from 'dayjs';
import { View, Button, Image, Text } from 'react-native-ui-lib';
import { errorToast } from '../services/toast';
import { DATE_FORMAT } from '../services/const';

interface Props {
  currentWeek?: string;
  onWeekChanged?: (weekStart: string) => void;
}

const navSize = 24;

const WeekPicker = ({ currentWeek, onWeekChanged }: Props) => {
  const onWeek = (days: number) => {
    const current = dayjs(currentWeek);
    if (!current.isValid()) {
      errorToast(`'${currentWeek}' is not a valid date`);
    }
    if (onWeekChanged) {
      onWeekChanged(current.add(days, 'day').format(DATE_FORMAT));
    }
  };
  console.log(currentWeek);

  return (
    <View row paddingR-10 right>
      <Button
        onPress={() => onWeek(-7)}
        style={{ backgroundColor: 'transparent', margin: 0, padding: 0 }}
        iconSource={() => (
          <Image assetName="prev" width={navSize} height={navSize} />
        )}
      ></Button>
      <View paddingL-10 paddingR-10>
        <Text textColor>{currentWeek}</Text>
      </View>
      <Button
        onPress={() => onWeek(7)}
        style={{ backgroundColor: 'transparent', margin: 0, padding: 0 }}
        iconSource={() => (
          <Image assetName="next" width={navSize} height={navSize} />
        )}
      ></Button>
      {/* <Button
        onPress={() => {}}
        style={{ backgroundColor: 'transparent', margin: 0, padding: 0 }}
        iconSource={() => (
          <Image assetName="calendar" width={navSize} height={navSize} />
        )}
      ></Button> */}
    </View>
  );
};

export { WeekPicker };
