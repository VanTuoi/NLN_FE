import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ImportGoods.scss'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
class ImportGoods extends Component {

    constructor(props) {
        super(props);
        this.state = {

            providerName: '',
            providerLocation: '',
            purchaseName: '',
            totalPrice: 0,
            phone: {
                name: '',
                code: '',
                price: 0,
                mainImage: '',
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
                        color: "",
                        capacity: '',
                        additionalPrice: 0,
                        quantity: 0
                    },
                ]
            },

            errMessage: '',
            isOpen: false,          // img
            previewImageURL: '',
            actions: '',
        }
    }
    async handleAddNewProducts() {
        try {
            fetch('http://localhost:8080/api/v1/', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    providerName: this.state.providerName,
                    providerLocation: this.state.providerLocation,
                    purchaseName: this.state.purchaseName,
                    totalPrice: this.state.totalPrice,
                    phone: this.state.phone,
                })
            }).then(res => {
                return res.json();
            }).then(data => {
                if (data.message) {
                    this.setState({
                        errMessage: data.message,
                    })
                }
            })
        } catch (error) {
            console.log(error);
        }
    }
    async componentDidMount() {
        this.setState({
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.listProducts !== this.props.listProducts) {
            this.setState({

            })
        }
    }
    checkValidateInput = () => {
        let isValid = true;

        return isValid;
    }
    onChangeOption = (event, index, id) => {
        this.setState(prevState => {
            const copyState = { ...prevState };
            console.log(copyState.phone.option[index][id])
            copyState.phone.option[index][id] = event.target.value;
            copyState.totalPrice = this.handleSumtotalPrice()
            return copyState;
        });
        console.log(this.state.phone.option)
    }
    onChangeInput = (event, id) => {

        console.log('r', event.target.value, id);

        this.setState(prevState => {
            const copyState = { ...prevState };
            const [objectKey, nestedKey, subNestedKey] = id.split('.');

            if (subNestedKey) {
                copyState[objectKey][nestedKey][subNestedKey] = event.target.value;
            } else {
                copyState[objectKey][nestedKey] = event.target.value;
            }

            return copyState;
        });
        if (id === 'phone.price') {
            this.handleSumtotalPrice()
        }
    }
    handleOnchangeImage = (event) => {
        let data = event.target.files;
        let file = data[0];
        if (file) {
            let urlImg = this.uploadImage(event)
            // let objectUrl = URL.createObjectURL(file)
            this.setState({
                previewImageURL: urlImg,
                avatar: file
            })
        }
    }
    handleSumtotalPrice = () => {
        let sum = 0;
        this.state.phone.option.map((item, index) => {
            sum += item.additionalPrice * item.quantity
        })
        this.setState(prevState => {
            const copyState = { ...prevState };
            copyState.totalPrice = Number(copyState.phone.price) + sum
            return copyState;
        });
    }
    handleAddNewRow = () => {
        let new_option = {
            color: '',
            capacity: '',
            additionalPrice: 0,
            quantity: 0
        };
        this.setState(prevState => {
            const copyState = { ...prevState };
            copyState.phone.option = [...copyState.phone.option, new_option];
            return copyState;
        });
    }
    handleDeleteNewRow = (index) => {
        console.log(index)
        this.setState(prevState => {
            const copyState = { ...prevState };
            copyState.phone.option = prevState.phone.option.filter(item => item.color !== index.color)
            copyState.totalPrice = this.handleSumtotalPrice()
            return copyState;
        });
    }
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
                        return data;            // url img
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
    openPreviewImage = () => {
        if (!this.state.previewImageURL) return;
        this.setState({
            isOpen: true
        })
    }
    handleShowAllUser = () => {
        this.setState({
            showAllProduct: !this.state.showAllProduct
        })
    }
    render() {
        let { providerName, providerLocation, purchaseName, brandName, totalPrice, previewImageURL, phone
        } = this.state
        return (
            <div className='import-goods-container'>
                <div className="import-goods-header text-center" ></div>
                <div className='title'>
                    Quản lý nhập hàng
                </div>

                <div className='import-goods-body'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-4'>
                                <label>Tên nhà cung cấp</label>
                                <input className='form-control' type='text'
                                    value={providerName}
                                    onChange={(event) => this.onChangeInput(event, 'providerName')}
                                />
                            </div>
                            <div className='col-8'>
                                <label>Địa chỉ nhà cung cấp</label>
                                <input className='form-control' type='text'
                                    value={providerLocation}
                                    onChange={(event) => this.onChangeInput(event, 'providerLocation')}
                                />
                            </div>
                            <div className='col-10'>
                                <label>Nội dung hóa đơn nhập</label>
                                <input className='form-control' type='text'
                                    value={purchaseName}
                                    onChange={(event) => this.onChangeInput(event, 'purchaseName')}
                                />
                            </div>
                            <div className='col-2'>
                                <label>Tổng số tiền</label>
                                <input className='form-control' type='number'
                                    value={totalPrice}
                                    readOnly
                                // onChange={(event) => this.onChangeInput(event, 'totalPrice')}
                                />
                            </div>
                            <div className='col-2'>
                                <label>Tên điện thoại</label>
                                <input className='form-control' type='text'
                                    value={phone.name}
                                    onChange={(event) => this.onChangeInput(event, 'phone.name')}
                                />
                            </div>
                            <div className='col-2'>
                                <label>Giá bán</label>
                                <input className='form-control' type='number'
                                    value={phone.price}
                                    onChange={(event) => this.onChangeInput(event, 'phone.price')}
                                />
                            </div>
                            <div className='col-2'>
                                <label>Màn hình</label>
                                <input className='form-control' type='text'
                                    value={phone.detail.screen}
                                    onChange={(event) => this.onChangeInput(event, 'phone.detail.screen')}
                                />
                            </div>
                            <div className='col-1'>
                                <label>CPU</label>
                                <input className='form-control' type='text'
                                    value={phone.detail.CPU}
                                    onChange={(event) => this.onChangeInput(event, 'phone.detail.CPU')}
                                />
                            </div>
                            <div className='col-1'>
                                <label>RAM</label>
                                <input className='form-control' type='text'
                                    value={phone.detail.RAM}
                                    onChange={(event) => this.onChangeInput(event, 'phone.detail.RAM')}
                                />
                            </div>
                            <div className='col-2'>
                                <label>Camera trước</label>
                                <input className='form-control' type='text'
                                    value={phone.detail.frontCamera}
                                    onChange={(event) => this.onChangeInput(event, 'phone.detail.frontCamera')}
                                />
                            </div>
                            <div className='col-2'>
                                <label>Camera sau</label>
                                <input className='form-control' type='text'
                                    value={phone.detail.rearCamera}
                                    onChange={(event) => this.onChangeInput(event, 'phone.detail.rearCamera')}
                                />
                            </div>
                            <div className='col-1'>
                                <label>SIM</label>
                                <input className='form-control' type='text'
                                    value={phone.detail.SIM}
                                    onChange={(event) => this.onChangeInput(event, 'phone.detail.SIM')}
                                />
                            </div>
                            <div className='col-1'>
                                <label>Pin</label>
                                <input className='form-control' type='text'
                                    value={phone.detail.battery}
                                    onChange={(event) => this.onChangeInput(event, 'phone.detail.battery')}
                                />
                            </div>
                            <div className='col-1'>
                                <label>Xạc</label>
                                <input className='form-control' type='text'
                                    value={phone.detail.charger}
                                    onChange={(event) => this.onChangeInput(event, 'phone.detail.charger')}
                                />
                            </div>
                            <div className='col-2'>
                                <label>Kích thước</label>
                                <input className='form-control' type='text'
                                    value={phone.detail.size}
                                    onChange={(event) => this.onChangeInput(event, 'phone.detail.size')}
                                />
                            </div>
                            <div className='col-2'>
                                <label>Khối lượng</label>
                                <input className='form-control' type='text'
                                    value={phone.detail.weight}
                                    onChange={(event) => this.onChangeInput(event, 'phone.detail.weight')}
                                />
                            </div>
                            <div className='col-2'>
                                <label>Chất liệu</label>
                                <input className='form-control' type='text'
                                    value={phone.detail.material}
                                    onChange={(event) => this.onChangeInput(event, 'phone.detail.material')}
                                />
                            </div>
                            <div className='col-2'>
                                <label>Thương hiệu</label>
                                <input className='form-control' type='text'
                                    value={brandName}
                                    onChange={(event) => this.onChangeInput(event, 'brandName')}
                                />
                            </div>
                            <div className='col-4'>
                                <label>Ảnh sản phẩm</label>
                                <div className='preview-img-container'>
                                    <input id="previewImg" type='file' hidden
                                        onChange={(event) => this.handleOnchangeImage(event)}
                                    />
                                    {previewImageURL === '' ?
                                        < label className='label-upload' htmlFor="previewImg">Tải ảnh <i className='fas fa-upload'></i></label>
                                        :
                                        <label className='label-upload' htmlFor="previewImg">Thay đổi ảnh <i className='fas fa-exchange-alt'></i></label>
                                    }
                                    <div className='preview-image'
                                        style={{ backgroundImage: `url(${this.state.previewImageURL})` }}
                                        onClick={() => this.openPreviewImage()}
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <div className='row mt-1 table-edit'>
                            <div className='col-12 title'>Thông tin bổ sung cấu hình</div>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Màu sắc</th>
                                        <th scope="col">Dung lượng ROM</th>
                                        <th scope="col">Chi phí thêm</th>
                                        <th scope="col">Số lượng</th>
                                        <th scope="col">Hành động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {phone && phone.option.length > 0 && phone.option.map((item, index) => {
                                        return (
                                            <>
                                                <tr key={index}>
                                                    <th scope="row">
                                                        <input
                                                            className='form-control'
                                                            value={item.color}
                                                            onChange={(event) => this.onChangeOption(event, index, 'color')}
                                                        >
                                                        </input>
                                                    </th>
                                                    <td>
                                                        <input
                                                            className='form-control'
                                                            value={item.capacity}
                                                            onChange={(event) => this.onChangeOption(event, index, 'capacity')}>
                                                        </input></td>
                                                    <td>
                                                        <input
                                                            type='number'
                                                            className='form-control'
                                                            value={item.additionalPrice}
                                                            onChange={(event) => this.onChangeOption(event, index, 'additionalPrice')}>
                                                        </input></td>
                                                    <td>
                                                        <input
                                                            type='number'
                                                            className='form-control'
                                                            value={item.quantity}
                                                            onChange={(event) => this.onChangeOption(event, index, 'quantity')}>
                                                        </input></td>
                                                    <td>

                                                        <button className="btn m-1 btn-danger"
                                                            onClick={() => this.handleDeleteNewRow(item)}
                                                        >Xóa</button>
                                                    </td>
                                                </tr>
                                            </>
                                        )
                                    })
                                    }

                                </tbody>
                            </table>
                            <div className='col-12 m-2'>
                                <button className='btn btn-success'
                                    onClick={() => this.handleAddNewRow()}
                                >Thêm mới cấu hình</button>
                            </div>
                        </div>



                        <div className='row'>
                            <div className='col-12 my-3'>
                                <button
                                    className='btn m-1 btn-primary'
                                    onClick={() => this.handleCreateUser()}
                                >Nhập hàng
                                </button>
                                <button
                                    className='btn m-1 btn-danger'
                                    onClick={() => this.handleSaveUser()}
                                >
                                    Hủy
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

export default connect(mapStateToProps, mapDispatchToProps)(ImportGoods);
