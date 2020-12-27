import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import firebase from "firebase";
import Header from '../Components/Header';
class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    //   mail: firebase.auth().currentUser.email,
      methods: [],
    };
  }

  render() {
    return (
      <View style={styles.container}>
          <Header/>
        <Text> HomeScreen </Text>
        <TouchableOpacity style={styles.addPay}>
          <Text style={styles.addPayText}>Add a paymont method</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Met}>
          {/* <Text>
            {this.state.methods.map((method) => {
              method
            })}
            //Will add Flat list
          </Text> */}
          <Text style={styles.MetText}>
            Cash
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 50,
  },
  addPay: {
    backgroundColor: "#222",
    color: "white",
    alignItems: "center",
    width: 350,
    height: 35,
    marginTop: 10,
    justifyContent: "center",
    padding:6
  },
  addPayText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
    marginBottom:1
  },
  Met: {
    backgroundColor: "#5fa",
    color: "white",
    alignItems: "center",
    width: 200,
    height: 25,
    marginTop: 10,
    justifyContent: "center",
  },
  MetText: {
    color: "#6af",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default HomeScreen;
