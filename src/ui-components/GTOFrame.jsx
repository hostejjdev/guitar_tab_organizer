/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Toolbar from "./Toolbar";
import AddTabButtonDefault from "./AddTabButtonDefault";
import InputForm from "./InputForm";
import { View } from "@aws-amplify/ui-react";
export default function GTOFrame(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="1440px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      overflow="hidden"
      position="relative"
      height="900px"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <Toolbar
        top="0px"
        left="0px"
        position="absolute"
        {...getOverrideProps(overrides, "View.Toolbar[0]")}
      ></Toolbar>
      <AddTabButtonDefault
        top="25px"
        left="143px"
        position="absolute"
        {...getOverrideProps(overrides, "View.AddTabButtonDefault[0]")}
      ></AddTabButtonDefault>
      <InputForm
        top="100px"
        left="200px"
        position="absolute"
        {...getOverrideProps(overrides, "View.InputForm[0]")}
      ></InputForm>
    </View>
  );
}
