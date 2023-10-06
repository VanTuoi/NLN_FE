import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from "../../store/actions";
import './ManageUser.scss'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import TableManageUser from './TableManageUser';
import Select from "react-select"
class ManageUser extends Component {

    constructor(props) {
        super(props);
        this.state = {

            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
            phoneNumber: '',
            gender: '',

            previewImageURL: '',
            isOpen: false,          // img

            arrCheck: {             // check isValid
                email: 'Email', password: 'Mật khẩu',
                firstName: 'Tên', lastName: 'Họ',
                phoneNumber: 'Số điện thoại', address: 'Địa chỉ'
            },

            actions: '',

            listUsers: [],
            listUsersSelect: [],
            userEditId: '',
            selectedOption: '',
            showAllUser: false,
        }
    }

    async componentDidMount() {
        this.setState({
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }
    handleOnchangeImage = (event) => {
        let data = event.target.files;
        let file = data[0];
        if (file) {
            let objectUrl = URL.createObjectURL(file)
            this.setState({
                previewImageURL: objectUrl,
                avatar: file
            })
        }
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
    handleEditUser = (user) => {
        this.setState({
            email: user.email,
            password: 'HARDCODE',
            firstName: user.firstName,
            lastName: user.lastName,
            address: user.address,
            phoneNumber: user.phonenumber,
            gender: user.gender,
            avatar: '',
            userEditId: user.id,

            selectedOption: user.id
        })
    }
    handleCreateUser = () => {

    }
    handleSaveUser = () => {
        let isValid = this.checkValidateInput();
        if (!isValid === true) return;
    }
    handleDeleteUser = () => {
    }
    checkValidateInput = () => {

    }
    onChangeInput = (event, id) => {
        let copyState = { ...this.state };
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        })
    }
    openPreviewImage = () => {
        if (!this.state.previewImageURL) return;
        this.setState({
            isOpen: true
        })
    }
    handleShowAllUser = () => {
        this.setState({
            showAllUser: !this.state.showAllUser
        })
    }
    render() {
        let selectedOption = this.state.selectedOption;
        let { email, password, firstName, lastName, phoneNumber, address, gender, avatar } = this.state
        return (
            <div className='user-redux-container'>
                <div className="text-center" ></div>
                <div className='title'>
                    Quản lý khách hàng
                </div>

                <div className='user-body'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-3'>
                                <label>Email</label>
                                <input className='form-control' type='email'
                                    value={email}
                                    onChange={(event) => this.onChangeInput(event, 'email')}
                                />
                            </div>
                            <div className='col-3'>
                                <label>Mật khẩu</label>
                                <input className='form-control' type='password'
                                    value={password}
                                    onChange={(event) => this.onChangeInput(event, 'password')}
                                />
                            </div>
                            <div className='col-3'>
                                <label>Họ</label>
                                <input className='form-control' type='text'
                                    value={firstName}
                                    onChange={(event) => this.onChangeInput(event, 'firstName')}
                                />
                            </div>
                            <div className='col-3'>
                                <label>Tên</label>
                                <input className='form-control' type='text'
                                    value={lastName}
                                    onChange={(event) => this.onChangeInput(event, 'lastName')}
                                />
                            </div>
                            <div className='col-3'>
                                <label>Số điện thoại</label>
                                <input className='form-control' type='text'
                                    onChange={(event) => this.onChangeInput(event, 'phoneNumber')}
                                    value={phoneNumber}
                                />
                            </div>
                            <div className='col-9'>
                                <label>Địa chỉ</label>
                                <input className='form-control' type='text'
                                    onChange={(event) => this.onChangeInput(event, 'address')}
                                    value={address}
                                />
                            </div>
                            <div className='col-3'>
                                <label>Giới tính</label>
                                <select className="form-control"
                                    onChange={(event) => this.onChangeInput(event, 'gender')}
                                    value={gender}
                                >
                                    <option value='male' onClick={(event) => this.onChangeInput(event, 'gender')}>Nam</option>
                                    <option value='female' onClick={(event) => this.onChangeInput(event, 'gender')}>Nữ</option>
                                    <option value='other' onClick={(event) => this.onChangeInput(event, 'gender')}>Khác</option>

                                </select>
                            </div>
                            <div className='col-3'>
                                <label>Ảnh</label>
                                <div className='preview-img-container'>
                                    <input id="previewImg" type='file' hidden
                                        onChange={(event) => this.handleOnchangeImage(event)}
                                    />
                                    <label className='label-upload' htmlFor="previewImg">Tải ảnh <i className='fas fa-upload'></i></label>
                                    <div className='preview-image'
                                        style={{ backgroundImage: `url(${this.state.previewImageURL})` }}
                                        onClick={() => this.openPreviewImage()}
                                    ></div>
                                </div>
                            </div>
                            <div className='col-12 my-3'>
                                <button
                                    class={"btn m-1 btn-success"}
                                    onClick={() => this.handleCreateUser()}
                                >
                                    Tạo mới
                                </button>
                                <button
                                    disabled={selectedOption === '' ? true : false}
                                    className="btn m-1 btn-success"
                                    onClick={() => this.handleSaveUser()}
                                >
                                    Sửa
                                </button>
                                <button
                                    disabled={selectedOption === '' ? true : false}
                                    class="btn m-1 btn-danger"
                                    onClick={(event) => this.handleDeleteUser(event)}
                                >
                                    Xóa
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {
                    this.state.isOpen === true &&
                    <Lightbox
                        mainSrc={this.state.previewImageURL}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                    />
                }
            </div >
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
export default connect(mapStateToProps, mapDispatchToProps)(ManageUser);
