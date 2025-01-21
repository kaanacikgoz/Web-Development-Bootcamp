import React from "react";

function Term(propt) {
    return (
            <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              {propt.emoji}
            </span>
            <span>{propt.name}</span>
          </dt>
          <dd>
            {propt.meaning}
          </dd>
        </div>
    );
}

export default Term;