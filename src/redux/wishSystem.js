import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

let wishlistData = [];
try {
    const storedWishlist = localStorage.getItem('wishlistItems');
    wishlistData = storedWishlist ? JSON.parse(storedWishlist) : [];
} catch (error) {
    console.error('Error parsing wishlist data from localStorage:', error);
    wishlistData = [];
}

const initialState = {
    wishlistItems: wishlistData,
};

const wishSystem = createSlice({
    name: "wishlists",
    initialState,
    reducers: {

        addWish: (state, action) => {
            if (!state.wishlistItems) {
                state.wishlistItems = [];
            }
        
            const existsItemIndex = state.wishlistItems?.findIndex(item => item.id === action.payload?.id);
        
            if (existsItemIndex >= 0) {
                Swal.fire({
                    title: "This product already exists in your favorite List",
                    icon: "error",
                    draggable: true
                });
            } else {
                const buildWishlist = { ...action.payload, isFavourite: true };
                state.wishlistItems.push(buildWishlist);
                localStorage.setItem("wishlistItems", JSON.stringify(state.wishlistItems));
        
                Swal.fire({
                    title: "Add to favorite Confirm!",
                    icon: "success",
                    draggable: true
                });
            }
        },
        


        removeWish: (state, action) => {
            const existsItemIndex = state.wishlistItems?.findIndex(item => item.id === action.payload?.id);
            if (existsItemIndex >= 0) {
                state.wishlistItems.splice(existsItemIndex, 1);
                localStorage.setItem("wishlistItems", JSON.stringify(state.wishlistItems));
                Swal.fire({
                    title: "Item removed from favorite list!",
                    icon: "success",
                    draggable: true
                });
            } else {
                Swal.fire({
                    title: "Item not found in the favorite list!",
                    icon: "error",
                    draggable: true
                });
            }
        }
        

    },
});


export const { addWish,removeWish } = wishSystem.actions;
export default wishSystem.reducer;
