import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile167968Navigator from '../features/UserProfile167968/navigator';
import Maps167949Navigator from '../features/Maps167949/navigator';
import Settings167927Navigator from '../features/Settings167927/navigator';
import Settings167912Navigator from '../features/Settings167912/navigator';
import NotificationList167911Navigator from '../features/NotificationList167911/navigator';
import Maps167910Navigator from '../features/Maps167910/navigator';
import Settings167895Navigator from '../features/Settings167895/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile167968: { screen: UserProfile167968Navigator },
Maps167949: { screen: Maps167949Navigator },
Settings167927: { screen: Settings167927Navigator },
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
