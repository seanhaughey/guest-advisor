$(function () {


  $("#search-term").autocomplete({
      source: function (request, response) {
         $.ajax({
            url: "/api/guests",
            method: "GET",
            dataType: "json",
            data: {term: request},
             
            success: function (data) {
               response($.map(data, function (el) {
                  return {
                     label: el.email,
                     // label: el.last_name,
                     // value: el.first_name,
                     value: el._id, 
                    
                  };
                  }));
               }
            });
         },
         
        
         minLength: 4, 
         
         focus: function (event, ui) { 
            this.value = ui.item.label; 
            event.preventDefault();
         },
         select: function (event, ui) {
            this.value = ui.item.label;

            $(this).next("input").val(ui.item.value); 
             window.location.href = "/guests/"+ ui.item.value;
            event.preventDefault();


            $('#submitit').submit();
         }
  });
   

   //} //see if created, if not create on submit with date to Guest Reviews [] 
     //if so, update on submit with date to Guests Reviews []
     //prepend any creation or update that has been made in the last 3 sec
   // function saveTime() {
   //    $('#submitit').submit()

   // }

   function updateContent() {
      var updateCheck = 3000;
      var rightNow = Date.now();
      var updateSince = rightNow - updateCheck; 

        $.ajax ({
         type: "GET",
         url: "/api/reviews/",
         dataType: "json",
         data: { 
            updateSince: updateSince
          },
         success: function(data, textStatus, jqXHR) {
            // check for duplicates
            for (var i = 0; i < data.length; i++) {
               $('#live').html( "<li>" + "<a href='/guests/<%=reviews.guest_ID'>"+data[i]['guestName']+ "</a>" + ' was reviewed by ' + "<a href='/users/<%=reviews.user_ID'>" + data[i]['userName'] + "</li>");
            }
         }
      });
    
    
   }
   //updateContent();
   setInterval(updateContent, 3000);
});