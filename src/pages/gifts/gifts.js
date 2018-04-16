import React from 'react';
import './gifts.css';
 
export class Gifts extends React.Component {
  render() {
    return (
      <div className="gifts-container">
        <h3>Gift Registry</h3>
        <p>Thank you for considering buying us gifts for our wedding :)</p>
        <p>We don't expect any gifts, however, if you insist, we would prefer gift cards from the following busineses:</p>

        <ul>
          <li>BestBuy - <a href="https://www.bestbuy.ca/en-CA/category/gift-cards/20275.aspx?searchRedirect=giftcards">Visit online</a> or <a href="https://www.google.ca/maps/dir/''/best+buy+bayers+lake+location/@44.6467503,-63.7416332,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x4b5a21b4bb292d57:0x12973c0b2c78ae5a!2m2!1d-63.6715934!2d44.6467717">visit in store</a></li>
          <li>Second Last Gamestore - <a href="https://www.google.ca/maps/dir/''/last+gamestore/data=!4m5!4m4!1m0!1m2!1m1!1s0x4b5a2050ca8fa4e3:0x15107632f761553?sa=X&ved=0ahUKEwj6n9r5_rDaAhVCnuAKHQRzCTsQ9RcIpwEwCw">Visit in store</a></li>
          <li>Walmart - <a href="https://www.google.ca/search?q=walmart+locations+ns&npsic=0&rflfq=1&rlha=0&rllag=44671869,-63622218,5058&tbm=lcl&ved=0ahUKEwiwurr4gbHaAhVRTd8KHbVbDrsQtgMIKw&tbs=lrf:!2m4!1e17!4m2!17m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:4&rldoc=1#rlfi=hd:;si:;mv:!1m3!1d1285818.746908215!2d-63.1232486!3d45.02943114999999!2m3!1f0!2f0!3f0!3m2!1i607!2i342!4f13.1;tbs:lrf:!2m1!1e3!2m4!1e17!4m2!17m1!1e2!3sIAE,lf:1,lf_ui:4">visit in store</a></li>
          <li>Ikea - <a href="https://www.ikea.com/ms/en_CA/customer-service/about-shopping/gift-cards/index.html">Visit online</a> or <a href="https://www.google.ca/maps/dir/''/ikea/@44.7129635,-63.62776,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x4b5a26f4502ec90d:0x3edcf65d16575f69!2m2!1d-63.5577202!2d44.7129849">visit in store</a></li>
          <li>Cash - For our honeymoon :)</li>
        </ul>
      </div>
    );
  }
}