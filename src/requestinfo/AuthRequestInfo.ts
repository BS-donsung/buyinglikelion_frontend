import { AsyncRequestInfo, HTTP_METHOD } from "@/util/AjaxRequestInfo"


export const ENDPOINT_OF_AUTH_LOGIN      = AsyncRequestInfo.of(HTTP_METHOD.POST, "/auth/login")
export const ENDPOINT_OF_AUTH_LOGOUT     = AsyncRequestInfo.of(HTTP_METHOD.POST, "/auth/logout")
export const ENDPOINT_OF_AUTH_REGISTER   = AsyncRequestInfo.of(HTTP_METHOD.POST, "/auth/register")
export const ENDPOINT_OF_AUTH_UPDATE     = AsyncRequestInfo.of(HTTP_METHOD.PUT, "/auth/update")
export const ENDPOINT_OF_AUTH_DEACTIVATE = AsyncRequestInfo.of(HTTP_METHOD.DELETE, "/auth/update")