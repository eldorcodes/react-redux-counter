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
        messages:[]
    },
    reducers:{
        sendMessage:(state) => {
            state.messages.push('Hello');
        },
        getMessages:(state) => {
            return state.messages;
        }
    }
});

export const { sendMessage, getMessages } = chatSlice.actions;

export const MyStore = configureStore({
    reducer:{
        user:userSlice.reducer,
        chat:chatSlice.reducer
    }
});

MyStore.subscribe(() => console.log('MyStore getState', MyStore.getState()));
