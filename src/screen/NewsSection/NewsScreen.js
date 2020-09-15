import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import NewsList from '../../components/NewslistView'
import string from '../../commons/string/index'
import { changeDarkMode } from '../../action/ActionContainer';
import { connect } from 'react-redux';


export default class componentName extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          isSwitchOn: this.props.isDark,
          isDataLoad: false,
          NewsArray: [],
          isRefreshing: false
    
        };
      }
    
      componentDidMount() {
        this.getNewsApi()
      }
    
      
      getNewsApi = () => {
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=39b110c000cb4a74b782cf9f8b2d7d36', {
    
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
        }).then((response) => response.json())
          .then((json) => {
            console.log("Success" + json.articles[0].content)
    
            this.setState({
              NewsArray: json.articles,
              isDataLoad: true,
              isRefreshing:false
            })
          })
          .catch((error) => {
            console.error("Error" + error);
          });
      };
    
      handleRefresh() {
        this.setState({isRefreshing: true},() => {this.getNewsApi();});
      }
    
  render() {
    return (
      <View>
      <View style={{ marginTop: 20, backgroundColor: 'lightgray', flex: 1 }}>

       <FlatList
            data={this.state.NewsArray}
            renderItem={({ item, index }) =>
              <NewsList
                title={item.title}
                contentContainerStyle={{ paddingBottom: 10, paddingTop: 8 }}
                subTitle={item.description}
                imageUrl={item.urlToImage}
                mediaName={item.author}
                mediaUrl={item.url}
                onPress={(data) => {
                  this.props.navigation.navigate("Detail",{
                    item: data
                  });
                }}
              />}
            refreshing={this.state.isRefreshing}
            onRefresh={() => this.handleRefresh}
          />
        </View> 
      </View>
    )
  }
}