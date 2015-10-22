$(function () {


  $("#search-term").autocomplete({
      source: function (request, response) {
         $.ajax({
            url: "/api/guests",
            type: "GET",
            data: request,  // request is the value of search input
            success: function (data) {
              // Map response values to fiedl label and value
               response($.map(data, function (el) {
                  return {
                     label: el.email,
                     // label: el.last_name,
                     value: el.full_name, 
                     // value: el.last_name
                  };
                  }));
               }
            });
         },
         
         // The minimum number of characters a user must type before a search is performed.
         minLength: 5, 
         
         // set an onFocus event to show the result on input field when result is focused
         focus: function (event, ui) { 
            this.value = ui.item.label; 
            // Prevent other event from not being execute
            event.preventDefault();
         },
         select: function (event, ui) {
            // Prevent value from being put in the input:
            this.value = ui.item.label;
            // Set the id to the next input hidden field
            $(this).next("input").val(ui.item.value); 
            // Prevent other event from not being execute            
            event.preventDefault();
            // optionnal: submit the form after field has been filled up
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
         url: "/api/reviews",
         dataType: "json",
         data: { 
            updateSince: updateSince
          },
         success: function(data, textStatus, jqXHR) {
            // check for duplicates
            console.log(data);
         
            for (var i = 0; i < data.length; i++) {
               $('#live').prepend( "<li> Guest "+ 'you did it' + ", has been reviewed</li>");
            }
         }
      });
    
    
   }
   //updateContent();
   setInterval(updateContent, 3000);
});