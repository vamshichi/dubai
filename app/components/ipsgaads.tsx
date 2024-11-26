import Script from "next/script";

const IpsGoogleAnalytics = () => {
  return (
    <>
      {/* Load the gtag.js library */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-LXK6SPF5KS"
        strategy="afterInteractive"
      />
      {/* Configure Google Analytics */}
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-LXK6SPF5KS');
        `}
      </Script>
    </>
  );
};

export default IpsGoogleAnalytics;
