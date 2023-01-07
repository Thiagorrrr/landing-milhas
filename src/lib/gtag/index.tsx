/* eslint-disable @typescript-eslint/no-explicit-any */
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

declare global {
  interface Window {
    gtag?: any
  }
}
// https://developers.google.com/analytics/devguides/collection/gtagjs/pages

export const pageview = (url: any) => {
  ;(window as any).gtag('config', GA_TRACKING_ID, {
    page_path: url
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
type ValuesProp = {
  action: any
  category: any
  label: string
  value: any
}
export const event = ({ action, category, label, value }: ValuesProp) => {
  ;(window as any).gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  })
}
