

export default function Header() {
    return(

            <>
       <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid ">
    <a className="navbar-brand " href="#">LOGO</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end " id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item ">
          <a className="nav-link nav" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link  nav" href="#">Services</a>
        </li>
        <li className="nav-item  ">
          <a className="nav-link  nav" href="#">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link nav " href="#" >Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

      </>



    )
    
}