import React,{useContext, useEffect,useState} from 'react';
import { View, StyleSheet,ScrollView,RefreshControl,ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from '../components/header'
import Table from '../components/table'
import TableHeader from '../components/tableHeader'
import { Context as DataContext } from '../context/DataContext';
import Error from '../components/error'

const WorldScreen = () => {
  const [refresh, setRefresh] = useState(false)
  const {state:{countryWiseData,worldData,werror},fetchWorldData} = useContext(DataContext);
  useEffect(()=>{
    fetchWorldData()
  },[])
  if(werror){
    return <Error id="world" />
  }else if(!worldData[0]){
    return <ActivityIndicator style={{flexGrow:1,flexShrink:0,alignItems:"center",justifyContent:"center",backgroundColor:"#fff"}} size="large" color="#ee7785" />
  }else{
    return(
      <ScrollView refreshControl={
        <RefreshControl
        refreshing={refresh}
        onRefresh={async()=>{
          await setRefresh(true)
          await fetchWorldData()
          await setRefresh(false)
        }}
        colors={['#ee7785']}
        progressBackgroundColor="#ffffff"
        />
      }>
        <View style={styles.container}>
            <StatusBar style="auto" />
            
            {worldData[0]?
            <Header confirmed={worldData[0].cases} recovered={worldData[0].recovered} deceased={worldData[0].deaths} active={worldData[0].active} deltaConfirmed={worldData[0].todayCases} deltaDeceased={worldData[0].todayDeaths} />
            :null}
            {worldData[0]?<TableHeader main="Countries" />:null}
            {countryWiseData.map(item=>{
                return(
                    <Table key={item.country} main="world" name={item.country} confirmed={item.cases} recovered={item.recovered} active={item.active} deceased={item.deaths} deltaConfirmed={item.todayCases} deltaDeceased={item.todayDeaths}/>
                )
            })}
        </View>
      </ScrollView>
    ) 
  }
};

WorldScreen.navigationOptions = {
  headerShown:false
};

const styles = StyleSheet.create({
  container:{
      backgroundColor:"#fff",
      flex:1
  }
})

export default WorldScreen;