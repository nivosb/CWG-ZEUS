import React, { useEffect } from 'react';

declare global {
  interface Window {
    __lc: any;
    LiveChatWidget: any;
  }
}

const LiveChat: React.FC = () => {
  useEffect(() => {
    // Initialize LiveChat configuration
    window.__lc = window.__lc || {};
    window.__lc.license = 19054067;
    window.__lc.integration_name = "manual_onboarding";
    window.__lc.product_name = "livechat";

    // Create and load the LiveChat script
    const script = document.createElement('script');
    script.async = true;
    script.type = 'text/javascript';
    script.src = 'https://cdn.livechatinc.com/tracking.js';

    // LiveChat initialization function
    (function(n,t,c){
      function i(n: any){
        return e._h?e._h.apply(null,n):e._q.push(n);
      }
      var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},
        once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},
        get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can't use getters before load.");
          return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},
        init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",
          n.src="https://cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}};
      !n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e
    }(window,document,[].slice));

    // Append the script to the document
    document.head.appendChild(script);

    // Cleanup
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <noscript>
      <a href="https://www.livechat.com/chat-with/19054067/" rel="nofollow">
        Chat with us
      </a>
      , powered by{' '}
      <a href="https://www.livechat.com/?welcome" rel="noopener nofollow" target="_blank">
        LiveChat
      </a>
    </noscript>
  );
};

export default LiveChat;