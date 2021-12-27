import React, { Component } from "react";
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, Text, View, FlatList,SafeAreaView, TouchableOpacity,Alert } from "react-native";
import { ListItem, SearchBar, CheckBox } from "react-native-elements";
import filter from "lodash.filter";


let DATA = [
  {
    id: "1",
    name: "Aaron Miles",
    email: "aaron@mailinator.com",
    role: "member"
},
{
    id: "2",
    name: "Aishwarya Naik",
    email: "aishwarya@mailinator.com",
    role: "member"
},
{
    id: "3",
    name: "Arvind Kumar",
    email: "arvind@mailinator.com",
    role: "admin"
},
{
    id: "4",
    name: "Caterina Binotto",
    email: "caterina@mailinator.com",
    role: "member"
},
{
    id: "5",
    name: "Chetan Kumar",
    email: "chetan@mailinator.com",
    role: "member"
},
{
    id: "6",
    name: "Jim McClain",
    email: "jim@mailinator.com",
    role: "member"
},
{
    id: "7",
    name: "Mahaveer Singh",
    email: "mahaveer@mailinator.com",
    role: "member"
},
{
    id: "8",
    name: "Rahul Jain",
    email: "rahul@mailinator.com",
    role: "admin"
},
{
    id: "9",
    name: "Rizan Khan",
    email: "rizan@mailinator.com",
    role: "member"
},
{
    id: "10",
    name: "Sarah Potter",
    email: "sarah@mailinator.com",
    role: "admin"
},
{
    id: "11",
    name: "Keshav Muddaiah",
    email: "keshav@mailinator.com",
    role: "member"
},
{
    id: "12",
    name: "Nita Ramesh",
    email: "nita@mailinator.com",
    role: "member"
},
{
    id: "13",
    name: "Julia Hunstman",
    email: "julia@mailinator.com",
    role: "member"
},
{
    id: "14",
    name: "Juan Alonso",
    email: "juan@mailinator.com",
    role: "admin"
},
{
    id: "15",
    name: "Gabriel Montoya",
    email: "gabriel@mailinator.com",
    role: "admin"
},
{
    id: "16",
    name: "Beatrice Iglesias",
    email: "beatrice@mailinator.com",
    role: "admin"
},
{
    id: "17",
    name: "Sarah Symms",
    email: "sarah.s@mailinator.com",
    role: "admin"
},
{
    id: "18",
    name: "Patrick Pinheiro",
    email: "patrick@mailinator.com",
    role: "admin"
},
{
    id: "19",
    name: "Anand Patel",
    email: "anand@mailinator.com",
    role: "member"
},
{
    id: "20",
    name: "Kishore Kalburgi",
    email: "kishore@mailinator.com",
    role: "member"
},
{
    id: "21",
    name: "Rebecca Norris",
    email: "rebecca@mailinator.com",
    role: "member"
},
{
    id: "22",
    name: "Özgür Başak",
    email: "ozgur@mailinator.com",
    role: "member"
},
{
    id: "23",
    name: "Robin Andersen",
    email: "robin@mailinator.com",
    role: "member"
},
{
    id: "24",
    name: "Nandini Kumar",
    email: "nandini@mailinator.com",
    role: "member"
},
{
    id: "25",
    name: "Nikita Smith",
    email: "nikita@mailinator.com",
    role: "member"
},
{
    id: "26",
    name: "Colton Doe",
    email: "colton@mailinator.com",
    role: "member"
},
{
    id: "27",
    name: "Alain Senna",
    email: "alain@mailinator.com",
    role: "member"
},
{
    id: "28",
    name: "Ashwin Jain",
    email: "ashwin@mailinator.com",
    role: "member"
},
{
    id: "29",
    name: "Seema Bhatt",
    email: "seema@mailinator.com",
    role: "member"
},
{
    id: "30",
    name: "Kayla Scarpinski",
    email: "kayla@mailinator.com",
    role: "member"
},
{
    id: "31",
    name: "Ajay Ghosh",
    email: "ajay@mailinator.com",
    role: "member"
},
{
    id: "32",
    name: "Chris Lindberg",
    email: "chris@mailinator.com",
    role: "member"
},
{
    id: "33",
    name: "Christina Mourujärvi",
    email: "christina@mailinator.com",
    role: "member"
},
{
    id: "34",
    name: "Mikhail Bill",
    email: "mikhail@mailinator.com",
    role: "member"
},
{
    id: "35",
    name: "Eino Göregen",
    email: "eino@mailinator.com",
    role: "member"
},
{
    id: "36",
    name: "Zachariah Johansson",
    email: "zacharaiah@mailinator.com",
    role: "member"
},
{
    id: "37",
    name: "Aimaan Mohammed",
    email: "aimaan@mailinator.com",
    role: "admin"
},
{
    id: "38",
    name: "Aika Tsunoda",
    email: "aika@mailinator.com",
    role: "member"
},
{
    id: "39",
    name: "Kimiko Minamoto",
    email: "kimiko@mailinator.com",
    role: "member"
},
{
    id: "40",
    name: "Alyona Baginskaite",
    email: "alyona@mailinator.com",
    role: "member"
},
{
    id: "41",
    name: "Anirudh Mukherjee",
    email: "anirudh@mailinator.com",
    role: "member"
},
{
    id: "42",
    name: "Alyona Gov",
    email: "alyonagov@mailinator.com",
    role: "member"
},
{
    id: "43",
    name: "Robin Singh",
    email: "robin@mailinator.com",
    role: "member"
},
{
    id: "44",
    name: "Vijay Vasudevan",
    email: "vijayv@mailinator.com",
    role: "member"
},
{
    id: "45",
    name: "Steve Smith",
    email: "steve@mailinator.com",
    role: "member"
},
{
    id: "46",
    name: "Anirudh Banerjee",
    email: "anirudhb@mailinator.com",
    role: "member"
},
];


