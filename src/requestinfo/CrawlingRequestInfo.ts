import {AsyncRequestInfo, HTTP_METHOD} from "@/util/AjaxRequestInfo";

export const ENDPOINT_OF_CRAWLING_REQUEST_BY_URL = AsyncRequestInfo.of(HTTP_METHOD.GET, "/search/product")
export const ENDPOINT_OF_CRAWLING_REQUEST_BY_TAG = AsyncRequestInfo.empty()


