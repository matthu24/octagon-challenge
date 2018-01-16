import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
export default () => {
    return(
      <div>
        <div className='nav-bar'>
          <div className="left-nav">
            <Link to = '/'>
              <img className="logo" src="https://s3.us-east-2.amazonaws.com/octagonchallenge/logo.png"/>

            </Link>
            <Link to="/form" className="form"> Form </Link>
            <Link to="/data" className="data"> Data </Link>


          </div>
        </div>

        <div className='barrier'>
          Providing leadership in understanding the passions of today's fans.
        </div>

      </div>
    )
}
