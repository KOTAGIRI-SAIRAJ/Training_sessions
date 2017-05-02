/**
 * Created by Sai Raj on 02-05-2017.
 */
$(document).ready(function(){

    $('#button').click(function(){
        alert("hi1");
        var fname= $('#fname').val();
        var lname= $('#lname').val();
        var mailid= $('#mailid').val();
        var mobnum= $('#mobnum').val();
        var det;
        det = new details();
        det.fname = fname;
        det.slname = lname;
        det.semail = mailid;
        det.smob = mobnum;
        var tot = "FirstName is: "+det.fname +"LastName is: "+det.lname+" EmailId is: "+det.semail+" MobileNumber is: "+det.smob;
        alert(tot);
        $('#textdata').html(tot);
        alert("hi");
    })
})
