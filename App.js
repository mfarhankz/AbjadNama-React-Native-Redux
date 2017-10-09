/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class App extends Component<{}> {
    constructor(){
      super();
    }
    farhan = 'فرحان';
    urduAlphabet = [
        { آ: 1 },
        { ا: 1 },
        { ب: 2 },
        { پ: 2 },
        { ت: 400 },
        { ٹ: 400 },
        { ث: 500 },
        { ج: 3 },
        { چ: 3 },
        { ح: 8 },
        { خ: 600 },
        { د: 4 },
        { ڈ: 4 },
        { ذ: 700 },
        { ر: 200 },
        { ڑ: 200 },
        { ز: 7 },
        { ژ: 7 },
        { س: 60 },
        { ش: 300 },
        { ص: 90 },
        { ض: 800 },
        { ط: 9 },
        { ظ: 900 },
        { ع: 70 },
        { غ: 1000 },
        { ف: 80 },
        { ق: 100 },
        { ک: 20 },
        { گ: 20 },
        { ل: 30 },
        { م: 40 },
        { ن: 50 },
        { ں: 50 },
        { و: 6 },
        { ه: 5 },
        { ھ: 5 },
        { ء: 0 },
        { ی: 10 },
        { ے: 10 }
    ];
    render() {
        console.log(this.farhan.split(''));
        return (
            <View style={styles.container}>
              <Text style={styles.welcome}>
              </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
