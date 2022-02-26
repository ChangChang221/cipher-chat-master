import React from "react";
import Title from "../forms/title";
import styled from "styled-components";
import Bio from "./bio";

const Container = styled.div`
  color: white;
  margin-bottom: 3px;

  a {
    color: white !important;
  }

  span {
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;

  div {
    font-size: 12px;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }

    @media only screen and (max-width: 600px) {
      font-size: 16px;
    }
  }

  #status {
    text-align: left !important;
  }

  #logout {
    text-align: right !important;
  }
`;

const Profile = ({ user, onUpdateBio, flipOpenNav, isOnline,isOnlineIcon, changeStatus }) => {
  const handleLogout = () => {
    localStorage.clear();
    window.location = "/";
  };

  const status = isOnline ? "Online" : "Offline";
  const StatusIcon = styled.i`
  font-size: 10px;
  color: ${({ isOnlineIcon }) => (isOnlineIcon ? "#00FF00" : "#7e7e7e")};
`;
  function handleNavClick() {
    flipOpenNav();
  }

  return (
    <Container>
      <Title
        title={user.username}
        body={<Bio bio={user.bio} onSave={onUpdateBio} />}
      />

      <Grid>
        <div onClick={changeStatus} id="status">
        <StatusIcon
          className="fas fa-circle"
          isOnlineIcon={Boolean(isOnline)}
        />{" "}{status}
        </div>

        <div id="center">
          <i
            className="fas fa-ellipsis-h"
            onClick={handleNavClick}
          />
        </div>

        <div onClick={handleLogout} id="logout">
          Logout <i className="fas fa-times-circle" />
        </div>
      </Grid>
    </Container>
  );
};

export default Profile;
