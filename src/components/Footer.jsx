import React from 'react'
import { Link } from 'react-router-dom'

// import Gird from './Gird'
// import logo from '../assets/images/Logo-2.png'
import Form from './Form'

const footerAboutLinks = [
  {
    display: "Giới Thiệu",
    path: "/gioi-thieu"
  },
  {
    display: "Liên Hệ",
    path: "/lien-he"
  },
  {
    display: "Tuyển Dụng",
    path: "/tuyen-dung"
  },
  {
    display: "Tin Tức",
    path: "/tin-tuc"
  },
  {
    display: "Hệ thống cửa hàng",
    path: "/he-thong-cua-hang"
  }
]

const footerCustomerLink = [
  {
    display: "Hỗ trợ chọn size",
    path: "/bang-size-chuan"
  },
  {
    display: "Chính sách khách hàng thân thiết",
    path: "/chinh-sach-khach-hang-than-thiet"
  },
  {
    display: "Chính sách đổi/trả",
    path: "/chinh-sach-doi-tra"
  },
  {
    display: "Chính sách bảo mật",
    path: '/chinh-sach-bao-mat'
  },
  {
    display: "Thanh toán, giao nhận",
    path: "/chinh-sach-giao-nhan-hang"
  },
  {
    display: "Chính sách đồng phục",
    path: "/dong-phuc"
  }
]

const Footer = () => {
  return (
    <div className="footer__wrapper">
      <div className="container">
        <div className='footer'>
          <div className="footer__top">
            <div className="footer__top__logo">
              <div className='text__register'>
                  <span>“Đặt sự hài lòng của khách hàng là ưu tiên số 1 trong mọi suy nghĩ hành động của mình” là sứ mệnh, là triết lý, chiến lược.. luôn cùng YOLO tiến bước”</span>
              </div>
              <div className='form__register'>
                <label> Đăng Ký Nhận Thông Tin</label>
                <div className='form-group'>
                  <Form />
                </div>
              </div>
              <div className='social__icon'>
                <a href="https://facebook.com"><i className='bx bxl-facebook-circle'></i></a>
                <a href="https://youtube.com"><i className='bx bxl-youtube' ></i></a>
                <a href="https://twitter.com"><i className='bx bxl-twitter' ></i></a>
                <a href="https://instagram.com"><i className='bx bxl-instagram' ></i></a>
              </div>
            </div>
            <div className="footer__top__menu">
              <div className="footer__menu__left">
                <h6>YoLo</h6>
                <ul>
                  {
                    footerAboutLinks.map((item, index) => (
                      <li key={index}>
                        <Link to={item.path}>
                          <span>{item.display}</span>
                        </Link>
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className="footer__menu__center">
                <h6>Liên Hệ</h6>
                <ul>
                  {
                    footerCustomerLink.map((item, index) => (
                      <li key={index}>
                        <Link to={item.path}>
                          <span>{item.display}</span>
                        </Link>
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className="footer__menu__right">
                <div className="content-contact">
                  <h6>Địa Chỉ</h6>
                  <p className='address'>
                    <i className='bx bx-map' ></i>
                    <span>Địa chỉ: Đường A09 - Phường Cầu Tiến - Thành Phố Tuyên Hóa - Tuyên Hóa</span>
                  </p>
                  <p className='phone-contact'>
                    <i className='bx bx-phone' ></i>
                    <span className='phone-number'>
                      <a href="tel:+0249981524">Liên hệ đặt hàng: 0249981524</a>
                      <a href="tel:+0234156274">Thắc mắc đơn hàng: 0234156274</a>
                      <a href="tel:+18001212">Góp ý khiếu nại: 18001212</a>
                    </span>
                  </p>
                  <p className='email'>
                  <i className='bx bx-envelope' ></i>
                  <a href="mailto:chamsockhachhang@gmail.com">Email: chamsockhachhang@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <div className="footer__bottom__copyright">
              <span className='bx bx-copyright'></span>
              <span className='text'>New Developer ReactJS 2022</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer