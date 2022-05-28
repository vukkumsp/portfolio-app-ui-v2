import React, { lazy, Suspense } from 'react';

const LazySecondarySkills = lazy(() => import('./SecondarySkills'));

const SecondarySkills = props => (
  <Suspense fallback={null}>
    <LazySecondarySkills {...props} />
  </Suspense>
);

export default SecondarySkills;
