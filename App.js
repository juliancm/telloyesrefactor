
import React, { Component } from 'react';
import List from './List'
//import './index.css';

function omit(obj, keyToOmit) {
  let {[keyToOmit]: _, ...rest} = obj;
  return rest;
}

class App extends Component {
  static defaultProps = {};

  state = {
    lists: [
      {
        id: '1',
        header: 'First list',
        cardIds: [ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ],
      },
      {
        id: '2',
        header: 'Second list',
        cardIds: ['b', 'c', 'd', 'f', 'h', 'i', 'k'],
      },
      {
        id: '3',
        header: 'Third list',
        cardIds: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm' ],
      },
      {
        id: '4',
        header: 'Fourth list',
        cardIds: [ 'l', 'm' ],
      },
    ],
    allCards: {
      'a': { id: 'a', title: 'First card', content: 'lorem ipsum' },
      'b': { id: 'b', title: 'Second card', content: 'lorem ipsum' },
      'c': { id: 'c', title: 'Third card', content: 'lorem ipsum' },
      'd': { id: 'd', title: 'Fourth card', content: 'lorem ipsum' },
      'e': { id: 'e', title: 'Fifth card', content: 'lorem ipsum' },
      'f': { id: 'f', title: 'Sixth card', content: 'lorem ipsum' },
      'g': { id: 'g', title: 'Seventh card', content: 'lorem ipsum' },
      'h': { id: 'h', title: 'Eighth card', content: 'lorem ipsum' },
      'i': { id: 'i', title: 'Ninth card', content: 'lorem ipsum' },
      'j': { id: 'j', title: 'Tenth card', content: 'lorem ipsum' },
      'k': { id: 'k', title: 'Elovuenth card', content: 'lorem ipsum' },
      'l': { id: 'l', title: 'Twelfth card', content: 'lorem ipsum' },
      'm': { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum' },
    },
  }

// delete card function




handleDeleteCard = (cardId) => {

const { lists, allcards} =this.state // what is happening here?

const newLists = lists.map(list => ({
  ...list,
  cardIds: list.cardIds.filter(id => id !==cardId)
}))




  const newCards = Object.keys(this.state.allCards) //returns array of cards object keys
  const newerCards = newCards.filter(itm => itm !== cardId)
  const newstatewithoutthedeletedcard = omit(this.state.allCards, cardId)

  // need a function to update the reference to the card in the list

  this.setState({
    lists: newLists,
    allCards: newstatewithoutthedeletedcard
  })
}




  render() {
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trellono!</h1>
        </header>
        <div className='App-list'>
          {this.state.lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => this.state.allCards[id])}

              // this is called this way because cardIds is an
              // array of the card ids of the list. and all Cards
              // has the card info when looked up by id,
              // so it is passed into the List item as an array of objects
              // which have all of the list's cards' content and info
              // (since only the card cardIds of the current list
              // (of our enclosing .map) were mapped)

              onDeleteCard={this.handleDeleteCard}

            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;


/* import React, { Component } from 'react';
import List from './List'
//import './index.css';

class App extends Component {
  static defaultProps = {
    store: {
      lists: [],
      allCards: {},
    }
  };

  render() {
    const { store } = this.props
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trellono!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}

              // this is called this way because cardIds is an
              // array of the card ids of the list. and all Cards
              // has the card info when looked up by id,
              // so it is passed into the List item as an array of objects
              // which have all of the list's cards' content and info
              // (since only the card cardIds of the current list
              // (of our enclosing .map) were mapped)

            />
          ))}
        </div>
      </main>
    );
  }
}

export default App; */
