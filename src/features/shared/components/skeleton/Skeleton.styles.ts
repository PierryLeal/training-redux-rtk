import styled, { keyframes } from "styled-components";
import { skeletonProps } from "./Skeleton.types";

const moveGradient = keyframes`
  100% {
    background-position: 0% 50%;
  }
  0% {
    background-position: 200% 50%;
  }
`;

export const Container = styled.span<skeletonProps>`
  display: flex;
  min-width: ${({ $width }) => $width || "100%"};
  min-height: ${({ $height }) => $height || "100%"};
  aspect-ratio: ${({ $aspectRatio }) => $aspectRatio || "unset"};
  background: ${({
    theme,
    $primaryColor = theme.primary.dark,
    $secondaryColor = theme.primary.light,
  }) =>
    `linear-gradient(90deg, ${$secondaryColor}, ${$primaryColor} , ${$secondaryColor})`};
  background-size: 200% 100%;
  animation: ${moveGradient} 3s infinite linear;
  border-radius: ${({ $borderRadius }) => $borderRadius};
  box-shadow: 6px 8px 10px 1px #0e0e0c47;
`;
