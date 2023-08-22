import React from "react";
import AppBackgroundImage from "../../common/backgroundImage";
import { useSignUp, SignUpProvider } from "../../../providers/signUpProvider";
import LoginComponent from "./components/login";
import RegisterComponent from "./components/register";

const SignUpPage = () => {
    return (
        <AppBackgroundImage>
            <SignUpProvider>
                <Content />
            </SignUpProvider>
        </AppBackgroundImage>
    );
};

const Content = () => {
    const { isLogin } = useSignUp();
    if (isLogin) return (<LoginComponent />);
    return (<RegisterComponent />);
}

export default SignUpPage;