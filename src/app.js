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
    TextInput,
    Button
} from 'react-native';
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
const onPressLearnMore = () => {
    this.total = this.countNumber + this.dayNumber;
    console.log(this.total);
};
export default class App extends Component<> {
    countNumber  = 0;
    countNumber2  = 0;
    dayNumber  = 0;
    total  = 0;
    date = new Date().getDay().toString();
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
    day = [
        {0 : 387},
        {1 : 367},
        {2 : 422},
        {3 : 566},
        {4 : 412},
        {5 : 118},
        {6 : 357}
    ];


    constructor(props) {
        super(props);
        this.state = { text: '' }, { text2: '' } ;

    }
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
        if(this.state.text2){
            this.countNumber2 = 0;
            for (const key in this.urduAlphabet) {
                const keyVal = this.urduAlphabet[key]
                for (i = 0; i < this.state.text2.length; i++) {
                    const val = this.state.text2[i];
                    if(keyVal[val]){
                        this.countNumber2 = this.countNumber2 + keyVal[val];
                    }
                }
            }
        }
        if(this.date){
            this.dayNumber = 0;
            for (const key in this.day) {
                const keyVal = this.day[key]
                for (i = 0; i < this.date.length; i++) {
                    const val = this.date[i];
                    if(keyVal[val]){
                        this.dayNumber = this.dayNumber + keyVal[val];
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

                <TextInput style={styles.inputFiled}
                           onChangeText={(text2) => this.setState({text2})}
                           value={this.state.text2} />

                <Text style={styles.welcome}>
                    {this.countNumber + this.countNumber2}
                </Text>
                <Text style={styles.welcome}>
                    Day: {this.dayNumber}
                </Text>
                <Text style={styles.welcome}>
                    Day: {this.total = this.countNumber + this.dayNumber}
                    day: {this.total / 3}
                </Text>
                <Button
                    onPress={onPressLearnMore}
                    title="Learn More"
                    accessibilityLabel="Learn more about this purple button"
                />
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
