/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
    TextInput,
    Image,
    TouchableHighlight,
    Picker,
    Button
} from 'react-native';

import styles from './styles.js'

export default class Weather extends Component {

     state =  {
         name: "CAMT",
         weather: [],
         icon: 'openweathermap.org/img/w/10d.png',
         temp: 0,
         unit: "°C",  
         date: "",
         bg: '#8DEDFF'
    }

    _handleName(event) {

        var name = event.nativeEvent.text;
        var appId = 'f8254fa54526beec6c16fa5c476a9c56';
        var units = ""
        
        if(this.state.unit === "°C"){
            units = "metric"
        } else if(this.state.unit === "°F"){
            units = "imperial"
        }

        fetch('http://api.openweathermap.org/data/2.5/forecast?q=' + name +'&appid='+ appId +'&units='+units )
        .then((response) => response.json())
        .then((responseJSON) => {
            console.log(responseJSON);
            this.setState({
                weather: [responseJSON.list[0].weather[0].main,
                        responseJSON.list[8].weather[0].main,
                        responseJSON.list[16].weather[0].main,
                        responseJSON.list[24].weather[0].main,
                        responseJSON.list[32].weather[0].main],
                icon: ['openweathermap.org/img/w/'+ responseJSON.list[0].weather[0].icon+'.png' ,
                        'openweathermap.org/img/w/'+ responseJSON.list[8].weather[0].icon+'.png' ,
                        'openweathermap.org/img/w/'+ responseJSON.list[16].weather[0].icon+'.png' ,
                        'openweathermap.org/img/w/'+ responseJSON.list[24].weather[0].icon+'.png' ,
                        'openweathermap.org/img/w/'+ responseJSON.list[32].weather[0].icon+'.png' ,],
                temp: [responseJSON.list[0].main.temp,
                        responseJSON.list[8].main.temp,
                        responseJSON.list[16].main.temp,
                        responseJSON.list[24].main.temp,
                        responseJSON.list[32].main.temp,],
                date: [responseJSON.list[0].dt,
                        responseJSON.list[8].dt,
                        responseJSON.list[16].dt,
                        responseJSON.list[24].dt,
                        responseJSON.list[32].dt,]
            });
            console.log(this.state.weather);
        })
        .catch((error) => {
            console.warn(error);
        });

        

        this.setState({
            name: name,
        },
        );
    }

    timeStampToDay(timestamp) {
        var t = new Date( timestamp*1000 );
        var formatted = moment(t).format("MMMM Do");
        return formatted;
    }


    _handlePicker(itemValue, itemIndex) {

        this.setState({
            unit: itemValue
        }, this._log );

    }

    _theme1() {
        this.setState({
            bg: '#8DEDFF'
        })
    }

    _theme2() {
        this.setState({
            bg: '#FFB9DF'
        })
    }

    render() {
    return (
        
      <View style={[styles.container, {backgroundColor: this.state.bg}]}>

        <TextInput style={styles.inputText} onSubmitEditing = {(event) => this._handleName(event)} 
            placeholder="input the city" />

        <Picker style={{width:80, height:50}}
            selectedValue={this.state.unit}
            onValueChange={(itemValue, itemIndex) => this._handlePicker(itemValue, itemIndex) }>
            <Picker.Item label="°C" value="°C" />
            <Picker.Item label="°F" value="°F" />
        </Picker>
        
        <View style={styles.wrapForecast} >
            <View style={[styles.card,{backgroundColor: '#FFF4B2'}]} >
        
                <Text style={{fontSize: 12}}>
                    {this.state.weather[0]}
                </Text>
                <Text style={{fontSize: 10}}>
                    {this.state.temp[0]} {this.state.unit}
                </Text>

                <Image source = {{uri: 'http://'+this.state.icon[0] , isStatic: true}}
                        style={{width:50, height:50}} resizeMode='cover'>
                </Image>

                <Text style={{fontSize: 12}} >
                    TODAY
                </Text>

            </View>
            <View style={styles.card} >
                <Text style={{fontSize: 12}} >
                    {this.state.weather[1]}
                </Text>
                <Text style={{fontSize: 10}}>
                    {this.state.temp[1]} {this.state.unit}
                </Text>

                <Image source = {{uri: 'http://'+this.state.icon[1] , isStatic: true}}
                        style={{width:50, height:50}} resizeMode='cover'>
                </Image>
                <Text style={{fontSize: 12}} >
                    {this.timeStampToDay(this.state.date[1])}
                </Text>
            </View>
            <View style={styles.card} >
                <Text style={{fontSize: 12}} >
                    {this.state.weather[2]}
                </Text>
                <Text style={{fontSize: 10}}>
                    {this.state.temp[2]} {this.state.unit}
                </Text>

                <Image source = {{uri: 'http://'+this.state.icon[2] , isStatic: true}}
                        style={{width:50, height:50}} resizeMode='cover'>
                </Image>
                <Text style={{fontSize: 12}} >
                    {this.timeStampToDay(this.state.date[2])}
                </Text>
            </View>
            <View style={styles.card} >
                <Text style={{fontSize: 12}} >
                    {this.state.weather[3]}
                </Text>
                <Text style={{fontSize: 10}}>
                    {this.state.temp[3]} {this.state.unit}
                </Text>

                <Image source = {{uri: 'http://'+this.state.icon[3] , isStatic: true}}
                        style={{width:50, height:50}} resizeMode='cover'>
                </Image>
                <Text style={{fontSize: 12}} >
                    {this.timeStampToDay(this.state.date[3])}
                </Text>
            </View>
            <View style={styles.card} >
                <Text style={{fontSize: 12}} >
                    {this.state.weather[4]}
                </Text>
                <Text style={{fontSize: 10}}>
                    {this.state.temp[4]} {this.state.unit}
                </Text>

                <Image source = {{uri: 'http://'+this.state.icon[4] , isStatic: true}}
                        style={{width:50, height:50}} resizeMode='cover'>
                </Image>
                <Text style={{fontSize: 12}} >
                    {this.timeStampToDay(this.state.date[4])}
                </Text>
            </View>
        </View>

        <View style={{flexDirection:'row', flexWrap:'wrap', margin: 10}}>
            <TouchableHighlight onPressIn = {() => this._theme1()}>
                <View style={[styles.button, {backgroundColor: '#4169e1'}]} >
                    <Text style={styles.textButton} >
                        THEME 1
                    </Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPressIn = {() => this._theme2()}>
                <View style={[styles.button, {backgroundColor: '#ff69b4'}]} >
                    <Text style={styles.textButton}>
                        THEME 2
                    </Text>
                </View>
            </TouchableHighlight>
        </View>

        <Image source = {{uri: 'http://www.misskatecuttables.com/uploads/shopping_cart/10603/large_sparkle-rainbow.png' , isStatic: true}}
                        style={{width:200, height:200}} resizeMode='cover'>
        </Image>

      </View>
    );
  }

}

var moment = require('moment');


AppRegistry.registerComponent('Weather', () => Weather);