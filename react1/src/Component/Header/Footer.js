import React from 'react'
import FooterLeft from '../Footer/FooterLeft'
import FooterCenter from '../Footer/FooterCenter'
import FooterRight from '../Footer/FooterRight'
import FooterFinish from '../Footer/FooterFinish'

export default function Footer() {

    return (
        <div className="footer">
         
            <div className="Footer-header">
                  <div className="footer-row-left">
                      <FooterLeft />
                  </div>
                      <div className="footer-row-center">
                          <FooterCenter />
                      </div>
                      <div className="footer-row-right">
                           <FooterRight />
                      </div>
             </div>
             <hr/>
             <FooterFinish />
        </div>
    )
}
