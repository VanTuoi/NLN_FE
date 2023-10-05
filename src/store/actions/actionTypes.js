const actionTypes = Object.freeze({
    //app
    APP_START_UP_COMPLETE: 'APP_START_UP_COMPLETE',
    SET_CONTENT_OF_CONFIRM_MODAL: 'SET_CONTENT_OF_CONFIRM_MODAL',
    CHANGE_LANGUAGE: 'CHANGE_LANGUAGE',

    //user
    ADD_USER_SUCCESS: 'ADD_USER_SUCCESS',
    USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
    USER_LOGIN_FAIL: 'USER_LOGIN_FAIL',
    PROCESS_LOGOUT: 'PROCESS_LOGOUT',
    USER_REGISTER_SUCCESS: 'USER_REGISTER_SUCCESS',
    USER_REGISTER_FAIL: 'USER_REGISTER_FAIL',



    //admin
    ADMIN_LOGIN_SUCCESS: 'ADMIN_LOGIN_SUCCESS',
    ADMIN_LOGIN_FAIL: 'ADMIN_LOGIN_FAIL',


    GET_ROLE_SUCCCESS: 'GET_ROLE_SUCCCESS',     // lấy quyền ng dùng
    GET_ROLE_FAIDED: 'GET_ROLE_FAIDED',

    CREATE_USER_SUCCESS: 'CREATE_USER_SUCCESS', // Tạo ng dùng
    CREATE_USER_FAILDED: 'CREATE_USER_FAILDED',

    EDIT_USER_SUCCESS: 'EDIT_USER_SUCCESS',        // Edit ng dùng
    EDIT_USER_FAILDED: 'EDIT_USER_FAILDED',

    DELETE_USER_SUCCESS: 'DELETE_USER_SUCCESS',     // xóa ng dùng
    DELETE_USER_FAILDED: 'DELETE_USER_FAILDED',

    GET_ALL_USERS_SUCCESS: 'GET_ALL_USERS_SUCCESS',     // lấy tất cả ng dùng
    GET_ALL_USERS_FAILDED: 'GET_ALL_USERS_FAILDED',

    // Managa-overview
    GET_SALES_OVER_TIME_SUCCESS: 'GET_SALES_OVER_TIME_SUCCESS',     // lấy thống kê doanh thu theo gian
    GET_SALES_OVER_TIME_FAILDED: 'GET_SALES_OVER_TIME_FAILDED',

    GET_REVENUE_OVER_TIME_SUCCESS: 'GET_REVENUE_OVER_TIME_SUCCESS', // lấy thông kê....
    GET_REVENUE_OVER_TIME_FAILDED: 'GET_REVENUE_OVER_TIME_FAILDED',


})

export default actionTypes;