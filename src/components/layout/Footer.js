import React from 'react'
import Social from '../Social'
import { useMediaQuery } from 'react-responsive'

const Footer = () => {
    const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' })

    return (
        <div className="footer">
            <div className="footer__section footer__section--disclaimer">
                <h4 className="u-margin-bottom">General Disclaimer</h4>
                <p>All information on this site is provided for informational purposes only. By no means is any information presented herein intended to substitute for the advice provided to you by your own physician or health care provider. You should not use any information contained in this site to self-diagnose or personally treat any medical condition or disease or prescribe any medication. If you have or suspect you have a medical condition you are urged to contact your personal health care provider.</p>
            </div>
            {/*<div className="footer__section footer__section--keep">
                <h4>Keep In Touch</h4>
            </div>*/}
            <div className="footer__section footer__section--contact">
                <h4 className="u-margin-bottom">Contact Information</h4>
                <p>Barbara Lempereur, BS, UTP</p>
                <p>Beaufort, SC</p>
                <p>305-401-2914</p>
                <a href="mailto:barbara@blempereur.com">barbara@blempereur.com</a>
                {isDesktop && <Social />}
            </div>
            <div className="footer__section--copy">
                <p>Copyright © BLempereur - All Rights Reserved Worldwide.</p>
            </div>
        </div>
    )
}

export default Footer