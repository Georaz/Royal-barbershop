import React from 'react';
import EntrySection from "./EntrySection/EntrySection";
import TitleBackground from "../TitleBackground/TitleBackground";
import AppLogo from "../AppLogo/AppLogo";
import ReviewSection from "./ReviewSection/ReviewSection";
import ContactsSection from "./ContactsSection/ContactsSection";

const MainPage = (props) => {
    return (
        <>
            <TitleBackground>
                <AppLogo/>
                <EntrySection/>
            </TitleBackground>
            <ReviewSection comments={props.comments}/>
            <ContactsSection/>
        </>
    )
}

export default MainPage;