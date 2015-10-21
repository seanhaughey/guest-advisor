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
      
      $.ajax ({
         type: "GET",
         url: "/api/guests",
         dataType: "json",
         data: { 
               
          },
         success: function(data, textStatus, jqXHR) {
            // check for duplicates
            //console.log(data[9].name);
            
            var updateCheck = 3000;
            var rightNow = Date.now();
            var updateWindow = rightNow - updateCheck; 
            //console.log(data[i].created_at);
            for (var i = 0; i < Guest.length; i++)
            if ((data[9].created_at || data[9].updated_at) > updateWindow) {
               console.log(data.created_at);
               console.log('new update');
            }
            else {
               console.log('no new updates, yet');
            }
            // if(verifyGuest(data) == false){

            // }
            // else{
            //    console.log("User already exists in database");
            // }
            // for (var i = 0; i < data['Search'].length; i++) {
            //    $('#live').append( "<div>"+ data['Search'][i]['Name'] + ", " + data['Search'][i]['Email'] + ", " + data['Search'][i]['Rating'] + ", " + data['Search'][i]['Reviews' + "</div>"]);
            // }
         }
      });
    
    
   }
   updateContent();
   //setInterval(updateContent, 3000);
});