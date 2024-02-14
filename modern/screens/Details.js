import { SafeAreaView, Text, View } from "react-native"
import { COLORS, FONTS, SHADOWS, SIZES, assets } from "../constants";
import {CircleButton,RectButton,SubInfo,FocusedStatusBar,DetailsDesc,DetialsBid} from '../components'
import { FlatList } from "react-native-gesture-handler";


const Details = ({route,navigation}) => {
const {data} = route.params;
   return (
    <SafeAreaView style={{flex:1}}>
      <FocusedStatusBar 
      barStyle ="dark-content"
      backgroundColor ="transparent"
      transLucent ={true}
      />
      <View style={{
        width:"100%",
        position:'absolute',
        bottom:0,
        paddingVertical:SIZES.font,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgba(255,255,255,0.5)',
        zIndex:1
      }}>
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark}/>
        <FlatList
        data={data.bids}
        renderItem={({item})=> <DetialsBid bids={item}/>}
        />
      </View>
    </SafeAreaView>
  )
}

export default Details
