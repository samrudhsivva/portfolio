import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { NewsLetter } from "./NewsLetter";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const MailchimpForm = () => {
  const postUrl = `${process.env.REACT_APP_MAIL_CHIMP_URL}?u=${process.env.REACT_APP_MAIL_CHIMP_U}&id=${process.env.REACT_APP_MAIL_CHIMP_ID}`;
  console.log("url is", postUrl);

  return (
    <TrackVisibility partialVisibility>
      {({ isVisible }) => (
        <div className={isVisible ? "animate__animated animate__fadeInUp" : ""}>
          <MailchimpSubscribe
            url={postUrl}
            render={({ subscribe, status, message }) => {
              // Handle the case where message is an Error object
              const displayMessage = message instanceof Error ? message.toString() : message;
              console.log("Subscription status:", status);
              console.log("Subscription message:", displayMessage);

              return (
                <NewsLetter
                  status={status}
                  message={displayMessage}
                  onValidated={formData => {
                    console.log("Validating form data:", formData);
                    subscribe(formData);
                  }}
                />
              );
            }}
          />
        </div>
      )}
    </TrackVisibility>
  );
}
