import React, { Component } from "react";
import styled from "styled-components";
import greenLine from "../Images/green_line.jpeg";

const ContentCard = styled.div`
  position: relative;
  height: 440px;
`;

const CardStyle = styled.h1`
  font-family: ${(props) => props.theme.Fonts.Josefin};
  font-size: 45px;
  margin-bottom: 20px;
  z-index: 1;
  color: ${(props) => props.theme.Colors.Header};
  @media ${(props) => props.theme.MediaQueries.m.query} {
    margin-left: 20px;
    font-size: 50px;
  }
  @media ${(props) => props.theme.MediaQueries.l.query} {
    font-size: 70px;
  }
`;

const CardStyle_para = styled.p`
  font-family: ${(props) => props.theme.Fonts.Poppins};
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  max-width: 250px;
  color: rgba(255, 255, 255, 0.6);
  @media ${(props) => props.theme.MediaQueries.m.query} {
    font-size: 15px;
    margin-left: 20px;
    max-width: 450px;
  }
`;

const Bg_num = styled.p`
  position: relative;
  margin-left: -60px;
  font-family: ${(props) => props.theme.Fonts.Poppins};
  font-weight: 600;
  font-size: 150px;
  z-index: -1;
  color: #23333b;
  @media ${(props) => props.theme.MediaQueries.l.query} {
    margin-left: 0px;
  }
`;

const Bg_rect = styled.div`
  background: ${(props) => props.theme.Colors.SubHeading};
  border-radius: 20px;
  width: 50px;
  height: 1px;
  margin-right: 10px;
`;

const Bg_content = styled.p`
  font-family: ${(props) => props.theme.Fonts.Arial};
  font-size: 14px;
  line-height: 30px;
  color: ${(props) => props.theme.Colors.SubHeading};
  @media ${(props) => props.theme.MediaQueries.l.query} {
    font-size: 16px;
  }
`;

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ContentDiv = styled.div`
  position: relative;
  max-width: 280px;
  top: -120px;
  left: 20px;
  @media ${(props) => props.theme.MediaQueries.m.query} {
    max-width: 350px;
  }
  @media ${(props) => props.theme.MediaQueries.l.query} {
    left: 70px;
    max-width: 600px;
  }
`

const Card = ({subTitle , title , para , number}) => {
  return (
    <ContentCard>
      <Bg_num>{number}</Bg_num>
      <ContentDiv>
        <FlexDiv>
          <Bg_rect></Bg_rect>
          <Bg_content>{subTitle}</Bg_content>
        </FlexDiv>
        <CardStyle>{title}</CardStyle>
        <CardStyle_para>
          {para}
        </CardStyle_para>
      </ContentDiv>
    </ContentCard>
  );
}

export default Card;
