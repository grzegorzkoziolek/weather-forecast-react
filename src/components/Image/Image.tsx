import { createElement, ImgHTMLAttributes } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

type ImagePropsType = ImgHTMLAttributes<HTMLImageElement> & {
  width?: string;
};

const getImageStyles = (props: ImagePropsType) => css`
  width: ${props.width};
`;

const Component = ({ width, ...rest }: ImagePropsType) =>
  createElement("img", rest);

const Image = styled(Component)<ImagePropsType>`
  ${(props: ImagePropsType) => getImageStyles(props)}
`;

export default Image;
