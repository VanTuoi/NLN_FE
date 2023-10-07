import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './MostOutStanding.scss'
import { withRouter } from 'react-router';
import MOS_product_1 from '../../../../assets/outstanding_products/shopping.webp';


import MoonLoader from "react-spinners/MoonLoader";

class MostOutStanding extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    handleAddItemToCart = (id) => {
        alert(id)
        // userInfo.token
        // API
    }

    handleViewDetailProduct = (id) => {
        //product.id
        this.props.history.push(`/home/detail-product/${id}`);          // luuw nut quay ve
    }
    render() {
        // let { listPhone, loading } = this.state
        let settings = this.props.settings;
        let listPhone = this.props.listPhone
        settings.slidesToShow = 5;
        return (
            <div className='section-share'>
                <div className='section-container MostOutStanding'>
                    <div className='section-header'>
                        <span className='title-section title-section-MosTOutStanding'>&#42; Nổi bật nhất &#42;</span>
                        <button className='btn-section'
                        // onClick={() => this.props.handleLoading(true)}
                        >Tất cả sản phẩm</button>
                    </div>
                    <div className='section-body'>

                        <Slider {...settings}>
                            {
                                listPhone && listPhone.length > 0 && listPhone.map((item, index) => {
                                    return (
                                        <>
                                            <div className='section-customize '>
                                                <div className="bg-image ">
                                                    <img alt="" src={item.imgPhone} style={{}} />
                                                </div>
                                                <label className={item.type} ><i className="fas fa-bolt"></i>{item.giamgia}</label>
                                                <h3 className='namePhone' onClick={() => this.handleViewDetailProduct(item.code)}>{item.namePhone}</h3>
                                                <div className='price'>
                                                    <strong>{item.price}&#8363;</strong>
                                                </div>
                                                <div className='ratingresult'>
                                                    <i className='fa fa-star'></i>
                                                    <i className='fa fa-star'></i>
                                                    <i className='fa fa-star'></i>
                                                    <i className='fa fa-star'></i>
                                                    <i className='fa fa-star'></i>
                                                    <span className='vote'>{item.vote}</span>
                                                </div>
                                                <div className='tool-tip-1'>
                                                    <button
                                                        onClick={() => this.handleAddItemToCart(item.code)}
                                                        type='button' className='btn btn-primary add-product' data-toggle="tooltip" title='Thêm vào giỏ hàng' data-trigger="click" data-boundary="window" data-placement="left" >
                                                        +
                                                    </button>
                                                </div>
                                                {/* <div className='section-content'>Sản phẩm  1</div> */}
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </Slider>
                    </div>


                </div >
            </div >
        );
    }
}

const mapStateToProps = state => {
    return {
        userInfo: state.user.userInfo
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MostOutStanding));
