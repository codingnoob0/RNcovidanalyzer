import React,{useContext,useState} from 'react';
import { View, StyleSheet, Text,ScrollView,RefreshControl,ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Table from '../components/table'
import TableHeader from '../components/tableHeader'
import {withNavigation} from 'react-navigation'
import { Context as DataContext } from '../context/DataContext';
import Error from '../components/error'

const StateScreen = ({navigation}) => {
  let id = navigation.getParam('state')
  const [refresh, setRefresh] = useState(false) 
  const {state:{stateData,serror},fetchStatesData} = useContext(DataContext);

  if(serror){
    return <Error id="state" />
  }else if(!stateData[id]){
    return <ActivityIndicator style={{flexGrow:1,flexShrink:0,alignItems:"center",justifyContent:"center",backgroundColor:"#fff"}} size="large" color="#ee7785" />
  }else{
    return(<ScrollView refreshControl={
      <RefreshControl
       refreshing={refresh}
       onRefresh={async()=>{
        await setRefresh(true)
        await fetchStatesData()
        await setRefresh(false)
      }}
      colors={['#ee7785']}
      progressBackgroundColor="#ffffff"
      />
    }>
    <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.name} >{id}</Text>
        {stateData[id]?<TableHeader main="Districts" />:null}
        {stateData[id]?stateData[id].map(item=>{
            return(
                <Table key={item.district} main="state" name={item.district} confirmed={item.confirmed} recovered={item.recovered} active={item.active} deceased={item.deceased} deltaConfirmed={item.delta.confirmed} deltaDeceased={item.delta.deceased} deltaRecovered={item.delta.recovered} />
            )
        }):null}
    </View>
    </ScrollView>)
  }
};

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#fff",
    flex:1
  },
  name:{
    fontSize:25,
    color:"#ee7785",
    marginTop:5,
    marginBottom:10,
    fontWeight:"700",
    textAlign:"center"
  }
});

export default withNavigation(StateScreen);
