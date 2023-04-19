import React, { lazy, Suspense } from "react";

const MyLazyComponent = lazy(() => import("./MyLazyComponent"));

function ParentComponent() {
  return (
    <div>
      <Suspense fallback={<div>Cargando...</div>}>
        <MyLazyComponent />
      </Suspense>
    </div>
  );
}

export default ParentComponent;
