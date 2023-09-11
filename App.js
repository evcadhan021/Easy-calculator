import React, {Component} from 'react';
import { View , Text , Image , StatusBar,StyleSheet, TouchableOpacity} from 'react-native';


class App extends Component {
  	constructor(props){
    	super(props);
    	this.state = {
      	hasil: 0,
      	hitung: 0,
    	}
  	}

	masukkanAngka = (value) => {
		if(this.state.hitung == 0){
			this.setState({hitung:value})
		} else {
			this.setState({hitung:this.state.hitung + '' + value})
		}
	}

	hitungHasil = () => {
		let hasil = eval(this.state.hitung)
		this.setState({hitung: hasil})
	}
  	render() {
    	return (
      	<View style={{flex: 1,backgroundColor: '#A8DF8E'}}>
        		<StatusBar backgroundColor={'#A8DF8E'} barStyle={'light-content'} />

        		<View style={{flex:0.7,justifyContent:'center',marginHorizontal:10}}>
          		<Text style={{fontSize:44,textAlign:'right',color:'#ff5722'}}>{this.state.hitung}</Text>
        		</View>

			<View style={{flex:1,}}>
				<View style={{flexDirection:'row',marginVertical:10,paddingTop:20,borderTopWidth:2,borderColor:'white'}}>
					<TouchableOpacity style={styles.button} onPress={() => this.masukkanAngka('(')}>
						<Text style={{fontSize:24,textAlign:'center',color:'#ff5722'}}>(</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={() => this.masukkanAngka(')')}>
						<Text style={{fontSize:24,textAlign:'center',color:'#ff5722'}}>)</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={() => this.masukkanAngka('/')}>
						<Text style={{fontSize:24,textAlign:'center',color:'#ff5722'}}>/</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={() => this.masukkanAngka('*')}>
						<Text style={{fontSize:24,textAlign:'center',color:'#ff5722'}}>X</Text>
					</TouchableOpacity>
				</View>
	{/* Jarak */}
				<View style={{flexDirection:'row',marginVertical:10}}>
					<TouchableOpacity style={styles.button} onPress={() => this.masukkanAngka(1)}>
						<Text style={styles.number}>1</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={() => this.masukkanAngka(2)}>
						<Text style={styles.number}>2</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={() => this.masukkanAngka(3)}>
						<Text style={styles.number}>3</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={() => this.masukkanAngka('+')}>
						<Text style={{fontSize:24,textAlign:'center',color:'#ff5722'}}>+</Text>
					</TouchableOpacity>
				</View>
	{/* Jarak */}
				<View style={{flexDirection:'row',marginVertical:10}}>
					<TouchableOpacity style={styles.button} onPress={() => this.masukkanAngka(4)}>
						<Text style={styles.number}>4</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={() => this.masukkanAngka(5)}>
						<Text style={styles.number}>5</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={() => this.masukkanAngka(6)}>
						<Text style={styles.number}>6</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={() => this.masukkanAngka('-')}>
						<Text style={{fontSize:24,textAlign:'center',color:'#ff5722'}}>-</Text>
					</TouchableOpacity>
				</View>
	{/* Jarak */}
				<View style={{flexDirection:'row',marginVertical:10}}>
					<TouchableOpacity style={styles.button} onPress={() => this.masukkanAngka(7)}>
						<Text style={styles.number}>7</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={() => this.masukkanAngka(8)}>
						<Text style={styles.number}>8</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={() => this.masukkanAngka(9)}>
						<Text style={styles.number}>9</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={() => this.hitungHasil()}>
						<Text style={{fontSize:24,textAlign:'center',color:'#ff5722'}}>=</Text>
					</TouchableOpacity>
				</View>
	{/* Jarak */}
				<View style={{flexDirection:'row',marginVertical:10}}>
					<TouchableOpacity style={styles.button} onPress={() => this.masukkanAngka(0)}>
							<Text style={{fontSize:24,textAlign:'center',color:'#016A70'}}>0</Text>
					</TouchableOpacity>
				</View>
	{/* Jarak */}
				<View style={{marginTop:30,marginHorizontal:25,alignItems:'flex-end'}}>
					<TouchableOpacity style={{width:100,padding:10,backgroundColor:'#ff5722',borderRadius:10,elevation:5}}
					onPress={() => this.setState({hitung:0})}>
							<Text style={{fontSize:24,textAlign:'center',color:'#F8EEB4',fontWeight:'bold'}}>Clear</Text>
					</TouchableOpacity>
				</View>
			</View>

			</View>
		);
	}
}

export default App;

const styles = StyleSheet.create({
  button:{
    flex:1,
    justifyContent:'center',
    justifyContent:'center',
    padding:10,
	 backgroundColor:'#F3FDE8',
	 marginHorizontal:25,
	 borderRadius:40
  },
  number:{
    color:'#016A70',
    fontSize: 24,
    textAlign:'center',
    // backgroundColor:'silver',
  },
});
