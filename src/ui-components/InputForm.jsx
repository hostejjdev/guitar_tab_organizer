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
export default function InputForm(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="1000px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(82.87499696016312,138.12497466802597,221.00000202655792,1)"
      overflow="hidden"
      position="relative"
      height="1300px"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <SaveButton
        backgroundColor="rgba(229.00000154972076,229.00000154972076,229.00000154972076,1)"
        position="absolute"
        top="226px"
        left="412px"
        {...getOverrideProps(overrides, "View.SaveButton[0]")}
      ></SaveButton>
      <SongField
        top="46px"
        left="31px"
        position="absolute"
        {...getOverrideProps(overrides, "View.SongField[0]")}
      ></SongField>
      <View
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(196.00000351667404,196.00000351667404,196.00000351667404,1)"
        top="323px"
        left="100px"
        width="800px"
        position="absolute"
        height="923px"
        {...getOverrideProps(overrides, "View.View[0]")}
      ></View>
      <ArtistField
        top="106px"
        left="31px"
        position="absolute"
        {...getOverrideProps(overrides, "View.ArtistField[0]")}
      ></ArtistField>
      <RecordedField
        top="225px"
        left="31px"
        position="absolute"
        {...getOverrideProps(overrides, "View.RecordedField[0]")}
      ></RecordedField>
      <LearnedField
        top="166px"
        left="31px"
        position="absolute"
        {...getOverrideProps(overrides, "View.LearnedField[0]")}
      ></LearnedField>
    </View>
  );
}
