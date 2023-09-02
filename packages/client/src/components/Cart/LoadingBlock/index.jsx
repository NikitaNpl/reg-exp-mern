import React from "react";
import ContentLoader from "react-content-loader";

const LoadingBlock = (props) => (
  <ContentLoader
    speed={2}
    height={250}
    viewBox="0 0 394 250"
    backgroundColor="#dbdbdb"
    foregroundColor="#ededed"
    {...props}
  >
    <rect x="508" y="193" rx="3" ry="3" width="88" height="6" />
    <circle cx="587" cy="195" r="20" />
    <rect x="0" y="0" rx="10" ry="10" width="394" height="250" />
  </ContentLoader>
)

export default LoadingBlock;
