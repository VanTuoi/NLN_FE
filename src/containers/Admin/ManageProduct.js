import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from "../../store/actions";
import './ManageUser.scss'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
class ManageProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {

            listPhone: [
                {
                    name: 'SamSung2',
                    code: '',
                    price: 100,
                    mainImage: 'https://cdn.tgdd.vn/Products/Images/42/307556/xiaomi-redmi-12-bac-thumb-600x600.jpg',
                    brandName: '',
                    categoryName: '',
                    detail: {
                        screen: '',
                        CPU: '',
                        RAM: '',
                        frontCamera: '',
                        rearCamera: '',
                        SIM: '',
                        battery: '',
                        charger: '',
                        size: '',
                        weight: '',
                        weight: '',
                        material: '',
                    },
                    option: [
                        {
                            color: "Red",
                            capacity: '128GB',
                            additionalPrice: 10,
                            quantity: 10
                        },
                        {
                            color: "Yellow",
                            capacity: '128GB',
                            additionalPrice: 20,
                            quantity: 10
                        },
                    ]
                },
                {
                    name: 'Iphone',
                    code: '',
                    price: 200,
                    mainImage: 'https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg',
                    brandName: '',
                    categoryName: '',
                    detail: {
                        screen: '',
                        CPU: '',
                        RAM: '',
                        frontCamera: '',
                        rearCamera: '',
                        SIM: '',
                        battery: '',
                        charger: '',
                        size: '',
                        weight: '',
                        weight: '',
                        material: '',
                    },
                    option: [
                        {
                            color: "Yello",
                            capacity: '128GB',
                            additionalPrice: 10,
                            quantity: 10
                        },
                    ]
                },
            ],

