import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native-web';

class Monitor extends Component {
  render() {
    const { number } = this.props
    return (
      <View style={styles.box}>
        <Text style={styles.text}>{number}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    padding: 10,
    width: 375,
    height: 150,
    backgroundColor: 'rgb(28, 25, 28)' ,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontSize: 80,
    flexDirection: 'column',
    flexDirection: 'center',
    fontWeight: '300'
  }
});

export default Monitor;
