import { createElement, ImgHTMLAttributes } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import * as CSS from "csstype";

type ImagePropsType = ImgHTMLAttributes<HTMLImageElement> & {
  width?: CSS.Property.Width;
  mWidth?: CSS.Property.Width;
};

const getImageStyles = (props: ImagePropsType) => css`
  width: ${props.width};
  margin: 0 auto;

  @media (min-width: 768px) {
    width: ${props.mWidth};
  }
`;

const Component = ({ width, mWidth, ...rest }: ImagePropsType) => createElement("img", rest);

const Image = styled(Component)<ImagePropsType>`
  ${(props: ImagePropsType) => getImageStyles(props)}
`;

export default Image;
