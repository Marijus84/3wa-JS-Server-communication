
$(document).ready(function(){

  $("#listbtn").click(function(){
      $.ajax ({
          url:  "http://192.168.1.81:8080/list",
          type: "GET",
          success: function (data) {
            console.log(data);

          //  var info = JSON.parse(data);
            //console.log(info);
            $(".list").append("<table></table>");
            $("table").append("<tr>");
            $("tr").append("<th id = '1'>id</th>");
            $("tr").append("<th id = '2'>userName</th>");
            $("tr").append("<th id = '3'>eMail</th>");
            $("tr").append("<th id = '4'>age</th>");
            $("#1").append("</br>");
            $("#2").append("</br>");
            $("#3").append("</br>");
            $("#4").append("</br>");
            // $("table").append("</tr>");

            for (let i = 0; i < data.length; i++) {
              console.log(data.length);
              tid = data[i].id;
              console.log(tid);
              tuser = data[i].userName;
              console.log(tuser);
              tmail = data[i].eMail;
              console.log(tmail);
              tage = data[i].age;
              console.log(tage);

              $("#1").append("</br>");
              $("#1").append(tid);
              $("#2").append("</br>");
              $("#2").append(tuser);
              $("#3").append("</br>");
              $("#3").append(tmail);
              $("#4").append("</br>");
              $("#4").append(tage);

            //  $("tr").append("</td>");
              // $("tr").append("<td>");
              //
              // $("tr").append("</td>");
              // $("tr").append("<td>");
              //
              // $("tr").append("</td>");
              // $("tr").append("<td>");
              //
              // $("tr").append("</td>");
            //  $("table").append("</tr>");
            }





          }
        });
      });

























  $("#submit").click(function(){
    let old = parseInt(document.getElementById('age').value);
    console.log(old, typeof(old));
    let thename = document.getElementById('name').value;
    console.log(typeof(thename));
    let themail = document.getElementById('eMail').value;
     let o = {
       userName: thename,
       eMail: themail,
       age: old
     }

    let a = JSON.stringify(o);

    $.ajax ({
      url:  "http://192.168.1.81:8080/add",
      data: a,
      contentType: "application/json",
      type: "POST",
      dataType:"json",
      success: function (data) {
        console.log(data);
      }
    })
 });



});
