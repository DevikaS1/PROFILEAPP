

import React from 'react';
import { View, Text, Image, StyleSheet, StatusBar } from 'react-native';
const cardImg = require("./assets/photo.jpeg");

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <Image source={cardImg} style={styles.avatar} />
      <Text style={styles.name}>Devika S</Text>
      <Text style={styles.jobTitle}>Frontend Developer</Text>

      
      <View style={styles.infoBox}>
        <Text style={styles.infoLabel}>Email</Text>
        <Text style={styles.infoText}>devika@example.com</Text>

        <Text style={styles.infoLabel}>Phone</Text>
        <Text style={styles.infoText}>+91 98765 43210</Text>

        <Text style={styles.infoLabel}>Location</Text>
        <Text style={styles.infoText}>Kerala, India</Text>
      </View>
    </View>
  );
};

export default ProfileScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 100,
    borderWidth: 2,
    borderColor: '#4e9bde',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 15,
  },
  jobTitle: {
    fontSize: 18,
    color: '#777',
    marginBottom: 20,
  },
  infoBox: {
    width: '90%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5, 
    shadowColor: 'green', 
    
  },
  infoLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#555',
    marginTop: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#222',
  },
});
