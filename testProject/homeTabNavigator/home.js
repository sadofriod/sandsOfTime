import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    Keyboard,
    Dimensions,
    Image,
    ImageBackground,
    Animated,
    NativeModules,
    LayoutAnimation,
    TouchableHighlight,
} from 'react-native';
import ActivityDetail, { ActivityStack } from './ActivityDetail';
import TabNavigation from './TabNavigation';
import { StackNavigator } from 'react-navigation';
const { UIManager } = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
export default class HomePage extends React.Component {
    render() {
        return (
            <View style={{ height: Dimensions.get('window').height, width: Dimensions.get('window').width }}>
                <Stack />
            </View>
        )
    }
}
class HomePage1 extends React.Component {
    static navigationOptions = {
        header: null,
    };
    constructor(props) {
        super(props)
        this.state = {
            day: new Date().getDay(),
            topBoxHeight: windowPX.height * 0.3,
            bottomBoxHeight: windowPX.height * 0.7,
            bottomBoxDisplay: 'flex',
            topBoxDisplay: 'flex',
            detailBoxDisplay: 'none',
            mainDisplay: 'flex',
            mainHeight: windowPX.height,
            detailBoxHeight: 0,
            showWidth: windowPX.width,
            backDisplay: 'none'
        }
        var timeUpdate = null;

    }
    animationUpdate = () => {
        LayoutAnimation.spring();
        this.setState({
            topBoxHeight: 0,
            bottomBoxHeight: windowPX.height,
            topBoxDisplay: 'none',
            showWidth: windowPX.width,
            backDisplay: 'flex'
        });
    }
    backMain = () => {
        LayoutAnimation.spring();
        this.setState({
            topBoxHeight: windowPX.height * 0.3,
            bottomBoxHeight: windowPX.height * 0.7,
            topBoxDisplay: 'flex',
            showWidth: windowPX.width,
            backDisplay: 'none'
        });
    }
    componentDidMount() {

    }

    componentWillUpdate() {

    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>

                <View style={{ flex: 0, height: this.state.mainHeight, width: this.state.showWidth }}>
                    <ImageBackground style={[styles.topBoxBgI, { height: this.state.topBoxHeight, display: this.state.topBoxDisplay, width: this.state.showWidth }]} source={require('./img/timg.jpg')}>
                        <View style={styles.topBox}>
                            <View style={styles.topLeftBox}>
                                <View style={styles.topLeftWordBox}>
                                    <Text style={styles.topLeftWord}>week{this.state.day}</Text>
                                </View>
                            </View>
                            <View style={styles.topRightBox}>
                                <View style={styles.userDataTube}>
                                    <View style={styles.tubeBox}>
                                        <View style={styles.tube}></View>
                                    </View>
                                    <Text style={styles.tubePlan}>Lead</Text>
                                </View>
                                <View style={styles.userDataTube}>
                                    <View style={styles.tubeBox}>
                                        <View style={styles.tube}></View>
                                    </View>
                                    <Text style={styles.tubePlan}>Play</Text>
                                </View>
                                <View style={styles.userDataTube}>
                                    <View style={styles.tubeBox}>
                                        <View style={styles.tube}></View>
                                    </View>
                                    <Text style={styles.tubePlan}> Time</Text>
                                </View>
                                {/* <View style = {styles.userWorth}>
                            <Text>Worth</Text>
                            <Text></Text>
                        </View> */}
                            </View>
                        </View>
                        <View style={{
                            flex: 0,
                            height: windowPX.height * 0.05,
                            width: windowPX.width,
                            backgroundColor: 'rgba(0,0,0,.75)',
                        }}>
                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                backgroundColor: 'rgba(255,255,255,.25)',
                            }}>
                                <Image style={{ flex: 1 }} />
                                <TouchableHighlight style={{
                                    flex: 4,
                                }} onPress={() => navigate('Screen')}>
                                    <Text >
                                        For your recommendation, see more
                                    </Text>
                                </TouchableHighlight>
                                <Button
                                    title="retract"
                                    onPress={this.animationUpdate} />
                            </View>
                        </View>
                    </ImageBackground>
                    <View style={{ height: this.state.bottomBoxHeight }}>
                        <TabNavigation ref="tab" screenProps={{navigator:this.props.navigation}}/>
                    </View>
                </View>
                <TouchableHighlight style={{ height: 50, width: 50, display: this.state.backDisplay, position: "absolute", right: 30, bottom: 50, borderRadius: 25, borderColor: '#222', borderWidth: 2 }} onPress={this.backMain}>
                    <View >
                        <Text setyle={{ height: 50, width: 50, fontSize: 50, fontWeight: '900', textAlign: 'center' }}>是</Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}
