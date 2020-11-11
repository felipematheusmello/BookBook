import { Layout } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { IoIosHome, CgProfile, GiOpenBook, CgLogOut } from "../icons";
import LogoutButton from "../logout-button";
import { useHistory } from "react-router-dom";
import {
  Container,
  StyleHeader,
  Logo,
  StyledFooter,
  StyleContent,
  StyledSearch,
  ExtendsLink,
  HeaderBar,
  HiddenLogo,
  SmartphoneIcons,
} from "../my-styled-components";
const { Header, Footer } = Layout;
const StyledLayout = ({ children }) => {
  let history = useHistory();
  const userId = useSelector((state) => state.authentication.user);
  return (
    <>
      <Layout>
        <Header>
          <StyleHeader>
            <HeaderBar>
              <div>
                <ExtendsLink to="/">
                  <Logo />
                  <HiddenLogo style={{ marginLeft: "10px" }}>
                    BookBook
                  </HiddenLogo>
                </ExtendsLink>
              </div>
              <>
                <HiddenLogo style={{ marginTop: "5px" }}>
                  <ExtendsLink to={`/book-shelf/${userId.id}/want+to+read`}>
                    <GiOpenBook />
                  </ExtendsLink>
                </HiddenLogo>
                
                <StyledSearch
                  placeholder="Put your search here"
                  onSearch={(value) =>
                    history.push("/search/" + value.replace(" ", "+") + "/1")
                  }
                />

                <LogoutButton>
                  <CgLogOut style={{ marginTop: "1px" }} />
                  <HiddenLogo>Logout</HiddenLogo>
                </LogoutButton>

                <HiddenLogo style={{ marginTop: "5px" }}>
                  <ExtendsLink
                    to={`/user-profile/${userId && userId.id}`}
                    style={{ marginLeft: "2em" }}
                  >
                    <CgProfile />
                  </ExtendsLink>
                </HiddenLogo>
              </>
            </HeaderBar>
          </StyleHeader>
        </Header>
        <Container>
          <StyleContent>{children}</StyleContent>
        </Container>
        <Footer>
          <StyledFooter>
            <div>
              <SmartphoneIcons to={`/book-shelf/${userId.id}/reading`}>
                <GiOpenBook />
              </SmartphoneIcons>
            </div>

            <div>
              <SmartphoneIcons to="/">
                <IoIosHome />
              </SmartphoneIcons>
            </div>

            <div>
              <SmartphoneIcons to={`/user-profile/${userId && userId.id}`}>
                <CgProfile />
              </SmartphoneIcons>
            </div>
          </StyledFooter>
        </Footer>
      </Layout>
    </>
  );
};

export default StyledLayout;
