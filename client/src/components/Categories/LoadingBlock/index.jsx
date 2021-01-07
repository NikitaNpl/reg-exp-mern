import React from "react";
import ContentLoader from "react-content-loader";

const LoadingBlock = (props) => (
  <ContentLoader
    speed={2}
    width={120}
    height={45}
    viewBox="0 0 120 45"
    backgroundColor="#dbdbdb"
    foregroundColor="#ededed"
    {...props}
  >
    <rect x="508" y="193" rx="3" ry="3" width="88" height="6" />
    <circle cx="587" cy="195" r="20" />
    <rect x="0" y="0" rx="10" ry="10" width="120" height="45" />
  </ContentLoader>
)

export default LoadingBlock;