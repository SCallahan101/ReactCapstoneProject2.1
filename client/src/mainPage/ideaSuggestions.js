import React from 'react';

class SuggestionsList extends React.Component

constructor(props){
   super(props);
   this.state = {
      suggestions: [
     {option: "Romance"},
     {option: "Warzone"},
     {option: "Twist moment"},
     {option: "Betrayal"},
     {option: "Moment of truth"},
     {option: "Befriend"},
     {option: "Coming home"},
     {option: "Discover"},
     {option: "Ambush"},
     {option: "Murdered"},
     {option: "Suspense"},
     {option: "Crossroad"},
     {option: "Spying"},
     {option: "Following Clues"},
     {option: "Loss"},
     {option: "Bizarre"},
     {option: "Disease /Virus /Ravage"},
     {option: "Family Dispute"},
     ],
    shuffled: false,
   }
}

shuffle = (array) => {
  let arrayClone = JSON.parse(JSON.stringify(array))
  arrayClone.sort(() => Math.random() - 0.5);
  this.setState({
     suggestions: arrayClone
  })
}

componentWillMount(){
    setInterval(() => {
      this.shuffle(suggestions);
}, 1000);
}

render(){
   
  return(
    <ul className='listOfSuggestions'>
    {suggestions.map(idea => (
      <li className='singleSuggestion'>
        <div>👋 {idea.option}</div>
      </li>
    ))}
  </ul>
  )
}

export default SuggestionsList;
