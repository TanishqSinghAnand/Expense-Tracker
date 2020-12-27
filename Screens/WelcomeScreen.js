import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Modal,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import firebase from "firebase";
import db from "../config"

class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: "",
      password: "",
      isModalVisible: false,
      firstName: "",
      lastName: "",
    };
  }
  userSignUp = () => {
    if (this.state.password !== this.state.confirmPassword) {
      return Alert.alert("password doesn't match\nCheck your password.");
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.mail, this.state.password)
        .then(() => {
          db.collection("users").add({
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            email_id: this.state.mail,
          });
          return Alert.alert("User Added Successfully", "", [
            {
              text: "OK",
              onPress: () => this.setState({ isModalVisible: false }),
            },
          ]);
        })
        .catch((error) => {
          var errorMessage = error.message;
          return Alert.alert(errorMessage);
        });
    }
  };

  signIn = async () => {
    var mail = this.state.mail;
    var password = this.state.password;
    console.log(mail)
    firebase
      .auth()
      .signInWithEmailAndPassword(mail, password)
      .then(() => {
        console.log("Signed in");
        this.props.navigation.navigate("BottomTab");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage);
      });
  };

  showModal = () => {
    if (this.state.isModalVisible === true) {
      return (
        <Modal
          animationType="fade"
          transparent={true}
          // visible={this.state.isModalVisible}
        >
          <View
            style={{
              flex: 1,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#ffff",
              marginRight: 30,
              marginLeft: 30,
              marginTop: 80,
              marginBottom: 80,
            }}
          >
            <ScrollView style={{ width: "100%" }}>
              <KeyboardAvoidingView
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    justifyContent: "center",
                    alignSelf: "center",
                    fontSize: 30,
                    color: "#ff0000",
                    margin: 50,
                  }}
                >
                  Registration
                </Text>
                <TextInput
                  style={{
                    width: "75%",
                    height: 35,
                    alignSelf: "center",
                    borderColor: "#ffab91",
                    borderRadius: 10,
                    borderWidth: 1,
                    marginTop: 20,
                    padding: 10,
                  }}
                  placeholder={"First Name"}
                  maxLength={8}
                  onChangeText={(text) => {
                    this.setState({
                      firstName: text,
                    });
                  }}
                />
                <TextInput
                  style={{
                    widthwidth: "75%",
                    height: 35,
                    alignSelf: "center",
                    borderColor: "#ffab91",
                    borderRadius: 10,
                    borderWidth: 1,
                    marginTop: 20,
                    padding: 10,
                  }}
                  placeholder={"Last Name"}
                  maxLength={8}
                  onChangeText={(text) => {
                    this.setState({
                      lastName: text,
                    });
                  }}
                />
                <TextInput
                  style={{
                    widthwidth: "75%",
                    height: 35,
                    alignSelf: "center",
                    borderColor: "#ffab91",
                    borderRadius: 10,
                    borderWidth: 1,
                    marginTop: 20,
                    padding: 10,
                  }}
                  placeholder={"Email"}
                  keyboardType={"email-address"}
                  onChangeText={(text) => {
                    this.setState({
                      mail: text,
                    });
                  }}
                />
                <TextInput
                  style={{
                    widthwidth: "75%",
                    height: 35,
                    alignSelf: "center",
                    borderColor: "#ffab91",
                    borderRadius: 10,
                    borderWidth: 1,
                    marginTop: 20,
                    padding: 10,
                  }}
                  placeholder={"Password"}
                  secureTextEntry={true}
                  onChangeText={(text) => {
                    this.setState({
                      password: text,
                    });
                  }}
                />
                <TextInput
                  style={{
                    widthwidth: "75%",
                    height: 35,
                    alignSelf: "center",
                    borderColor: "#ffab91",
                    borderRadius: 10,
                    borderWidth: 1,
                    marginTop: 20,
                    padding: 10,
                  }}
                  placeholder={"Confrim Password"}
                  secureTextEntry={true}
                  onChangeText={(text) => {
                    this.setState({
                      confirmPassword: text,
                    });
                  }}
                />
                <View>
                  <TouchableOpacity
                    style={{
                      width: 200,
                      height: 40,
                      alignItems: "center",
                      justifyContent: "center",
                      borderWidth: 1,
                      borderRadius: 10,
                      marginTop: 30,
                    }}
                    onPress={() => this.userSignUp()}
                  >
                    <Text
                      style={{
                        color: "#ff5722",
                        fontSize: 15,
                        fontWeight: "bold",
                      }}
                    >
                      Register
                    </Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity
                    style={{
                      width: 200,
                      height: 30,
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: 5,
                    }}
                    onPress={() => this.setState({ isModalVisible: false })}
                  >
                    <Text style={{ color: "#ff0000" }}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </KeyboardAvoidingView>
            </ScrollView>
          </View>
        </Modal>
      );
    } else {
      return null;
    }
  };

  render() {
    return (
      <View>
        <TextInput
          style={{
            widthwidth: "75%",
            height: 35,
            alignSelf: "center",
            borderColor: "#ffab91",
            borderRadius: 10,
            borderWidth: 1,
            marginTop: 20,
            padding: 10,
          }}
          placeholder={"Email"}
          keyboardType={"email-address"}
          onChangeText={(text) => {
            this.setState({
              mail: text,
            });
          }}
        />
        <TextInput
          style={{
            widthwidth: "75%",
            height: 35,
            alignSelf: "center",
            borderColor: "#ffab91",
            borderRadius: 10,
            borderWidth: 1,
            marginTop: 20,
            padding: 10,
          }}
          placeholder={"Password"}
          secureTextEntry={true}
          onChangeText={(text) => {
            this.setState({
              password: text,
            });
          }}
        />
        <TouchableOpacity
          onPress={() => this.setState({ isModalVisible: true })}
        >
          <Text>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.signIn()}>
          <Text>Sign In</Text>
        </TouchableOpacity>
        {this.showModal()}
      </View>
    );
  }
}

export default WelcomeScreen;
