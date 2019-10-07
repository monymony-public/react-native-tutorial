import * as React from 'react';
import { WebView } from 'react-native-webview';
import { getCoinYoutubeUrl } from '../libs/Constants';

export default class Youtube extends React.Component {
  render() {
    const title = this.props.navigation.getParam('title', '');
    const uri = getCoinYoutubeUrl(title);
    return (
        <WebView 
            source={{ uri: uri }} 
            style={{ marginTop: 20 }} 
        />
    )
  }
}
