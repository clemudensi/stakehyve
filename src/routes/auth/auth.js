import React from 'react'

export const AsyncLogin = React.lazy(() => import('../../components/Authentication/Login'));
export const AsyncSignUp = React.lazy(() => import('../../components/Authentication/SignUp'));
export const AsyncAuthAction = React.lazy(() => import('../../components/Authentication/pages/Auth'));
export const AsyncForgot = React.lazy(() => import('../../components/Authentication/ForgotPassForm'));
export const AsyncAllAssets = React.lazy(() => import('../../components/Authentication/pages/AllAssets'));
export const PassReset = React.lazy(() => import('../../components/Authentication/PassResetForm'));
export const EmailVerifySuccess = React.lazy(() => import('../../components/Authentication/EmailVerifySuccess'));