import {AsyncRequestInfo, HTTP_METHOD} from "@/util/AjaxRequestInfo";

export const ENDPOINT_OF_ACCOUNT_SELECT = AsyncRequestInfo.of(HTTP_METHOD.GET, "/accountbook")
export const ENDPOINT_OF_ACCOUNT_ADD = AsyncRequestInfo.of(HTTP_METHOD.POST, "/accountbook")
export const ENDPOINT_OF_ACCOUNT_UPDATE = AsyncRequestInfo.of(HTTP_METHOD.PUT, "/accountbook")
export const ENDPOINT_OF_ACCOUNT_DELETE = AsyncRequestInfo.of(HTTP_METHOD.DELETE, "/accountbook")

