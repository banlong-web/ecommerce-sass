import React from 'react'
import Helmet from '../components/Helmet'
import HeroSlider from '../components/HeroSlider'
import Section, {SectionTitle, SectionBody} from '../components/Section'
import Grid from '../components/Grid'
// import Test from '../components/Test'

import heroSliderData from '../assets/fake-data/hero-slider'
import productData from '../assets/fake-data/product'
import ProductCard from '../components/ProductCard'

import banner from '../assets/images/banner.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Helmet title='Trang chủ'>
      {/* hero slider */}
      <HeroSlider 
        data={heroSliderData}
        control={true}
        auto={false}
        timeOut={6000}
      />
      {/* end hero slider */}
      <Section>
        <SectionTitle>
          Top sản phẩm bán chạy trong tuần
        </SectionTitle>
        <SectionBody>
          <Grid
          col={4}
          mdCol={2}
          smCol={1}
          gap={20}
          >
            {
              productData.getProducts(4).map((item, index) => (
                <ProductCard key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={item.price}
                slug={item.slug}
                symbol={item.symbol}
                >

                </ProductCard>
              ))
            }
          </Grid>
        </SectionBody>
      </Section>

      <Section>
        <SectionTitle>
          Sản phẩm mới
        </SectionTitle>
        <SectionBody>
          <Grid
          col={4}
          mdCol={2}
          smCol={1}
          gap={20}
          >
            {
              productData.getProducts(8).map((item, index) => (
                <ProductCard key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={item.price}
                slug={item.slug}
                symbol={item.symbol}
                >

                </ProductCard>
              ))
            }
          </Grid>
        </SectionBody>
      </Section>
      <Section>
        <SectionBody>
          <div className='banner_sale'>
            <Link to="/san-pham">
              <img src={banner} alt="" />
            </Link>
          </div>
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>
          Sản phẩm phổ biến
        </SectionTitle>
        <SectionBody>
          <Grid
          col={4}
          mdCol={2}
          smCol={1}
          gap={20}
          >
            {
              productData.getProducts(12).map((item, index) => (
                <ProductCard key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={item.price}
                slug={item.slug}
                symbol={item.symbol}
                >

                </ProductCard>
              ))
            }
          </Grid>
        </SectionBody>
      </Section>
    </Helmet>
  )
}

export default Home