import React from "react";
import { 
     Route, Routes 
} from "react-router-dom";
import Home from "../../views/Home/Home";
import Terminal from "../../views/Terminal/Terminal";

export default ( () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="terminal" element={<Terminal/>}/>
        </Routes>
    )
})