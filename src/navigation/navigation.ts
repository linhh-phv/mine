import {Keyboard} from 'react-native';
import {StackActions} from '@react-navigation/native';

class NavigationServices {
  private navigation: any;
  private static navigationInstanse: NavigationServices;
  private constructor() {
    this.navigation = null;
  }

  public static getInstance(): NavigationServices {
    if (!this.navigationInstanse) {
      this.navigationInstanse = new NavigationServices();
    }
    return this.navigationInstanse;
  }

  public backToHome() {
    Keyboard.dismiss();
    this.navigation.dispatch(StackActions.popToTop());
  }

  public pushToScreen(screenName: string, params: any) {
    Keyboard.dismiss();
    this.navigation.dispatch(StackActions.push(screenName, params));
  }

  public popScreen() {
    this.navigation.dispatch(StackActions.pop(1));
  }

  public useNavigation() {
    return this.navigation;
  }

  public setNavigation(navigationOther: any) {
    this.navigation = navigationOther;
  }
}

export default NavigationServices;
