import React,{useState} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const offset = 24;

  const Home = (props) => {
    const [changeText, setChangeText] = useState('');
    
    // state = {
    //     name: '',
    // };

 const onPress = () => {
    props.navigation.navigate('Chat', { name: changeText })
 }

//   onChangeText = name => this.setState({ name });


    return (
      <View>
        <Text style={styles.title}>Enter your name:</Text>
        <TextInput
          style={styles.nameInput}
          placeHolder="Flutter God Evan Bacon"
          onChangeText={setChangeText}
          value={changeText}
        />
        <TouchableOpacity onPress={() => onPress()}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    );
}



const styles = StyleSheet.create({
  title: {
    marginTop: offset,
    marginLeft: offset,
    fontSize: offset,
  },
  nameInput: {
    height: offset * 2,

    margin: offset,
    paddingHorizontal: offset,
    borderColor: '#111111',
    borderWidth: 1,
  },
  buttonText: {
    marginLeft: offset,
    fontSize: offset,
  },
});

export default Home;
