import React from "react";
import { Text, View } from "react-native";
const RestaurantCard=({restaurant})=>{
    return(
        <View style={{width:50,height:50}}>
            <Text>{restaurant.title}</Text>

        </View>
    );
}

export default RestaurantCard;