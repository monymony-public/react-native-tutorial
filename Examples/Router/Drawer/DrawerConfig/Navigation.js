import {Dimensions} from 'react-native';
import Home from './screens/Home';
import Detail from './screens/Detail';
import About from './screens/About';
import CustomDrawerMenu from './CustomDrawerMenu';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';

const DrawerNavigatorExample = createDrawerNavigator(
  {
    Home: {
      screen: Home,
    },
    Detail: {
      screen: Detail,
    },
    About: {
      screen: About,
    },
  },
  {
    contentComponent: CustomDrawerMenu,
    drawerWidth: Dimensions.get('window').width - 150,
  },
);

export default createAppContainer(DrawerNavigatorExample);
