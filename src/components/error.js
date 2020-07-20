import React,{useContext,useState} from 'react'
import {Image,View,StyleSheet,Text,TouchableOpacity} from 'react-native'
import { Context as DataContext } from '../context/DataContext';

const Error=({id})=>{
    const [loading,setLoading] = useState(false)
     const {getFromLocalStorage} = useContext(DataContext);
     return(
    <View style={styles.container}>
        <Image style={{width:400,height:200}} source={require('../../assets/404.png')} />
        <Text style={styles.text}>Page not Found</Text>
        <Text style={styles.text}>Check your Internet Connection</Text>
        <TouchableOpacity onPress={async()=>{
            setLoading(true)
            await getFromLocalStorage(id)}}>
            {loading?<Text style={styles.button}>Loading...</Text>:<Text style={styles.button} >Load Old Data</Text>}
        </TouchableOpacity>
    </View>)
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#fff"
    },
    text:{
        fontSize:20,
        color:"#fd689d",
        fontWeight:"700",
        marginTop:10
    },
    button:{
        fontSize:20,
        marginTop:15,
        color:"#fff",
        backgroundColor:"#fd689d",
        fontWeight:"700",
        paddingHorizontal:20,
        paddingTop:8,
        paddingBottom:10,
        borderRadius:50
    }
})

export default Error