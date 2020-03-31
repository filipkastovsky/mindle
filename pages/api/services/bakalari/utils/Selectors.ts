export enum LoginSelectors {
    username = '#username',
    password = '#password',
    loginBtn = '#loginButton',
}

export enum KomensSelectors {
    messageListItem = '#message_list_content ul li',
    senderDiv = '.message_detail_header_sender div:nth-child(2)', //! nth-child starts from 1
    dateTd = '.message_detail_header_date',
    bodyDiv = '.message_detail_body',
}
