import {useEffect} from "react";
import ReactGA from "react-ga";

const trackingId = "UA-215732774-1";


const GoogleAnalytics = ()  => {
    const pageTitle = 'landing page'

    useEffect(() => {
        ReactGA.initialize(trackingId);
        ReactGA.send({
            hitType: "pageview",
            page: `${window.location.pathname + window.location.search}`,
            title: pageTitle
        });
    }, [pageTitle]);

    return;
};

export default GoogleAnalytics;