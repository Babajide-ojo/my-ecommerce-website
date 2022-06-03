import React from 'react'
import { withRouter } from 'react-router-dom'
import bag from '../../assets/orange-bag.jpg'
import './main-section.styles.scss'

const MainSection = ({ history }) => {
  return (
    <div className="main-section-container">
      <div className="main-section-middle">
        <div className="ms-image">
        <img src={bag} alt="bag" />
        </div>
        <div className="ms-description">
        <h2>Fashionable orange bag for causal and events outing</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged
        </p>
        <button className='button is-black' id='shop-now' onClick={() => history.push('/product/1')}>
          ORANGE BAG
        </button>
      </div>
      </div>
     
    </div>
  )
}

export default withRouter(MainSection)
