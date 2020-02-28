import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity
} from 'react-native';

export default class RegForm extends React.Component{
	render(){
		return(
			<View style={styles.regform}>
				
				<Text style={styles.header}>Registration</Text>

				<Text style={ styles.textBox }>Username</Text>
				<TextInput style={ styles.textInput }/>

				<Text style={ styles.textBox }>Password</Text>
				<TextInput style={ styles.textInput } secureTextEntry={true}/>

				<Text style={ styles.textBox }>Email</Text>
				<TextInput style={ styles.textInput }/>

				<Text style={ styles.textBox }>Link Facebook Profile (optional)</Text>
				<TextInput style={ styles.textInput }/>
				
				<TouchableOpacity style={styles.button}>
					<Text style={styles.btntext}>Sign up</Text>
				</TouchableOpacity>
				
			</View>
		);
	}
}

const styles = StyleSheet.create({
	regform:{
		alignSelf: 'stretch',
	},

	header:{
		fontSize: 24,
		paddingBottom: 10,
		marginBottom: 40,
		borderBottomColor: '#199187',
		borderBottomWidth: 1,

	},
	textInput: {
		alignSelf: 'stretch',
		height: 30,
		marginBottom: 20,
		borderBottomColor: '#099187',
		borderBottomWidth: 1,
	},

	textBox: {
		fontSize: 20,
		height: 30,
		marginBottom: 20,
	},

	button: {
		alignSelf: 'stretch',
		alignItems: 'center',
		padding: 20,
		backgroundColor: '#59cbbd',
		marginTop: 30,
	},
	btntext:{
		color: '#fff',
		fontWeight: 'bold',
	}
});