import React from "react";
import { Button } from 'reactstrap'

import Container from "react-bootstrap/Container";
import Stepper from "react-stepper-horizontal";
import image1 from "../../../../images/logovector.png";
import image3 from "../../../../images/massage.png";
import image4 from "../../../../images/dialysis.png";

import {
  ServicesWrapper,  ServicesH1, ServicesCard,ServicesCard2,ServicesWrappers2,
  ServicesH2,
  ServicesIcon,
  ServicesP,ServicesH3B,ServicesH3,
  ServicesWrappers, BtnWrap
} from "./HeroImageElements";
import { Transition } from 'react-transition-group';
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import Calendar from 'react-select-date';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Circles } from  'react-loader-spinner'
import { getUser } from '../../../login/helpers';
import moment from 'moment';

const HeroImage = () => {

  const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
  };
  let navigate = useNavigate();
  const [listDate, fetchDatess] = useState();

  const [selectedDate, setDuelSlots] = useState();
  const [disableDate, setDisableDate] = useState();
  const [disableUserSchedDate, setDisableUserSchedDate] = useState();

  const [getSelecServices, setSelecServices] = useState({service:""});

  function refreshPage() {
    window.location.reload();
  }

      const fetchDate= () => {
        axios({
          method: "get",
          url: `/api/schedule/${getUser()}`,
          headers: {
            "Content-Type" : "application/json",
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
          },
        }).then(response => {
          // console.log(response.data.disease);
          fetchDatess(response.data.dates);
          setDisableDate(response.data.disableDate);
          setDisableUserSchedDate(response.data.userSched);
      }).catch((err) => console.log(err));
    };
    // fetchDate();
    // console.log(disableDate);
    useEffect(() => {
      fetchDate();
    },[]);
 

    const newSelectedDate = new Date(selectedDate).toLocaleDateString()
    const newSelectedDatess = new Date(selectedDate).toDateString()
    const newDateConvert = moment(new Date(newSelectedDate)).format('MM/DD/YYYY')
   
    const [isLoadings, setLoadings] = useState(false);
    
    function submitAppointment(event) {
      event.preventDefault();
      
      const newSelectedDates= {
        date: newDateConvert,
        user_id: getUser(),
        category: getSelecServices.service == "recreational" ? "Recreational Activity" : "Dialysis",
        status: "not attended"
      }

      // console.log(newSelectedDates);

      if(newSelectedDate === "Invalid Date"){

        Swal.fire({
					title: 'Please select a date!',
          color: '#EF3A47',
					imageUrl: 'https://media1.giphy.com/media/fqIOmNAvFOaiQO9GFy/giphy.gif?cid=ecf05e47znz5hzwird0qfu43mht206tqfrhjhkira9fnkx5l&rid=giphy.gif&ct=s',
					imageWidth: 200,
					imageHeight: 200,
					imageAlt: 'Custom image',
					confirmButtonColor: '#EF3A47',
				  })

      }else{

        Swal.fire({
          title: 'Are you sure you want to accept your appointment?',
          icon: 'warning',
          color: '#EF3A47',
          showCancelButton: true,
          confirmButtonColor: '#EF3A47',
          cancelButtonColor: '#f8bb86',
          confirmButtonText: 'Yes',
          cancelButtonText: 'No'
        }).then((result) => {
          if (result.isConfirmed) {
            if(!isLoadings) {
              Swal.fire({
                title: 'Loading!',
                text: 'Please wait while processing your booking.',
                imageUrl: 'https://media2.giphy.com/media/4hVUoT5cdyjWRWlZc3/giphy.gif?cid=ecf05e47xglkm9xa6j4ukbge65fg47tfunliqhc5aza0dwmi&rid=giphy.gif&ct=s',
                imageWidth: 200,
                imageHeight: 200,
                imageAlt: 'Custom image',
                confirmButtonColor: '#EF3A47',
                showCancelButton: false,
                showConfirmButton: false,
                allowOutsideClick: false
                })
          }
            axios({
              method:"post",
              url:`/api/schedule/add`, 
              data: newSelectedDates,
              headers: {
                "Content-Type" : "application/json",
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
              }
          })
                .then(response => {
                              setLoadings(true)
                               fetchDate();
                               navigate('/client/dashboard')
                               setSelecServices({service:""})
                                Swal.fire({
                                  title: 'Thank You!',
                                  text: 'You have successfully created your booking.',
                                  imageUrl: 'https://media0.giphy.com/media/dYmYhn4OXI1aOpVpFO/giphy.gif?cid=ecf05e479ym4epjp1orghtshgvg92nc27cty98jbg9rfzfdr&rid=giphy.gif&ct=s',
                                  imageWidth: 200,
                                  imageHeight: 200,
                                  imageAlt: 'Custom image',
                                  confirmButtonColor: '#EF3A47',
                                  })
                            })
                  .catch(error => {
                                  console.log(error.response);
                                  Swal.fire({
                                    icon: 'error',
                                    title: 'Oops...',
                                    text: 'Something went wrong!',
                                    footer: '<a href="">Why do I have this issue?</a>'
                                  })
                                  // setError(error.response.data);
                                 
                              });
  
          }
        })
        
      }
    
          
                    
    }
 

  moment.locale('en');
  var newDateArray = [];

    // iterate over the dates list from above
    for(let i = 0; i <= disableUserSchedDate?.length; i++) {
        // pass the date at index i into moment
        // let date = moment(disableUserSchedDate[i]).subtract(1, "days").format('MM-DD-YYYY');
        let date = disableUserSchedDate[i];
        // console.log("date", date);
        // add this new date to the newDateArray
        newDateArray.push(date)
        
    }

