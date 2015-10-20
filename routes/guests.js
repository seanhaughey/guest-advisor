User = mongoose.model('Guest'); // Declare a new mongoose User

app.get('/search_guest', function(req, res) {
   var last_name= last_name;
   var first_name= first_name;
   var full_name = first_name + last_name;
   var regex = new RegExp(req.query["term"], 'i');
   var query = User.find({email: regex}, { 'email': 1 }).sort({"updated_at":-1}).sort({"created_at":-1}).limit(01);
        
      // Execute query in a callback and return users list
  query.exec(function(err, guests) {
      if (!err) {
         // Method to construct the json result set
         var result = buildResultSet(guests); 
         res.send(result, {
            'Content-Type': 'application/json'
         }, 200);
      } else {
         res.send(JSON.stringify(err), {
            'Content-Type': 'application/json'
         }, 404);
      }
   });
});