/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/


/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
import { TextInput } from "react-native";
export default class ArtistField extends React.Component {

render(){
  return (
    <View
      width="615px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,0)"
      overflow="hidden"
      position="absolute"
      top="106px"
      left="31px"
      height="33px"
    >
      <View
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(25.436224602162838,0,181.68749392032623,1)"
        top="0px"
        borderRadius="15px 0px 0px 15px"
        left="0px"
        width="233px"
        position="absolute"
        height="33px"
      ></View>
      <View
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(196.00000351667404,196.00000351667404,196.00000351667404,1)"
        top="0px"
        left="233px"
        width="382px"
        position="absolute"
        height="33px"
      >
	<TextInput onChange={this.props.artistfunc} 
	  style = {{ height: 33, fontSize:24,  marginLeft: 0, marginRight: 0}}/>
      </View>
      <Text
        padding="0px 0px 0px 0px"
        color="rgba(255,255,255,1)"
        textAlign="left"
        display="flex"
        justifyContent="center"
        fontFamily="Roboto"
        top="7px"
        left="34px"
        width="164px"
        fontSize="24px"
        lineHeight="28.125px"
        position="absolute"
        fontWeight="400"
        direction="column"
        height="19px"
        children="Artist Name"
      ></Text>
    </View>
  );
}
}
