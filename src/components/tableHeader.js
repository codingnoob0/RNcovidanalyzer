import React from 'react'
import {Text,View,StyleSheet} from 'react-native'

const TableHeader = ({main}) =>{
    return(
        <View style={styles.container}>
            <View style={styles.nameContainer} >
            <Text style={styles.name}>
                {main}
            </Text>
            </View>
            <View style={styles.textContainer} >
            <Text style={styles.text}>
                C
            </Text>
            </View>
            <View style={styles.textContainer} >
            <Text style={styles.text}>
                A
            </Text>
            </View>
            <View style={styles.textContainer} >
            <Text style={styles.text}>
                R
            </Text>
            </View>
            <View style={styles.textContainer} >
            <Text style={styles.text}>
                D
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
        fontSize:14,
        fontWeight:"700"
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
    name:{
        fontSize:14,
        fontWeight:"700"
    },
    nameContainer:{
        justifyContent:"center",
        alignItems:"center",
        width:"35%",
        borderWidth:1,
        borderColor:"#ee7785",
        borderRadius:10,
        margin:1
    }
})

export default TableHeader

/**<View style={styles.textContainer} >
            <Text style={styles.text}>
                Active
            </Text>
            </View> */