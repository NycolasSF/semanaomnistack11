import {  StyleSheet } from "react-native";
import Constans from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constans.statusBarHeight + 20
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  headerText: {
    fontSize: 15,
    color: "#737380"
  },

  headerTextBold: {
    fontWeight: "bold"
  },

  title: {
    fontSize: 30,
    marginBottom: 16,
    marginTop: 48,
    color: "#13131a",
    fontWeight: "bold"
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#737380"
  },

  incidentList: {
    marginTop: 32
  },

  incidentProperty: {
    fontSize: 14,
    color: "#41414d",
    fontWeight: 'bold'
  },

  incident:{
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 16
  },

  incidentValue: {
      marginTop: 8,
      fontSize: 15,
      marginBottom: 24,
      color: '#737380'
  },

  detailButton: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
  },

  detailButtonText:{
      color: '#e02041',
      fontSize: 15,
      fontWeight: 'bold'
  }
});