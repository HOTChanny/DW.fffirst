import styled, { createGlobalStyle } from "styled-components";
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // css import

const GlobalStyled = createGlobalStyle`
body{
  font-family: 'stardust';
  color:white;
  background: linear-gradient(to right, #0f0c29, #302b63, #24243e);
  margin : 0;
}
  h1{
  font-size:30px;
  }

  .react-calendar { 
    width: 100%;
    height: 100%;
    background-color: #fff;
    color: #222;
    border-radius: 8px;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.125em;
   }
   
.react-calendar__viewContainer, .react-calendar__month-view{
  width: 100%;
    height: 100%;
}
   .react-calendar__navigation button {
    color: #6f48eb;
    min-width: 44px;
    background: none;
    font-size: 16px;
    margin-top: 8px;
   }

   .react-calendar__navigation button:enabled:hover,
   .react-calendar__navigation button:enabled:focus {
    background-color: #f8f8fa;
   }

   .react-calendar__navigation button[disabled] {
    background-color: #f0f0f0;
   }

   abbr[title] {
    text-decoration: none;
   }

   .react-calendar__tile:enabled:hover,
   .react-calendar__tile:enabled:focus {
    background: #f8f8fa;
    color: #6f48eb;
    border-radius: 6px;
   }

   .react-calendar__tile--now {
    background: #6f48eb33;
    border-radius: 6px;
    font-weight: bold;
    color: #6f48eb;
   }

   .react-calendar__tile--now:enabled:hover,
   .react-calendar__tile--now:enabled:focus {
    background: #6f48eb33;
    border-radius: 6px;
    font-weight: bold;
    color: #6f48eb;
   }

   .react-calendar__tile--hasActive:enabled:hover,
   .react-calendar__tile--hasActive:enabled:focus {
    background: #f8f8fa;
   }

   .react-calendar__tile--active {
    background: #6f48eb;
    border-radius: 6px;
    font-weight: bold;
    color: white;
   }

   .react-calendar__tile--active:enabled:hover,
   .react-calendar__tile--active:enabled:focus {
    background: #6f48eb;
    color: white;
   }

   .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: #f8f8fa;
   }

   .react-calendar__tile--range {
    background: #f8f8fa;
    color: #6f48eb;
    border-radius: 0;
   }

   .react-calendar__tile--rangeStart {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    background: #6f48eb;
    color: white;
   }

   .react-calendar__tile--rangeEnd {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    background: #6f48eb;
    color: white;
   }

.container {
	display: grid;
  grid-template-columns: 1fr 3fr;
  height: 100%;
}
`;

const Container = styled.div`
  height: 86vh;
`;
const Con = styled.div`
  height: 100%;
`;
const Red = styled.div`
  border: 1px doted ;
`;
//볼더 선 연구 필요

const Blue = styled.div`
border: 1px solid ;
`;

function App() {
  const [value, onChange] = useState(new Date());
  return (
    <Container>
      <GlobalStyled/>
      <h1>제목</h1>
      <hr/>
      <Con>
      <div className="container">
        <Red>Task<hr/>
        Calendar<hr/>
        Quest<hr/>
        </Red>
        <Blue>
      <Calendar onChange={onChange} value={value}/>
    </Blue>
        </div>
        </Con>
    </Container>
  );
}

export default App;
