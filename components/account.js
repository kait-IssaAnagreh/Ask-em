

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {};
export default class Account extends Component<Props> {
// class Account extends Component<Props> {
  render() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}> In Account Component! </Text>
            <Text style={styles.text}>Dark from server.js: {this.state.data.dark}</Text>
        </View>
    );
  }

  constructor(props) {
    super(props)
    this.state = { data: 'wait' }
  }

  componentDidMount() {
    // ip is changable every new internet connection, use this command in terminal: ifconfig |grep inet
    // then take the netmask ip
    fetch('http://172.20.10.13:3000/isa/', {
      method: 'GET'
    }) 
      .then((response) => { return response.json() })
      .then((res) => {
        // alert(res.dark),
          this.setState({
            data: res
          })
      }).done()
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    padding: 10,
    fontSize: 18,
    height: 44,
    textAlign: 'left',
  },
});




// this is for navigation:
// export default createStackNavigator ({
//     Account: {
//         screen: Account
//     }
// })