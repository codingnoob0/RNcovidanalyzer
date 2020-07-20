import React from 'react'
import {Text,View,StyleSheet} from 'react-native'

const Header = ({confirmed,recovered,deceased,deltaConfirmed,deltaRecovered,deltaDeceased,active}) =>{
    return(
    <View style={styles.container}>
        <View style={styles.itemContainer}>
            <View style={styles.item}>
                <Text style={styles.name}>Confirmed</Text>
                <Text style={styles.deltaCount}>[+{deltaConfirmed}]</Text>
                <Text style={styles.count}>{confirmed}</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.name}>Active</Text>
                <Text style={styles.deltaCount}></Text>
                <Text style={styles.count}>{active}</Text>
            </View>
        </View>
        <View style={styles.itemContainer}>
            <View style={styles.item}>
                <Text style={styles.name}>Recovered</Text>
                <Text style={styles.deltaCount}>{deltaRecovered?`[+${deltaRecovered}]`:null}</Text>
                <Text style={styles.count}>{recovered}</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.name}>Deceased</Text>
                <Text style={styles.deltaCount}>[+{deltaDeceased}]</Text>
                <Text style={styles.count}>{deceased}</Text>
            </View>
        </View>
    </View>)
}
const styles = StyleSheet.create({
    container:{
        height:280,
        justifyContent:"space-around",
        backgroundColor:"#ee7785",
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        marginBottom:3,
        paddingTop:30
    },
    itemContainer:{
        flexDirection:"row",
        justifyContent:"space-around"
    },
    item:{
        width:"50%",
        height:"100%",
        justifyContent:"center",
        alignItems:"center",
        paddingBottom:0
    },
    name:{
        fontSize:22,
        fontWeight:"700",
        marginBottom:5,
        color:"#fff"
    },
    count:{
        fontSize:24,
        fontWeight:"400",
        color:"#fff"
    },
    deltaCount:{
        fontSize:12,
        fontWeight:"400",
        color:"#fff",
        marginBottom:5
    }
});

export default Header