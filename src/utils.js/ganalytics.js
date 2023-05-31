import { useEffect } from "react";
import ReactGA from "react-ga4";

const trackingId = "G-WX239X5KL3";

const GoogleAnalytics = () => {
    const pageTitle = "landing page";

    useEffect(() => {
        ReactGA.initialize(trackingId);
        ReactGA.send({
            hitType: "pageview",
            page: `${window.location.pathname + window.location.search}`,
            title: pageTitle,
        });
    }, [pageTitle]);

    return;
};

export default GoogleAnalytics;
