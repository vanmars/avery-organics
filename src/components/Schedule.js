import React from 'react';
import Day from './Day';

const marketSchedule = [  
  {  
     day: "Sunday",
     location: "Lents International",
     hours: "9:00am - 2:00pm",
     booth: "4A"
  },
  {  
     day: "Monday",
     location: "Pioneer Courthouse Square",
     hours: "10:00am - 2:00pm",
     booth: "7C"
  },
  {  
     day: "Tuesday",
     location: "Hillsboro",
     hours: "5:00pm - 8:30pm",
     booth: "1F"
  },
  {  
     day: "Wednesday",
     location: "Shemanski Park",
     hours: "10:00am - 2:00pm",
     booth: "3E"
  },
  {  
     day: "Thursday",
     location: "Northwest Portland",
     hours: "2:00pm - 6:00pm",
     booth: "6D"
  },
  {  
     day: "Saturday",
     location: "Beaverton",
     hours: "10:00am - 1:30pm",
     booth: "9G"
  }
 ];

function Schedule(){
  return(
    <React.Fragment>
      <h3 id="schedule-header">Weekly Schedule</h3>
      <div id="schedule-card-holder">
         {marketSchedule.map((day, index) => 
         <div class="schedule-card">
            <Day 
               name={day.day}
               location={day.location}
               hours={day.hours}
               booth={day.booth}
               key={index}
            />
         </div>
         )}
      </div>
      
    </React.Fragment>
  );
}

export default Schedule;