import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

export default function App() {
  const [devState1, setDevState1] = useState("red");
  const [devState2, setDevState2] = useState("red");
  const [devState3, setDevState3] = useState("red");

  const [value, setValue] = useState(0);

  function devOn(setDevState, value, devState) {
    setDevState("green"), incrementCount(value, devState);
  }
  function devOff(setDevState, value, devState) {
    setDevState("red"), decrementCount(value, devState);
  }

  function incrementCount(value, devState) {
    if (value < 3 && devState === "red") setValue(value + 1);
  }
  function decrementCount(value, devState) {
    if (value > 0 && devState === "green") setValue(value - 1);
  }

  return (
    // WHOLE BACKGROUND
    <View style={styles.mainContainer}>
      {/* ICON + APPNAME VIEW */}
      <View style={styles.row}>
        <Image
          style={{ width: 75, height: 75, marginRight: 20 }}
          source={require("./assets/house.png")}
        />
        <View>
          <Text style={styles.mainFont}>SmartHome</Text>
        </View>
      </View>

      {/* ROOMSTITLE + ROOMS VIEW */}
      <View>
        <Text style={styles.subFont}>Rooms</Text>

        <View style={styles.containerImg}>
          <View style={styles.image}>
            <Image
              style={styles.imageSize}
              source={require("./assets/living-room.png")}
            />
            <View style={styles.containerMini}>
              <Text style={styles.roomsFont}>Living Room</Text>
            </View>
          </View>

          <View style={styles.image}>
            <Image
              style={styles.imageSize}
              source={require("./assets/bed.png")}
            />
            <View style={styles.containerMini}>
              <Text style={styles.roomsFont}>Bedroom</Text>
            </View>
          </View>

          <View style={styles.image}>
            <Image
              style={styles.imageSize}
              source={require("./assets/kitchen.png")}
            />
            <View style={styles.containerMini}>
              <Text style={styles.roomsFont}>Kitchen</Text>
            </View>
          </View>
        </View>
      </View>

      {/* DEVICESTITLE + DEVICES VIEW */}
      <View style={styles.flexcolumn}>
        <Text style={styles.subFont}>Devices</Text>

        <View style={styles.containerDev}>
          <View style={styles.dev}>
            <View style={styles.devSwitch}>
              <View
                style={{
                  width: 15,
                  height: 15,
                  margin: 7,
                  backgroundColor: devState1,
                }}
              ></View>
              <Text style={styles.devFont}>Living Room Lamp</Text>
            </View>
            <View style={styles.button}>
              <Button
                title="On"
                onPress={() => devOn(setDevState1, value, devState1)}
              ></Button>
              <Button
                title="Off"
                onPress={() => devOff(setDevState1, value, devState1)}
              ></Button>
            </View>
          </View>

          <View style={styles.dev}>
            <View style={styles.devSwitch}>
              <View
                style={{
                  width: 15,
                  height: 15,
                  margin: 7,
                  backgroundColor: devState2,
                }}
              ></View>
              <Text style={styles.devFont}>Heater</Text>
            </View>
            <View style={styles.button}>
              <Button
                title="On"
                onPress={() => devOn(setDevState2, value, devState2)}
              ></Button>
              <Button
                title="Off"
                onPress={() => devOff(setDevState2, value, devState2)}
              ></Button>
            </View>
          </View>

          <View style={styles.dev}>
            <View style={styles.devSwitch}>
              <View
                style={{
                  width: 15,
                  height: 15,
                  margin: 7,
                  backgroundColor: devState3,
                }}
              ></View>
              <Text style={styles.devFont}>TV</Text>
            </View>
            <View style={styles.button}>
              <Button
                title="On"
                onPress={() => devOn(setDevState3, value, devState3)}
              ></Button>
              <Button
                title="Off"
                onPress={() => devOff(setDevState3, value, devState3)}
              ></Button>
            </View>
          </View>
        </View>

        <View>
          <Text style={styles.devSumFont}>Total Devices on: {value}</Text>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#fff",
    width: 375,
    height: 812,
    borderWidth: 20,
    borderTopWidth: 50,
    borderColor: "#fff",
    alignItems: "flex-start",
  },
  containerImg: {
    width: 375 - 40,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  containerDev: {
    width: 375 - 40,
    height: 300,
    justifyContent: "space-between",
  },
  dev: {
    width: 375 - 40,
    height: 90,
    flexDirection: "row",
    backgroundColor: "lightyellow",
    justifyContent: "space-between",
    alignItems: "center",
  },
  devSwitch: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    margin: 7,
    backgroundColor: "#fff",
  },
  image: {
    width: 100,
    height: 110,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#17A589",
  },
  imageSize: {
    width: 68,
    height: 68,
    marginTop: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  column: {
    flexDirection: "column",
  },
  mainFont: {
    color: "#17A589",
    fontSize: 24,
    fontWeight: "bold",
  },
  subFont: {
    color: "#000",
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  roomsFont: {
    color: "#000",
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 10,
  },
  devFont: {
    color: "#000",
    fontSize: 18,
    fontWeight: "500",
    margin: 7,
  },
  devSumFont: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
});
