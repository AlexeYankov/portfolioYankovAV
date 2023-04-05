import React, { Suspense } from "react";
import { LazyJSX } from "./LazySuspense";

const lazyHOC = (Component: React.FC) => {
  return (props: any) => (
    <Suspense fallback={LazyJSX}>
      <Component {...props} />
    </Suspense>
  );
};

export default lazyHOC;
