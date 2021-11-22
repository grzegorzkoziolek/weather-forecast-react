import { createElement, HTMLAttributes } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import * as CSS from "csstype";

interface IFlexBox {
  htmlTag?: string;
  smWidth?: CSS.Property.Width;
  smHeight?: CSS.Property.Height;
  mWidth?: CSS.Property.Width;
  mHeight?: CSS.Property.Height;
  lgWidth?: CSS.Property.Width;
  lgHeight?: CSS.Property.Height;
  marginTop?: CSS.Property.MarginTop;
  mMarginTop?: CSS.Property.MarginTop;
  lgDirectionRow?: boolean;
  smDirectionRow?: boolean;
  backgroundColor?: CSS.Property.BackgroundColor;
  lgBackgroundColor?: CSS.Property.BackgroundColor;
  smJustifyContent?: CSS.Property.JustifyContent;
  mJustifyContent?: CSS.Property.JustifyContent;
  lgJustifyContent?: CSS.Property.JustifyContent;
}

type FlexBoxTypes = IFlexBox & HTMLAttributes<HTMLElement>;

const getWrapperContainer = (props: FlexBoxTypes) => css`
  display: flex;
  justify-content: ${props.smJustifyContent ? props.smJustifyContent : "center"};
  align-items: center;
  height: ${props.smHeight};
  width: ${props.smWidth};
  background-color: ${props.backgroundColor};
  flex-direction: ${props.smDirectionRow ? "row" : "column"};
  margin-top: ${props.marginTop};

  @media (min-width: 768px) {
    height: ${props.mHeight};
    width: ${props.mWidth};
    justify-content: ${props.mJustifyContent ? props.mJustifyContent : "center"};
    margin-top: ${props.mMarginTop};
  }

  @media (min-width: 1200px) {
    flex-direction: ${props.lgDirectionRow ? "row" : "column"};
    height: ${props.lgHeight};
    width: ${props.lgWidth};
    background-color: ${props.lgBackgroundColor};
    justify-content: ${props.lgJustifyContent ? props.lgJustifyContent : "center"};
  }
`;

const Component = ({
  htmlTag = "div",
  smWidth,
  smHeight,
  mWidth,
  mHeight,
  lgWidth,
  lgHeight,
  marginTop,
  mMarginTop,
  backgroundColor,
  lgBackgroundColor,
  smDirectionRow = false,
  lgDirectionRow = false,
  smJustifyContent = "center",
  mJustifyContent = "center",
  lgJustifyContent = "center",
  ...rest
}: FlexBoxTypes) => createElement(htmlTag, rest);

const FlexBox = styled(Component)<FlexBoxTypes>`
  ${(props) => getWrapperContainer(props)}
`;

export default FlexBox;
