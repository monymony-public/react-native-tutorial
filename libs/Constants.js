
/**
  Icons from: https://github.com/cjdowner/cryptocurrency-icons/tree/master/32%402x/icon
*/
export function getCoinIconUri(coinName) {
  switch (coinName) {
    case 'Bitcoin':
      return 'https://github.com/cjdowner/cryptocurrency-icons/blob/master/32@2x/icon/btc@2x.png?raw=true';

    case 'Ethereum':
      return 'https://github.com/cjdowner/cryptocurrency-icons/blob/master/32@2x/icon/eth@2x.png?raw=true';

    case 'Ripple':
      return 'https://github.com/cjdowner/cryptocurrency-icons/blob/master/32@2x/icon/xrp@2x.png?raw=true';

    case 'Bitcoin Cash':
      return 'https://github.com/cjdowner/cryptocurrency-icons/blob/master/32@2x/icon/bcc@2x.png?raw=true';

    case 'Litecoin':
      return 'https://github.com/cjdowner/cryptocurrency-icons/blob/master/32@2x/icon/ltc@2x.png?raw=true';

    default:
      return 'https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png';
  }
}
