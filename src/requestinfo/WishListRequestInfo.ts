import {AsyncRequestInfo, HTTP_METHOD} from "@/util/AjaxRequestInfo";

export const ENDPOINT_OF_WISH_SELECT = AsyncRequestInfo.of(HTTP_METHOD.GET, "/wishlist")
export const ENDPOINT_OF_WISH_ADD = AsyncRequestInfo.of(HTTP_METHOD.POST, "/wishlist")
export const ENDPOINT_OF_WISH_UPDATE = AsyncRequestInfo.of(HTTP_METHOD.PUT, "/wishlist")
export const ENDPOINT_OF_WISH_DELETE  = AsyncRequestInfo.of(HTTP_METHOD.DELETE, "/wishlist")

export const ENDPOINT_OF_PRICE_HISTORY = AsyncRequestInfo.of(HTTP_METHOD.GET, "/wishlist/5/price")