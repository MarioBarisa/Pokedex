import { Icon, Label, NativeTabs } from "expo-router/unstable-native-tabs";

export default function TabsLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="home">
        <Label>Home</Label>
        <Icon sf="house.fill" drawable="ic_menu_view" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="favorites">
        <Label>Favorites</Label>
        <Icon sf="heart.fill" drawable="ic_menu_agenda" />
      </NativeTabs.Trigger>
      </NativeTabs>
      
  );
}
