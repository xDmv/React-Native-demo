import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Calendar, DayType, ThemeType} from 'react-native-calendario';
import moment from 'moment';

const truthyValue = true;

const DISABLED_DAYS = {
  '2022-11-20': truthyValue,
  '2022-11-10': truthyValue,
};

const START_DATE_1 = '2022-01-10';
const END_DATE_1 = '2022-04-15';
const MIN_DATE_1 = '2022-01-02';
const MAX_DATE_1 = '2022-04-20';

const FORMAT = 'YYYY-MM-DD';

const INITIAL_STATE = {
  disableRange: false,
  startDate: moment(START_DATE_1, FORMAT).toDate(),
  endDate: moment(END_DATE_1, FORMAT).toDate(),
  minDate: moment(MIN_DATE_1, FORMAT).toDate(),
  maxDate: moment(MAX_DATE_1, FORMAT).toDate(),
};

const markedDays = {
  '2022-03-12': {
    dots: [
      {
        color: 'red',
        selectedColor: 'green',
      },
      {
        color: 'blue',
        selectedColor: 'yellow',
      },
    ],
  },
};

const CalendarElement = props => {
  const {stateCalendar, setStateCalendar} = useState({...INITIAL_STATE});

  function handlePress(date) {
    console.log('date: ', date);
  }

  return (
    <View sttyle={styles.container}>
      <Calendar onPress={handlePress} theme={styles.themeStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  themeStyle: {
    activeDayColor: {},
    monthTitleTextStyle: {
      color: '#6d95da',
      fontWeight: '300',
      fontSize: 16,
    },
    emptyMonthContainerStyle: {},
    emptyMonthTextStyle: {
      fontWeight: '300',
    },
    weekColumnsContainerStyle: {},
    weekColumnStyle: {
      paddingVertical: 10,
    },
    weekColumnTextStyle: {
      color: '#b6c1cd',
      fontSize: 13,
    },
    nonTouchableDayContainerStyle: {},
    nonTouchableDayTextStyle: {},
    startDateContainerStyle: {},
    endDateContainerStyle: {},
    dayContainerStyle: {},
    dayTextStyle: {
      color: '#2d4150',
      fontWeight: '200',
      fontSize: 15,
    },
    dayOutOfRangeContainerStyle: {},
    dayOutOfRangeTextStyle: {},
    todayContainerStyle: {},
    todayTextStyle: {
      color: '#6d95da',
    },
    activeDayContainerStyle: {
      backgroundColor: '#6d95da',
    },
    activeDayTextStyle: {
      color: 'white',
    },
    nonTouchableLastMonthDayTextStyle: {},
  },
});

export default CalendarElement;
