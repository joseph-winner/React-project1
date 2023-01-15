import Journal from "./components/journal";
import data from "./components/data";
import "./index.css";

export default function App(){
    const myData = data.map(places => {
        return(
            <Journal key= {places.id} places = {places} />
        )
        
    })
    return(
        <div className="app-div" >
            <h3 className="app-head" > <i className="fa fa-globe"></i> My Travel Journal</h3>
            {myData} 
        </div> 
    )
}