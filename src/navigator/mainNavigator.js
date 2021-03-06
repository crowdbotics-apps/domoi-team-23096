import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile180458Navigator from '../features/UserProfile180458/navigator';
import Tutorial180457Navigator from '../features/Tutorial180457/navigator';
import NotificationList180429Navigator from '../features/NotificationList180429/navigator';
import Settings180428Navigator from '../features/Settings180428/navigator';
import Settings180420Navigator from '../features/Settings180420/navigator';
import UserProfile180418Navigator from '../features/UserProfile180418/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile180458: { screen: UserProfile180458Navigator },
Tutorial180457: { screen: Tutorial180457Navigator },
NotificationList180429: { screen: NotificationList180429Navigator },
Settings180428: { screen: Settings180428Navigator },
Settings180420: { screen: Settings180420Navigator },
UserProfile180418: { screen: UserProfile180418Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
