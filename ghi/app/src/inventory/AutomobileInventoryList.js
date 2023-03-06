import React, { useState, useEffect } from "react";


function AutomobileInventoryList() { //functional component AutomobileInventoryList
    const [AutomobileInventory, setAutomobileInventory] = useState([]) //useState hook to define state variable automobileInventory and update function `setAutomobileInventory`
    const getAutomobileInventory = async () => {
        const AutomobileInventoryUrl = `http://localhost:8100/api/automobiles/`; //url is endpoint to fetch data from
        const response = await fetch(shoesUrl); // send a request to the enpoint and waits for the response
        if (response.ok) {
            const listAutomobileInventory = await response.json(); //extract the json data assign ListAutomobileInventory
            setAutomobileInventory(listAutomobileInventory.AutomobileInventory); //updating the automobileInventory state variable
        }

    }
}
