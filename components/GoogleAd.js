import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function GoogleAd({ classNames, slot, googleAdId, style, format }) {
  let googleInit = null;
  const timeout = 200;

  useEffect(() => {
    googleInit = setTimeout(() => {
      if (typeof window !== 'undefined') {
        const ggAds = window.adsbygoogle || [];
        ggAds.push({});
      }
    }, timeout);

    return () => {
      if (googleInit) clearTimeout(googleInit);
    }
  }, [googleInit, timeout]);

  return (
    <div className={classNames} style={{ width: '1000%' }}>
      <ins
        className="adsbygoogle"
        style={style || { display: 'block', textAlign: "center" }}
        data-ad-client={googleAdId}
        data-ad-slot={slot}
        data-ad-format={format || "auto"}
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
}

GoogleAd.propTypes = {
  classNames: PropTypes.string,
  slot: PropTypes.string,
  timeout: PropTypes.number,
  googleAdId: PropTypes.string,
};

export default GoogleAd;