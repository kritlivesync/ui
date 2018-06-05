import PropTypes from 'prop-types';
import React from 'react';
import {
  View,
  StyleSheet,
  Platform,
  TouchableHighlight,
  Text as NativeText,
} from 'react-native';
import colors from '../config/colors';
import Text from '../text/Text';
import fonts from '../config/fonts';
import normalize from '../helpers/normalizeText';
import ViewPropTypes from '../config/ViewPropTypes';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

const CalendarItem = props => {
  const {
    flexDirection,
    containerStyle,
    ...attributes
  } = props;

  let calendarTheme = {
    arrowColor: 'white',
      'stylesheet.calendar.header': {
      week: {
        marginTop: 5,
          flexDirection: 'row',
          justifyContent: 'space-between'
      }
    }
  };

  return (
    <Agenda
      items={
        {'2012-05-22': [{text: 'item 1 - any js object'}],
          '2012-05-23': [{text: 'item 2 - any js object'}],
          '2012-05-24': [],
          '2012-05-25': [{text: 'item 3 - any js object'},{text: 'any js object'}],
        }}
      loadItemsForMonth={(month) => {console.log('trigger items loading')}}
      onDayPress={(day)=>{console.log('day pressed')}}
      onDayChange={(day)=>{console.log('day changed')}}
      selected={'2012-05-22'}
      minDate={'2012-05-10'}
      maxDate={'2012-05-30'}
      pastScrollRange={50}
      futureScrollRange={50}
      renderItem={(item, firstItemInDay) => {return (<View />);}}
      renderDay={(day, item) => {return (<View />);}}
      renderEmptyDate={() => {return (<View />);}}
      renderKnob={() => {return (<View />);}}
      rowHasChanged={(r1, r2) => {return r1.text !== r2.text}}
      hideKnob={true}
      markedDates={{
        '2012-05-16': {selected: true, marked: true},
        '2012-05-17': {marked: true},
        '2012-05-18': {disabled: true}
      }}
      theme={{
        ...calendarTheme,
        agendaDayTextColor: 'yellow',
        agendaDayNumColor: 'green',
        agendaTodayColor: 'red',
        agendaKnobColor: 'blue'
      }}
      style={{}}
    />
  );
};

CalendarItem.propTypes = {
  flexDirection: PropTypes.string,
  containerStyle: ViewPropTypes.style,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
    margin: 15,
    paddingTop: 26,
    marginBottom: 0,
    marginTop: 19,
    borderRadius: 8,
    flexDirection: 'column',
  },
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 350
  },
});

export default CalendarItem;
