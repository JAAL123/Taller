import React from "react";
import {View,Text, StyleSheet,Image,ScrollView} from "react-native";

export default function Pelicula(){
    return(
        <ScrollView style={styles.Container}>
            <View style={{flexDirection:'row'}}>
                <Image
                style={styles.banner}
                source={require('../img/banner.jpg')}
                />
            </View>

            <View style={styles.contenido}>
                <Text style={styles.titulo}>Comedias</Text>
                <ScrollView horizontal>
                    <View>
                        <Image
                        style={styles.pelicula}
                        source={require('../img/p1.jpg')}
                        />
                    </View>
                    <View>
                        <Image
                        style={styles.pelicula}
                        source={require('../img/p2.jpg')}
                        />
                    </View>
                    <View>
                        <Image
                        style={styles.pelicula}
                        source={require('../img/p3.jpg')}
                        />
                    </View>
                    <View>
                        <Image
                        style={styles.pelicula}
                        source={require('../img/p4.jpg')}
                        />
                    </View>
                    <View>
                        <Image
                        style={styles.pelicula}
                        source={require('../img/p5.jpg')}
                        />
                    </View>
                    <View>
                        <Image
                        style={styles.pelicula}
                        source={require('../img/p6.jpg')}
                        />
                    </View>
                </ScrollView>
            </View>

            <View style={styles.contenido}>
                <Text style={styles.titulo}>Romances</Text>
                <ScrollView horizontal>
                    <View>
                        <Image
                        style={styles.pelicula}
                        source={require('../img/p7.jpg')}
                        />
                    </View>
                    <View>
                        <Image
                        style={styles.pelicula}
                        source={require('../img/p8.jpg')}
                        />
                    </View>
                    <View>
                        <Image
                        style={styles.pelicula}
                        source={require('../img/p9.jpg')}
                        />
                    </View>
                    <View>
                        <Image
                        style={styles.pelicula}
                        source={require('../img/p10.jpg')}
                        />
                    </View>
                    <View>
                        <Image
                        style={styles.pelicula}
                        source={require('../img/p11.jpg')}
                        />
                    </View>
                    <View>
                        <Image
                        style={styles.pelicula}
                        source={require('../img/p12.jpg')}
                        />
                    </View>
                </ScrollView>
            </View>

            <View style={styles.contenido}>
                <Text style={styles.titulo}>Acción</Text>
                <ScrollView horizontal>
                    <View>
                        <Image
                        style={styles.pelicula}
                        source={require('../img/p13.jpg')}
                        />
                    </View>
                    <View>
                        <Image
                        style={styles.pelicula}
                        source={require('../img/p14.jpg')}
                        />
                    </View>
                    <View>
                        <Image
                        style={styles.pelicula}
                        source={require('../img/p15.jpg')}
                        />
                    </View>
                    <View>
                        <Image
                        style={styles.pelicula}
                        source={require('../img/p16.jpg')}
                        />
                    </View>
                    <View>
                        <Image
                        style={styles.pelicula}
                        source={require('../img/p17.jpg')}
                        />
                    </View>
                    <View style={{paddingBottom:10}}>
                        <Image
                        style={styles.pelicula}
                        source={require('../img/p18.jpg')}
                        />
                    </View>
                </ScrollView>
            </View>

            

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    banner:{
        height:250,
        flex:1
    },
    Container:{
        flex:1,
        backgroundColor:'#000000'        
    },
    contenido:{
        marginHorizontal:10
    },
    titulo:{
        fontWeight:'bold',
        fontSize:20,
        marginVertical:10,
        color:'#FFF'        
    },
    pelicula:{
        width:200,
        height:300,
        marginRight:10
    }
})
