import React from 'react'
import { View,Text,Image,StyleSheet,ScrollView } from "react-native";

const Precautions = props =>{
    return(
    <ScrollView>
    <View style={styles.container}>
            <Image style={styles.horImage} source={require('../../assets/empty_street.png')} />
            <Text style={styles.textHeader} >Healthy tips to reduce the Risk of COVID-19 </Text>
            <Image style={styles.image} source={require('../../assets/social_distancing.png')} />
            <Text style={styles.textTop} >Maintain Social Distancing</Text>
            <Image style={styles.verImage} source={require('../../assets/wash_hands.png')} />
            <Text style={styles.text} >Wash your Hands frequently</Text>
            <Image style={styles.verImage} source={require('../../assets/Meditation.png')} />
            <Text style={styles.textTop} >Meditation improves Immunity</Text>
            <Image style={styles.horImage} source={require('../../assets/healthy.png')} />
            <Text style={styles.text} >Exercise Boost the Immunity</Text>
            <Image style={styles.horImage} source={require('../../assets/medi.png')} />
            <Text style={styles.text} >Visit your Doctor when necessary</Text>
    </View>
    </ScrollView>)
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        marginTop:40
    },
    image:{
        width:300,
        height:250,
    },
    horImage:{
        width:400,
        height:230
    },
    verImage:{
        width:300,
        height:300
    },
    text:{
        fontSize:20,
        color:"#fd689d",
        marginBottom:30,
        fontWeight:"700",
        marginTop:10
    },
    textHeader:{
        fontSize:24,
        fontWeight:"700",
        color:"#fd689d",
        marginBottom:30,
        textAlign:"center",
        paddingHorizontal:3,
        marginTop:-18
    },
    textTop:{
        fontSize:22,
        color:"#fd689d",
        marginBottom:30,
        fontWeight:"700",
        marginTop:-10
    }
  })

export default Precautions

/***
            <Image style={styles.horImage} source={require('../../assets/Notify.png')} />
            <Image style={styles.horImage} source={require('../../assets/404.png')} />
            
            <Image style={styles.horImage} source={require('../../assets/medical.png')} /> */