export default function Card(props) {
    return (
        <div id="card" className="container">
            <div className="row">
                <div className="col">
                    <div className="card" style={{ width: "18rem" }}>
                        {/* <img src="..." className="card-img-top" alt="..."> */}
                        <div className="card-body">
                            <h5 className="card-title">{props.title} </h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )




}