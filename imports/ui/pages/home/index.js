import React from "react";
import TemplateDrawer from "../../template/drawer/templatedrawer";
import styled from 'styled-components';

const SContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
`

const Home = () => {
  return (
    <TemplateDrawer indexPage={0}>
      <SContainer>
        <h1>Home</h1>
      </SContainer>
    </TemplateDrawer>
  );
}

export default Home;