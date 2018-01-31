$(document).ready(function() {
var info;
var a;
  $("#listbtn").click(list);

  $(document).on("click", ".delete", function() {
    a = info[this.id];
    let b = JSON.stringify(a);
    console.log(b);
    $.ajax({
      url: "http://192.168.1.81:8080/delete",
      data: b,
      contentType: "application/json",
      type: "POST",
      dataType: "json",
      success: function(data) {
        list();
      }
    });

    return;
  });


  $(document).on("click", ".edit", function() {
    a = info[this.id];
    console.log(a.id);
    console.log(a);
    $("#newbtn").hide();
    $("#listbtn").hide();
    $(".list").show();
    $("#submit").show();
    $("#f").remove();
    $("#editSubmit").remove();
    $(".list").append("<form id=" + "f" + ">");
    $(".tform").remove();
    $("form").append("Username" + "</br>" + "<input type = " + " text " + "name = " + " userName " + " value = " + a.userName + " id= " + " vardas " + ">" + "</br>");
    $("form").append("Email" + "</br>" + "<input type = " + " text " + " name =" + " eMail " + " value = " + a.eMail + " id = " + " eMail " + ">" + "</br>");
    $("form").append("Age" + "</br>" + "<input type = " + " text " + " name = " + " age " + " value = " + a.age + " id = " + " age " + ">" + "</br>");
    $(".list").append("</form>");
    $(".list").append("<button type = " + "button" + " name = " + "submit" + " id = " + "editSubmit" + ">" + "Submit" + "</button>");
    $(".list").append("<button type = 'button'  name = 'cansel' id = 'cancel'>" + "Cancel" + "</button>");

    $("#cancel").click( function(){
      $("#cancel").remove();
      list();
    });

    $("#editSubmit").click( function() {
      let temp = $("input#age").val();
      old = parseInt(temp);
      let str = {
        id: a.id,
        userName: $("input#vardas").val(),
        eMail: $("input#eMail").val(),
        age: old
      };
      let b = JSON.stringify(str);
      console.log(b);
      $.ajax({
        url: "http://192.168.1.81:8080/update",
        data: b,
        contentType: "application/json",
        type: "POST",
        dataType: "json",
        success: function(data) {
          console.log(data);

          list();
        }
      });
      return;
    });

    return;
  });


  $("#newbtn").click(function() {
    $("#newbtn").hide();
    $("#listbtn").hide();
    $(".list").append("<form id=" + "f" + ">");
    $(".tform").remove();
    $("#f").append("Username" + "</br>" + "<input type = " + " text " + "name = " + " userName " + "id= " + " vardas " + ">" + "</br>");
    $("#f").append("Email" + "</br>" + "<input type = " + " text " + " name =" + " eMail " + " id = " + " eMail " + ">" + "</br>");
    $("#f").append("Age" + "</br>" + "<input type = " + " text " + " name = " + " age " + "id = " + " age " + ">" + "</br>");
    $(".list").append("<button type = " + "button" + " name = " + "submit" + " id = " + "submit" + ">" + "Submit" + "</button>");
    $(".list").append("<button type = 'button'  name = 'cansel' id = 'cancel'>" + "Cancel" + "</button>");

    $("#cancel").click( function(){
      $("#cancel").remove();
      list();
    });

    $("#submit").click(function() {
      let temp = $("#age").val();
      let old = parseInt(temp);
      let str = {
        userName: $("#vardas").val(),
        eMail: $("#eMail").val(),
        age: old
      };
      let b = JSON.stringify(str);

      $.ajax({
        url: "http://192.168.1.81:8080/add",
        data: b,
        contentType: "application/json",
        type: "POST",
        dataType: "json",
        success: function(data) {
          console.log(data);
          list();
        }
      });
    });
  });


  function list() {
    $.ajax({
      url: "http://192.168.1.81:8080/list",
      type: "GET",
      success: function(data) {



        info = data;
        console.log(info);
        $("#submit").remove();
        $("#editSubmit").remove();
        $(".list").show();
        $("form").remove();
        $("#newbtn").show();
        $("#listbtn").show();
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
          console.log(tage);
          console.log(data.length);

        //   $(".tform").append("<tr id= " + i + " >" + "<td>" + tid + "</td>" + "<td>" + tuser  + "</td>" + "<td>" + tmail  + "</td>" + "<td>" + tage + "</td>" + "<td>" +
        //     "<button type = " + "button" + " name = " + "delete" + " class = " + "delete" + " id = " + i + ">" + "Delete" + "</button>" + "</td>" +
        //     "<td>" +
        //     "<button type = " + "button" + " name = " + "edit" + " class = " + "edit" + " id = " + i + ">" + "Edit" + "</button>" + "</td>" + "</tr>");
        // //  $(".tform").append("<tr id= " + i + " >");
          $(".tform").append("<tr id= " + i + " >");
          $("tr#"+i).append("<td>");
          $("td").last().append(document.createTextNode(tid));
          $("tr#"+i).append("<td>");
          $("td").last().append(document.createTextNode(tuser));
          $("tr#"+i).append("<td>");
          $("td").last().append(document.createTextNode(tmail));
          $("tr#"+i).append("<td>");
          $("td").last().append(document.createTextNode(tage));
          $("tr#"+i).append("<td>");
          $("td").last().append(document.createTextNode(tuser));
          $("tr#"+i).append("<td>");
          $("td").last().append("<button type = " + "button" + " name = " + "delete" + " class = " + "delete" + " id = " + i + ">" + "Delete" + "</button>");
          $("tr#"+i).append("<td>");
          $("td").last().append("<button type = " + "button" + " name = " + "edit" + " class = " + "edit" + " id = " + i + ">" + "Edit" + "</button>");
        }

      }
    });
    return;
  }
});
