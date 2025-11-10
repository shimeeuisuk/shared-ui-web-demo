import { useState } from "react";
import { html, css } from "react-strict-dom";
// import { colors, spacing } from "../tokens.css.js";

interface TabItem {
  value: string;
  display_value: string;
  enable?: boolean;
  child?: React.ReactNode;
}

interface TabProps {
  tabData: TabItem[];
  selectedTab: string;
  height?: number;
  onPress: (value: string) => void;
  style?: any;
  containerStyle?: any;
  containerBorderStyle?: {
    borderBottomWidth?: number;
    borderBottomColor?: string;
  };
  selectedBorderStyle?: {
    borderBottomWidth?: number;
    borderBottomColor?: string;
    borderTopLeftRadius?: number;
    borderTopRightRadius?: number;
    borderBottomLeftRadius?: number;
    borderBottomRightRadius?: number;
  };
  textStyle?: any;
  contentPadding?: number;
  mode?: "DEFAULT";
  scrollEnabled?: boolean;
  disabledStyle?: any;
  disabledTextStyle?: any;
}

export const Tab = ({ props }: { props: TabProps }) => {
  const {
    tabData,
    selectedTab,
    height,
    onPress,
    mode = "DEFAULT",
    containerBorderStyle,
    selectedBorderStyle,
    scrollEnabled = false,
    contentPadding,
    containerStyle: customContainerStyle,
    textStyle = {},
    disabledStyle = {},
    disabledTextStyle = {},
  } = props ?? {};
  let containerStyle = {};
  let selectedBorderLineStyle = {};
  if (mode === "DEFAULT") {
    containerStyle = {
      width: "100%",
      borderBottomWidth: 1,
      borderColor: "#90979B33",
      backgroundColor: "#FFFFFF",
      zIndex: 1,
    };

    selectedBorderLineStyle = {
      width: "100%",
      height: 3,
      backgroundColor: "#000000",
      borderTopLeftRadius: 2,
      borderTopRightRadius: 2,
    };
  }
  return <html.div></html.div>;
};
