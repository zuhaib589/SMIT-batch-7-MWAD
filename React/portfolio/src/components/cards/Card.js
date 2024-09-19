export default function Card(props) {
    return (
        
        <div id="card" className="container">
            <div className="row">
                <div className="col">
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={props.imageUrl} alt='Project'  className="card-img-top" />
                        <div className="card-body" id="project">
                            <h5 className="card-title">{props.title} {props.href} </h5>
                            <p className="card-text">{props.desc}</p>
                            
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )




}