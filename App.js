/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import type { Node } from "react";
import {
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Dimensions,
    Image,
    TouchableOpacity
} from "react-native";

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";
import HermesBadge from "react-native/Libraries/NewAppScreen/components/HermesBadge";

let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;

const Section = ({ children, title }): Node => {
    const isDarkMode = useColorScheme() === "dark";
    return (
        <View style={styles.sectionContainer}>
            <Text
                style={[
                    styles.sectionTitle,
                    {
                        color: isDarkMode ? Colors.white : Colors.black,
                    },
                ]}>
                {title}
            </Text>
            <Text
                style={[
                    styles.sectionDescription,
                    {
                        color: isDarkMode ? Colors.light : Colors.dark,
                    },
                ]}>
                {children}
            </Text>
        </View>
    );
};

const App: () => Node = () => {
    const isDarkMode = useColorScheme() === "dark";

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}>

                <ImageBackground
                    accessibilityRole="image"
                    source={require("./Src/Photos/Aeropress.jpg")}
                    style={[
                        styles.background,
                        {
                            backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
                        },
                    ]}
                    imageStyle={styles.logo}>
                    <TouchableOpacity style={styles.headerRow}>
                        <Image style={styles.icBack}
                               source={require("./Src/Static/icBack.png")}/>
                        <Text
                            style={[
                                styles.text,
                                {
                                    color: isDarkMode ? Colors.white : Colors.white,
                                },
                            ]}>
                            Aeropress
                        </Text>
                    </TouchableOpacity>
                </ImageBackground>
                <View style={styles.detailsRow}>
                    <View style={styles.detailsCirclesRow}>
                        <View style={styles.details}>
                            <View style={styles.detailsCircle}>
                                <Text style={styles.detailsText}>
                                    Fine
                                </Text>
                            </View>
                            <Text style={styles.detailsLabel}>
                                Grind Size
                            </Text>
                        </View>
                        <View style={styles.details}>
                            <View style={styles.detailsCircle}>
                                <Text style={styles.detailsText}>
                                    15gr
                                </Text>
                            </View>
                            <Text style={styles.detailsLabel}>
                                Coffee
                            </Text>
                        </View>
                        <View style={styles.details}>
                            <View style={styles.detailsCircle}>
                                <Text style={styles.detailsText}>
                                    240gr
                                </Text>
                            </View>
                            <Text style={styles.detailsLabel}>
                                Water
                            </Text>
                        </View>
                    </View>
                </View>

                <View
                    style={[styles.sections,{
                        backgroundColor: isDarkMode ? Colors.black : Colors.white,
                    }]}>
                    <Text style={styles.sectionLabel}>
                        Tools
                    </Text>
                    <View style={styles.sectionItemsContainer}>
                        <View style={styles.sectionItem}>
                            <Image style={styles.sectionItemImage}
                                   source={require("./Src/Photos/Aeropress.jpg")}/>
                            <Text style={styles.sectionItemLabel}>
                                Aeropress
                            </Text>
                        </View>
                        <View style={styles.sectionItem}>
                            <Image style={styles.sectionItemImage}
                                   source={require("./Src/Photos/MicroFilter.jpg")}/>
                            <Text style={styles.sectionItemLabel}>
                                Micro Filter
                            </Text>
                        </View>
                        <View style={styles.sectionItem}>
                            <Image style={styles.sectionItemImage}
                                   source={require("./Src/Photos/Cup.jpg")}/>
                            <Text style={styles.sectionItemLabel}>
                                Cup / Server
                            </Text>
                        </View>
                        <View style={styles.sectionItem}>
                            <Image style={styles.sectionItemImage}
                                   source={require("./Src/Photos/Kettle.jpg")}/>
                            <Text style={styles.sectionItemLabel}>
                                Kettle
                            </Text>
                        </View>
                        <View style={styles.sectionItem}>
                            <Image style={styles.sectionItemImage}
                                   source={require("./Src/Photos/Scale.jpg")}/>
                            <Text style={styles.sectionItemLabel}>
                                Scale
                            </Text>
                        </View>
                        <View style={styles.sectionItem}>
                            <Image style={styles.sectionItemImage}
                                   source={require("./Src/Photos/Grinder.jpg")}/>
                            <Text style={styles.sectionItemLabel}>
                                Grinder
                            </Text>
                        </View>

                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    sectionItemLabel: {
        color: 'black',
        fontSize: 15,
        fontWeight: "500",
    },
    sectionItemImage: {
        height: 60,
        width: ((deviceWidth-80)/3) - 20,
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: 'gray',
    },
    sectionItem: {
        height: 110,
        padding: 10,
        width: ((deviceWidth-80)/3),
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: 'gray',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    sectionItemsContainer: {
        // height: 200,
        width: deviceWidth,
        marginTop: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    sectionLabel: {
        color: 'black',
        fontSize: 25,
        paddingLeft: 10,
        fontWeight: "700"
    },
    sections: {
        // height: 200,
        width: deviceWidth,
        paddingHorizontal: 20,
        paddingLeft: 10,
        paddingVertical: 20,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    details: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    detailsLabel: {
        marginTop: 10,
        color: 'black',
        fontSize: 14,
        fontWeight: "600"
    },
    detailsText: {
        color: '#c07b74',
        fontSize: 15,
        fontWeight: "700"
    },
    detailsCircle: {
        backgroundColor: '#e1dfe0',
        height: 70,
        width: 70,
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
    },
    detailsCirclesRow: {
        paddingTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    detailsRow: {
        backgroundColor: '#f2f2f2',
        height: 130
    },
    icBack: {
        width: 20,
        height: 20,
        color: 'white',
        marginRight: 15
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    background: {
        // paddingBottom: 96,
        // paddingTop: 96,
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: deviceWidth,
        height: (deviceWidth/3)*2,
        justifyContent: 'flex-start',
    },
    logo: {
        opacity: 1,
        overflow: "visible",
        resizeMode: "cover",
        /*
         * These negative margins allow the image to be offset similarly across screen sizes and component sizes.
         *
         * The source logo.png image is 512x512px, so as such, these margins attempt to be relative to the
         * source image's size.
         */
        marginLeft: -50,
        marginBottom: -75,
    },
    text: {
        fontSize: 30,
        fontWeight: "300",
        textAlign: "left",
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: "600",
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: "400",
    },
    highlight: {
        fontWeight: "700",
    },
});

export default App;
