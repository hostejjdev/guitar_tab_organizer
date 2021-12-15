/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function ViewTabButton(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="150px"
      padding="0px 0px 0px 0px"
      position="relative"
      height="52px"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <View
        padding="0px 0px 0px 0px"
        transform="matrix(1, 0, 0, -1, 0, 52)"
        backgroundColor="rgba(0,58.22497867047787,145.56249797344208,1)"
        borderRadius="15px"
        width="150px"
        position="absolute"
        transformOrigin="top left"
        height="52px"
        {...getOverrideProps(overrides, "View.View[0]")}
      ></View>
      <View
        padding="0px 0px 0px 0px"
        transform="matrix(1, 0, 0, -1, 0, 52)"
        backgroundColor="rgba(25.436224602162838,0,181.68749392032623,1)"
        borderRadius="15px"
        width="150px"
        position="absolute"
        transformOrigin="top left"
        height="52px"
        {...getOverrideProps(overrides, "View.View[1]")}
      ></View>
      <Text
        padding="0px 0px 0px 0px"
        color="rgba(229.00000154972076,229.00000154972076,229.00000154972076,1)"
        textAlign="left"
        display="flex"
        justifyContent="center"
        fontFamily="Roboto"
        top="11px"
        left="25px"
        fontSize="24px"
        lineHeight="28.125px"
        position="absolute"
        fontWeight="400"
        direction="column"
        children="View Tab"
        {...getOverrideProps(overrides, "View.Text[0]")}
      ></Text>
    </View>
  );
}
