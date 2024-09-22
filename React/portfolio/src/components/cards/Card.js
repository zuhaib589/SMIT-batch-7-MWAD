export default function Card(props) {
    return (
        
        <div id="card" className="container">
            <div className="row">
                <div className="col">
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={props.imageUrl} alt='Project'  className="card-img-top" />
                        <div className="card-body" id="project">
                            <h5 className="card-title"> <a href={props.href} Target="blank">  {props.title} </a></h5>
                            <p className="card-text">{props.desc}</p>
                            
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )




}