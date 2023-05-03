import React from 'react';
// import { useLocation } from 'react-router-dom';

import * as analytics from './ga4';
import { useRouter } from 'next/router';

export function useAnalytics() {
  // const location = useLocation();
  const router = useRouter();

  React.useEffect(() => {
    analytics.init();
    analytics.sendPageview(router.asPath);
  }, []);

  // React.useEffect(() => {
  //   const path = location.pathname + location.search;
  //   analytics.sendPageview(path);
  // }, [location]);
}

export default useAnalytics;
