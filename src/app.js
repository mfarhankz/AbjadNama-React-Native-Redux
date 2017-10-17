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
    View,
    TextInput
} from 'react-native';
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

export default class App extends Component<> {
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }
    countNumber  = 0;
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
        if(this.state.text){
            this.countNumber = 0;
            for (const key in this.urduAlphabet) {
                const keyVal = this.urduAlphabet[key]
                for (i = 0; i < this.state.text.length; i++) {
                    const val = this.state.text[i];
                    if(keyVal[val]){
                        this.countNumber = this.countNumber + keyVal[val];
                    }
                }
            }
        }
        return (
            <View style={styles.container}>
                <Header/>
                <TextInput style={styles.inputFiled}
                   onChangeText={(text) => this.setState({text})}
                   value={this.state.text} />

                <Text style={styles.welcome}>
                    {this.countNumber}
                </Text>
                <Footer/>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#19ff20',
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
    inputFiled:{
        height:40,
        width: 300,
        backgroundColor:'#fff',
        borderColor: '#333',
        borderWidth: 1,
        padding: 10
    }
});
