let initialState = {
    contactList:[],
    keyword:""
}

// state : 저장해주고 싶은 state를 매개변수로 가져간다.
// action : action에 따라 어떤 실행을 할지 정해준다.
function reducer(state=initialState, action) {
    let {type, payload} = action
    switch(type){
        case "ADD_CONTACT" :
            return {
                ...state, 
                contactList:
                    [...state.contactList, 
                        {   
                            name: payload.name, 
                            phoneNumber: payload.phoneNumber
                        },
                    ],
                };
        case "SEARCH_BY_NAME" :
            return { ...state, keyword: payload.keyword };
        default:
            return {...state};
    }
}


export default reducer