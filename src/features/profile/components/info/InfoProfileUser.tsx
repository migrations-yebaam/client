import React from "react";
import { InfoSidebar } from "./InfoSidebar";
import { InfoDetails } from "./InfoDetails";
import { Content } from "../../../../components/layout/components/Content";
import { FriendsList } from "../friend/FriendsList";
import { PhotoTabs } from "../photos/PhotoTabs";
import { VideoTabs } from "../videos/VideoTabs";
import { ReelsTabs } from "../reels/ReelsTabs";
import { PlacesTabs } from "../places/PlacesTabs";
import { SportsTabs } from "../sport/SportsTabs";
import { BooksSection } from "../music/BooksSection";
import { MoviesSection } from "../music/MoviesSection";
import { MusicSection } from "../music/MusicSection";
import { TvShowsSection } from "../music/TvShowsSection";
import { LikesSection } from "../likesPages/LikesSection";
import { EventsSection } from "../event/EventsSection";
import { GroupsSection } from "../grups/GroupsSection";

export const InfoProfileUser: React.FC = () => {
  return (
    <Content>
      <div className="row">
        <div className="col-md-4">
          <InfoSidebar />
        </div>
        <div className="col-md-8">
          <InfoDetails />
        </div>
      </div>
{/*  */}      <PhotoTabs />
      <VideoTabs />
      <ReelsTabs />
      <PlacesTabs />
      <SportsTabs />
      <MusicSection />
      <MoviesSection />
      <TvShowsSection />
      <BooksSection />
      <LikesSection />
      <EventsSection/>
      <GroupsSection/>

    </Content>
  );
};
      <FriendsList />
