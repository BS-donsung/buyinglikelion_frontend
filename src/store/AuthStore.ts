import { ENDPOINT_OF_AUTH_DEACTIVATE, ENDPOINT_OF_AUTH_LOGIN, ENDPOINT_OF_AUTH_LOGOUT, ENDPOINT_OF_AUTH_REGISTER, ENDPOINT_OF_AUTH_UPDATE } from "@/requestinfo/AuthRequestInfo";
import { AuthService, AuthServiceAsyncRequestInfo } from "@/service/AuthService";
import { AsyncRequestInfo } from "@/util/AjaxRequestInfo";
import { defineStore } from "pinia";

export const useAuthStore =
    defineStore("authstore", () => {
        const authServiceAsyncRequestInfo : AuthServiceAsyncRequestInfo =
            {
                login       : ENDPOINT_OF_AUTH_LOGIN,
                logout      : ENDPOINT_OF_AUTH_LOGOUT,
                register    : ENDPOINT_OF_AUTH_REGISTER,
                update      : ENDPOINT_OF_AUTH_UPDATE,
                deactivate  : ENDPOINT_OF_AUTH_DEACTIVATE
            }

        const authService =
            new AuthService(authServiceAsyncRequestInfo);

        return { authService }
    })