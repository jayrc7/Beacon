 function fillCheck() {
      if ( document.getElementById("name").value.length === 0 ) {
        document.getElementById("nameCheck").style.opacity="1.0";
      }
      if ( document.getElementById("email").value.length === 0) {
        document.getElementById("emailCheck").style.opacity="1.0";
      }
      if ( document.getElementById("occasion").value.length === 0) {
        document.getElementById("occasionCheck").style.opacity="1.0";
      }
      if ( document.getElementById("time").value.length === 0) {
        document.getElementById("timeCheck").style.opacity="1.0";
      }

      // Check Dropouts
      if ( document.getElementById("hangout").value.length === 0) {
        document.getElementById("dropCheck").style.opacity="1.0";
      }
      else if ( document.getElementById("sport").value.length === 0) {
        document.getElementById("dropCheck").style.opacity="1.0";
      }
      else if ( document.getElementById("event").value.length === 0) {
        document.getElementById("dropCheck").style.opacity="1.0";
      }
    }

    function unfill() {
      document.getElementById("nameCheck").style.opacity="0";
      document.getElementById("emailCheck").style.opacity="0";
      document.getElementById("occasionCheck").style.opacity="0";
      document.getElementById("timeCheck").style.opacity="0";
      document.getElementById("dropCheck").style.opacity="0";
      
    }

