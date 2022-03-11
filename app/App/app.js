import React, {useState} from 'react';
import {
  StyleSheet,
  StatusBar,
  useColorScheme,
  View,
  Button,
  FlatList,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {AddItem, ListItem, Header} from '../components';

function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const [isShowCalendar, setIsShowCalendar] = useState(false);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      {id: Math.random().toString(), value: goalTitle},
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };

  const showCalendar = () => {
    console.log('isShowCalendar: ', isShowCalendar);
    const isShow = !isShowCalendar;
    setIsShowCalendar(isShow);
  };

  return (
    <View style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Header title="Guess Number" isDark={isDarkMode} />
      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}>
        <View style={styles.container}>
          <Button title="Add New " onPress={() => setIsAddMode(true)} />
          <Button
            color="green"
            title={isShowCalendar ? 'Unvisible Calendar' : 'Visible Calendar'}
            onPress={() => showCalendar()}
          />
          <AddItem
            visible={isAddMode}
            onAddGoal={addGoalHandler}
            onCancel={cancelGoalAdditionHandler}
          />
          <FlatList
            keyExtractor={(item, index) => item.id}
            data={courseGoals}
            renderItem={itemData => (
              <ListItem
                id={itemData.item.id}
                onDelete={removeGoalHandler}
                title={itemData.item.value}
              />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 20,
  },
});

export default App;
