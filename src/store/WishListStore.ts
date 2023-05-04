import {defineStore} from "pinia";
import {WishListService} from "@/service/WishListService";
import {WishItemDTO} from "@/dto/RegisteredProductDTO";

export const useWishListStore =
    defineStore("wishlist", () => {
        const wishService = new WishListService( ( item : WishItemDTO ) => item.id );

        return { wishService };
    })