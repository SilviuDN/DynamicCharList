import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent';
import CharComponent from './CharComponent';


class App extends Component {
  state = {
    textLength : '0',
    text: '',
    textToArray: [],
  }

// MAI BINE inputChangeHandler 
  textLengthHandler = (event) => {

    this.setState({textLength: event.target.value.length});
    this.setState({text: event.target.value});
    this.setState({textToArray: event.target.value.split("")});
    console.log(event.target.value.split("") );    
  };

  deleteLetterHandler = (index) => {
    const textToArray = [...this.state.textToArray];
    textToArray.splice(index, 1);
    this.setState( { textToArray: textToArray} );
  }




  render() {

    const style = {
      display: 'inline-flex',
      padding: '16px',
      textAlign: 'center',
      margin: '16px',
      border: '1px solid black',
      backgroundColor: '#b4f7ed'
    };

    const reqStyle = {
      backgroundColor: 'pink',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px 25px'
    };

    let litere = null;

    if( this.state.textLength > 0){
      litere = (
        <ul style = {style}>
          {this.state.textToArray.map( (litera, index) => {

// puteam folosi this.state.text.split("").map( (litera, index) => {

            return <CharComponent 
              litera={litera} 
              click={ () => this.deleteLetterHandler(index)} 
              key = {index}
            />
          })
          }
        </ul>
      )
    }else{
      litere = "Introduceti textul dorit!"
    }


    return (
      <div className="App">
        <ol style = {reqStyle}>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

        <input type="text" onChange={ event => this.textLengthHandler(event) } />
        <p> {this.state.textLength} </p>
        <ValidationComponent textLength={this.state.textLength} />
        {litere}
      </div>
    );
  }
}

export default App;
