import React from 'react'

export const AsyncLogin = React.lazy(() => import('../../components/AuthForms/login'));
export const AsyncSignUp = React.lazy(() => import('../../components/AuthForms/signup'));
export const AsyncEmailVerify = React.lazy(() => import('../../components/Authentication/pages/Auth'));
export const AsyncForgot = React.lazy(() => import('../../components/Authentication/pages/ForgotPass'));
export const AsyncAllAssets = React.lazy(() => import('../../components/Authentication/pages/AllAssets'));
export const PassReset = React.lazy(() => import('../../components/Authentication/PassReset'));
export const EmailVerifySuccess = React.lazy(() => import('../../components/Authentication/EmailVerifySuccess'));