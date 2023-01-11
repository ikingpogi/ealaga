import React from "react";
import { Button } from 'reactstrap'

import Container from "react-bootstrap/Container";
import Stepper from "react-stepper-horizontal";
import image1 from "../../../../images/logovector.png";
import image3 from "../../../../images/massage.png";
import image4 from "../../../../images/dialysis.png";
import image5 from "../../../../images/conference.png";
import imageam from "../../../../images/am.png";
import imagepm from "../../../../images/pm.png";
import imagesunny from "../../../../images/sunny.png";
import {
  ServicesWrapper,  ServicesH1, ServicesCard,ServicesCard2,ServicesWrappers2,
  ServicesH2,
  ServicesIcon,
  ServicesP,ServicesH3B,ServicesH3,
  ServicesWrappers, BtnWrap,ServicesWrappers3, ServicesCard3, ServicesWrappers4,
  ServicesCard4
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
  const [recreational_am, fetchrecreational_am] = useState();
  const [recreational_pm, fetchrecreational_pm] = useState();
  const [multipurpose_am, fetchmultipurpose_am] = useState();
  const [multipurpose_pm, fetchmultipurpose_pm] = useState();
  const [multipurpose_whole, fetchmultipurpose_whole] = useState();

  const [selectedDate, setDuelSlots] = useState();
  const [disableDate, setDisableDate] = useState();
  const [disableuserRecreationalSched, setDisableuserRecreationalSched] = useState();
  const [disableuserMultipurposeSched, setDisableuserMultipurposeSched] = useState();

  const [getSelecServices, setSelecServices] = useState({service:""});
  const [getSelectTime, setSelectTime] = useState({time:""});

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
          fetchrecreational_am(response.data.slot_recreational_am);
          fetchrecreational_pm(response.data.slot_recreational_pm);
          fetchmultipurpose_am(response.data.userMultipurposeSchedAm);
          fetchmultipurpose_pm(response.data.userMultipurposeSchedPm);
          fetchmultipurpose_whole(response.data.userMultipurposeSchedWhole);
          setDisableDate(response.data.disableDate);
          setDisableuserRecreationalSched(response.data.userRecreationalSched);
          setDisableuserMultipurposeSched(response.data.userMultipurposeSched);
      }).catch((err) => console.log(err));
    };
    // fetchDate();
    // console.log(disableDate);
    useEffect(() => {
      fetchDate();
       // Set an interval to fetch messages every 5 seconds
    const interval = setInterval(fetchDate, 2000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
    },[]);
 

    const newSelectedDate = new Date(selectedDate).toLocaleDateString('en-US',["date", {month: 'numeric', day: 'numeric',year: 'numeric' 
  }])
    const newSelectedDatess = new Date(selectedDate).toDateString()

    const [isLoadings, setLoadings] = useState(false);
    
    function submitAppointment(event) {
      event.preventDefault();

      const newSelectedDates= {
        date: newSelectedDate,
        user_id: getUser(),
        category: getSelecServices.service,
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
                               setSelectTime({time:""})
                               
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
  var newdisableuserRecreationalSched= [];
  var newdisableuserMultipurposeSched= [];

  

    // iterate over the dates list from above
    for(let i = 0; i <= disableuserRecreationalSched?.length; i++) {
        // pass the date at index i into moment
        // let date = moment(disableUserSchedDate[i]).subtract(1, "days").format('MM-DD-YYYY');
        let date = disableuserRecreationalSched[i];
        // console.log("date", date);
        // add this new date to the newDateArray
        newdisableuserRecreationalSched.push(date)
        
    }

    // iterate over the dates list from above
    for(let i = 0; i <= disableuserMultipurposeSched?.length; i++) {
      // pass the date at index i into moment
      // let date = moment(disableUserSchedDate[i]).subtract(1, "days").format('MM-DD-YYYY');
        let date = disableuserMultipurposeSched[i];
        // console.log("date", date);
        // add this new date to the newDateArray
        newdisableuserMultipurposeSched.push(date)
        
    }

    ////////multipurpose

    var newdisableuserMultipurposeSchedAm= [];
    var newdisableuserMultipurposeSchedPm= [];
    var newdisableuserMultipurposeSchedWhole= [];

    for(let i = 0; i <= multipurpose_am?.length; i++) {
      // pass the date at index i into moment
      // let date = moment(disableUserSchedDate[i]).subtract(1, "days").format('MM-DD-YYYY');
        let date = multipurpose_am[i];
        // console.log("date", date);
        // add this new date to the newDateArray
        newdisableuserMultipurposeSchedAm.push(date)
        
    }

    for(let i = 0; i <= multipurpose_pm?.length; i++) {
      // pass the date at index i into moment
      // let date = moment(disableUserSchedDate[i]).subtract(1, "days").format('MM-DD-YYYY');
        let date = multipurpose_pm[i];
        // console.log("date", date);
        // add this new date to the newDateArray
        newdisableuserMultipurposeSchedPm.push(date)
        
    }

    for(let i = 0; i <= multipurpose_whole?.length; i++) {
      // pass the date at index i into moment
      // let date = moment(disableUserSchedDate[i]).subtract(1, "days").format('MM-DD-YYYY');
        let date = multipurpose_whole[i];
        // console.log("date", date);
        // add this new date to the newDateArray
        newdisableuserMultipurposeSchedWhole.push(date)
        
    }

// console.log(newDateArray)


    // console.log(newDateArray);
  //  const current = new Date();
  // const dateNow = `${current.getFullYear()}/${current.getMonth()+1}/${current.getDate()}`;
 
  const dateNow = moment(new Date()).format('YYYY-MM-DD')

  
//////////////////////////////////////////// date slot --------------------------

  // let recreational_am_array = JSON.parse(recreational_am);
  const disable_recreational_am = recreational_am?.filter(x => x.avaliableSlot === 0).map(item => item.date);
  const disable_recreational_pm = recreational_pm?.filter(x => x.avaliableSlot === 0).map(item => item.date);

  // const disable_multipurpose_am = multipurpose_am?.filter(x => x.avaliableSlot === 0).map(item => item.date);
  // const disable_multipurpose_pm = multipurpose_pm?.filter(x => x.avaliableSlot === 0).map(item => item.date);

  console.log(disable_recreational_am);  // Output: "value1"

 

  console.log(getSelecServices);
  console.log(getSelectTime);
  return (
    <Container style={{ minHeight: "45vh" }}>
    <div style={styles}>
    <ServicesWrapper>

    {getSelecServices.service == "" ? <Stepper
        steps={[
          {
            title: "Pick a services",
          },
          { title: "Select a Time" },
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
      /> 
      : getSelecServices.service == "recreational" ? <Stepper
      steps={[
        {
          title: "Pick a services",
        },
        { title: "Select a Time" },
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
    /> 
    : getSelecServices.service == "dialysis" ? <Stepper
      steps={[
        {
          title: "Pick a services",
        },
        { title: "Select a Time" },
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
    /> 
    : getSelecServices.service == "multipurpose" ? <Stepper
      steps={[
        {
          title: "Pick a services",
        },
        { title: "Select a Time" },
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
    /> 
    : getSelectTime.time == "recreational_am" ? <Stepper
      steps={[
        {
          title: "Pick a services",
        },
        { title: "Select a Time" },
        { title: "Set a Schedule and Confirm" },
      ]}
      activeStep={2}
      activeColor="#EF3A47"
      completeColor="#EF3A47"
      activeTitleColor="#EF3A47"
      completeTitleColor="#EF3A47"
      circleFontColor="#FFF"
      defaultBorderColor="#EF3A47"
      defaultBorderStyle="#EF3A47"
      completeBarColor="#EF3A47"
    /> 
      : 
      <Stepper
      steps={[
        {
          title: "Pick a services",
        },
        { title: "Select a Time" },
        { title: "Set a Schedule and Confirm" },
      ]}
      activeStep={2}
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
       <ServicesH1>Select a Time
        <h6 style={{color:"black"}}>Choose Your Time: AM or PM</h6>
        </ServicesH1>
        <ServicesWrappers3>
          <ServicesCard3 onClick={()  => {setSelectTime({time:"recreational_am"});setSelecServices({service:"recreational_am"})}}>
            <ServicesIcon src={imageam} />
            <ServicesH2>8:00am-11:59am</ServicesH2>
          </ServicesCard3>
          <ServicesCard3 onClick={()  => {setSelectTime({time:"recreational_pm"});setSelecServices({service:"recreational_pm"})}}>
            <ServicesIcon src={imagepm} />
            <ServicesH2> 1:00pm-5:00pm</ServicesH2>
          </ServicesCard3>
         
        </ServicesWrappers3>
        <BtnWrap>
        <Button outline color="danger" onClick={()  => {setSelecServices({service:""})}}>← Back</Button>
        </BtnWrap>
      </>
      : getSelectTime.time == "recreational_am" ?  
      <>
     
      <ServicesH1>Set a schedule and confirm
        <h6 style={{color:"black"}}>Set the date of your desired day of activities and confirm</h6>
        </ServicesH1>
 
        {!recreational_am ? <div style={{ width: "100%",height: "100",display: "flex",justifyContent: "center",
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
       disableCertainDates = {[...disable_recreational_am, ...newdisableuserRecreationalSched]}
       duelSlotDates = {recreational_am}
     />
     </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={image1} />
            <ServicesH2>DETAILS</ServicesH2>
            {newSelectedDate === "Invalid Date" ?  <ServicesH3B >Schedule<ServicesH3> | Morning 8:00am - 11:59am</ServicesH3></ServicesH3B>
            : <ServicesH3B>Schedule<ServicesH3>{newSelectedDatess} | Morning 8:00am - 11:59am</ServicesH3></ServicesH3B>}
           <hr></hr>
            <ServicesH3B>PLACE:<ServicesH3>13, 1639 Manzanitas St, Taguig, Metro Manila</ServicesH3></ServicesH3B><hr></hr>
            <ServicesH3B>TYPE OF SERVICE<ServicesH3>Recreational Activities<ServicesP>Therapy Pool, Massage, Saunas, Yoga, Ballroom, Gym, Board Games, Cinema </ServicesP></ServicesH3> </ServicesH3B>
             
            <hr className="line"></hr>
            <BtnWrap>
        <Button outline color="danger" onClick={()  => {setSelecServices({service:"recreational"});setSelectTime({time:""});setDuelSlots("")}}>← Back</Button>&nbsp;
        <Button outline color="danger" onClick={submitAppointment}>Confirm →</Button>
        </BtnWrap>
          </ServicesCard>
        </ServicesWrappers>
      }
 
      </>
       : getSelectTime.time == "recreational_pm" ?  
       <>
     
       <ServicesH1>Set a schedule and confirm
         <h6 style={{color:"black"}}>Set the date of your desired day of activities and confirm</h6>
         </ServicesH1>
  
         {!recreational_am ? <div style={{ width: "100%",height: "100",display: "flex",justifyContent: "center",
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
        disableCertainDates = {[...disable_recreational_pm, ...newdisableuserRecreationalSched]}
        duelSlotDates = {recreational_pm}
      />
      </ServicesCard>
           <ServicesCard>
             <ServicesIcon src={image1} />
             <ServicesH2>DETAILS</ServicesH2>
             {newSelectedDate === "Invalid Date" ?  <ServicesH3B >Schedule<ServicesH3> | Afternoon 1:00pm - 5:00pm</ServicesH3></ServicesH3B>
             : <ServicesH3B>Schedule<ServicesH3>{newSelectedDatess} | Afternoon 1:00pm - 5:00pm</ServicesH3></ServicesH3B>}
            <hr></hr>
             <ServicesH3B>PLACE:<ServicesH3>13, 1639 Manzanitas St, Taguig, Metro Manila</ServicesH3></ServicesH3B><hr></hr>
             <ServicesH3B>TYPE OF SERVICE<ServicesH3>Recreational Activities<ServicesP>Therapy Pool, Massage, Saunas, Yoga, Ballroom, Gym, Board Games, Cinema </ServicesP></ServicesH3> </ServicesH3B>
              
             <hr className="line"></hr>
             <BtnWrap>
         <Button outline color="danger" onClick={()  => {setSelecServices({service:"recreational"});setSelectTime({time:""});setDuelSlots("")}}>← Back</Button>&nbsp;
         <Button outline color="danger" onClick={submitAppointment}>Confirm →</Button>
         </BtnWrap>
           </ServicesCard>
         </ServicesWrappers>
       }
  
       </>

   
    : getSelecServices.service == "dialysis" ? 

    <>
    <ServicesH1>Select a Time
     <h6 style={{color:"black"}}>Choose Your Time: AM or PM</h6>
     </ServicesH1>
     <ServicesWrappers3>
       <ServicesCard3 onClick={()  => {setSelectTime({time:"am"})}}>
         <ServicesIcon src={imageam} />
         <ServicesH2>8:00am-11:59am</ServicesH2>
       </ServicesCard3>
       <ServicesCard3 onClick={()  => {setSelectTime({time:"pm"})}}>
         <ServicesIcon src={imagepm} />
         <ServicesH2> 1:00pm-4:00pm</ServicesH2>
       </ServicesCard3>
      
     </ServicesWrappers3>
     <BtnWrap>
     <Button outline color="danger" onClick={()  => {setSelecServices({service:""})}}>← Back</Button>
     </BtnWrap>
   </>
   
  //   <>
     
  //   <ServicesH1>Set a schedule and confirm
  //     <h6 style={{color:"black"}}>Set the date of your desired day of activities and confirm</h6>
  //     </ServicesH1>

  //     {!listDate ? <div style={{ width: "100%",height: "100",display: "flex",justifyContent: "center",
  //     alignItems: "center"}}><Circles color="#EF3A47" alignSelf='center' height={80} width={80}/></div>
  //     :
  //     <ServicesWrappers>
  //     <ServicesCard>
     
  //     <Calendar
  //    onSelect = {(date) => setDuelSlots(date)}
  //    minDate = {dateNow}
  //    maxDate = "12/31/2023"
  //    selectDateType = 'single'
  //    showSelectMonthArrow = { true }
  //    showSelectYearArrow = { true }
  //    showDateInputField = { false }
  //    disableDays = {[ "sun", "sat"]}
  //    disableCertainDates = {newDateArray}
  //    duelSlotDates = {listDate}
  //  />
  //  </ServicesCard>
  //       <ServicesCard>
  //         <ServicesIcon src={image1} />
  //         <ServicesH2>DETAILS</ServicesH2>
  //         {newSelectedDate === "Invalid Date" ?  <ServicesH3B >Schedule<ServicesH3>- 8:00am - 5:00pm</ServicesH3></ServicesH3B>
  //         : <ServicesH3B>Schedule<ServicesH3>{newSelectedDatess} 8:00am - 5:00pm</ServicesH3></ServicesH3B>}
  //        <hr></hr>
  //         <ServicesH3B>PLACE:<ServicesH3>13, 1639 Manzanitas St, Taguig, Metro Manila</ServicesH3></ServicesH3B><hr></hr>
  //         <ServicesH3B>TYPE OF SERVICE<ServicesH3>Dialysis<ServicesP>Dialysis</ServicesP></ServicesH3> </ServicesH3B>
           
  //         <hr className="line"></hr>
  //         <BtnWrap>
  //     <Button outline color="danger" onClick={()  => {setSelecServices({service:""})}}>← Back</Button>&nbsp;
  //     <Button outline color="danger" onClick={submitAppointment}>Confirm →</Button>
  //     </BtnWrap>
  //       </ServicesCard>
  //     </ServicesWrappers>
  //   }

  //   </>
  : getSelecServices.service == "multipurpose" ? 

  <>
  <ServicesH1>Select a Time
   <h6 style={{color:"black"}}>Choose Your Time: AM | PM | Whole Day</h6>
   </ServicesH1>
   <ServicesWrappers4>
     <ServicesCard4 onClick={()  => {setSelectTime({time:"multipurpose_am"});setSelecServices({service:"multipurpose_am"})}}>
       <ServicesIcon src={imageam} />
       <ServicesH2>8:00am-11:59am</ServicesH2>
     </ServicesCard4>
     <ServicesCard4 onClick={()  => {setSelectTime({time:"multipurpose_pm"});setSelecServices({service:"multipurpose_pm"})}}>
       <ServicesIcon src={imagepm} />
       <ServicesH2> 1:00pm-5:00pm</ServicesH2>
     </ServicesCard4>
     <ServicesCard4 onClick={()  => {setSelectTime({time:"multipurpose_wholeday"});setSelecServices({service:"multipurpose_wholeday"})}}>
       <ServicesIcon src={imagesunny} />
       <ServicesH2>Whole Day</ServicesH2>
     </ServicesCard4>
    
   </ServicesWrappers4>
   <BtnWrap>
   <Button outline color="danger" onClick={()  => {setSelecServices({service:""})}}>← Back</Button>
   </BtnWrap>
 </>

    : getSelectTime.time == "multipurpose_am" ?  
      <>
     
      <ServicesH1>Set a schedule and confirm
        <h6 style={{color:"black"}}>Set the date of your desired day of activities and confirm</h6>
        </ServicesH1>
 
        {!recreational_am ? <div style={{ width: "100%",height: "100",display: "flex",justifyContent: "center",
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
       disableCertainDates = {[...newdisableuserMultipurposeSched, ...newdisableuserMultipurposeSchedAm, ...newdisableuserMultipurposeSchedWhole]}
     />
     </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={image1} />
            <ServicesH2>DETAILS</ServicesH2>
            {newSelectedDate === "Invalid Date" ?  <ServicesH3B >Schedule<ServicesH3> | Morning 8:00am - 11:59am</ServicesH3></ServicesH3B>
            : <ServicesH3B>Schedule<ServicesH3>{newSelectedDatess} | Morning 8:00am - 11:59am</ServicesH3></ServicesH3B>}
           <hr></hr>
            <ServicesH3B>PLACE:<ServicesH3>13, 1639 Manzanitas St, Taguig, Metro Manila</ServicesH3></ServicesH3B><hr></hr>
            <ServicesH3B>TYPE OF SERVICE<ServicesH3>Multipurpose Hall<ServicesP> A flexible space that can be used for a variety of events and activities, such as meetings, conferences, and social gatherings.</ServicesP></ServicesH3> </ServicesH3B>
             
            <hr className="line"></hr>
            <BtnWrap>
        <Button outline color="danger" onClick={()  => {setSelecServices({service:"multipurpose"});setSelectTime({time:""});setDuelSlots("")}}>← Back</Button>&nbsp;
        <Button outline color="danger" onClick={submitAppointment}>Confirm →</Button>
        </BtnWrap>
          </ServicesCard>
        </ServicesWrappers>
      }
 
      </>
      :

      getSelectTime.time == "multipurpose_pm" ?  
      <>
     
      <ServicesH1>Set a schedule and confirm
        <h6 style={{color:"black"}}>Set the date of your desired day of activities and confirm</h6>
        </ServicesH1>
 
        {!recreational_am ? <div style={{ width: "100%",height: "100",display: "flex",justifyContent: "center",
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
       disableCertainDates = {[...newdisableuserMultipurposeSched, ...newdisableuserMultipurposeSchedPm, ...newdisableuserMultipurposeSchedWhole]}
     />
     </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={image1} />
            <ServicesH2>DETAILS</ServicesH2>
            {newSelectedDate === "Invalid Date" ?  <ServicesH3B >Schedule<ServicesH3> | Afternoon 1:00pm - 5:00pm</ServicesH3></ServicesH3B>
            : <ServicesH3B>Schedule<ServicesH3>{newSelectedDatess} | Afternoon 1:00pm - 5:00pm</ServicesH3></ServicesH3B>}
           <hr></hr>
            <ServicesH3B>PLACE:<ServicesH3>13, 1639 Manzanitas St, Taguig, Metro Manila</ServicesH3></ServicesH3B><hr></hr>
            <ServicesH3B>TYPE OF SERVICE<ServicesH3>Multipurpose Hall<ServicesP> A flexible space that can be used for a variety of events and activities, such as meetings, conferences, and social gatherings.</ServicesP></ServicesH3> </ServicesH3B>
             
            <hr className="line"></hr>
            <BtnWrap>
        <Button outline color="danger" onClick={()  => {setSelecServices({service:"multipurpose"});setSelectTime({time:""});setDuelSlots("")}}>← Back</Button>&nbsp;
        <Button outline color="danger" onClick={submitAppointment}>Confirm →</Button>
        </BtnWrap>
          </ServicesCard>
        </ServicesWrappers>
      }
 
      </>
      :

      getSelectTime.time == "multipurpose_wholeday" ?  
      <>
     
      <ServicesH1>Set a schedule and confirm
        <h6 style={{color:"black"}}>Set the date of your desired day of activities and confirm</h6>
        </ServicesH1>
 
        {!recreational_am ? <div style={{ width: "100%",height: "100",display: "flex",justifyContent: "center",
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
       disableCertainDates = {[...newdisableuserMultipurposeSched, ...newdisableuserMultipurposeSchedPm, ...newdisableuserMultipurposeSchedAm]}
     />
     </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={image1} />
            <ServicesH2>DETAILS</ServicesH2>
            {newSelectedDate === "Invalid Date" ?  <ServicesH3B >Schedule<ServicesH3> | WholeDay 8:00am - 5:00pm</ServicesH3></ServicesH3B>
            : <ServicesH3B>Schedule<ServicesH3>{newSelectedDatess} | WholeDay 8:00am - 5:00pm</ServicesH3></ServicesH3B>}
           <hr></hr>
            <ServicesH3B>PLACE:<ServicesH3>13, 1639 Manzanitas St, Taguig, Metro Manila</ServicesH3></ServicesH3B><hr></hr>
            <ServicesH3B>TYPE OF SERVICE<ServicesH3>Multipurpose Hall<ServicesP> A flexible space that can be used for a variety of events and activities, such as meetings, conferences, and social gatherings.</ServicesP></ServicesH3> </ServicesH3B>
             
            <hr className="line"></hr>
            <BtnWrap>
        <Button outline color="danger" onClick={()  => {setSelecServices({service:"multipurpose"});setSelectTime({time:""});setDuelSlots("")}}>← Back</Button>&nbsp;
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
            A variety of services including Therapy Pool, Massage, Saunas, Yoga, Ballroom, Gym, Board Games, and Cinema for leisure and relaxation.
            </ServicesP>
          </ServicesCard2>
          <ServicesCard2 onClick={()  => {setSelecServices({service:"dialysis"})}}>
            <ServicesIcon src={image4} />
            <ServicesH2>Dialysis</ServicesH2>
            <ServicesP>
            A service allowing users to book a schedule for dialysis treatment 4 times per month.
            </ServicesP>
          </ServicesCard2>
          <ServicesCard2 onClick={()  => {setSelecServices({service:"multipurpose"})}}>
            <ServicesIcon src={image5} />
            <ServicesH2>Multi-purpose Hall</ServicesH2>
            <ServicesP>
            A flexible space that can be used for a variety of events and activities, such as meetings, conferences, and social gatherings.
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
    width: 100%;
    
    }
    .cld_container table {
      height: 47vh;
  }
  .cld_container td {
    font-size: 16px;
    font-weight: bold;
}

    @media screen and (max-width: 480px) {
      .cld_container td {
        font-size: 0.8rem;
        margin-top: 20px;
    }
    }

    .line {
      border-top: 1px solid red;
      width: 100%;
      
      }
      .cld_slotWidth {
          width: 40%;
          min-width: 34rem;

      }

      @media screen and (max-width: 780px) {
        .cld_slotWidth {
          width: 20%;
          min-width: 27rem;

      }
    }
      
      @media screen and (max-width: 480px) {
        .cld_slotWidth {
          width: 20%;
          min-width: 24rem;

      }
      }

      .cld_noslotWidth {
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
      height: 27px;
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

    @media screen and (max-width: 480px) {
      .cld_availableSlots {
        height: 18px;
      width: 80%;
        position: center;
        top: 0;
        left: 0;
        font-size: 0.8rem;
        border-radius: 0 0 16px 0;
        color: #fff;
        background: #EF3A47;
        box-shadow: 0px 0px 3px 0px #000000;
        text-align: left;
    }
    }

    @media screen and (max-width: 780px) {
      .cld_availableSlots {
        height: 18px;
      width: 80%;
        position: center;
        top: 0;
        left: 0;
        font-size: 1rem;
        border-radius: 0 0 16px 0;
        color: #fff;
        background: #EF3A47;
        box-shadow: 0px 0px 3px 0px #000000;
        text-align: left;
    }
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

  @media screen and (max-width: 480px) {
    .cld_totalSlots {
      height: 18px;
      width: 80%;
      position: absolute;
      bottom: 0;
      right: 0;
      font-size: 0.8rem;
      border-radius: 16px 0 0 0;
      box-shadow: 0px 0px 3px 0px #ff6500;
      background: #fbddb9;
      color: #000000;
  }
  }

  @media screen and (max-width: 780px) {
    .cld_totalSlots {
      height: 18px;
      width: 80%;
      position: absolute;
      bottom: 0;
      right: 0;
      font-size: 1rem;
      border-radius: 16px 0 0 0;
      box-shadow: 0px 0px 3px 0px #ff6500;
      background: #fbddb9;
      color: #000000;
  }
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

    @media screen and (max-width: 480px) {
      .cld_container th {
        color: #000000;
        font-size: 0.9rem;
        font-weight: bold;
    }
    }
        `}
      </style>
    </div>
    </Container>
  );
};

export default HeroImage;
