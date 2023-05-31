import ReactGA from "react-ga4";

export const AnalyticsEvent = (category, eventName, label) => {
  console.log(category, eventName, label);
  ReactGA.event({
    category: category,
    action: eventName,
    label: label,
  });
};
