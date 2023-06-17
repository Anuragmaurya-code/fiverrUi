import React, { useState } from 'react'
import './Gigs.scss';
import GigCard from '../../components/gigCard/GigCard.jsx'
import { gigs } from '../../../data.js'
const Gigs = () => {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("sales");
  const reSort=(type)=>{
    setSort(type)
    setOpen(false)
  }
  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">FIVER {" >"} GRAPHIC DESIGN</span>
        <h1>AI Artists</h1>
        <p>
          Explore the boundaries of art and technology with fiver's AI artists
        </p>
        <div className="menu">
          <div className="left">
            <span>Budged</span>
            <input type="text" placeholder='min' />
            <input type="text" placeholder='max' />
            <button>Apply</button>
          </div>
          <div className="right">
            <div className="sortBy">SortBy</div>
            <div className="sortType">{sort==="sales"? "Best Selling" : "Newest"}</div>
            <img src="./img/down.png" alt="" onClick={() => setOpen(!open)} />
            {open && <div className="rightMenu">
              { sort === "sales" ? <span onClick={()=>reSort("createdAt")}>Newest</span>
              :
              <span  onClick={()=>reSort("sales")}>Best Selling</span>}
            </div>}
          </div>
        </div>
        <div className="cards">
          {gigs.map(gig=>(
            <GigCard key={gig.id} item={gig}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gigs
