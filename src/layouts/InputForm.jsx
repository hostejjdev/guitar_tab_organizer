/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import SaveButton from "./SaveButton";
import SongField from "./SongField";
import { View } from "@aws-amplify/ui-react";
import ArtistField from "./ArtistField";
import RecordedField from "./RecordedField";
import LearnedField from "./LearnedField";
import { TextInput } from "react-native";
export default class InputForm extends React.Component  {

render(){
  return (
    <View
      top="100px"
      left="200px"
      width="1000px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(82.87499696016312,138.12497466802597,221.00000202655792,1)"
      overflow="hidden"
      position="absolute"
      height="1300px"
    >
      <SaveButton onClick={this.props.savefunc}
        backgroundColor="rgba(229.00000154972076,229.00000154972076,229.00000154972076,1)"
        position="absolute"
        top="226px"
        left="412px"
      ></SaveButton>
      <SongField songfunc={this.props.songfunc}
        top="46px"
        left="31px"
        position="absolute"
      ></SongField>
      <View
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(196.00000351667404,196.00000351667404,196.00000351667404,1)"
        top="323px"
        left="100px"
        width="800px"
        position="absolute"
        height="923px"
      >
        <TextInput onChange={this.props.tabfunc} multiline={true}
          style = {{ height: 923, fontSize:18, width:"800px", marginLeft: 0, marginRight: 0}}/>
      </View>
      <ArtistField artistfunc={this.props.artistfunc}
        top="106px"
        left="31px"
        position="absolute"
      ></ArtistField>
      <RecordedField recordedfunc={this.props.recordedfunc}
        top="225px"
        left="31px"
        position="absolute"
      ></RecordedField>
      <LearnedField learnedfunc={this.props.learnedfunc}
        top="166px"
        left="31px"
        position="absolute"
      ></LearnedField>
    </View>
  );
}
}
