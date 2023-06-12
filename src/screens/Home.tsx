import {
  ImageBackground,
  View,
  Text,
  TextInput,
  Image,
  TouchableHighlightBase,
  TouchableOpacityBase,
  TouchableOpacity,
} from "react-native";

import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SelectList } from "react-native-dropdown-select-list";
import { AppMenu } from "../components/Basic/menu";
import ToggleSwitch from "toggle-switch-react-native";
import { AppBackground } from "../components/Basic/background";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Home() {
  // Pega tamaho da tela atual
  const { bottom, top } = useSafeAreaInsets();
  const [selected, setSelected] = useState("");
  const [togle, setTogle] = useState(false);

  // servidores
  const data = [
    { key: "1", value: "Mobiles", disabled: true },
    { key: "2", value: "Appliances" },
  ];

  return (
    <>
      <AppBackground />
      <AppMenu />
      <ScrollView
        className="w-full h-screen "
        contentContainerStyle={{ paddingBottom: bottom, paddingTop: top }}
      >
        <View className="w-full h-screen flex-col items-center justify-center p-3 ">
          <View className="w-full  flex flex-col  items-center justify-center  gap-y-2 p-5 rounded-lg">
            <View className="w-full flex flex-col gap-y-1">
              <View className="font-bold mb-1 flex flex-row items-center">
                <Ionicons name="server" size={22} />
                <Text className="font-bold ml-2">Servidor</Text>
              </View>
              <TextInput
                passwordRules="true"
                className="border border-zinc-400 bg-white p-2 rounded-lg focus:border-green-500 "
                placeholder="EX: abc"
              />
            </View>

            <View className="w-full flex flex-col gap-y-1">
              <View className="font-bold mb-1 flex flex-row items-center">
                <Ionicons name="person" size={22} />
                <Text className="font-bold ml-2">Servidor</Text>
              </View>
              <TextInput
                passwordRules="true"
                className="border border-zinc-400 bg-white p-2 rounded-lg focus:border-green-500 "
                placeholder="EX: abc"
              />
            </View>

            <View className="w-full flex flex-col gap-y-1">
              <View className="font-bold mb-1 flex flex-row items-center">
                <Ionicons name="lock-closed" size={22} />
                <Text className="font-bold ml-2">Servidor</Text>
              </View>
              <TextInput
                passwordRules="true"
                className="border border-zinc-400 bg-white p-2 rounded-lg focus:border-green-500 "
                placeholder="EX: *******"
              />
            </View>
            <View className="self-end my-10">
              <ToggleSwitch
                isOn={togle}
                onColor="green"
                offColor="red"
                label="Lembrar usuario"
                labelStyle={{ color: "black", fontWeight: "400" }}
                size="small"
                onToggle={(isOn) => setTogle(isOn)}
              />
            </View>

            <TouchableOpacity
              activeOpacity={0.7}
              className="bg-blue-500 p-3 rounded-lg self-end mt-5"
            >
              <Text className="text-white font-bold">Conectar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
