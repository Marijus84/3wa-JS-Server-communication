
$(document).ready(function(){

  $("#listbtn").click(function(){
      $.ajax ({
          url:  "http://192.168.1.81:8080/list",
          type: "GET",
          success: function (data) {
            console.log(data);

          //  var info = JSON.parse(data);
            //console.log(info);
            $(".list").append("<table class ='tform'></table>");
            $("table").append("<tr>");
            $("tr").append("<th>id</th>");
            $("tr").append("<th>userName</th>");
            $("tr").append("<th>eMail</th>");
            $("tr").append("<th>age</th>");

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

              $(".tform").append("<tr id= " + i + " >" + "<td>" + tid + "</td>" + "<td>" + tuser + "</td>" + "<td>" + tmail + "</td>" + "<td>" + tage + "</td>"  + "</tr>");
            }

          }
        });



      });


  $("#newbtn").click(function(){
    $("#newbtn").hide();
    $("#listbtn").hide();
    $(".list").append("<form id=" + "f" + ">");
    $(".tform").hide();
    $("form").append("Username" + "</br>" + "<input type = " + " text "  + "name = " + " userName " + "id= "+ " vardas "+ ">" + "</br>");
    $("form").append("Email" + "</br>" + "<input type = " + " text "  + " name =" + " eMail " + " id = "+ " eMail "+ ">" + "</br>");
    $("form").append("Age" + "</br>" + "<input type = " + " text "  + " name = " + " age " + "id = "+ " age "+ ">" + "</br>");
    $(".list").append("</form>");
    $(".list").append("<button type = "+ "button" + " name = " + "submit" + " id = " + "submit" + ">"+ "Submit" + "</button>" );



  $(document).on("click", "#submit", function(){
    // var str = {
    //   id = 1,
    //   userName = "a",
    //   eMail = "aa",
    //    age = 25
    // };
    //
    let temp = $("input#age").val();
    ol = parseInt(temp);
     let str =  {userName: $("input#vardas").val(), eMail:$("input#eMail").val(), age: ol };
    //
    console.log(str);
    //

     let b = JSON.stringify(str);
     console.log(str);
     console.log(b);

    $.ajax ({
      url:  "http://192.168.1.81:8080/add",
      data: b,
      contentType: "application/json",
      type: "POST",
      dataType:"json",
      success: function (data) {
        console.log(data);
      }
      })

      $(".list").hide();
      $("#newbtn").show();
      $("#listbtn").show();
      return;


    })







    // var data = JSON.stringify(str);
    // console.log(data);
    // //
    // $.ajax ({
    //   url:  "http://192.168.1.81:8080/add",
    //   data: a,
    //   contentType: "application/json",
    //   type: "POST",
    //   dataType:"json",
    //   success: function (data) {
    //     console.log(data);
    //   }
    // })
    //console.log( $("#f"));
    //console.log( $("#f.elements[0].value"));
    });



    // let old = parseInt(document.getElementById('age').value);
    // console.log(old, typeof(old));
    // let thename = document.getElementById('name').value;
    // console.log(typeof(thename));
    // // let themail = document.getElementById('eMail').value;
    //  let o = {
    //    userName: "gfg",
    //    eMail: "test",
    //    age: 25
    //  }
    //





});
