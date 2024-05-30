import { Incubator, View } from 'react-native-ui-lib';
import CalendarPicker from 'react-native-calendar-picker';
import { format } from 'date-fns';

interface Props {
  show?: boolean;
  onClose: () => void;
  onSelect?: (date: string) => void;
}

const CalendarPopup = ({ show, onClose, onSelect }: Props) => {
  return (
    <Incubator.Dialog
      visible={show}
      containerStyle={{ width: null }}
      onDismiss={onClose}
    >
      <View padding-20 paddingT-10>
        <CalendarPicker
          startFromMonday
          textStyle={{ color: 'white' }}
          onDateChange={(date) => {
            if (onSelect) {
              onSelect(format(date, 'dd-MM-yyyy'));
            }
          }}
        />
      </View>
    </Incubator.Dialog>
  );
};

export { CalendarPopup };
