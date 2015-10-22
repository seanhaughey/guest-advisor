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

});