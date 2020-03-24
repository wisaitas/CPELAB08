import React from 'react'
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      <div className="container mt-5">
        <div className="card">
          <div align="center" >
          <img src="https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.0-9/p960x960/70789288_2186972714939775_6397029165173833728_o.jpg?_nc_cat=109&_nc_sid=7aed08&_nc_ohc=YemMYMVvWi8AX9e6w8U&_nc_ht=scontent.fbkk10-1.fna&_nc_tp=6&oh=1969714d68ec2a10d6a2498a9717da5c&oe=5E902C98" width="500" height="500" alt=""/>
          </div>
          <div className="card-body">
            <h5 className="card-title">Developer information</h5>
            <p>Wisaitas Kampanat (610610703)</p>
            <p>This app use Google Firebase as backend.</p>
            <Link to="/">
              <h3>
                <button type="button" className="btn btn-primary">Home</button>
              </h3>
            </Link>
          </div>

        </div>
        
      </div>
      
    </div>
  )
}
