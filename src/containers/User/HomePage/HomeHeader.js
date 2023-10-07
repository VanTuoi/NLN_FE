import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actions from "../../../store/actions";
import logo from '../../../assets/logo/PhoneZoneLogo.png'
import './HomeHeader.scss'
import Select from "react-select"

class HomeHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: '',
            listProducts: [],
            listProductsSelect: [],
            selectedOption: '',
        }
    }

    async componentDidMount() {
        this.setState({

        })
    }
    componentDidUpdate(prevProps, prevState, snapshot) {

    }
    handleLogin = () => {
        this.props.history.push(`/login`);
    }
    handleClickCart = () => {
        this.props.history.push(`/home/cart`);
    }
    handleClickHome = () => {
        this.props.history.push(`/home/homepage`);
    }
    handleClickInfor = () => {
        this.props.history.push(`/home/infor`);
    }
    handleViewDetailProduct = (product) => {
        //product.id
        this.props.history.push(`/home/detail-product/${1}`);          // luuw nut quay ve
    }
    render() {
        const { isLoggedIn, userInfo, processLogout } = this.props;
        let selectedOption = this.state.selectedOption;
        // console.log(userInfo)
        return (
            <>
                <div className='home-header-container'>
                    <div className='home-header-content group'>
                        <div className='left-content'>
                            <div className='header-logo' onClick={() => this.handleClickHome()}>
                                <img src={logo} style={{ title: 'Trang chủ PhoneZone' }} />
                            </div>
                        </div>
                        <div className='center-content text-center'>
                            <div className='chird-content search-header'>
                                <Select
                                    className='searchTerm'
                                    // className="col-12"
                                    placeholder='Bạn cần tìm gì?'
                                    value={this.state.selectedOption}
                                    onChange={() => this.handleChange()}
                                    options={this.state.listProductsSelect}
                                />
                            </div>
                        </div>
                        <div className='right-content'>
                            <div className='chird-content text-center' onClick={() => this.handleClickInfor()}>
                                <div className='account-order ' >
                                    &nbsp;Tài khoản &#38; &nbsp;&nbsp;đơn hàng
                                </div>
                            </div>
                            <div className='chird-content'>
                                <div className='text-center' onClick={() => this.handleClickCart()}>
                                    <i className='fa fa-shopping-cart'></i>
                                    <span>Giỏ hàng</span>
                                </div>
                            </div>
                            {/* bổ sung login + logout*/}
                            {
                                isLoggedIn !== true ?
                                    <div className='btn-login' onClick={() => this.handleLogin()}>Đăng nhập </div>
                                    :
                                    <div className="btn btn-logout" onClick={processLogout}>
                                        <i className="fas fa-sign-out-alt"></i>
                                    </div>
                            }
                        </div>
                    </div>


                </div>
            </>
        );
    }

}

const mapStateToProps = state => {
    return {
        userInfo: state.user.userInfo,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processLogout: () => dispatch(actions.processLogout()),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeHeader));
