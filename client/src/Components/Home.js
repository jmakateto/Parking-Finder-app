import React from 'react'
import HomeNavbar from './HomeNavbar'

function Home() {
  return (
    <div>
        <HomeNavbar/>
        <section className='parking-lot'>
            <div className='content'>
                <h1 className='primary-heading'>Welcome to Parking Finder App</h1>
                <p className='primary-text'>The number one parking spot finder! Get a parking spot, quickly, conveniently and safely</p>
                {/* <a href=''>show Parking spaces</a> */}
                <button className='secondary-button'>Show parking spaces</button>
            </div>
        </section>

    </div>
  )
}

export default Home