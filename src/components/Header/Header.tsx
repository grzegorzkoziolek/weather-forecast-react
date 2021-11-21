import { HTMLAttributes, createElement } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

type HeaderPropsType = HTMLAttributes<HTMLHeadingElement> & {
  htmlTag?: string;
  fontSize: string;
  spaceNoWrap?: boolean;
  fontWeight: number;
  marginTop?: string;
  lgFontColor?: string;
  width?: string;
};

const getHeaderStyles = (props: HeaderPropsType) => css`
  color: #e2dcc8;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-top: ${props.marginTop};
  font-weight: ${props.fontWeight};
  font-size: ${props.fontSize};
  line-height: ${props.fontSize};
  white-space: ${props.spaceNoWrap ? "nowrap" : "normal"};
  width: ${props.width};

  @media (min-width: 1200px) {
    color: ${props.lgFontColor ? props.lgFontColor : "white"};
  }
`;

const Component = ({
  htmlTag = "h5",
  spaceNoWrap,
  fontWeight,
  fontSize,
  marginTop,
  lgFontColor,
  width,
  ...rest
}: HeaderPropsType) => createElement(htmlTag, rest);

const Header = styled(Component)<HTMLAttributes<HTMLHeadingElement>>`
  ${(props: HeaderPropsType) => getHeaderStyles(props)}
`;

export default Header;
