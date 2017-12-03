import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Item, Label } from 'native-base';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#90ee90',
  },
});

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
  		<Item stackedLabel>
  			<Label>Username:</Label>
      		<Input placeholder='Text'/>
      	</Item>
      </View>
    );
  }
}