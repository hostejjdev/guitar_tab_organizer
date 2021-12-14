/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function Toolbar(props) {
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
      <View
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(82.87499696016312,138.12497466802597,221.00000202655792,1)"
        top="0px"
        left="0px"
        width="1440px"
        position="absolute"
        height="100px"
        {...getOverrideProps(overrides, "View.View[0]")}
      ></View>
      <Icon
        pathData="M92 46C92 71.4051 71.4051 92 46 92C20.5949 92 0 71.4051 0 46C0 20.5949 20.5949 0 46 0C71.4051 0 92 20.5949 92 46Z"
        viewBox={{ minX: 0, minY: 0, width: 92, height: 92 }}
        color="rgba(196.00000351667404,196.00000351667404,196.00000351667404,1)"
        top="4px"
        left="8px"
        width="92px"
        position="absolute"
        height="92px"
        {...getOverrideProps(overrides, "View.Icon[0]")}
      ></Icon>
      <Text
        padding="0px 0px 0px 0px"
        color="rgba(0,0,0,1)"
        textAlign="left"
        display="flex"
        justifyContent="center"
        fontFamily="Roboto"
        top="33px"
        left="25px"
        width="59px"
        fontSize="30px"
        lineHeight="35.15625px"
        position="absolute"
        fontWeight="400"
        direction="column"
        height="35px"
        children="GTO"
        {...getOverrideProps(overrides, "View.Text[0]")}
      ></Text>
      <View
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(0,30.939997471868992,110.50000101327896,1)"
        top="100px"
        left="0px"
        width="200px"
        position="absolute"
        height="800px"
        {...getOverrideProps(overrides, "View.View[1]")}
      ></View>
    </View>
  );
}
