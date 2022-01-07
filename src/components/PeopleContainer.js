const PeopleContainer = ({setNbPeople}) => {

    return (
        <div className="people-container">
            <label htmlFor="people">Number of People</label>
            <input type="tel" id="people" name="people" placeholder="0" required onChange={(e) => setNbPeople(parseFloat(e.target.value))}/>
        </div>
    )
}

export default PeopleContainer;

// const [nbPeople, setNbPeople] = useState();

    // useEffect(() => {
    //     console.log("new render")
    //     if(nbPeople <= 0){
    //         document.getElementById("people").classList.add("error");
    //         alert("test")
    //     }
    //     else{
    //         // sinon ne rien changer
    //     };
    // }, [nbPeople]);