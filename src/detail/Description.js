import React, { Component } from 'react';
import { ScrollView, Image, Dimensions, Text } from 'react-native';
import {Herodiv} from './styled.js';

const SCREEN_WIDTH = Dimensions.get('screen').width;

export default class Description extends Component {
    static navigationOptions = {
        title: 'Description'
    }

    render() {
        const { hero } = this.props.navigation.state.params;
        return (
           <ScrollView>
            <Herodiv>
               <Image 
                    source={{uri: `${hero.thumbnail.path}.${hero.thumbnail.extension}`}} 
                    style={{width:SCREEN_WIDTH, height:SCREEN_WIDTH}}
                />
                <Text Class='namehero'>{hero.name}</Text>
                <Text>{hero.description}</Text>
            </Herodiv>
           </ScrollView> 
        );
    }
};