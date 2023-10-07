import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from "../../store/actions";
import './ManageUser.scss'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
class ApproveOrder extends Component {

    constructor(props) {
        super(props);
        this.state = {

            listOrder: [
                {
                    name: 'Trần Văn A',
                    sdt: '01356666',
                    date: '10/6/2023 10:30',
                    totalPrice: 200,
                    state: 'Chờ duyệt',
                    phone: [
                        {
                            name: 'SamSung',
                            code: '123',
                            color: 'Red',
                            price: 100,
                        },
                        {
                            name: 'SamSung',
                            code: '123',
                            color: 'Red',
                            price: 100,
                        },
                    ]
                },
                {
                    name: 'Trần Văn B',
                    sdt: '013566669',
                    date: '10/6/2023 10:30',
                    totalPrice: 100,
                    state: 'Chờ duyệt',
                    phone: [
                        {
                            name: 'SamSung',
                            code: '123',
                            color: 'Red',
                            price: 100,
                        },
                        {
                            name: 'SamSung',
                            code: '123',
                            color: 'Red',
                            price: 100,
                        },
                    ]
                },

            ],

            errMessage: '',
            search: '',
        }
    }

    async componentDidMount() {
        // API
        this.setState({

        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }
    handleAcceptOrder = () => {

    }
    handleAcceptOrder = (code) => {

        // API
    }
    handleRefuseOrder = (code) => {
        //API

    }
    handleSearch = (event) => {
        this.setState({ search: event.target.value });
    };

    render() {
        let { listOrder, search } = this.state
        return (
            <>
                <div className='manage-product-container'>
                    <div className="text-center" >
                        <div className='title'>
                            Duyệt đơn hàng
                        </div>
                    </div>

                    <div className=''>
                        <div className='container'>
                            <div className='row'>
                                <input
                                    className='col-3 m-3 form-control'
                                    type="text"
                                    placeholder="Nhập sđt đơn cần tìm..."
                                    value={search}
                                    onChange={this.handleSearch}
                                />
                                <table class="col-12 table">
                                    <thead>
                                        <tr className='text-center'>
                                            <th scope="col">STT</th>
                                            <th scope="col">Tên chủ đơn</th>
                                            <th scope="col">SĐT</th>
                                            <th scope="col">Ngày mua</th>
                                            <th scope="col">Tổng tiền</th>
                                            <th scope="col">Chi tiết</th>
                                            <th scope="col" className='col-1'>Trạng thái</th>
                                            <th scope="col">Hành động</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {listOrder && listOrder.length > 0 && listOrder.map((item, index) => {
                                            return (
                                                <>
                                                    {item.sdt.indexOf(search) !== -1 ?
                                                        <tr key={index}>
                                                            <th scope="row" >{index + 1}</th>
                                                            <th scope="row">
                                                                <input
                                                                    className='form-control'
                                                                    value={item.name}
                                                                    readOnly
                                                                >
                                                                </input>
                                                            </th>
                                                            <td>
                                                                <input
                                                                    type='phone'
                                                                    className='form-control'
                                                                    value={item.sdt}
                                                                    readOnly
                                                                >
                                                                </input></td>
                                                            <td>
                                                                <input
                                                                    type='text'
                                                                    className='form-control'
                                                                    value={item.date}
                                                                    readOnly
                                                                >
                                                                </input></td>
                                                            <td>
                                                                <input
                                                                    type='text'
                                                                    className='form-control'
                                                                    value={item.totalPrice}
                                                                    readOnly
                                                                >
                                                                </input></td>
                                                            <td>
                                                                <table class="table">
                                                                    <thead>
                                                                        <tr className='text-center'>
                                                                            <th className='col-1' scope="col">STT</th>
                                                                            <th scope="col">Tên</th>
                                                                            <th scope="col">Mã SP</th>
                                                                            <th scope="col">Màu</th>
                                                                            <th scope="col">Giá</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        {item.phone && item.phone.length > 0 && item.phone.map((item, index_2) => {
                                                                            return (
                                                                                <>
                                                                                    <tr key={index_2}>
                                                                                        <th scope="row">
                                                                                            {index_2 + 1}
                                                                                        </th>
                                                                                        <td>
                                                                                            <input
                                                                                                readOnly
                                                                                                className='form-control'
                                                                                                value={item.name}
                                                                                            >
                                                                                            </input></td>
                                                                                        <td>
                                                                                            <input
                                                                                                readOnly
                                                                                                className='form-control'
                                                                                                value={item.code}
                                                                                            >
                                                                                            </input></td>
                                                                                        <td>
                                                                                            <input
                                                                                                readOnly
                                                                                                type='text'
                                                                                                className='form-control'
                                                                                                value={item.color}
                                                                                            >
                                                                                            </input></td>
                                                                                        <td>
                                                                                            <input
                                                                                                readOnly
                                                                                                type='number'
                                                                                                className='form-control'
                                                                                                value={item.price}
                                                                                            >
                                                                                            </input></td>
                                                                                    </tr>

                                                                                </>
                                                                            )
                                                                        })
                                                                        }

                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                            <td>
                                                                {item.state}
                                                            </td>
                                                            <td>
                                                                <button className="btn m-1 btn-success"
                                                                    onClick={() => this.handleAcceptOrder(item.sdt)}
                                                                >Duyệt</button>
                                                                <button className="btn m-1 btn-warning"
                                                                    onClick={() => this.handleRefuseOrder(item)}
                                                                >Xóa </button>
                                                            </td>
                                                        </tr >
                                                        :
                                                        <></>
                                                    }
                                                </>
                                            )
                                        })
                                        }
                                    </tbody>
                                </table >
                            </div >
                        </div >
                    </div >

                    {
                        this.state.isOpen === true &&
                        <Lightbox
                            mainSrc={this.state.previewImageURL}
                            onCloseRequest={() => this.setState({ isOpen: false })}
                        />
                    }
                </div >
            </>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(ApproveOrder);
