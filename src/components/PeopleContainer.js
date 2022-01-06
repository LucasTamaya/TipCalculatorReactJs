import { useState, useEffect } from "react";

const PeopleContainer = () => {

    const [nbPeople, setNbPeople] = useState();

    useEffect(() => {
        console.log("new render")
        if(nbPeople <= 0){
            document.getElementById("people").classList.add("error");
            alert("test")
        }
        else{
            // sinon ne rien changer
        };
    }, [nbPeople]);

    return (
        <div className="people-container">
            <label htmlFor="people">Number of People</label>
            <input type="number" id="people" name="people" placeholder="0" required onChange={(e) => setNbPeople(parseInt(e.target.value))}/>
            {console.log(typeof nbPeople)}
            <p>{nbPeople}</p>
        </div>
    )
}

export default PeopleContainer;