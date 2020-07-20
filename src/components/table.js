import React from 'react'
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native'
import {FontAwesome5} from '@expo/vector-icons'
import {withNavigation} from 'react-navigation'

const Table = ({main,name,confirmed,recovered,active,deceased,deltaConfirmed,deltaRecovered,deltaDeceased,navigation}) =>{
    return(
        <View style={styles.container}>
            <View style={styles.nameContainer}>
            {main==="country"?
            <TouchableOpacity>
                <Text style={styles.statesname} onPress={()=>{navigation.navigate('State',{state:name})}} >
                {name}
                </Text>
            </TouchableOpacity>:
            <Text style={styles.name}>
                {name}
            </Text>}
            </View>
            <View style={styles.textContainer}>
            <Text style={styles.deltaText}>
            <FontAwesome5 style={{fontSize:8,color:"red"}} name="arrow-up" /> {deltaConfirmed}
            </Text>
            <Text style={styles.text}>
                {confirmed}
            </Text>
            </View>
            <View style={styles.textContainer}>
            <Text style={styles.deltaText}></Text>
            <Text style={styles.text}>
                {active}
            </Text>
            </View>
            <View style={styles.textContainer}>
            <Text style={styles.deltaText}>
            {deltaRecovered?<><FontAwesome5 style={{fontSize:8,color:"green"}} name="arrow-up" /> {deltaRecovered}</>:null}
            </Text>
            <Text style={styles.text}>
                {recovered}
            </Text>
            </View>
            <View style={styles.textContainer}>
            <Text style={styles.deltaText}>
                <FontAwesome5 style={{fontSize:8,color:"grey"}} name="arrow-up" /> {deltaDeceased}
            </Text>
            <Text style={styles.text}>
                {deceased}
            </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        width:"100%",
        height:50
    },
    text:{
        fontSize:12,
        textAlign:"center"
    },
    deltaText:{
        fontSize:9
    },
    statesname:{
        fontSize:13,
        color:"#ee7785",
        flexWrap:"wrap",
        fontWeight:"700",
        textAlign:"center"
    },
    name:{
        fontSize:13,
        flexWrap:"wrap",
        fontWeight:"700",
        textAlign:"center"
    },
    textContainer:{
        justifyContent:"center",
        alignItems:"center",
        width:"15.6%",
        borderWidth:1,
        borderColor:"#ee7785",
        borderRadius:10,
        margin:1
    },
    nameContainer:{
        justifyContent:"center",
        alignItems:"center",
        width:"35%",
        borderWidth:1,
        borderColor:"#ee7785",
        borderRadius:10,
        margin:1,
    }
})

export default withNavigation(Table)