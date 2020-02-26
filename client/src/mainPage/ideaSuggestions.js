import React from 'react';
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

setInterval(() => {
  shuffle(suggestions);
}, 1000);

const SuggestionsList = () => (
  <ul className='listOfSuggestions'>
    {suggestions.map(idea => (
      <li className='singleSuggestion'>
        <div>👋 {idea.option}</div>
      </li>
    ))}
  </ul>
);

export default SuggestionsList;
