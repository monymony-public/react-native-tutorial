import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';

import Home from './screens/Home';
import About from './screens/About';
import Detail from './screens/Detail';

const DrawerNavigation = createDrawerNavigator({
  Home: {
    screen: Home,
  },
  Detail: {
    screen: Detail,
  },
  About: {
    screen: About,
  },
});

export default createAppContainer(DrawerNavigation);
