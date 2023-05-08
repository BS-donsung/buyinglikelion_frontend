import {defineStore} from "pinia";
import {WishListService} from "@/service/WishListService";
import { WishItem } from "@/dto/RegisteredProductDTO";

export const useWishListStore =
    defineStore("wishlist", () => {
        const wishService = new WishListService( ( item : WishItem ) => item.id );
        wishService.getQuery()
        return { wishService };
    })