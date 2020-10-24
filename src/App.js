import React from "react";
import './App.css';

class App extends React.Component {
  state = {
    title: "Moja tablica notatek",
    noteTitle: '',
    noteText: "",
    notes: []
  }

  handleTitle = (e) => {
    this.setState({
      noteTitle: e.target.value
    })
  }
  handleText = (e) => {
    this.setState({
      noteText: e.target.value
    })
  }
  addNote = () => {
    let title = this.state.noteTitle;

    let text = this.state.noteText;
    const newNote = {
      text: text,
      title: title,
      date: new Date(Date.now()).toLocaleString()
    }
    this.setState({
      notes:[...this.state.notes, newNote]
    })
  }
  render(){
    return (
      <div className="main-box">
        <h2 className="main-box__title">{this.state.title}</h2>
        <div className="main-box__form">
          <div className="main-box__form-item">
            <label htmlFor="" className="main-box__form-title">Tytuł notatki</label>
            <input type="text" className="main-box__form-input" onChange={this.handleTitle} value={this.state.noteTitle}/>
          </div>
          <div className="main-box__form-item">
            <label htmlFor="" className="main-box__form-title"></label>
            <textarea type="text" className="main-box__form-input" onChange={this.handleText} value={this.state.noteText}></textarea>
          </div>
          <div className="main-box__button-box">
            <button onClick={this.addNote}>Dodaj notatke</button>
          </div>
        </div>
        <div className="main-box__notes-box">
          <p>Twoje notatki:</p>
          <div className="notes__box">
            {
              this.state.notes.map((note, i)=>
                <div className="notes__single-note" key={i}>
                  <p>{note.title}</p>
                  <p>{note.text}</p>
                  <p>{note.date}</p>
                </div>
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
