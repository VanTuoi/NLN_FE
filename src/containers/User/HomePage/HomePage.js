import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import HomeFooter from './HomeFooter';
import Banner from './Banner/Banner';
import Filter from "./FilterController/Filter";

import MostOutStanding from './Section/MostOutStanding';
import NewProduct from './Section/NewProduct';
import ZeroPercentInstallmentPayment from './Section/ZeroPercentInstallmentPayment';
import ShockingPricesOnline from './Section/ShockingPricesOnline';
import BigSaleOff from './Section/BigSaleOff';
import CheapForAll from './Section/CheapForAll';
import './HomePage.scss'
import MoonLoader from "react-spinners/MoonLoader";


import MOS_product_1 from '../../../assets/outstanding_products/shopping.webp';


class HomePage extends Component {


    componentDidMount() {
        window.scrollTo(0, 0)
    }
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            listPhone: [
                {
                    giamgia: 'Giảm giá 1000đ',
                    type: 'giamgia',
                    namePhone: 'iPhone 15 128GB',
                    imgPhone: MOS_product_1,
                    code: '1',
                    price: '20.999.000',
                    ratingresult: '',
                    vote: '9999 đánh giá'
                },
                {
                    giamgia: 'Giá rẻ online',
                    type: 'giareonline',
                    namePhone: 'iPhone 15 128GB',
                    imgPhone: MOS_product_1,
                    code: '2',
                    price: '20.999.000',
                    ratingresult: '',
                    vote: '9999 đánh giá'
                },
                {
                    giamgia: 'Mới ra mắt',
                    type: 'moiramat',
                    namePhone: 'iPhone 15 128GB',
                    imgPhone: MOS_product_1,
                    code: '3',
                    price: '20.999.000',
                    ratingresult: '',
                    vote: '9999 đánh giá'
                },
                {
                    giamgia: 'Giảm giá 1000đ',
                    type: 'giamgia',
                    namePhone: 'iPhone 15 128GB',
                    imgPhone: MOS_product_1,
                    code: '4',
                    price: '20.999.000',
                    ratingresult: '',
                    vote: '9999 đánh giá'
                },
                {
                    giamgia: 'Giảm giá 1000đ',
                    type: 'giamgia',
                    namePhone: 'iPhone 15 128GB',
                    imgPhone: MOS_product_1,
                    code: '5',
                    price: '20.999.000',
                    ratingresult: '',
                    vote: '9999 đánh giá'
                },
                {
                    giamgia: 'Giảm giá 1000đ',
                    type: 'giamgia',
                    namePhone: 'iPhone 15 128GB',
                    imgPhone: MOS_product_1,
                    code: '6',
                    price: '20.999.000',
                    ratingresult: '',
                    vote: '9999 đánh giá'
                },

            ],
            isShow: false

        }
        this.refToTop = React.createRef();
    }

    scrollToTop = () => {
        setTimeout(() => {
            this.refToTop.current.scrollIntoView({ behavior: 'smooth' });
        }, 500);
    };
    handleLoading = (isLoading) => {
        this.setState({
            loading: isLoading
        })
    }
    handleChangeSection = (value) => {
        this.setState({
            isShow: value
        })

    }
    render() {
        let { loading, isShow } = this.state
        let settings = {
            dots: false,
            infinite: false,    // cuon tron
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
        };
        return (
            <div className='container_'>
                {loading &&
                    <div className='overlay'>
                        <MoonLoader
                            loading={loading}
                            color="#959c9b"
                            size={100}
                        />
                    </div>
                }
                <div className='homepage-container'>
                    <p ref={this.refToTop}></p>
                    <HomeHeader isShowBanner={true} />
                    <Banner />
                    <Filter />
                    <MostOutStanding listPhone={this.state.listPhone} settings={settings} handleLoading={this.handleLoading} />
                    <NewProduct listPhone={this.state.listPhone} settings={settings} />
                    <ShockingPricesOnline listPhone={this.state.listPhone} settings={settings} />
                    <ZeroPercentInstallmentPayment listPhone={this.state.listPhone} settings={settings} />
                    <BigSaleOff settings={settings} />
                    <CheapForAll settings={settings} />
                    <HomeFooter />
                    <div >
                        <button id='goto-top-page' onClick={this.scrollToTop}><i className='fa fa-arrow-up'></i></button>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
