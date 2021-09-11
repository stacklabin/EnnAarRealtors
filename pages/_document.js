import Document, { Html, Head, Main, NextScript } from 'next/document'
import { FB_PIXEL_ID } from '../lib/fpixel'
import { GA_TRACKING_ID } from '../lib/gtag'
import Iframe from 'react-iframe'


export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
      
      
          <meta name="facebook-domain-verification" content="itz6syi417lhw2pr0x4o26ad09xsv7" />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-RWZDMBC856`}
          />
          
         {/* <script async
                      src={'https://www.googletagmanager.com/gtag/js?id=AW-CONVERSION_ID'} />  */}


      
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-986154271', {
              page_path: window.location.pathname,
            });
            gtag('config', 'G-RWZDMBC856', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          
          
          <noscript><Iframe url="https://www.googletagmanager.com/ns.html?id=GTM-5GWHLN8"
          height="0" width="0" style="display:none;visibility:hidden"></Iframe></noscript>



    <script
       dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5GWHLN8');
              `,
            }}/>
      
      
          
          
          {/* Global Site Code Pixel - Facebook Pixel */}
          <script
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
                fbq('init', ${FB_PIXEL_ID});
              `,
            }}
          />
          
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
            />
          </noscript>

         
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
