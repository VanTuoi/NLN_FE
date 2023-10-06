import React, { Component } from 'react';
import { connect } from 'react-redux';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './NewProduct.scss'
import NP_product1 from '../../../../assets/new_products/shopping (1).webp'
class NewProduct extends Component {

    render() {
        let settings = this.props.settings;
        settings.slidesToShow = 5;
        return (
            <div className='section-share'>
                <div className='section-container NewProduct'>
                    <div className='section-header'>
                        <span className='title-section title-section-NewProduct'>&#42; Sản phẩm mới &#42;</span>
                        <button className='btn-section'>Tất cả sản phẩm</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...settings}>
                            <div className='section-customize'>
                                <div className="bg-image">
                                    <img alt="" src={NP_product1} style={{}} />
                                </div>
                                <label className='moiramat' >Mới ra mắt</label>
                                <h3>iPhone 15 Pro Max 256G Titan Trắng </h3>
                                <div className='price'>
                                    <strong>34.990.000&#8363;</strong>

                                </div>
                                <div className='ratingresult'>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <span>1703 đánh giá</span>
                                </div>
                                <div className='tool-tip-1'>
                                    <button type='button' className='btn btn-primary add-product' data-toggle="tooltip" title='Thêm vào giỏ hàng' data-trigger="click" data-boundary="window" data-placement="left" >
                                        +
                                    </button>
                                </div>
                                {/* <div className='section-content'>Sản phẩm  3</div> */}
                            </div>
                            <div className='section-customize'>
                                <div className="bg-image section-NewProduct">
                                    <img alt="" src={NP_product1} style={{}} />
                                </div>
                                <label className='moiramat' >Mới ra mắt</label>
                                <h3>iPhone 15 Pro Max 256G Titan Trắng </h3>
                                <div className='price'>
                                    <strong>34.990.000&#8363;</strong>

                                </div>
                                <div className='ratingresult'>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <span>1703 đánh giá</span>
                                </div>
                                <div className='tool-tip-1'>
                                    <button type='button' className='btn btn-primary add-product' data-toggle="tooltip" title='Thêm vào giỏ hàng' data-trigger="click" data-boundary="window" data-placement="left" >
                                        +
                                    </button>
                                </div>
                                {/* <div className='section-content'>Sản phẩm  3</div> */}
                            </div>
                            <div className='section-customize'>
                                <div className="bg-image section-NewProduct">
                                    <img alt="" src={NP_product1} style={{}} />
                                </div>
                                <label className='moiramat' >Mới ra mắt</label>
                                <h3>iPhone 15 Pro Max 256G Titan Trắng </h3>
                                <div className='price'>
                                    <strong>34.990.000&#8363;</strong>

                                </div>
                                <div className='ratingresult'>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <span>1703 đánh giá</span>
                                </div>
                                <div className='tool-tip-1'>
                                    <button type='button' className='btn btn-primary add-product' data-toggle="tooltip" title='Thêm vào giỏ hàng' data-trigger="click" data-boundary="window" data-placement="left" >
                                        +
                                    </button>
                                </div>
                                {/* <div className='section-content'>Sản phẩm  3</div> */}
                            </div>
                            <div className='section-customize'>
                                <div className="bg-image section-NewProduct">
                                    <img alt="" src={NP_product1} style={{}} />
                                </div>
                                <label className='moiramat' >Mới ra mắt</label>
                                <h3>iPhone 15 Pro Max 256G Titan Trắng </h3>
                                <div className='price'>
                                    <strong>34.990.000&#8363;</strong>

                                </div>
                                <div className='ratingresult'>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <span>1703 đánh giá</span>
                                </div>
                                <div className='tool-tip-1'>
                                    <button type='button' className='btn btn-primary add-product' data-toggle="tooltip" title='Thêm vào giỏ hàng' data-trigger="click" data-boundary="window" data-placement="left" >
                                        +
                                    </button>
                                </div>
                                {/* <div className='section-content'>Sản phẩm  3</div> */}
                            </div>
                            <div className='section-customize'>
                                <div className="bg-image section-NewProduct">
                                    <img alt="" src={NP_product1} style={{}} />
                                </div>
                                <label className='moiramat' >Mới ra mắt</label>
                                <h3>iPhone 15 Pro Max 256G Titan Trắng </h3>
                                <div className='price'>
                                    <strong>34.990.000&#8363;</strong>

                                </div>
                                <div className='ratingresult'>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <span>1703 đánh giá</span>
                                </div>
                                <div className='tool-tip-1'>
                                    <button type='button' className='btn btn-primary add-product' data-toggle="tooltip" title='Thêm vào giỏ hàng' data-trigger="click" data-boundary="window" data-placement="left" >
                                        +
                                    </button>
                                </div>
                                {/* <div className='section-content'>Sản phẩm  3</div> */}
                            </div>
                            <div className='section-customize'>
                                <div className="bg-image section-NewProduct">
                                    <img alt="" src={NP_product1} style={{}} />
                                </div>
                                <label className='moiramat' >Mới ra mắt</label>
                                <h3>iPhone 15 Pro Max 256G Titan Trắng </h3>
                                <div className='price'>
                                    <strong>34.990.000&#8363;</strong>

                                </div>
                                <div className='ratingresult'>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <span>1703 đánh giá</span>
                                </div>
                                <div className='tool-tip-1'>
                                    <button type='button' className='btn btn-primary add-product' data-toggle="tooltip" title='Thêm vào giỏ hàng' data-trigger="click" data-boundary="window" data-placement="left" >
                                        +
                                    </button>
                                </div>
                                {/* <div className='section-content'>Sản phẩm  3</div> */}
                            </div>
                            <div className='section-customize'>
                                <div className="bg-image section-NewProduct">
                                    <img alt="" src={NP_product1} style={{}} />
                                </div>
                                <label className='moiramat' >Mới ra mắt</label>
                                <h3>iPhone 15 Pro Max 256G Titan Trắng </h3>
                                <div className='price'>
                                    <strong>34.990.000&#8363;</strong>

                                </div>
                                <div className='ratingresult'>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <span>1703 đánh giá</span>
                                </div>
                                <div className='tool-tip-1'>
                                    <button type='button' className='btn btn-primary add-product' data-toggle="tooltip" title='Thêm vào giỏ hàng' data-trigger="click" data-boundary="window" data-placement="left" >
                                        +
                                    </button>
                                </div>
                                {/* <div className='section-content'>Sản phẩm  3</div> */}
                            </div>
                        </Slider>
                    </div>

                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewProduct);
