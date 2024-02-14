import { View } from "react-native"
import { useIsFocused } from '@react-navigation/core';
import { StatusBar } from "expo-status-bar";



const FocusedStatusBar =(props)=>{

    const isFocused =useIsFocused();
    return isFocused ? <StatusBar animated={true}  {...props}/>:null;
    // return (
    //     <View>
    //         <Text>Focuse</Text>
    //     </View>
    // )
}

export default FocusedStatusBar;