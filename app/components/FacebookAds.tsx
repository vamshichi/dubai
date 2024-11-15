'use client'

import Script from 'next/script'

export default function FacebookAds() {
  return (
    <>
      {/* Facebook Pixel Base Code */}
      <Script
        id="facebook-pixel-base"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '866319539007689');
            fbq('track', 'PageView');
          `
        }}
      />
      
      {/* Facebook Pixel Fallback */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=866319539007689&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>

      {/* Initialize tracking for form submissions */}
      <Script
        id="facebook-pixel-events"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('submit', function(e) {
              if (e.target.matches('form')) {
                fbq('track', 'Lead');
              }
            });
          `
        }}
      />
    </>
  )
}