const Item = ({id, name,email,role }) => {

const handlePress = (id) => {
    const user = DATA.find(cust => {
        return cust.id === id;
    });

    Alert.alert("user Details")
};

const onDelete = (id) => {
    const user = DATA.find(cust => {
        return cust.id === id;
    }); 

    DATA = DATA.filter(cust => {
        return cust.id !== id;
    });
};
  
return (
    <View>
    <CheckBox style={styles.check}/>
	<View style={styles.item}>
    
	<Text style={styles.user}>{name}</Text>
  <Text style={styles.mail}>{email}</Text>
  <Text style={styles.member}>{role.toUpperCase()}</Text>
  <View style={styles.button}>
  <TouchableOpacity onPress={() => handlePress(id)}>
  <FontAwesome name='edit' size={40} color='red'></FontAwesome>
  </TouchableOpacity>
  <TouchableOpacity onPress={() => onDelete(id)}>
  <FontAwesome name='trash' size={40} color='black'></FontAwesome>
  </TouchableOpacity>
  </View>
  
	</View>
    </View>
);
};

const renderItem = ({ item }) => <Item id={item.id} name={item.name} email={item.email} role={item.role}  />;
class App extends Component {
constructor(props) {
	super(props);
	this.state = {
	loading: false,
	data: DATA,
	error: null,
	searchValue: "",
	};
	this.arrayholder = DATA;
}

searchFunction = (text) => {
	const updatedData = this.arrayholder.filter((item) => {
	const item_data = `${item.name.toUpperCase()} ${item.email.toUpperCase()} ${item.role.toUpperCase()}` ;
  
	const text_data = text.toUpperCase();
	return item_data.indexOf(text_data) > -1;
	});
	this.setState({ data: updatedData, searchValue: text });
  
};



render() {
	return (
	<SafeAreaView style={styles.container}>
    <View style={styles.header}>
    <Text style={styles.headerText}>Admin UI</Text>
    </View>
		<SearchBar
		placeholder="Search Here..."
		lightTheme
		round
		value={this.state.searchValue}
		onChangeText={(text) => this.searchFunction(text)}
		autoCorrect={false}
		/>
		<FlatList
		data={this.state.data}
		renderItem={renderItem}
		keyExtractor={(item) => item.id}
		/>
	</SafeAreaView>
	);
}
}

export default App;

const styles = StyleSheet.create({
container: {
	marginTop: 30,
	padding: 2,
},
item: {
	backgroundColor: "#f5f520",
	padding: 20,
	marginVertical: 8,
	marginHorizontal: 16,
  borderRadius:20
},
header:{
  height:60,
  width:'100%',
  backgroundColor:'#4185F4',
  alignItems:'center',
},
headerText:{
  fontSize:24,
  fontWeight:'700',
  lineHeight:32,
  color:'white',
  top:10,
  position:'absolute'
},
user:{
  fontSize:20,
  fontWeight:'600',
  lineHeight:24
},
member:{
  fontSize:16,
  fontWeight:'bold'
},
mail:{
  fontSize:16,
  fontWeight:'600'
},
button:{
  position:'absolute',
  left:330,
  top:20
},
check:{
    
},
});

