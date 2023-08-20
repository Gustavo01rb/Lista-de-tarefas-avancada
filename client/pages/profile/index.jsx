import React from "react";
import TemplateDrawer from "../../ui/templates/drawer/templateDrawer";
import { ProfileController } from "../../../imports/controllers/profileController";
import Content from "./content";

const ProfilePage = () => {
    return (
        <TemplateDrawer indexPage={2}>
            <ProfileController>
                <Content />
            </ProfileController>
        </TemplateDrawer>
    );
}

export default ProfilePage;