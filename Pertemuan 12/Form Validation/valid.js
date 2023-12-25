function check(){
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let time=document.getElementById("time").value;
    let ticket=document.getElementById("ticket").value;

    let nm=document.getElementById("nm")
    let em=document.getElementById("em")
    let tm=document.getElementById("tm")
    let tc=document.getElementById("tc")

    if (name == "ihsan"){
        if (email == "algi070605@gmail.com"){
            if (time == "08:30"){
                if (ticket <= 1){
                    alert("Error :\nMin Ticket 1")
                }
                else if(ticket <= 10){
                    nm.innerHTML="Name : "+ name
                    em.innerHTML="Email : "+ email
                    tm.innerHTML="Departure Time : "+ time
                    tc.innerHTML="Number Of Ticket : "+ ticket
                }
                else{
                    alert("Error :\nMax Ticket 10")
                }

            }
            else{
                alert("Error :\nDeparture time not found")
            }
        }
        else{
            alert("Error :\nThe email is incorrect")
        }
    }
    else{
        alert("Error :\nName not found please check again")
    }
}