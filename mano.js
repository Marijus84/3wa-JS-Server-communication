$(document).ready(function(){

  $(document).on("click", "#listbtn",  function(){
    $.ajax ({
      url:  "http://192.168.1.81:8080/list",
      type: "GET",
      success: function (data) {
        $(".list").show();
        $("form").hide();
        $("#submit").hide();
        $(".tform").remove();
        $(".list").append("<table class ='tform'></table>");
        $("table").append("<tr>");
        $("tr").append("<th>id</th>");
        $("tr").append("<th>userName</th>");
        $("tr").append("<th>eMail</th>");
        $("tr").append("<th>age</th>");
          for (i = 0; i < data.length; i++) {
            tid = data[i].id;
            tuser = data[i].userName;
            tmail = data[i].eMail;
            tage = data[i].age;
            $(".tform").append("<tr id= " + i + " >" + "<td>" + tid + "</td>" + "<td>" + tuser + "</td>" + "<td>" + tmail + "</td>" + "<td>" + tage + "</td>"  + "<td>"
            +"<button type = "+ "button" + " name = " + "delete" + " class = " + "delete"  + " id = " + i + ">"+ "Delete" + "</button>"  + "</td>"
            + "<td>"
            +"<button type = "+ "button" + " name = " + "edit" + " class = " + "edit"  + " id = " + i + ">"+ "Edit" + "</button>"  + "</td>"+"</tr>");
            }

          $(document).on("click", ".delete", function(){
              a = data[this.id];
              let b = JSON.stringify(a);
              $.ajax ({
                url:  "http://192.168.1.81:8080/delete",
                data: b,
                contentType: "application/json",
                type: "POST",
                dataType:"json",
                success: function (data) {
                  }
                });
              return;
            });

          $(document).on("click", ".edit", function(){
              a = data[this.id];
              $("#newbtn").hide();
              $("#listbtn").hide();
              $(".list").show();
              $("#submit").show();
              $(".list").append("<form id=" + "f" + ">");
              $(".tform").hide();
              $("form").append("Username" + "</br>" + "<input type = " + " text "  + "name = " + " userName "+ " value = " +  a.userName  + " id= "+ " vardas "+ ">" + "</br>" );
              $("form").append("Email" + "</br>" + "<input type = " + " text "  + " name =" + " eMail " + " value = " +  a.eMail + " id = "+ " eMail "+ ">" + "</br>");
              $("form").append("Age" + "</br>" + "<input type = " + " text "  + " name = " + " age " + " value = " +  a.age + "id = "+ " age "+ ">" + "</br>");
              $(".list").append("</form>");
              $(".list").append("<button type = "+ "button" + " name = " + "submit" + " id = " + "submit" + ">"+ "Submit" + "</button>" );

              let temp = $("input#age").val();
              old = parseInt(temp);
              let str =  {userName: $("input#vardas").val(), eMail:$("input#eMail").val(), age: old };
              let b = JSON.stringify(str);

              $.ajax ({
                url:  "http://192.168.1.81:8080/edit",
                data: b,
                contentType: "application/json",
                type: "POST",
                dataType:"json",
                success: function (data) {
                 console.log(data);
                }
              })
            return;
          });
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
    });

    $(document).on("click", "#submit", function(){
      let temp = $("input#age").val();
      old = parseInt(temp);
      let str =  {userName: $("input#vardas").val(), eMail:$("input#eMail").val(), age: old };
      let b = JSON.stringify(str);

      $.ajax ({
        url:  "http://192.168.1.81:8080/add",
        data: b,
        contentType: "application/json",
        type: "POST",
        dataType:"json",
        success: function (data) {
          console.log(data);
        }
      });

      $(".list").hide();
      $("#newbtn").show();
      $("#listbtn").show();
      return;
    });

  return;
});
