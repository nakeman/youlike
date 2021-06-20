import React, { useState } from "react";
import style1 from './assets/stylesheet/style.css'

let App = function() {

    const [state, setState] = useState("CLICK ME");

    return( <div><label className="style1">Hello!!</label><button onClick={() => setState("CLICKED")}>{state}</button></div>);
}

export default App;