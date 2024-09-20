import React from "react";
import { Content } from "../../components/layout/components/Content";
import { ProfileUserDetails } from "./components/ProfileDetails";
import { ProfileHeaderUserWithCover } from "./components/ProfileHeaderWithCover";
import { ProfileUserStats } from "./components/ProfileUserStats";
import { ProfileUserTabs } from "./components/ProfileUserTabs";

interface ProfileUserHeaderProps {
  userId: string;
}

const ProfileUserHeader: React.FC <ProfileUserHeaderProps> = () => (
  <Content>
    <ProfileHeaderUserWithCover />
    <div className="card mb-5 mb-xl-10">
      <div className="card-body pt-9 pb-0">
        <div className="d-flex flex-wrap flex-sm-nowrap mb-3">
          <div className="flex-grow-1">
            <ProfileUserDetails />
            <div className="d-flex flex-wrap flex-stack">
              <ProfileUserStats />
            </div>
          </div>
        </div>
        <ProfileUserTabs />
      </div>
    </div>
  </Content>
);

export { ProfileUserHeader };
