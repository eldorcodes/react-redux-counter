import { configureStore, createSlice } from "@reduxjs/toolkit";
/// slice is a state or collection
// user state - user slice 
const userSlice = createSlice({
    name:'User',
    initialState:{
        name:'Adam',
        email:'adam@example.com',
        posts:[]
    },
    reducers:{
        updateName:(state) => {
            state.name = 'John Doe';
            state.email = 'john@doe.ru';
        },
        addPost:(state) => {
            state.posts.push('New Post');
        }
    }
});

console.log('userSlice',userSlice);

export const { updateName, addPost } = userSlice.actions;


const chatSlice = createSlice({
    name:'Chat',
    initialState:{
        sender:'Adam',
        receiver:'John',
        messages:[],
        bookArray:[]
    },
    reducers:{
        sendMessage:(state,action) => {
            console.log('state',state);
            console.log('action',action);
            state.messages.push('Hello');
        },
        getMessages:(state,action) => {
            console.log('aaction',action);
            return state.messages;
        },
        fetchBooks:(state,action) => {
            console.log('state',state);
            console.log('action',action);
            fetch(`https://www.googleapis.com/books/v1/volumes?q=law`)
            .then(res => res.json())
            .then((data) => {
                console.log('book data',data);
                let bookArray = []
                data?.items?.forEach((item) => {
                    bookArray.push(item);
                });
                state.chat.bookArray = bookArray;
            })
            .catch((err) => console.log(err));
        }
    }
});

export const { sendMessage, getMessages, fetchBooks } = chatSlice.actions;

export const MyStore = configureStore({
    reducer:{
        user:userSlice.reducer,
        chat:chatSlice.reducer
    }
});

MyStore.subscribe(() => console.log('MyStore getState', MyStore.getState()));