class Detail extends React.Component {
    static navigationOptions = {
        header: null
    };
    constructor (props){
        super(props);
        this.state ={
            day: new Date().getDay()
        }
    }
    render() {
        const {navigate} = this.props.navigation
        return (
            <View>
                <ImageBackground style={detailStyle.bgi} source={require('./img/timg.jpg')}>
                    <View style={detailStyle.detailBox}>
                        <View style={detailStyle.topBox}>
                            <View style={detailStyle.topChildBox}>
                                <View style={styles.topLeftWordBox}>
                                    <Text style={styles.topLeftWord}>week{this.state.day}</Text>
                                </View>
                            </View>
                            <View style={detailStyle.topChildBox}>
                                <Text style={{ fontWeight: '900', fontSize: 40, color: '#fff' }}>Worth:523</Text>
                            </View>
                        </View>
                        <View style={detailStyle.bottomBox}>
                            <View style={detailStyle.tubeBox}>
                                <Text style={styles.tubePlan}>time</Text>
                                <View style={detailStyle.tube}></View>
                            </View>
                            <View style={detailStyle.tubeBox}>
                                <Text style={styles.tubePlan}>lead</Text>
                                <View style={detailStyle.tube}></View>
                            </View>
                            <View style={detailStyle.tubeBox}>
                                <Text style={styles.tubePlan}>join</Text>
                                <View style={detailStyle.tube}></View>
                            </View>
                            <View style={detailStyle.tubeBox}>
                                <Button title="back main" onPress={()=>{
                                    navigate('Home')
                                }}/>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}
const Stack = StackNavigator({
    Home: { screen: HomePage1 },
    Screen: { screen: Detail },
    ListDetail:{ screen: ActivityStack },
    // TabNavigation:{ screen: TabNavigation },
})
const windowPX = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
}
const styles = StyleSheet.create({
    topBox: {
        flex: 0,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        height: windowPX.height * 0.25,
        width: windowPX.width,
    },
    topBoxBgI: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        height: windowPX.height * 0.30,
        width: windowPX.width,
    },
    topLeftBox: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        height: windowPX.height * 0.25,
        width: windowPX.width * 0.40,
        padding: windowPX.width * 0.02,
        backgroundColor: 'rgba(0,0,0,.75)',
    },
    topLeftWordBox: {
        flex: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: windowPX.height * 0.15,
        width: windowPX.width * 0.18,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderWidth: 1,
        borderColor: '#fff',
    },
    topLeftWord: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
        borderTopWidth: 6,
        width: windowPX.width * 0.18,
        height: windowPX.height * 0.12,
        textAlign: 'center',
        borderColor: '#fff',
        paddingTop: windowPX.width * 0.02,
    },
    topRightBox: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: windowPX.height * 0.25,
        width: windowPX.width * 0.60,
        backgroundColor: 'rgba(0,0,0,.75)',
        padding: windowPX.width * 0.02,
    },
    timeDivide: {
        height: windowPX.height * 0.06,
        width: 30,
        color: '#222',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: "900",
    },
    userDataTube: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tube: {
        flex: 0,
        height: windowPX.height * 0.08,
        width: windowPX.width * 0.05,
        borderRadius: 20,
        backgroundColor: '#ff6c00',
    },
    tubeBox: {
        flex: 0,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        height: windowPX.height * 0.17,
        width: windowPX.width * 0.06,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#fff',
        marginBottom: 8,
    },
    tubePlan: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
    },
    userWorth: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    retract: {
        flex: 1,
        height: windowPX.height * 0.03,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#fff'
    },
    bottomBox: {
        flex: 0,
        height: windowPX.height * 0.69,
        width: windowPX.width
    }
});
const detailStyle = StyleSheet.create({
    bgi: {
        height: windowPX.height,
        width: windowPX.width,
        flex: 0
    },
    detailBox: {
        flex: 0,
        height: windowPX.height,
        width: windowPX.width,
        backgroundColor: 'rgba(0,0,0,0.75)'
    },
    topBox: {
        flex: 1,
        flexDirection: 'row',
        width: windowPX.width,
    },
    topChildBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomBox: {
        flex: 2,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tubeBox: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    tube: {
        flex: 3,
        borderRadius: 20,
        height: windowPX.height * 0.04,
        marginLeft: 20,
        borderColor: '#fff',
        borderWidth: 2
    }
})