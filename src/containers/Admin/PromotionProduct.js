import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PromotionProduct.scss'
class PromotionProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Promotion: {
                listPhonePromotion: [
                    {
                        code: '1',
                    },
                ],
                nameDiscount: '',
                dateBegin: '',
                dateEnd: '',
                percent: '',
            },


            listPhone: [
                {
                    name: 'SamSung',
                    code: '123',
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
                    code: '125',
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
                {
                    name: 'Iphone',
                    code: '126',
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
                {
                    name: 'Iphone',
                    code: '127',
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
                {
                    name: 'Iphone',
                    code: '124',
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
    componentDidMount() {
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
    }
    handleAddNewRow = (code) => {
        console.log('code', code)
        let new_item = {
            code: code,
        };
        this.setState(prevState => {
            const copyState = { ...prevState };
            copyState.Promotion.listPhonePromotion = [...copyState.Promotion.listPhonePromotion, new_item];
            return copyState;
        });
    }
    handleDeleteNewRow = (index) => {
        console.log(index)
        this.setState(prevState => {
            const copyState = { ...prevState };
            copyState.Promotion.listPhonePromotion = prevState.Promotion.listPhonePromotion.filter(item => item.code !== index.code)
            return copyState;
        });
    }
    onChangeInput = (event, id) => {
        this.setState(prevState => {
            const copyState = { ...prevState };
            copyState.Promotion[id] = event.target.value;
            return copyState;
        });
    }
    handleSearch = (event) => {
        this.setState({ search: event.target.value });
    };
    handleSuccess = () => {
        //API
    }
    render() {
        let { listPhone, search, Promotion, nameDiscount, dateBegin, dateEnd, percent } = this.state
        return (
            <>
                <div className='manage-promotion-container'>
                    <div className="text-center" >
                        <div className='title'>
                            Khuyến mãi theo sản phẩm
                        </div>
                    </div>

                    <div className=''>
                        <div className='container'>
                            <div className='row p-1 lable-input'>
                                <div className='col-3'>
                                    <label>Tên khuyến mãi</label>
                                    <input
                                        className='form-control'
                                        type="text"
                                        placeholder="Nhập tên khuyến mãi"
                                        value={nameDiscount}
                                        onChange={(event) => this.onChangeInput(event, 'nameDiscount')}
                                    />
                                </div>
                                <div className='col-2'>
                                    <label>Ngày bắt đầu</label>
                                    <input
                                        className='form-control'
                                        type="Date"
                                        value={dateBegin}
                                        onChange={(event) => this.onChangeInput(event, 'dateBegin')}
                                    />
                                </div>
                                <div className='col-2'>
                                    <label>Ngày kết thúc</label>
                                    <input
                                        className='form-control'
                                        type="Date"
                                        value={dateEnd}
                                        onChange={(event) => this.onChangeInput(event, 'dateEnd')}
                                    />
                                </div>
                                <div className='col-2'>
                                    <label>Phần trăm giảm</label>
                                    <input
                                        className='form-control'
                                        type="number"
                                        placeholder="Phần trăm giảm"
                                        value={percent}
                                        onChange={(event) => this.onChangeInput(event, 'percent')}
                                    />
                                </div>


                                <div className='row'>
                                    <div className='row mt-1 table-edit'>
                                        <div className='title col-12 ml-3 text-left'>Danh sách sản phẩm giảm giá</div>
                                        <table class="table col-5 ml-5">
                                            <thead>
                                                <tr>
                                                    <th className="col-2">STT</th>
                                                    <th className="col-5">Mã sản phẩm</th>
                                                    {/* <th scope="col">Tên</th> */}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {Promotion.listPhonePromotion && Promotion.listPhonePromotion.length > 0 && Promotion.listPhonePromotion.map((item, index) => {
                                                    return (
                                                        <>
                                                            <tr key={index}>
                                                                <th scope="row">
                                                                    <input
                                                                        className='form-control'
                                                                        value={index + 1}
                                                                    >
                                                                    </input>
                                                                </th>
                                                                <td>
                                                                    <input
                                                                        className='form-control'
                                                                        value={item.code}>
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
                                        <div className='col-12'>
                                            <button className="btn ml-5 m-1 btn-warning"
                                                onClick={() => this.handleSuccess()}
                                            >Xác nhận</button>
                                        </div>
                                    </div>
                                </div>



                            </div>
                            <div className='row'>
                                <input
                                    className='col-3 m-3 form-control'
                                    type="text"
                                    placeholder="Nhập sản phẩm cần thêm..."
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

                                                                                style={{ height: '100px' }}
                                                                                className='preview-image'
                                                                                src={item.mainImage} />
                                                                        </div>


                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <input
                                                                    type='number'
                                                                    className='form-control'
                                                                    value={item.price}
                                                                    readOnly
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

                                                                                            >
                                                                                            </input>
                                                                                        </th>
                                                                                        <td>
                                                                                            <input
                                                                                                readOnly
                                                                                                className='form-control'
                                                                                                value={item.capacity}

                                                                                            >
                                                                                            </input></td>
                                                                                        <td>
                                                                                            <input
                                                                                                readOnly
                                                                                                type='number'
                                                                                                className='form-control'
                                                                                                value={item.additionalPrice}
                                                                                            >
                                                                                            </input></td>
                                                                                        <td>
                                                                                            <input
                                                                                                readOnly
                                                                                                type='number'
                                                                                                className='form-control'
                                                                                                value={item.quantity}>
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
                                                                <button className="btn m-1 btn-success"

                                                                    onClick={() => this.handleAddNewRow(item.code)}
                                                                >Thêm</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(PromotionProduct);
