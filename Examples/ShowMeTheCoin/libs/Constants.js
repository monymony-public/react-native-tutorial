export function getCoinIconUri(coinName) {
  switch (coinName) {
    case 'Bitcoin':
      return 'https://github.com/cjdowner/cryptocurrency-icons/blob/master/32@2x/icon/btc@2x.png?raw=true';

    case 'Ethereum':
      return 'https://github.com/cjdowner/cryptocurrency-icons/blob/master/32@2x/icon/eth@2x.png?raw=true';

    case 'XRP':
      return 'https://github.com/cjdowner/cryptocurrency-icons/blob/master/32@2x/icon/xrp@2x.png?raw=true';

    case 'EOS':
        return 'https://github.com/cjdowner/cryptocurrency-icons/blob/master/32@2x/icon/eos@2x.png?raw=true';

    case 'Bitcoin Cash':
      return 'https://github.com/cjdowner/cryptocurrency-icons/blob/master/32@2x/icon/bcc@2x.png?raw=true';

    case 'Litecoin':
      return 'https://github.com/cjdowner/cryptocurrency-icons/blob/master/32@2x/icon/ltc@2x.png?raw=true';

    default:
      return 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png';
  }
}

export function getCoinYoutubeUrl(coinName) {
  switch (coinName) {
    case 'Bitcoin':
      return 'https://youtu.be/ar9PuUCvvCw';

    case 'Ethereum':
      return 'https://youtu.be/ar9PuUCvvCw';

    case 'XRP':
      return 'https://youtu.be/ar9PuUCvvCw';

    case 'EOS':
        return 'https://youtu.be/ar9PuUCvvCw';

    case 'Bitcoin Cash':
      return 'https://youtu.be/ar9PuUCvvCw';

    case 'Litecoin':
      return 'https://youtu.be/ar9PuUCvvCw';

    default:
      return 'https://youtu.be/ar9PuUCvvCw';
  }
}