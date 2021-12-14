/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import SaveButton from "./SaveButton";
import { Text, View } from "@aws-amplify/ui-react";
import InputField from "./InputField";
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
      <InputField
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,0)"
        overflow="hidden"
        top="46px"
        left="31px"
        width="615px"
        position="absolute"
        height="33px"
        {...getOverrideProps(overrides, "View.InputField[0]")}
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
          {...getOverrideProps(overrides, "View.InputField[0].View[0]")}
        ></View>
        <View
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(196.00000351667404,196.00000351667404,196.00000351667404,1)"
          top="0px"
          left="233px"
          width="382px"
          position="absolute"
          height="33px"
          {...getOverrideProps(overrides, "View.InputField[0].View[1]")}
        ></View>
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
          children="Song Name"
          {...getOverrideProps(overrides, "View.InputField[0].Text[0]")}
        ></Text>
      </InputField>
      <InputField
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,0)"
        overflow="hidden"
        top="106px"
        left="31px"
        width="615px"
        position="absolute"
        height="33px"
        {...getOverrideProps(overrides, "View.InputField[1]")}
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
          {...getOverrideProps(overrides, "View.InputField[1].View[0]")}
        ></View>
        <View
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(196.00000351667404,196.00000351667404,196.00000351667404,1)"
          top="0px"
          left="233px"
          width="382px"
          position="absolute"
          height="33px"
          {...getOverrideProps(overrides, "View.InputField[1].View[1]")}
        ></View>
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
          {...getOverrideProps(overrides, "View.InputField[1].Text[0]")}
        ></Text>
      </InputField>
      <InputField
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,0)"
        overflow="hidden"
        top="166px"
        left="31px"
        width="277px"
        position="absolute"
        height="33px"
        {...getOverrideProps(overrides, "View.InputField[2]")}
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
          {...getOverrideProps(overrides, "View.InputField[2].View[0]")}
        ></View>
        <View
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(196.00000351667404,196.00000351667404,196.00000351667404,1)"
          top="0px"
          left="233px"
          width="382px"
          position="absolute"
          height="33px"
          {...getOverrideProps(overrides, "View.InputField[2].View[1]")}
        ></View>
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
          children="Learned"
          {...getOverrideProps(overrides, "View.InputField[2].Text[0]")}
        ></Text>
      </InputField>
      <InputField
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,0)"
        overflow="hidden"
        top="226px"
        left="31px"
        width="277px"
        position="absolute"
        height="33px"
        {...getOverrideProps(overrides, "View.InputField[3]")}
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
          {...getOverrideProps(overrides, "View.InputField[3].View[0]")}
        ></View>
        <View
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(196.00000351667404,196.00000351667404,196.00000351667404,1)"
          top="0px"
          left="233px"
          width="382px"
          position="absolute"
          height="33px"
          {...getOverrideProps(overrides, "View.InputField[3].View[1]")}
        ></View>
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
          children="Recorded"
          {...getOverrideProps(overrides, "View.InputField[3].Text[0]")}
        ></Text>
      </InputField>
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
    </View>
  );
}
