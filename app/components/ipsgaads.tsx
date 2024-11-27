import Script from "next/script";

const IpsGoogleAnalytics = () => {
  return (
    <>
      {/* Load the gtag.js library */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-16795325178"
        strategy="afterInteractive"
      />
      {/* Configure Google Ads */}
      <Script id="google-ads" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16795325178');
        `}
      </Script>
    </>
  );
};

export default IpsGoogleAnalytics;

