import React, { lazy, Suspense } from 'react';

const LazyPersonalProjects = lazy(() => import('./PersonalProjects'));

const PersonalProjects = props => (
  <Suspense fallback={null}>
    <LazyPersonalProjects {...props} />
  </Suspense>
);

export default PersonalProjects;
