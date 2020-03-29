import React, {Component} from 'react';
import shuffle from 'shuffle-array';

const suggestions = [
  {option: "Romance"
  },
  {option: "Warzone"
  },
  {option: "Twist moment"
  },
  {option: "Betrayal"
  },
  {option: "Moment of truth"
  },
  {option: "Befriend"
  },
  {option: "Coming home"
  },
  {option: "Discover"
  },
  {option: "Ambush"
  },
  {option: "Murdered"
  },
  {option: "Suspense"
  },
  {option: "Crossroad"
  },
  {option: "Spying"
  },
  {option: "Following Clues"
  },
  {option: "Loss"
  },
  {option: "Bizarre"
  },
  {option: "Disease /Virus /Ravage"
  },
  {option: "Family Dispute"
  },
];

class SuggestionsList extends Component {
  state = {
    suggestions: [...suggestions]
  }

   listHandleClick() {
     setTimeout(() => {
         shuffle(suggestions);
         this.setState({suggestions: [...suggestions]});
       }, 200);
  };
  // componentDidMount(){
  //   setInterval(() => {
  //     shuffle(suggestions);
  //     this.setState({suggestions: [...suggestions]});
  //   }, 10000);
  // }
  render(){
    return (
      <section className='ideaSuggestionsBar'>
      <div className='boxOfSuggestions'>
        <button className='ideaBar-btn draw-border' onClick={() => this.listHandleClick()} >👉Randomize Ideas👈</button>
      </div>
      <ul className='listOfSuggestions'>
       {suggestions.map(idea => (
         <li className='singleSuggestion'>
           <div>👋 {idea.option}</div>
         </li>
       ))}
     </ul>
     </section>
   );
  }
}
// var counter = 0;
// var i = setInterval(function() {
//   shuffle(suggestions);
//   counter++;
//   if(counter === 5){
//     clearInterval(i);
//   }
// }, 1000);
// setInterval(() => {
//   shuffle(suggestions);
// }, 1000);
//
// const SuggestionsList = () => (
//   <ul className='listOfSuggestions'>
//     {suggestions.map(idea => (
//       <li className='singleSuggestion'>
//         <div>👋 {idea.option}</div>
//       </li>
//     ))}
//   </ul>
// );

export default SuggestionsList;
