import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ChatType } from '../interfaces/interfaces';
import { ChatInterface } from '../interfaces/interfaces';

const setChatSlice = createSlice({
    name: 'chat',
    initialState: [{type:ChatType.BOT, text:"Hello, Meat Bag"}],
    reducers: {
        setChat(state, action:PayloadAction<ChatInterface>){
            return [...state, action.payload];
        }
    }
});

export const { setChat } = setChatSlice.actions;
export const chat = setChatSlice.reducer;