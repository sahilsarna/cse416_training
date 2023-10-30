import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import {Button, Container, Header, Segment, Grid} from "semantic-ui-react";

import { EmailShareButton, FacebookShareButton, RedditShareButon,
  TwitterShareButton, WhatsappShareButton } from "react-share";

import {FacebookIcon, EmailIcon, RedditIcon,
  TwitterIcon, WhatsappIcon} from "react-share";

function App() {
  return (
  <>
    <Container>
      <Segment>
        <FacebookShareButton url={"www.facebook.com"}
                             quote={"Share this map"}
                             hashtag={"#Mapsterpiece"}
        >
          <FacebookIcon logoFillColor = "black" round={true}>
          </FacebookIcon>
        </FacebookShareButton>
        <WhatsappShareButton url={"www.whatsapp.com"}
                             title={"Share this map"}>
          <WhatsappIcon logoFillColor = "green" round={true}>
          </WhatsappIcon>
        </WhatsappShareButton>
      </Segment>
    </Container>
  </>
  );
}

export default App;
