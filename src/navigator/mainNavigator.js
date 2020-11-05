import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings167912Navigator from '../features/Settings167912/navigator';
import NotificationList167911Navigator from '../features/NotificationList167911/navigator';
import Maps167910Navigator from '../features/Maps167910/navigator';
import Settings167895Navigator from '../features/Settings167895/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings167912: { screen: Settings167912Navigator },
NotificationList167911: { screen: NotificationList167911Navigator },
Maps167910: { screen: Maps167910Navigator },
Settings167895: { screen: Settings167895Navigator },

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
