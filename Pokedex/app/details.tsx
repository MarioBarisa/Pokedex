import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";



export default function Index() {
    const { params } = useLocalSearchParams();
    
  return (
    <ScrollView
      contentContainerStyle={{
        gap: 10,
        padding: 8
      }}
    >
    </ScrollView>
  );
}


const styles = StyleSheet.create({
})
