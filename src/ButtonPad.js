import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native-web';

class Monitor extends Component {
  render() {
    return (
      <View style={styles.box}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={this._onPressButton}
            style={[numpadStyle.numpad, numpadStyle.leftButtonBorder, numpadStyle.grayBackgroundColor]}>
            <Text style={numpadStyle.text}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this._onPressButton}
            style={[numpadStyle.numpad, numpadStyle.buttonBorder, numpadStyle.grayBackgroundColor]}>
            <Text style={numpadStyle.text}>±</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this._onPressButton}
            style={[numpadStyle.numpad, numpadStyle.buttonBorder, numpadStyle.grayBackgroundColor]}>
            <Text style={numpadStyle.text}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this._onPressButton}
            style={[numpadStyle.numpad, numpadStyle.rightButtonBorder, numpadStyle.orangeBackGroundColor]}>
            <Text style={numpadStyle.text}>÷</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={this._onPressButton}
            style={[numpadStyle.numpad, numpadStyle.leftButtonBorder, numpadStyle.whiteBackgroundColor]}>
            <Text style={numpadStyle.text}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this._onPressButton}
            style={[numpadStyle.numpad, numpadStyle.buttonBorder, numpadStyle.whiteBackgroundColor]}>
            <Text style={numpadStyle.text}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this._onPressButton}
            style={[numpadStyle.numpad, numpadStyle.buttonBorder, numpadStyle.whiteBackgroundColor]}>
            <Text style={numpadStyle.text}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this._onPressButton}
            style={[numpadStyle.numpad, numpadStyle.rightButtonBorder, numpadStyle.orangeBackGroundColor]}>
            <Text style={numpadStyle.text}>X</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={this._onPressButton}
            style={[numpadStyle.numpad, numpadStyle.leftButtonBorder, numpadStyle.whiteBackgroundColor]}>
            <Text style={numpadStyle.text}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this._onPressButton}
            style={[numpadStyle.numpad, numpadStyle.buttonBorder, numpadStyle.whiteBackgroundColor]}>
            <Text style={numpadStyle.text}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this._onPressButton}
            style={[numpadStyle.numpad, numpadStyle.buttonBorder, numpadStyle.whiteBackgroundColor]}>
            <Text style={numpadStyle.text}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this._onPressButton}
            style={[numpadStyle.numpad, numpadStyle.rightButtonBorder, numpadStyle.orangeBackGroundColor]}>
            <Text style={numpadStyle.text}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={this._onPressButton}
            style={[numpadStyle.numpad, numpadStyle.leftButtonBorder, numpadStyle.whiteBackgroundColor]}>
            <Text style={numpadStyle.text}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this._onPressButton}
            style={[numpadStyle.numpad, numpadStyle.buttonBorder, numpadStyle.whiteBackgroundColor]}>
            <Text style={numpadStyle.text}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this._onPressButton}
            style={[numpadStyle.numpad, numpadStyle.buttonBorder, numpadStyle.whiteBackgroundColor]}>
            <Text style={numpadStyle.text}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this._onPressButton}
            style={[numpadStyle.numpad, numpadStyle.rightButtonBorder, numpadStyle.orangeBackGroundColor]}>
            <Text style={numpadStyle.text}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'stretch'}}>
          <TouchableOpacity
            onPress={this._onPressButton}
            style={[numpadStyle.widthNumpad, numpadStyle.bottomRowButtomBorder, numpadStyle.whiteBackgroundColor]}>
            <Text style={numpadStyle.text}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this._onPressButton}
            style={[numpadStyle.numpad, numpadStyle.bottomRowButtomBorder, numpadStyle.whiteBackgroundColor]}>
            <Text style={numpadStyle.text}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this._onPressButton}
            style={[numpadStyle.numpad, numpadStyle.orangeBackGroundColor]}>
            <Text style={numpadStyle.text}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: 'white'
  },
  text: {
    color: 'white',
    fontSize: 80
  }
});

const numpadStyle = StyleSheet.create({
  numpad: {
    flex: 1,
    width: '25%',
    flexWrap: 'nowarp',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 'none',
    flexGrow: 1
  },
  grayBackgroundColor: {
    background: '#c8c8cd'
  },
  orangeBackGroundColor: {
    background: 'rgb(252, 156, 23)'
  },
  whiteBackgroundColor: {
    background: '#e0e0e8'
  },
  widthNumpad: {
    flex: 0,
    width: '50%',
    flexWrap: 'nowarp',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgb(119, 119, 119)',
    outline: 'none',
    flexShrink: 0,
    flexGrow: 0
  },
  text: {
    color: 'black',
    fontSize: 30,
    fontWeight: '300'
  },
  leftButtonBorder: {
    borderRightWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: '#666666'
  },
  buttonBorder: {
    borderRightWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: '#666666',
    outline: 'none'
  },
  rightButtonBorder: {
    borderBottomWidth: 0.5,
    borderColor: '#666666',
    outline: 'none'
  },
  bottomRowButtomBorder: {
    borderRightWidth: 0.5,
    borderColor: '#666666',
    outline: 'none'
  }
})

export default Monitor;
