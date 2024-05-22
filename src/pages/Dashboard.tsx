import { useEffect, useMemo } from 'react';
import { Dimensions } from 'react-native';
import { View, Button, Image, LoaderScreen } from 'react-native-ui-lib';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BarChart } from 'react-native-gifted-charts';

import { useUser } from '../services/user';
import { useDashboard } from '../services/dashboard';
import { RootStackParamList } from './navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Dashboard'>;

const unitWidth = Dimensions.get('screen').width / 9;

const getDefaultStackBar = () => ({
  stacks: [
    {
      value: 0,
      color: 'rgb(170, 70, 67)',
    },
    {
      value: 0,
      color: 'rgb(69, 114, 167)',
      marginBottom: 2,
    },
  ],
});

const dashboard = ({ navigation }: Props) => {
  const { apiToken } = useUser();
  const { loading, weekRecords, prepareDashboard } = useDashboard();

  const chartData = useMemo(() => {
    const aggregatedData = weekRecords.reduce(
      (data, { weekDay, weekDayName, time, canBill }) => {
        if (!data[weekDay]) {
          data[weekDay] = { ...getDefaultStackBar(), label: weekDayName };
        }
        if (canBill) {
          data[weekDay].stacks[1].value += Number(time);
        } else {
          data[weekDay].stacks[0].value += Number(time);
        }

        return data;
      },
      [] as any[],
    );

    // Back fill for missing days
    for (let i = 0; i <= 6; i++) {
      if (!aggregatedData[i]) {
        aggregatedData[i] = getDefaultStackBar();
      }
    }

    return aggregatedData;
  }, [weekRecords]);

  useEffect(() => {
    // Use `setOptions` to update the button that we previously specified
    // Now the button includes an `onPress` handler to update the count
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => navigation.push('Profile')}
          style={{ backgroundColor: 'transparent', margin: 0, padding: 0 }}
          iconSource={() => <Image assetName="user" width={32} height={32} />}
        ></Button>
      ),
    });
  }, [navigation, apiToken]);

  useEffect(() => {
    prepareDashboard();
  }, []);

  return (
    <View flex paddingT-20 paddingB-20 bg-screenBG>
      {loading && <LoaderScreen />}
      {!loading && (
        <BarChart
          stackData={chartData}
          rulesType="dot"
          barWidth={unitWidth * (3 / 4)}
          stepValue={1}
          spacing={unitWidth * (1 / 4)}
          rulesColor="#666"
          maxValue={8}
          rotateLabel
        />
      )}
    </View>
  );
};

const Dashboard = gestureHandlerRootHOC(dashboard);

export { Dashboard };
