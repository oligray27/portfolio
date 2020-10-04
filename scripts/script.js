function welcome() {
  var text = document.getElementById("dateGreet")
  
      var currentTime = moment()
        var endTime = moment("23:59", "HH:mm"); 
      var morningStart = moment("00:00", "HH:mm");
      var morningEnd = moment("12:00", "HH:mm");
  
      var afternoonStart = moment("12:01", "HH:mm");
      var afternoonEnd = moment("17:59", "HH:mm");
  
      var eveningStart = moment("18:00", "HH:mm");
      var eveningEnd = moment("23:59", "HH:mm");
  
  
        console.log(endTime)
        console.log(currentTime.isBefore(endTime)); //true
  
        if(currentTime.isAfter(morningStart) && currentTime.isBefore(morningEnd)){
          text.innerHTML = "Good Morning, my name is Oliver. I am a CS student at City University, London"
        }
        else if(currentTime.isAfter(afternoonStart) && currentTime.isBefore(afternoonEnd)){
          text.innerHTML = "Good Afternoon, my name is Oliver. I am a CS student at City University, London"
        }
        else if(currentTime.isAfter(eveningStart) && currentTime.isBefore(eveningEnd)){
          text.innerHTML = "Good Evening, my name is Oliver. I am a CS student at City University, London"
        }
  }
