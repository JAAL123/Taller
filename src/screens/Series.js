import React from "react";
import {View,Text,StyleSheet,Image,ScrollView} from "react-native";

export default function Serie(){
    return(
                      
      <ScrollView style={styles.Container}>
            <View style={{flexDirection:'row'}}>
                <Image
                style={styles.banner}
                source={require('../img/banner.jpg')}
                />                
            </View>

            <View style={styles.contenido}> 
                <View>
                    <Text style={styles.titulo}>Comedias</Text>
                  
                    <View style={styles.serie}>
                        <View style={styles.izquierda}>
                        <Image
                        style={styles.imagen}
                        source={require('../img/s1.jpg')}
                        />
                        </View>                        
                        <View style={styles.derecha}>
                            <Text style={styles.titulo}>La teoria del big bang</Text>
                            <Text style={styles.subtitulo}>12 Temporadas</Text>                         
                        </View>
                    </View>    
                    <View style={styles.serie}>
                        <View style={styles.izquierda}>
                        <Image
                        style={styles.imagen}
                        source={require('../img/s2.jpg')}
                        />
                        </View>                        
                        <View style={styles.derecha}>
                            <Text style={styles.titulo}>Como conoci a tu madre</Text>
                            <Text style={styles.subtitulo}>9 Temporadas</Text>                         
                        </View>
                    </View>     
                    <View style={styles.serie}>
                        <View style={styles.izquierda}>
                        <Image
                        style={styles.imagen}
                        source={require('../img/s3.jpg')}
                        />
                        </View>                        
                        <View style={styles.derecha}>
                            <Text style={styles.titulo}>Dos hombres y medio</Text>
                            <Text style={styles.subtitulo}>12 Temporadas</Text>                         
                        </View>
                    </View>   
                    <View style={styles.serie}>
                        <View style={styles.izquierda}>
                        <Image
                        style={styles.imagen}
                        source={require('../img/s4.jpg')}
                        />
                        </View>                        
                        <View style={styles.derecha}>
                            <Text style={styles.titulo}>Friends</Text>
                            <Text style={styles.subtitulo}>10 Temporadas</Text>                         
                        </View>
                    </View>        
                    <View style={styles.serie}>
                        <View style={styles.izquierda}>
                        <Image
                        style={styles.imagen}
                        source={require('../img/s5.jpg')}
                        />
                        </View>                        
                        <View style={styles.derecha}>
                            <Text style={styles.titulo}>Seinfeld</Text>
                            <Text style={styles.subtitulo}>9 Temporadas</Text>                         
                        </View>
                    </View>    
                    <View style={styles.serie}>
                        <View style={styles.izquierda}>
                        <Image
                        style={styles.imagen}
                        source={require('../img/s6.jpg')}
                        />
                        </View>                        
                        <View style={styles.derecha}>
                            <Text style={styles.titulo}>La oficina</Text>
                            <Text style={styles.subtitulo}>9 Temporadas</Text>                         
                        </View>
                    </View>     
                    
                   
                </View>
            </View>

            <View>
                    <Text style={styles.titulo}>Fantasia</Text>
                  
                    <View style={styles.serie}>
                        <View style={styles.izquierda}>
                        <Image
                        style={styles.imagen}
                        source={require('../img/s7.jpg')}
                        />
                        </View>                        
                        <View style={styles.derecha}>
                            <Text style={styles.titulo}>Lucifer</Text>
                            <Text style={styles.subtitulo}>6 Temporadas</Text>                         
                        </View>
                    </View>    
                    <View style={styles.serie}>
                        <View style={styles.izquierda}>
                        <Image
                        style={styles.imagen}
                        source={require('../img/s8.jpg')}
                        />
                        </View>                        
                        <View style={styles.derecha}>
                            <Text style={styles.titulo}>Flash</Text>
                            <Text style={styles.subtitulo}>6 Temporadas</Text>                         
                        </View>
                    </View>     
                    <View style={styles.serie}>
                        <View style={styles.izquierda}>
                        <Image
                        style={styles.imagen}
                        source={require('../img/s9.jpg')}
                        />
                        </View>                        
                        <View style={styles.derecha}>
                            <Text style={styles.titulo}>Rick y Morty</Text>
                            <Text style={styles.subtitulo}>5 Temporadas</Text>                         
                        </View>
                    </View>   
                    <View style={styles.serie}>
                        <View style={styles.izquierda}>
                        <Image
                        style={styles.imagen}
                        source={require('../img/s10.jpg')}
                        />
                        </View>                        
                        <View style={styles.derecha}>
                            <Text style={styles.titulo}>Final Space</Text>
                            <Text style={styles.subtitulo}>3 Temporadas</Text>                         
                        </View>
                    </View>        
                    <View style={styles.serie}>
                        <View style={styles.izquierda}>
                        <Image
                        style={styles.imagen}
                        source={require('../img/s11.jpg')}
                        />
                        </View>                        
                        <View style={styles.derecha}>
                            <Text style={styles.titulo}>The Witcher</Text>
                            <Text style={styles.subtitulo}>1 Temporada</Text>                         
                        </View>
                    </View>    
                    <View style={styles.serie}>
                        <View style={styles.izquierda}>
                        <Image
                        style={styles.imagen}
                        source={require('../img/s12.jpg')}
                        />
                        </View>                        
                        <View style={styles.derecha}>
                            <Text style={styles.titulo}>Altered Carbon</Text>
                            <Text style={styles.subtitulo}>2 Temporadas</Text>                         
                        </View>
                    </View>     
                    
                   
                </View>
                <View>
                    <Text style={styles.titulo}>Aventura</Text>
                  
                    <View style={styles.serie}>
                        <View style={styles.izquierda}>
                        <Image
                        style={styles.imagen}
                        source={require('../img/s13.jpg')}
                        />
                        </View>                        
                        <View style={styles.derecha}>
                            <Text style={styles.titulo}>Vikingos</Text>
                            <Text style={styles.subtitulo}>6 Temporadas</Text>                         
                        </View>
                    </View>    
                    <View style={styles.serie}>
                        <View style={styles.izquierda}>
                        <Image
                        style={styles.imagen}
                        source={require('../img/s14.jpg')}
                        />
                        </View>                        
                        <View style={styles.derecha}>
                            <Text style={styles.titulo}>Juego de Tronos</Text>
                            <Text style={styles.subtitulo}>8 Temporadas</Text>                         
                        </View>
                    </View>     
                    <View style={styles.serie}>
                        <View style={styles.izquierda}>
                        <Image
                        style={styles.imagen}
                        source={require('../img/s15.jpg')}
                        />
                        </View>                        
                        <View style={styles.derecha}>
                            <Text style={styles.titulo}>Lupin</Text>
                            <Text style={styles.subtitulo}>2 Temporadas</Text>                         
                        </View>
                    </View>   
                    <View style={styles.serie}>
                        <View style={styles.izquierda}>
                        <Image
                        style={styles.imagen}
                        source={require('../img/s16.jpg')}
                        />
                        </View>                        
                        <View style={styles.derecha}>
                            <Text style={styles.titulo}>Happy</Text>
                            <Text style={styles.subtitulo}>2 Temporadas</Text>                         
                        </View>
                    </View>        
                    <View style={styles.serie}>
                        <View style={styles.izquierda}>
                        <Image
                        style={styles.imagen}
                        source={require('../img/s17.jpg')}
                        />
                        </View>                        
                        <View style={styles.derecha}>
                            <Text style={styles.titulo}>Black Sails</Text>
                            <Text style={styles.subtitulo}>1 Temporadas</Text>                         
                        </View>
                    </View>    
                    <View style={styles.serie}>
                        <View style={styles.izquierda}>
                        <Image
                        style={styles.imagen}
                        source={require('../img/s18.jpg')}
                        />
                        </View>                        
                        <View style={styles.derecha}>
                            <Text style={styles.titulo}>Perdidos en el Espacio</Text>
                            <Text style={styles.subtitulo}>8 Temporadas</Text>                         
                        </View>
                    </View>     
                    
                   
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
        marginVertical:5
    },
    titulo:{
        fontWeight:'bold',
        fontSize:20,
        marginVertical:10,
        color:'#FFF'
        
    },
    serie:{
        flex:1,
        flexDirection:"row",
        backgroundColor:"#131313"
    },    
    imagen:{
        width:110,
        height:150
    },
    nombre:{
        color:"#FFF",
        fontSize:20,
        fontWeight:'bold'
    },
    subtitulo:{
        paddingVertical:5,
        color:"#FFF",
        fontSize:14,
        fontWeight:'bold',
        color:"gray",
        alignSelf:"center"
    },
    derecha:{
        flex:2,
        paddingVertical:30,
        alignItems:"center"
    },
    izquierda:{
        flex:1,
        padding:5
    }
})