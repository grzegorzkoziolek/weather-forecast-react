import { createElement, HTMLAttributes } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface IFlexBox {
  htmlTag?: string;
  smWidth?: string;
  smHeight?: string;
  mWidth?: string;
  mHeight?: string;
  lgWidth?: string;
  lgHeight?: string;
  lgDirectionRow?: boolean;
  smDirectionRow?: boolean;
  lgBackgroundColor?: string;
  justifyContent?: string;
}

type FlexBoxTypes = IFlexBox & HTMLAttributes<HTMLDivElement>;

const getWrapperContainer = (props: IFlexBox) => css`
  display: flex;
  justify-content: ${props.justifyContent ? props.justifyContent : 'center'};
  align-items: center;
  height: ${props.smHeight};
  width: ${props.smWidth};
  background-color: #4a90e2;
  flex-direction: ${props.smDirectionRow ? "row" : "column"};

  @media (min-width: 768px) {
    height: ${props.mHeight};
    width: ${props.mWidth};
  }

  @media (min-width: 1200px) {
    flex-direction: ${props.lgDirectionRow ? "row" : "column"};
    height: ${props.lgHeight};
    width: ${props.lgWidth};
    background-color: ${props.lgBackgroundColor};
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
  lgBackgroundColor,
  smDirectionRow = false,
  lgDirectionRow = false,
  justifyContent = 'center',
  ...rest
}: FlexBoxTypes) => createElement(htmlTag, rest);

const FlexBox = styled(Component)<FlexBoxTypes>`
  ${(props) => getWrapperContainer(props)}
`;

export default FlexBox;
