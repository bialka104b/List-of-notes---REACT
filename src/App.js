import React from "react";
import './App.css';

class App extends React.Component {
  state = {
    title: "Twoje notatki",
    noteTitle: '', //tytuł notatki
    noteText: '', //tekst notatki
    notes: []//tablica do przechowywania notatek
  }

  handleTitle = (e) => {//pobieramy nasze wprowadzane dane "e" - na zdarzeniu event
  //i wywołujemy metode set state aktualizując tytuł dodawanej notatki
    this.setState({  noteTitle: e.target.value  })
  }

  handleText = (e) => {//pobieramy nasze wprowadzane dane "e" - na zdarzeniu event
    //i wywołujemy metode set state aktualizując tekst dodawanej notatki
    this.setState({  noteText: e.target.value  })
  }

  addNote = () => {
    let title = this.state.noteTitle;
    let text = this.state.noteText;
    const newNote = { //tworzenie obiektu z notatką
      text: text,
      title: title,
      date: new Date(Date.now()).toLocaleString()//obecną date zamieniamy na string
    }
    // ...this.state.notes wypakowanie z tablicy notes wszystkic notatek które sie tam znajdują
    this.setState({  notes: [...this.state.notes, newNote]  }) // do naszej tablicy notatek dodajemy nowo utworzoną notatkę do starej tablicy notes
  }
  removeNote = (index) => {
    let newNotesy = this.state.notes;
    //let newNotesy = this.state.notes.slice();//moje
    newNotesy.splice(index, 1);
    this.setState({
      notes: newNotesy
    });
  }
  render(){
    return (
      <div className="notepad">
        <h2 className="notepad__title">{this.state.title}</h2>
        <div className="notepad__form">
          <div className="notepad__form-item">
            <label className="notepad__form-title">Tytuł notatki: </label>
            <input 
              type="text" 
              className="notepad__form-input" 
              onChange={this.handleTitle} //wywołanie metody
              //value potrzebne do przechowywania wprowadzanej wartości i aktualizowania jej
              value={this.state.noteTitle}
            />
          </div>

          <div className="notepad__form-item">
            <label className="notepad__form-title">Tekst notatki: </label>
            <textarea 
              type="text" 
              rows="5" //wysokość text area na 5 linijek
              className="notepad__form-input" 
              onChange={this.handleText} 
              value={this.state.noteText}>
            </textarea>
          </div>

          <div className="notepad__button-box">
            <button onClick={this.addNote}>Dodaj notatke</button>
          </div>
        </div>

        <div className="notepad__notes-box notes">
          <p>Twoje notatki:</p>
          <div className="notes__box">
            { //iterujemy sie po naszej tablicy notes[] z notatkami
              this.state.notes.map((note, i)=> //(notatka, indeks po to by mieć klucz tej notatki)
                <div className="notes__one-note" key={i}>
                  <button onClick={() => this.removeNote(i)}>Usuń notatke</button>
                  {/* <button onClick={this.removeNote.bind(this)}>Usuń notatke</button> */}
                  {/* odwołujemy się przez note.title do obiektu newNote z wartością tytułu, textu i daty która w metodzie addNote zostaje przypisana*/}
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

// var Main = React.createClass({
//   getInitialState: function(){
//     return {
//       allUsers: []
//     }
//   },
//   removeUser: function(index){
//     console.log('index to remove at: ', index); //Gives correct index
//     var newUsersArray = this.state.allUsers.slice();
//     newUsersArray.splice(index, 1);
//     this.setState({
//       allUsers: newUsersArray
//     });
//   },
//   render: function(){
//     return (
//       <div>
//         <AddUser addNew={this.addUser} index={this.state.allUsers.length} />
//         <UserList users={this.state.allUsers} edit={this.editUser} remove={this.removeUser} />
//       </div>
//   )
//   }
// })
export default App;
