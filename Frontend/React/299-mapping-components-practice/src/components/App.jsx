import React from "react";
import Term from "./Term";
import emojipedia from "../emojipedia";


function createTerms(term) {
  return (
    <Term 
    key={term.id}
    emoji={term.emoji}
    name={term.name}
    meaning={term.meaning}
    />
  );
}

function App(propt) {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map(createTerms)};
      </dl>
    </div>
  );
}

export default App;
