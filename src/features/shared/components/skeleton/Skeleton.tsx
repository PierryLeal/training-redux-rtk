import React, { ReactElement } from "react";
import { Container } from "./Skeleton.styles";
import { skeletonProps } from "./Skeleton.types";

const Skeleton: React.FC<skeletonProps> = ({
  $height,
  $primaryColor,
  $secondaryColor,
  $width,
  $borderRadius,
  $aspectRatio,
}) => {
  return (
    <Container
      $height={$height}
      $primaryColor={$primaryColor}
      $secondaryColor={$secondaryColor}
      $width={$width}
      $borderRadius={$borderRadius}
      $aspectRatio={$aspectRatio}
    />
  );
};

export default Skeleton;