            errMessage: '',
            isOpen: false,          // img
            previewImageURL: '',

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
    handleSearch = (event) => {
        this.setState({ search: event.target.value });
    };
    uploadImage = (e) => {
        const { type } = e.target.files[0];
        const file = e.target.files[0];

        if (type === 'image/png' || type === "image/svg" || type === 'image/jpeg' || type === "image/gif" || type === 'image/tiff') {
            // uploadFile
            // setLoading(true);

            // file reader -> to base64 string
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = async () => {
                // call api to upload
                try {
                    const response = await fetch('http://localhost:7070/api/upload-image', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ image: reader.result }),
                    });

                    if (response.ok) {
                        const data = await response.json();
                        return 'https://cdn.tgdd.vn/Products/Images/42/307556/xiaomi-redmi-12-bac-thumb-600x600.jpg';            // url img
                        // setLoading(false);
                    } else {
                        console.log('Upload failed.');
                    }

                } catch (error) {
                    console.log(error);
                }
            }
        } else {
            // setWrongImageType(true);
        }

    }
    handleOnchangeImage = (event, index) => {
        let url = this.uploadImage(event);
        if (url) {
            this.setState(prevState => {
                const copyState = { ...prevState };
                // console.log(copyState.listPhone[index].mainImage)
                copyState.listPhone[index].mainImage = url;
                return copyState;
            });
        }
    }
    onChangeInput = (event, index, id) => {
        this.setState(prevState => {
            const copyState = { ...prevState };
            const [objectKey, nestedKey] = id.split('.');

            if (nestedKey) {
                copyState.listPhone[index][objectKey][nestedKey] = event.target.value;
            } else {
                copyState.listPhone[index][objectKey] = event.target.value;
            }

            return copyState;
        });
    }
    onChangeOption = (event, index, index_2, id) => {
        this.setState(prevState => {
            const copyState = { ...prevState };
            const [objectKey, nestedKey] = id.split('.');

            if (nestedKey) {
                copyState.listPhone[index][objectKey][index_2][nestedKey] = event.target.value;
            } else {
                copyState.listPhone[index][objectKey] = event.target.value;
            }

            return copyState;
        });
    }
    handleUpdatePhone = (item) => {
        // API
        console.log(this.state)
    }
    handleDeletePhone = (item) => {
        // API
    }
    checkValidateInput = () => {
        let isValid = true;

        /// code
        return isValid;
    }
    openPreviewImage = (url) => {
        if (!url) return;
        this.setState({
            previewImageURL: url,
            isOpen: true
        })
    }
    render() {
        let { listPhone, search } = this.state
        return (
            <>
                <div className='manage-product-container'>
                    <div className="text-center" >
                        <div className='title'>
                            Quản lý sản phẩm
                        </div>
                    </div>

                    <div className=''>
                        <div className='container'>
                            <div className='row'>
                                <input
                                    className='col-3 m-3 form-control'
                                    type="text"
                                    placeholder="Nhập sản phẩm cần tìm..."
                                    value={search}
                                    onChange={this.handleSearch}
                                />
                                <table class="col-12 table">
                                    <thead>
                                        <tr className='text-center'>
                                            <th scope="col">STT</th>
                                            <th scope="col">Tên điện thoại</th>
                                            <th scope="col">Hình ảnh</th>
                                            <th scope="col">Giá bán</th>
                                            <th scope="col">Số lượng còn lại</th>
                                            <th scope="col">Hành động</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {listPhone && listPhone.length > 0 && listPhone.map((item, index) => {
                                            return (
                                                <>
                                                    {item.name.indexOf(search) !== -1 ?
                                                        <tr key={index}>
                                                            <th scope="row">{index + 1}</th>
                                                            <th scope="row">
                                                                <input
                                                                    className='form-control'
                                                                    value={item.name}
                                                                    readOnly
                                                                >
                                                                </input>
                                                            </th>
                                                            <td className='text-center'>
                                                                <div className=''>
                                                                    <div className='preview-img-container'>
                                                                        <div className='preview-image'
                                                                        >
                                                                            <img
                                                                                onClick={() => this.openPreviewImage(item.mainImage)}
                                                                                style={{ height: '100px' }}
                                                                                className='preview-image'
                                                                                src={item.mainImage} />
                                                                        </div>

                                                                        {/* <button className="btn-sm m-1 btn-success"
                                                                    onClick={(event) => this.handleOnchangeImage(event, item)}
                                                                >Đổi ảnh</button> */}
                                                                        < label className='label-upload m-2' htmlFor="previewImg">Đổi ảnh <i className='fas fa-exchange-alt'></i></label>
                                                                        <input id="previewImg" type='file' hidden
                                                                            onChange={(event) => this.handleOnchangeImage(event, index)}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <input
                                                                    type='number'
                                                                    className='form-control'
                                                                    value={item.price}
                                                                    onChange={(event) => this.onChangeInput(event, index, 'price')}
                                                                >
                                                                </input></td>
                                                            <td>
                                                                <table class="table">
                                                                    <thead>
                                                                        <tr className='text-center'>
                                                                            <th scope="col">Màu sắc</th>
                                                                            <th scope="col">ROM</th>
                                                                            <th scope="col">Chi phí thêm</th>
                                                                            <th scope="col">Số lượng</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        {item.option && item.option.length > 0 && item.option.map((item, index_2) => {
                                                                            return (
                                                                                <>
                                                                                    <tr key={index_2}>
                                                                                        <th scope="row">
                                                                                            <input
                                                                                                readOnly
                                                                                                className='form-control'
                                                                                                value={item.color}
                                                                                            // onChange={(event) => this.onChangeOption(event, index, index_2, 'option.color')}
                                                                                            >
                                                                                            </input>
                                                                                        </th>
                                                                                        <td>
                                                                                            <input
                                                                                                readOnly
                                                                                                className='form-control'
                                                                                                value={item.capacity}
                                                                                            // onChange={(event) => this.onChangeOption(event, index, index_2, 'option.capacity')}
                                                                                            >
                                                                                            </input></td>
                                                                                        <td>
                                                                                            <input
                                                                                                type='number'
                                                                                                className='form-control'
                                                                                                value={item.additionalPrice}
                                                                                                onChange={(event) => this.onChangeOption(event, index, index_2, 'option.additionalPrice')}>
                                                                                            </input></td>
                                                                                        <td>
                                                                                            <input
                                                                                                type='number'
                                                                                                className='form-control'
                                                                                                value={item.quantity}
                                                                                                onChange={(event) => this.onChangeOption(event, index, index_2, 'option.quantity')}>
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
                                                                <button className="btn m-1 btn-danger"
                                                                    onClick={() => this.handleDeletePhone(item)}
                                                                >Xóa sản phẩm</button>
                                                                <button className="btn m-1 btn-success"
                                                                    onClick={() => this.handleUpdatePhone(item)}
                                                                >Cập nhật</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(ManageProduct);
