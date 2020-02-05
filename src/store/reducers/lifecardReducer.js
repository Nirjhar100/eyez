const initState={
    lifecards:[
        {
            id:'1',
            name:'User 1',
            age:'30',
            content:'Example data to fill description and other text content',
            img:'https://pvnbooks.com/storage/settings/pvn-default_author_image.jpg',
        },
        {id:'2', name:'User 2',age:'25', content:'Example data to fill description and other text content',img:'https://pvnbooks.com/storage/settings/pvn-default_author_image.jpg'},
        {id:'3', name:'User 3',age:'45', content:'Example data to fill description and other text content',img:'https://pvnbooks.com/storage/settings/pvn-default_author_image.jpg'},
        {id:'4', name:'User 4',age:'55', content:'Example data to fill description and other text content',img:'https://pvnbooks.com/storage/settings/pvn-default_author_image.jpg'},
        {id:'5', name:'User 5',age:'55', content:'Example data to fill description and other text content',img:'https://pvnbooks.com/storage/settings/pvn-default_author_image.jpg'},
        {id:'6', name:'User 6',age:'55', content:'Example data to fill description and other text content',img:'https://pvnbooks.com/storage/settings/pvn-default_author_image.jpg'},
        {id:'7', name:'User 7',age:'55', content:'Example data to fill description and other text content',img:'https://pvnbooks.com/storage/settings/pvn-default_author_image.jpg'}
    ]
}

const lifecardReducer =(state=initState, action)=>{
    return state;
}

export default lifecardReducer;