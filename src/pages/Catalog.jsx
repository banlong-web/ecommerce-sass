import React from 'react'
import Helmet from '../components/Helmet'

import Grid from '../components/Grid'
import productData from '../assets/fake-data/product'
import ProductCard from '../components/ProductCard'

import category from '../assets/fake-data/category'
import CheckBox from '../components/CheckBox'

const Catalog = () => {
  return (
    <Helmet title='Sản Phẩm'>
      <div className="catalog_search">
        <input type="search" name="search" id="" placeholder='Nhập sản phẩm cần tìm' />
        <input type="submit" value="Search" />
      </div>
      <div className="catalog">
        <div className="catalog_filter">
            <div className="catalog_filter_title">
              lọc
            </div>
            <div className='catalog_filter_content'>
              {
                category.map((item, index)=> (
                  <div className="catalog_filter_content_item" key={index}>
                    <CheckBox label={item.display}/>
                  </div>
                ))
              }
            </div>
        </div>
        <div className="catalog_content">
          <h2> Danh sách các sản phẩm</h2>
          <Grid
            col={3}
            mdCol={2}
            smCol={1}
            gap={20}
          >
            {productData.getAllProducts().map((item, index) => (
              <ProductCard key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={item.price}
                slug={item.slug}
                symbol={item.symbol}
              >

              </ProductCard>
            ))}
          </Grid>
        </div>
      </div>
    </Helmet>
  )
}

export default Catalog