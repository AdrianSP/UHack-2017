import React, { Component } from "react";
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import Modal from 'react-native-modal'; // 2.4.0
import { Input, Item, Label } from 'native-base';


export default class Homescreen extends Component {

	constructor(props) {
		super(props);
		this.state = {
			modalVisible: false,
			region: {
	            latitude: 25.719244,
	            longitude: -80.279105,
	            latitudeDelta: 0.005,
	            longitudeDelta: 0.005
			},
			markers: [{
				key: 0,
				latlng: {
					latitude: 0,
					longitude: 0
				},
				description: ''
			}],
			currentMessageDesc: ''
		};

		this.click = this.click.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.onPress = this.onPress.bind(this);
		this.onRegionChange = this.onRegionChange.bind(this);
		this.setDesc = this.setDesc.bind(this);
	}

  	closeModal(event) {
  		this.setState({modalVisible: false});
  	}

	  click(event) {
	  	this.setState({modalVisible: true})
	  }

	  onRegionChange(region) {
  		this.setState({ region });
	  }

	  onPress(event) {
	  	var markerHolder = this.state.markers.slice();
	  	var newMarker = {key: this.state.markers.length, latlng: {latitude: this.state.region.latitude, longitude: this.state.region.longitude}, description: this.state.currentMessageDesc};
	  	markerHolder.push(newMarker)
	  	newMarker = null
	  	this.setState({markers: markerHolder});
	  	this.setState({currentMessageDesc: ''});
	  }

	  setDesc(currentMessageDesc) {
	  	this.setState({currentMessageDesc});
	  }

	  render() {
	    return (
	      <View style={styles.container}>
	        <MapView
	          provider={PROVIDER_GOOGLE}
	          initialRegion={{
	            latitude: 25.719244,
	            longitude: -80.279105,
	            latitudeDelta: 0.005,
	            longitudeDelta: 0.005
	          }}
      			region={this.state.region}
      		  onRegionChange={this.onRegionChange}
	          style={styles.container}
	        >
	        {this.state.markers.map(marker => (
			    <Marker
			      coordinate={marker.latlng}
			      title='Anonymous'
			      description={marker.description}
			    />
			  ))}
	        </MapView>
	        <Modal isVisible={this.state.modalVisible} onBackdropPress={this.closeModal} style={styles.bottomModal}>
		        <View style={styles.modalContent}>
		        	<Text> Message</Text>
		      		<TextInput placeholder='...' value={this.state.currentMessageDesc}
		      		multiline={true} maxLength={200} onChangeText={this.setDesc}
		      		style={styles.modalContent}/>
			      	<TouchableOpacity onPress={this.onPress}>
					      <View style={styles.modalButton}>
					        <Text>Drop Pin</Text>
					      </View>
					</TouchableOpacity>
				</View>
	        </Modal>

	      <Button title='Leave Message' onPress={this.click} style={styles.button} />
	      </View>
	    );
	  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalButton: {
    backgroundColor: 'lightblue',
    padding: 12,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  button:{
    position: 'absolute',
    bottom: 0,
  },
});
