import {Icon, Label, NativeTabs} from "expo-router/unstable-native-tabs";

export default function TabsLayout() {

    // Apple SF icons online list https://hotpot.ai/free-icons


    return (
        <NativeTabs>
            <NativeTabs.Trigger name="home">
                <Label>Home</Label>
                <Icon sf="house.fill" drawable="ic_menu_view"/>
            </NativeTabs.Trigger>

            <NativeTabs.Trigger name="favorites">
                <Label>Favorites</Label>
                <Icon sf="star.fill" drawable="ic_menu_agenda"/>
            </NativeTabs.Trigger>

            <NativeTabs.Trigger name="profile">
                <Label>Profile</Label>
                <Icon sf="person.fill" drawable="ic_menu_agenda"/>
            </NativeTabs.Trigger>

            <NativeTabs.Trigger name="settings">
                <Label>Settings</Label>
                <Icon sf="gearshape" drawable="ic_menu_agenda"/>
            </NativeTabs.Trigger>


        </NativeTabs>

    );
}
