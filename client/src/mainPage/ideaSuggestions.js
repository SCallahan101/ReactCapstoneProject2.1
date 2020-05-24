import React, {Component} from 'react';
import shuffle from 'shuffle-array';

const suggestions = [
  {id: '1A', option: "Romance"
  },
  {id: '2A', option: "Warzone"
  },
  {id: '3A', option: "Twist moment"
  },
  {id: '4A',option: "Betrayal"
  },
  {id: '5A', option: "Moment of truth"
  },
  {id: '6A', option: "Befriend"
  },
  {id: '7A', option: "Coming home"
  },
  {id: '8A', option: "Discover"
  },
  {id: '9A', option: "Ambush"
  },
  {id: '10A', option: "Murdered"
  },
  {id: '11A', option: "Suspense"
  },
  {id: '12A', option: "Crossroad"
  },
  {id: '13A', option: "Spying"
  },
  {id: '14A', option: "Following Clues"
  },
  {id: '15A', option: "Loss"
  },
  {id: '16A', option: "Bizarre"
  },
  {id: '17A', option: "Disease /Virus /Ravage"
  },
  {id: '18A', option: "Family Dispute"
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

  render(){
    return (
      <div>
        <div className='boxOfSuggestions'>
          <button className='ideaBar-btn draw-border' onClick={() => this.listHandleClick()} >Click for Theme Assist</button>
        </div>
        <ul className='listOfSuggestions'>
         {suggestions.map(idea => (
           <li className='singleSuggestion' key={idea.id}>
             <div>👋 {idea.option}</div>
           </li>
         ))}
       </ul>
     </div>
   );
  }
}

export default SuggestionsList;
