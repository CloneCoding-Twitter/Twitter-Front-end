import React from "react";
import { withRouter } from "react-router-dom";

import styled from 'styled-components';
import RightSearch from "../components/RightSearch";
import RightForYou from "../components/RightForYou";
import RightWho from "../components/RightWho";
import RightText from "../components/RightText";

const RightBox = (props) => {

  // if(props.location.pathname === '/') {
  //   return ;
  // }

  return (
    <Right>
      <HeadBoxTwo>
        <RightSearch />
      </HeadBoxTwo>
      <RightForYou />
      <RightWho />
      <RightText />
    </Right>
  )
}

const Right = styled.div`
  width: 350px;
  height: 100%;
  margin-left: 30px;
  position: relative;
  overflow-y: scroll;
  top: 0;
  left: 0;
`;

const HeadBoxTwo = styled.div`
  width: 100%;
  height: 46px;
  display: inline-block;
  position: sticky;
  top: 5px;
  right: 0;
  background-color: #fff;
`
export default RightBox;
// export default withRouter(RightBox);