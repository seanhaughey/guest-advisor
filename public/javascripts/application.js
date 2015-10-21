$(function () {

  $("#search-term").autocomplete({
      source: function (request, response) {
         $.ajax({
            url: "/api/guests",
            method: "GET",
            dataType: "json",
            data: request,
              // request is the value of search input
            success: function (data) {
              // Map response values to fiedl label and value
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
             window.location.href = "/guests/"+ ui.item.value;
            event.preventDefault();


            // optionnal: submit the form after field has been filled up
            $('#submitit').submit();
         }
  });

});