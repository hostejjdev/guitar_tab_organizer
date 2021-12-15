/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Toolbar from "./Toolbar";
import AddTabButtonDefault from "./AddTabButtonDefault";
import InputForm from "./InputForm";
import { View } from "@aws-amplify/ui-react";
import { DataStore } from '@aws-amplify/datastore';
import { TabModel } from '../models';

export default class GTOFrame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addTabVisible: false,
      song: '',
      artist: '',
      lchecked: false,
      rchecked: false,
      tab: ''
    }

    this.saveTabClick = this.saveTabClick.bind(this);
    this.songNameUpdate = this.songNameUpdate.bind(this);
    this.artistNameUpdate = this.artistNameUpdate.bind(this);
    this.learnedBoxUpdate = this.learnedBoxUpdate.bind(this);
    this.recordedBoxUpdate = this.recordedBoxUpdate.bind(this);
    this.tabFieldUpdate = this.tabFieldUpdate.bind(this);
  }

  addTabClick() {
    this.setState(prevState => ({ addTabVisible: !prevState.addTabVisible }));
  }

  saveTabClick(event) {
    this.setState(prevState => ({ addTabVisible: !prevState.addTabVisible }));
    event.preventDefault();

    DataStore.save(
	new TabModel({
		"songname": this.state.song,
		"artistname": this.state.artist,
		"learned": this.state.lchecked,
		"recorded": this.state.rchecked,
		"tab": this.state.tab
	})
    );

    this.setState({song: ''});
    this.setState({artist: ''});
    this.setState({ lchecked: false})
    this.setState({ rchecked: false})
    this.setState({ tab: ''}); 
  }

  songNameUpdate(event){
    this.setState({song: event.target.value});
  }

  artistNameUpdate(event){
    this.setState({artist: event.target.value});
  }

  learnedBoxUpdate(event){
    this.setState({ lchecked: !this.state.lchecked})
  }

  recordedBoxUpdate(event){
    this.setState({ rchecked: !this.state.rchecked})
  }

  tabFieldUpdate(event){
    this.setState({tab: event.target.value});
  }

render(){
  return (
    <View
      width="2000px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,0)"
      overflow="hidden"
      position="relative"
      height="1400px"
    >
      <Toolbar
        top="0px"
        left="0px"
        position="absolute"
      ></Toolbar>
      <AddTabButtonDefault onClick={() => this.addTabClick()}
        top="25px"
        left="143px"
        position="absolute"
      ></AddTabButtonDefault>
      { this.state.addTabVisible ?
      <InputForm savefunc={this.saveTabClick} songfunc={this.songNameUpdate} artistfunc={this.artistNameUpdate}
        learnedfunc={this.learnedBoxUpdate} recordedfunc={this.recordedBoxUpdate} tabfunc={this.tabFieldUpdate}
        top="100px"
        left="200px"
        position="absolute"
      ></InputForm>
      : null }
    </View>
  );
}
}
