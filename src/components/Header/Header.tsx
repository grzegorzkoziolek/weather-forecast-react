import { HTMLAttributes, createElement } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import * as CSS from "csstype";

type HeaderPropsType = HTMLAttributes<HTMLHeadingElement> & {
  htmlTag?: string;
  fontSize: CSS.Property.FontSize;
  spaceNoWrap?: boolean;
  fontWeight: CSS.Property.FontWeight;
  mFontSize?: CSS.Property.FontWeight;
  marginTop?: CSS.Property.MarginTop;
  marginRight?: CSS.Property.MarginTop;
  smFontColor?: CSS.Property.Color;
  lgFontColor?: CSS.Property.Color;
  width?: CSS.Property.Width;
};

const getHeaderStyles = (props: HeaderPropsType) => css`
  color: #e2dcc8;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-top: ${props.marginTop};
  margin-right: ${props.marginRight};
  font-weight: ${props.fontWeight};
  font-size: ${props.fontSize};
  line-height: ${props.fontSize};
  white-space: ${props.spaceNoWrap ? "nowrap" : "normal"};
  width: ${props.width};
  color: ${props.smFontColor ? props.smFontColor : "#F6FAFD"};

  @media (min-width: 768px) {
    font-size: ${props.mFontSize};
  }

  @media (min-width: 1200px) {
    color: ${props.lgFontColor ? props.lgFontColor : "#F6FAFD"};
  }
`;

const Component = ({
  htmlTag = "h5",
  spaceNoWrap,
  fontWeight,
  fontSize,
  mFontSize,
  marginTop,
  marginRight,
  smFontColor,
  lgFontColor,
  width,
  ...rest
}: HeaderPropsType) => createElement(htmlTag, rest);

const Header = styled(Component)<HTMLAttributes<HTMLHeadingElement>>`
  ${(props: HeaderPropsType) => getHeaderStyles(props)}
`;

export default Header;