console.log(newDateArray)
    // console.log(newDateArray);
  //  const current = new Date();
  // const dateNow = `${current.getFullYear()}/${current.getMonth()+1}/${current.getDate()}`;
 
  const dateNow = moment(new Date()).format('YYYY-MM-DD')

  

 console.log(getSelecServices);
  return (
    <Container style={{ minHeight: "45vh" }}>
    <div style={styles}>
    <ServicesWrapper>

    {getSelecServices.service == "" ? <Stepper
        steps={[
          {
            title: "Pick a services",
          },
          { title: "Set a Schedule and Confirm" },
        ]}
        activeStep={0}
        activeColor="#EF3A47"
        completeColor="#EF3A47"
        activeTitleColor="#EF3A47"
        completeTitleColor="#EF3A47"
        circleFontColor="#FFF"
        defaultBorderColor="#EF3A47"
        defaultBorderStyle="#EF3A47"
        completeBarColor="#EF3A47"
      /> : <Stepper
      steps={[
        {
          title: "Pick a services",
        },
        { title: "Set a Schedule and Confirm" },
      ]}
      activeStep={1}
      activeColor="#EF3A47"
      completeColor="#EF3A47"
      activeTitleColor="#EF3A47"
      completeTitleColor="#EF3A47"
      circleFontColor="#FFF"
      defaultBorderColor="#EF3A47"
      defaultBorderStyle="#EF3A47"
      completeBarColor="#EF3A47"
    />}
    
     
      

      </ServicesWrapper>

      {getSelecServices.service == "recreational" ?  
      <>
     
     <ServicesH1>Set a schedule and confirm
       <h6 style={{color:"black"}}>Set the date of your desired day of activities and confirm</h6>
       </ServicesH1>

       {!listDate ? <div style={{ width: "100%",height: "100",display: "flex",justifyContent: "center",
       alignItems: "center"}}><Circles color="#EF3A47" alignSelf='center' height={80} width={80}/></div>
       :
       <ServicesWrappers>
       <ServicesCard>
      
       <Calendar
      onSelect = {(date) => setDuelSlots(date)}
      minDate = {dateNow}
      maxDate = "12/31/2023"
      selectDateType = 'single'
      showSelectMonthArrow = { true }
      showSelectYearArrow = { true }
      showDateInputField = { false }
      disableDays = {[ "sun", "sat"]}
      disableCertainDates = {newDateArray}
      duelSlotDates = {listDate}
    />
    </ServicesCard>
         <ServicesCard>
           <ServicesIcon src={image1} />
           <ServicesH2>DETAILS</ServicesH2>
           {newSelectedDate === "Invalid Date" ?  <ServicesH3B >Schedule<ServicesH3>- 8:00am - 5:00pm</ServicesH3></ServicesH3B>
           : <ServicesH3B>Schedule<ServicesH3>{newSelectedDatess} 8:00am - 5:00pm</ServicesH3></ServicesH3B>}
          <hr></hr>
           <ServicesH3B>PLACE:<ServicesH3>13, 1639 Manzanitas St, Taguig, Metro Manila</ServicesH3></ServicesH3B><hr></hr>
           <ServicesH3B>TYPE OF SERVICE<ServicesH3>Recreational Activities<ServicesP>Therapy Pool, Massage, Saunas, Yoga, Ballroom, Gym, Board Games, Cinema </ServicesP></ServicesH3> </ServicesH3B>
            
           <hr className="line"></hr>
           <BtnWrap>
       <Button outline color="danger" onClick={()  => {setSelecServices({service:""})}}>← Back</Button>&nbsp;
       <Button outline color="danger" onClick={submitAppointment}>Confirm →</Button>
       </BtnWrap>
         </ServicesCard>
       </ServicesWrappers>
     }

     </>
    : getSelecServices.service == "dialysis" ? 
    <>
     
    <ServicesH1>Set a schedule and confirm
      <h6 style={{color:"black"}}>Set the date of your desired day of activities and confirm</h6>
      </ServicesH1>

      {!listDate ? <div style={{ width: "100%",height: "100",display: "flex",justifyContent: "center",
      alignItems: "center"}}><Circles color="#EF3A47" alignSelf='center' height={80} width={80}/></div>
      :
      <ServicesWrappers>
      <ServicesCard>
     
      <Calendar
     onSelect = {(date) => setDuelSlots(date)}
     minDate = {dateNow}
     maxDate = "12/31/2023"
     selectDateType = 'single'
     showSelectMonthArrow = { true }
     showSelectYearArrow = { true }
     showDateInputField = { false }
     disableDays = {[ "sun", "sat"]}
     disableCertainDates = {newDateArray}
     duelSlotDates = {listDate}
   />
   </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={image1} />
          <ServicesH2>DETAILS</ServicesH2>
          {newSelectedDate === "Invalid Date" ?  <ServicesH3B >Schedule<ServicesH3>- 8:00am - 5:00pm</ServicesH3></ServicesH3B>
          : <ServicesH3B>Schedule<ServicesH3>{newSelectedDatess} 8:00am - 5:00pm</ServicesH3></ServicesH3B>}
         <hr></hr>
          <ServicesH3B>PLACE:<ServicesH3>13, 1639 Manzanitas St, Taguig, Metro Manila</ServicesH3></ServicesH3B><hr></hr>
          <ServicesH3B>TYPE OF SERVICE<ServicesH3>Dialysis<ServicesP>Dialysis</ServicesP></ServicesH3> </ServicesH3B>
           
          <hr className="line"></hr>
          <BtnWrap>
      <Button outline color="danger" onClick={()  => {setSelecServices({service:""})}}>← Back</Button>&nbsp;
      <Button outline color="danger" onClick={submitAppointment}>Confirm →</Button>
      </BtnWrap>
        </ServicesCard>
      </ServicesWrappers>
    }

    </>
    : 
    <>
    <ServicesH1>Pick a Services
        <h6 style={{color:"black"}}>Pick a services you want to avail</h6>
        </ServicesH1>
        <ServicesWrappers2>
          <ServicesCard2 onClick={()  => {setSelecServices({service:"recreational"})}}>
            <ServicesIcon src={image3} />
            <ServicesH2>Recreational Activities</ServicesH2>
            <ServicesP>
           ipsum sumpi oewqo dwqdwqipsum sumpi oewqo dwqdwqipsum sumpi oewqo dwqdwq
            </ServicesP>
          </ServicesCard2>
          <ServicesCard2 onClick={()  => {setSelecServices({service:"dialysis"})}}>
            <ServicesIcon src={image4} />
            <ServicesH2>Dialysis</ServicesH2>
            <ServicesP>
            ipsum sumpi oewqo dwqdwqipsum sumpi oewqo dwqdwqipsum sumpi oewqo dwqdwq
            </ServicesP>
          </ServicesCard2>
        </ServicesWrappers2>
        <BtnWrap>
        <Button outline color="danger" onClick={()  => navigate('/client/dashboard')}>← Back</Button>
        </BtnWrap>
        </>
    }
      
   
      <style>
        {`
   
   hr {
    border-top: 5px solid red;
    width: 500px;
    
    }
    .line {
      border-top: 1px solid red;
      width: 500px;
      
      }
      .cld_slotWidth {
          width: 40%;
          min-width: 34rem;
      }
      .cld_greenHighlight {
        background-color: #EF3A47;
    }
    .cld_slotInfoSize ~ span {
      font-size: 11px;
      font-weight: 500;
      color: #383838;
  }

    .cld_highlightNumCircle {
      height:25px;
      border-radius: 200px;
      color: #ffffff;
      margin: 0 5px;
      background-color: #683838;
  }

  option {
    font-weight: normal;
    display: block;
    white-space: nowrap;
    min-height: 1.2em;
    padding: 0px 2px 20px;
    color: #fff;
}


  .cld_currentDay.cld_currentDayGreen::before {
    background: #ff0000;
}

      .cld_availableSlots {
        height:22px;
      width: 66px;
        position: center;
        top: 0;
        left: 0;
        font-size: 1.1rem;
        border-radius: 0 0 16px 0;
        color: #fff;
        background: #EF3A47;
        box-shadow: 0px 0px 3px 0px #000000;
        text-align: left;
    }
    
    .cld_totalSlots {
      height:21px;
      width: 66px;
      position: absolute;
      bottom: 0;
      right: 0;
      font-size: 1.1rem;
      border-radius: 16px 0 0 0;
      box-shadow: 0px 0px 3px 0px #ff6500;
      background: #fbddb9;
      color: #000000;
  }

  .cld_slotInfoTotalClr {
    background-color: #fbddb9;
}
  

    .cld_slotInfoAvailableClr {
      background-color: #EF3A47;
  }
  
  .cld_slotInfoSelectedGreenClr {
    background-color: #683838;
}

  .cld_disableDate {
    color: #d1cfcf;
}
.cld_slotInfoLabel{
  font-size: 1.1rem;
}

    .cld_slotInfoDisabledClr {
      background-color: #c1c1c1;
    }

      .cld_container {
        box-shadow: 0px 1px 5px 1px #ffffff;
        padding: 1%;
        border-radius: 5px;
        background: #ffffff;
    }

        .cld_showDays {
          display: flex;
          font-size: 20px;
          font-weight: bold;
          color: #EF3A47;
      }

      .cld_container th {
        font-weight: 400;
        color: #000000;
        font-size: 16px;
        font-weight: bold;
    }
        `}
      </style>
    </div>
    </Container>
  );
};

export default HeroImage;
