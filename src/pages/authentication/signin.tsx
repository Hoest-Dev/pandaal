import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppBar, Branding, Page, Scaffold } from "../../components";
import { BackButton, SignInPrompt, SignInVerifyCode } from "../../fragments";
import _ from "lodash";

export default function PageSignIn() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [codeSent, setCodeSent] = React.useState(false);

  const navigate = useNavigate();

  const validatePhone = () => {
    if (phoneNumber.length == 13 || phoneNumber.length == 14) return true;
    return false;
  };

  return (
    <Scaffold
      appBar={
        <AppBar leading={<BackButton customPath="/" />} title={<Branding />} />
      }
    >
      {codeSent ? (
        <SignInVerifyCode
          phoneNumber={phoneNumber}
          completion={() => {
            navigate("/signup");
          }}
        />
      ) : (
        <SignInPrompt
          setPhoneNumber={setPhoneNumber}
          onSubmit={validatePhone() ? () => setCodeSent(true) : null}
          disableSubmission={!validatePhone()}
        />
      )}
    </Scaffold>
  );
}
