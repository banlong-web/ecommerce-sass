import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import numberWithCommas from '../ultils/numberWithCommas'
const ProductCard = props => {
    return (
        <div className='product_card'>
            <Link to={`/san-pham/${props.slug}`}>
                <div className='product_card_img'>
                    <img src={props.img01} alt="" />
                    <img src={props.img02} alt="" />
                </div>
                <div className='product_card_info'>
                    <div className="product_card_info_name">
                        <h3>{props.name}</h3>
                    </div>
                    <div className="product_card_info_price">
                        {numberWithCommas(props.price)} {props.symbol}
                    </div>
                </div>
            </Link>
            <div className="product_card_add_to_cart">
                <button>
                    <span className='add_to_cart'>Chọn Mua</span>
                    <span className='bx bx-cart'></span>
                </button>
            </div>
        </div>
    )
}

ProductCard.propTypes = {
    img01: PropTypes.string.isRequired,
    img02: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired
}

export default ProductCard