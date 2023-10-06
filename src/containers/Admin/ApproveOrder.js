import React, { Component } from 'react';

import { connect } from 'react-redux';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import TableManageUser from './TableManageUser';
import Select from "react-select"
class ApproveOrder extends Component {


    constructor(props) {
        super(props);
        this.state = {

            codeOrders: '',
            listProduct: [
                { nameProduct: '', codeProduct: '', price: '' },
            ],
            userId: '',
            dateCrate: '',
            dateApproval: '',
            totalPrice: '',
            actions: '',

            listOrders: [],
            listOrdersSelect: [],
            selectedOption: '',
            showAllOrders: false,
        }
    }

    async componentDidMount() {
        this.setState({
            // actions: CRUD_ACTIONS.CREATE
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }
    builDataInputSelect = (inputData) => {
        let result = [];
        let language = this.props.language
        if (inputData && inputData.length > 0) {
            inputData.map((item, index) => {
                let object = {};
                object.label = item.userId;
                object.value = item.codeOrder;
                result.push(object)
            })

        }
        return result
    }

    handleChange = selectedOption => {
        this.setState({
            selectedOption
        })
        this.props.listUsers.map((item, index) => {
            if (item.id === selectedOption.value) {
                this.handleEditUser(item)
                return;
            }
        })
    }
    handleEditOrder = (order) => {
        this.setState({
            codeOrders: order.codeOrders,
            listProduct: order.listProduct,
            userId: order.userId,
            dateCrate: order.dateCrate,
            dateApproval: order.dateApproval,
            totalPrice: order.totalPrice,

            selectedOption: order.codeOrders,
        })
    }
    handleCreateUser = () => {
        // let isValid = this.checkValidateInput();
        // if (!isValid === true) return;
        // if (this.state.actions === CRUD_ACTIONS.CANCEL) {
        //     this.setState({
        //         codeOrders: '',
        //         listProduct: [
        //             { nameProduct: '', codeProduct: '', price: '' },
        //         ],
        //         userId: '',
        //         dateCrate: '',
        //         totalPrice: '',

        //         actions: CRUD_ACTIONS.CANCEL,
        //         selectedOption: ''
        //     })
        // }
        // if (this.state.actions === CRUD_ACTIONS.EDIT) {
        //     // fire redux cancel user
        //     this.props.editUserRedux({
        //         id: this.state.userEditId,
        //         email: this.state.email,
        //         password: this.state.password,
        //         firstName: this.state.firstName,
        //         lastName: this.state.lastName,
        //         address: this.state.address,
        //         phoneNumber: this.state.phoneNumber,
        //         gender: this.state.gender,
        //         avatar: this.state.avatar,
        //     })
        // }


    }
    handleSaveUser = () => {
        // let isValid = this.checkValidateInput();
        // if (!isValid === true) return;
        // if (this.state.actions === CRUD_ACTIONS.CREATE) {
        //     // fire redux create user
        //     this.props.createNewUser({
        //         email: this.state.email,
        //         password: this.state.password,
        //         firstName: this.state.firstName,
        //         lastName: this.state.lastName,
        //         address: this.state.address,
        //         phoneNumber: this.state.phoneNumber,
        //         gender: this.state.gender,
        //         avatar: this.state.avatar,
        //     })
        // }

    }
    handleDeleteUser = () => {
        this.props.deleteUserRedux(this.state.selectedOption.value);
    }
    checkValidateInput = () => {
        let isValid = true;
        // code
        return isValid;
    }
    onChangeInput = (event, id) => {
        let copyState = { ...this.state };
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        })
    }

    handleShowAllUser = () => {
        this.setState({
            showAllUser: !this.state.showAllUser
        })
    }
    render() {
        let selectedOption = this.state.selectedOption;
        let showAllUser = this.state.showAllUser
        let { codeOrders, listProduct, userId, dateCrate, dateApproval, totalPrice } = this.state
        return (
            <div className='user-redux-container mx-5'>
                <div className="text-center" >
                    <div className='title m-4'>
                        Duyệt đơn
                    </div>
                    <table id="TableManageUser">
                        <tbody>
                            <tr>
                                <th className='text-center col-1'>STT</th>
                                <th className='text-center col-2'>Tên chủ đơn</th>
                                <th className='text-center col-1'>Ngày tạo</th>
                                <th className='text-center col-3'>Danh sách sản phẩm</th>
                                <th className='text-center col-1'>Tổng tiền</th>
                                <th className='text-center col-1'>Trạng thái</th>
                                <th className='text-center col-1'>Hành động</th>
                            </tr>
                            <tr key="index">
                                <td>
                                    1
                                </td>
                                <td>Trần Văn An</td>
                                <td>08:23 26/9/2023</td>
                                <td>
                                    <table className='col-12'>
                                        <tbody>
                                            <tr>
                                                <td>Item 1</td>
                                                <td>10</td>
                                            </tr>
                                            <tr>
                                                <td>Item 2</td>
                                                <td>5</td>
                                            </tr>
                                            <tr>
                                                <td>Item 3</td>
                                                <td>8</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                                <td>12.000.000đ</td>
                                <td>
                                    Chưa duyệt
                                </td>
                                <td>
                                    <button

                                        className="btn-tick"><i className="fas fa-check "></i></button>
                                    <button
                                        className="btn-delete"><i className="fas fa-trash"></i></button>
                                </td>

                            </tr>
                            <tr key="index">
                                <td>
                                    1
                                </td>
                                <td>Trần Văn An</td>
                                <td>08:23 26/9/2023</td>
                                <td>
                                    <table className='col-12'>
                                        <tbody>
                                            <tr>
                                                <td>Item 1</td>
                                                <td>10</td>
                                            </tr>
                                            <tr>
                                                <td>Item 2</td>
                                                <td>5</td>
                                            </tr>
                                            <tr>
                                                <td>Item 3</td>
                                                <td>8</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                                <td>12.000.000đ</td>
                                <td>
                                    Chưa duyệt
                                </td>
                                <td>
                                    <button

                                        className="btn-tick"><i className="fas fa-check "></i></button>
                                    <button
                                        className="btn-delete"><i className="fas fa-trash"></i></button>
                                </td>

                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
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
