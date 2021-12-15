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
export default class GTOFrame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addTabVisible: false,
      song: '',
      artist: '',
      lchecked: true
    }

    this.saveTabClick = this.saveTabClick.bind(this);
    this.songNameUpdate = this.songNameUpdate.bind(this);
    this.artistNameUpdate = this.artistNameUpdate.bind(this);
    this.learnedBoxUpdate = this.learnedBoxUpdate.bind(this);
  }

  addTabClick() {
    this.setState(prevState => ({ addTabVisible: !prevState.addTabVisible }));
  }

  saveTabClick(event) {
    this.setState(prevState => ({ addTabVisible: !prevState.addTabVisible }));
    alert("A song name was submitted: " + this.state.song +  "   artist   " + this.state.artist);
    event.preventDefault();
    this.setState({song: ''});
    this.setState({artist: ''});
  }

  songNameUpdate(event){
    this.setState({song: event.target.value});
  }

  artistNameUpdate(event){
    this.setState({artist: event.target.value});
  }

  learnedBoxUpdate(event){
    alert("clicked the box");
    this.setState({ lchecked: !this.state.lchecked})
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
        learnedfunc={this.learnedBoxUpdate}
        top="100px"
        left="200px"
        position="absolute"
      ></InputForm>
      : null }
    </View>
  );
}
}
