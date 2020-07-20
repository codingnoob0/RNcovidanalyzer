import React,{useState,useEffect,useContext} from 'react';
import { View, StyleSheet,ScrollView,RefreshControl,ActivityIndicator,Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from '../components/header'
import Table from '../components/table'
import TableHeader from '../components/tableHeader'
import { Context as DataContext } from '../context/DataContext';
import Error from '../components/error'

const CountryScreen = ({navigation}) => {
    const [refresh, setRefresh] = useState(false) 
    const {state:{stateWiseData,countryData,cerror},fetchCountryData,fetchStatesData} = useContext(DataContext);
    useEffect(()=>{
        const call = async()=>{
            await fetchCountryData()
            await fetchStatesData()
        }
        call()
    },[])
    if(cerror){
        return <Error id="country" />
    }else if(!countryData[0]){
        return <ActivityIndicator style={{flexGrow:1,flexShrink:0,alignItems:"center",justifyContent:"center",backgroundColor:"#fff"}} size="large" color="#ee7785" />
    }else{
        return(
        <ScrollView refreshControl={
            <RefreshControl
             refreshing={refresh}
             onRefresh={async()=>{
               await setRefresh(true)
               await fetchCountryData()
               await setRefresh(false)
             }}
             colors={['#ee7785']}
             progressBackgroundColor="#ffffff"
            />
          }>
            <View style={styles.container}>
            <StatusBar style="auto" />
            {countryData[0]?<Header confirmed={countryData[0].confirmed} recovered={countryData[0].recovered} deceased={countryData[0].deaths} active={countryData[0].active} deltaConfirmed={countryData[0].deltaconfirmed} deltaRecovered={countryData[0].deltarecovered} deltaDeceased={countryData[0].deltadeaths} />:null}
            {countryData[0]?<TableHeader main="States" />:null}
            {stateWiseData.map(item=><Table key={item.state} main="country" name={item.state} confirmed={item.confirmed} recovered={item.recovered} active={item.active} deceased={item.deaths} deltaConfirmed={item.deltaconfirmed} deltaRecovered={item.deltarecovered} deltaDeceased={item.deltadeaths}/>)}
            </View>
        </ScrollView>)
    }
    
};

CountryScreen.navigationOptions = {
  headerShown:false
};

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fff",
        flex:1
    }
});


export default CountryScreen;
