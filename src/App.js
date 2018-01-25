import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native-web';
import Monitor from './Monitor'
import ButtonPad from './ButtonPad'

class App extends Component {

  handleTabButton = (key) => {
    console.log(key)
  }

  render() {
    const { handleTabButton } = this
    return (
      <View style={styles.box}>
        <Monitor number={0} />
        <ButtonPad onTabButton={handleTabButton} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: { width: 375, height: 667 }
});

export default App;
