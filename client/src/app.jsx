import React, { useState } from "react";

let App = function() {

    const [state, setState] = useState("CLICK ME");

    return <button onClick={() => setState("CLICKED")}>{state}</button>;
}

export default App;