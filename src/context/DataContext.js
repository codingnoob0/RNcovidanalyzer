import AsyncStorage from '@react-native-community/async-storage';
import createContext from './createContext';
import axios from 'axios'

const dataReducer = (state, action) => {
  switch (action.type) {
    case 'add_country_data':
      return { ...state, countryData: action.payload.countryData,stateWiseData:action.payload.stateWiseData };
    case 'add_world_data':
      return { ...state, worldData: action.payload.worldData,countryWiseData:action.payload.countryWiseData };
    case 'add_states_data':
      return { ...state, stateData: action.payload};
    case 'cerr':
      return { ...state,cerror:true};
    case 'werr':
      return { ...state,werror:true};
    case 'serr':
      return { ...state,serror:true};
    case 'from_local_storage':
      return { ...state,...action.payload};
    default:
      return state;
  }
};

const fetchStatesData = dispatch => async () => {
  try {
    const districtResult = await axios.get('https://api.covid19india.org/v2/state_district_wise.json')
    const finalData = {}
    districtwiseData = await districtResult.data
    await districtwiseData.forEach(states=>{
      let districtData = states.districtData;
      districtData.sort(function(a,b){return b.confirmed-a.confirmed})
      finalData[states.state] = districtData
    })
    dispatch({
      type: 'add_states_data',
      payload: finalData
    })
    const sdata =JSON.stringify(finalData)
    await AsyncStorage.setItem('stateData', sdata)
  } catch (err) {
    dispatch({
      type: 'serr'
    })
  }
};

const fetchWorldData = dispatch => async() => {
  try {
    const result = await axios.get('https://coronavirus-19-api.herokuapp.com/countries')
    let countryWiseData = await result.data
    let worldData = await countryWiseData.splice(0,1)
    dispatch({
      type: 'add_world_data',
      payload: {worldData,countryWiseData}
    })
    const cwdata =JSON.stringify(countryWiseData)
    const wdata =JSON.stringify(worldData)
    await AsyncStorage.setItem('countryWiseData', cwdata)
    await AsyncStorage.setItem('worldData', wdata)
  } catch (err) {
    dispatch({
      type: 'werr'
    })
  }
};

const fetchCountryData = dispatch => async() => {
  try{
    const result = await axios.get('https://api.covid19india.org/data.json')
    let stateWiseData = await result.data.statewise
    let countryData = await stateWiseData.splice(0,1)
    dispatch({
      type: 'add_country_data',
      payload: {countryData,stateWiseData}
    })
    const swdata =JSON.stringify(stateWiseData)
    const cdata =JSON.stringify(countryData)
    await AsyncStorage.setItem('stateWiseData', swdata)
    await AsyncStorage.setItem('countryData', cdata)
    fetchStatesData()
  }catch(err){
    dispatch({
      type: 'cerr'
    })
  }
};

const getFromLocalStorage = dispatch =>async(id) =>{
    try{
      if(id==="country"){
        const cvalue = await AsyncStorage.getItem('countryData')
        const swvalue = await AsyncStorage.getItem('stateWiseData')
        const  countryData=JSON.parse(cvalue)
        const stateWiseData=JSON.parse(swvalue)
          dispatch({
            type:'from_local_storage',
            payload:{countryData:countryData,stateWiseData:stateWiseData,cerror:false}
          })
      }else if(id==="world"){
        const wvalue = await AsyncStorage.getItem('worldData')
        const cwvalue = await AsyncStorage.getItem('countryWiseData')
        const  worldData=JSON.parse(wvalue)
        const countryWiseData=JSON.parse(cwvalue)
          dispatch({
            type:'from_local_storage',
            payload:{worldData:worldData,countryWiseData:countryWiseData,werror:false}
          })
      }else{
        const svalue = await AsyncStorage.getItem('stateData')
        const  stateData=JSON.parse(svalue)
          dispatch({
            type:'from_local_storage',
            payload:{stateData:stateData,serror:false}
          })
      }
    }catch(e){
      console.log(e)
      console.log("errrr")
    }
}

export const { Provider, Context } = createContext(
  dataReducer,
  { fetchStatesData,fetchWorldData,fetchCountryData,getFromLocalStorage },
  { stateData:null,worldData:[],countryWiseData:[],cerror:false,countryData:[],stateWiseData:[],werror:false,serror:false }
);

