import ga4 from 'react-ga4';

const TRACKING_ID = 'G-TVE3PB0XEY';
const isProduction = process.env.NODE_ENV === 'production';

export const init = () =>
  ga4.initialize(TRACKING_ID, {
    // testMode: !isProduction,
  });

export const sendClickDownload = (url: string) =>
  ga4.event('click_download', {
    event_category: url,
  });

export const sendEvent = (event_category: string) =>
  ga4.event('scroll_about_anchor', {
    event_category,
  });

// export const sendEvent = (name: string) =>
//   ga4.event('screen_view', {
//     app_name: 'myApp',
//     screen_name: name,
//   });

export const sendPageview = (path: string) =>
  ga4.send({
    hitType: 'pageview',
    page: path,
  });
