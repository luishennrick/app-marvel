import React, {useState, useEffect} from 'react';
import {TouchableOpacity, View, FlatList, Text, Image} from 'react-native';
import md5 from 'js-md5';
import axios from 'axios';
import {Herodiv} from './styled';

const PRIVATE_KEY = 'CHAVE PRIVADA';
const PUBLIC_KEY = 'CHAVE PUBLICA';
const timestamp = Number(new Date());

function Home () {
    
    const navigationOptions = {
        title: 'Heroes'
    };
    
    
    const [heroes, setHeroes] = useState([{}]);
    
    var hash = md5.create();
    hash = hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY);
    
    
    const getHeroes = function(){
        axios.get(`https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash}`)
          .then(response => {
            const data = response.data.data.results;
            setHeroes(data);
          });
      }
    
      useEffect(getHeroes, []);
  
    

    _renderItem = ({item}) => {
        return  (
            <Herodiv>
            <TouchableOpacity onPress={()=>this._onItemPress(item)} Class='TouchableOpacity'>
                <Image source={{uri: `${item.thumbnail.path}.${item.thumbnail.extension}` }} />
                <Text>{item.name}</Text>
            </TouchableOpacity>
            </Herodiv>
        );
    }

    _onItemPress = (item) => {
        this.props.navigation.navigate('Description', {hero: item});
    } 

    
        return (
            <FlatList 
                data={heroes}
                renderItem={{item}}
                keyExtractor={hero => hero.name}
                ItemSeparatorComponent={()=>
                    <View Class='view' 
                />}
            />
        );
    
}

export default Home;