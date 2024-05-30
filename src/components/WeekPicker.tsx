import dayjs from 'dayjs';
import { View, Button, Image, Text } from 'react-native-ui-lib';
import { errorToast } from '../services/toast';
import { DATE_FORMAT } from '../services/const';
import { CalendarPopup } from './CalendarPopup';
import { useState } from 'react';

interface Props {
  currentWeek?: string;
  onWeekChanged?: (weekStart: string) => void;
}

const navSize = 24;

const WeekPicker = ({ currentWeek, onWeekChanged }: Props) => {
  const [showCalendar, setShowCalendar] = useState(false);

  const onWeekNav = (days: number) => {
    const current = dayjs(currentWeek);
    if (!current.isValid()) {
      errorToast(`'${currentWeek}' is not a valid date`);
    }
    if (onWeekChanged) {
      onWeekChanged(current.add(days, 'day').format(DATE_FORMAT));
    }
  };

  const onDateNav = (date: string) => {
    console.log('-----', date);
    if (onWeekChanged) {
      onWeekChanged(date);
    }
    setShowCalendar(false);
  };

  const onReset = () => {
    if (onWeekChanged) {
      onWeekChanged(dayjs().startOf('week').format(DATE_FORMAT));
    }
  };
  return (
    <>
      <CalendarPopup
        show={showCalendar}
        onClose={() => setShowCalendar(false)}
        onSelect={onDateNav}
      />
      <View row paddingB-10>
        <View flex row left paddingL-10>
          <Button
            onPress={onReset}
            style={{ backgroundColor: 'transparent', margin: 0, padding: 0 }}
            iconSource={() => (
              <Image assetName="home" width={navSize} height={navSize} />
            )}
          />
        </View>
        <View flex row right paddingR-10 centerV>
          <Button
            onPress={() => setShowCalendar(true)}
            style={{ backgroundColor: 'transparent', margin: 0, padding: 0 }}
            iconSource={() => (
              <Image assetName="calendar" width={navSize} height={navSize} />
            )}
          />
          <Button
            onPress={() => onWeekNav(-7)}
            style={{ backgroundColor: 'transparent', margin: 0, padding: 0 }}
            iconSource={() => (
              <Image assetName="prev" width={navSize} height={navSize} />
            )}
          />
          <View paddingL-10 paddingR-10>
            <Text textColor>{currentWeek}</Text>
          </View>
          <Button
            onPress={() => onWeekNav(7)}
            style={{ backgroundColor: 'transparent', margin: 0, padding: 0 }}
            iconSource={() => (
              <Image assetName="next" width={navSize} height={navSize} />
            )}
          />
        </View>
      </View>
    </>
  );
};

export { WeekPicker };
