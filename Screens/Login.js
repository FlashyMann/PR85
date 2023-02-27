import React, { Component } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  TextInput,
  Alert,
  TouchableOpacity,
  Text
} from "react-native";

import firebase from "firebase";
import { RFValue } from "react-native-responsive-fontsize";

export default class LoginScreen extends Component {
    constructor(props) {
      super(props);
      this.state = {
        email: "",
        password: "",
        fontsLoaded: false,
        userSignedIn: false
      };
    }
  
    signIn = async (email, password) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          this.props.navigation.replace("Dashboard");
        })
        .catch(error => {
          Alert.alert(error.message);
        });
    };
}  