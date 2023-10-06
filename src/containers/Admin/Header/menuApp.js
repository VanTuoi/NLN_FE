export const adminMenu = [
    { //quan ly nguoi dung
        name: 'Tổng quan',
        menus: [
            {
                name: 'Tổng quan', link: '/admin/overview'
            },
        ]
    },
    { //quan ly nguoi dung
        name: 'Người dùng',
        menus: [
            {
                name: 'Quản lý người dùng', link: '/admin/user-manage'
            },
        ]
    },
    {   // quan ly san pham
        name: 'Sản phẩm',
        menus: [
            {
                name: 'Quản lý sản phẩm', link: '/admin/manage-product'
            },
        ]
    },
    {   // quan ly trang chu
        name: 'Trang chủ',
        menus: [
            {
                name: 'Quản lý quảng cáo', link: '/admin/manage-banner'
            },
            {
                name: 'Quản lý khung sản phẩm', link: '/admin/manage-product-framework'
            }
        ]
    },
    {
        // quan ly khuyem mai
        name: 'Khuyến mãi',
        menus: [
            {
                name: 'Khuyến mãi theo hãng', link: '/admin/promotion-trademark'
            },
            {
                name: 'Khuyến mãi theo sản phẩm', link: '/admin/promotion-product'
            }
        ]
    },
    {
        // quan ly don hang
        name: 'Đơn hàng',
        menus: [
            {
                name: 'Duyệt đơn', link: '/admin/approve-order'
            },
            {
                name: 'Quản lý đơn', link: '/admin/look-up-order'
            }
        ]
    },
    {
        // quan ly nhap hang
        name: 'Nhập hàng',
        menus: [
            {
                name: 'Nhập hàng', link: '/admin/import-goods'
            },
            {
                name: 'Quản lý nhập hàng', link: '/admin/look-up-goods'
            }
        ]
    },
    {
        // quan ly doanh thu
        name: 'Doanh thu',
        menus: [
            {
                name: 'Doanh thu', link: '/admin/sales-statistics'
            }
        ]
    }
];