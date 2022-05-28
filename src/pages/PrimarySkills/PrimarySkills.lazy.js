import React, { lazy, Suspense } from 'react';

const LazyPrimarySkills = lazy(() => import('./PrimarySkills'));

const PrimarySkills = props => (
  <Suspense fallback={null}>
    <LazyPrimarySkills {...props} />
  </Suspense>
);

export default PrimarySkills;
