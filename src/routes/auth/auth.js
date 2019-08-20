import React from 'react'

export const AsyncLogin = React.lazy(() => import('../../components/AuthForms/login'));
export const AsyncSignUp = React.lazy(() => import('../../components/AuthForms/signup'));
export const AsyncEmailVerify = React.lazy(() => import('../../components/Authentication/emailVerify'));
export const AsyncForgot = React.lazy(() => import('../../components/Authentication/forgot'));
export const AsyncAllAssets = React.lazy(() => import('../../components/Authentication/pages/AllAssets'));