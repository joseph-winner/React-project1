import "../index.css";
export default function Journal(props){
    return(
        <main> 
            <div className="travel-cards">
                <div className="card">
                    <img src={props.places.img} alt="" />
                    <div className="card-data">
                        <p className="location">
                            <i className="fa fa-map-marker"></i> {props.places.location}
                        </p>
                        <h3>{props.places.title}</h3>
                        <p className="dater">
                            {props.places.date}
                        </p>
                        <p className="desc">
                            {props.places.description}
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}