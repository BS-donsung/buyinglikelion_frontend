import {AsyncRequestInfo, HTTP_METHOD} from "@/util/AjaxRequestInfo";

export const ENDPOINT_OF_SEARCHING_PRODUCT_INFO = AsyncRequestInfo.of(HTTP_METHOD.GET, "/search/product")
export const ENDPOINT_OF_SEARCHING_PRICE_INFO = AsyncRequestInfo.of(HTTP_METHOD.GET, "/search/price")

// "/search/price?current=true"


