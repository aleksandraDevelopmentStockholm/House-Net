import * as amplitude from '@amplitude/analytics-browser';

export const initAmplitude = () => {
  const apiKey = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY!;

  amplitude.init(apiKey, {
    serverZone: 'EU',
    defaultTracking: {
      sessions: true,
      pageViews: true,
      formInteractions: true,
      attribution: true,
      fileDownloads: true,
    },
  });
};

export const trackEvent = (eventName: string, eventProperties?: Record<string, any>) => {
  amplitude.track(eventName, eventProperties);
};

export { amplitude };