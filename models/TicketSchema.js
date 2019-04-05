var seviper= require('mongoose');
var make_schema=seviper.Schema;
var ticket_model=new make_schema(
    {
      person_reporting:String,
      problem_description:String,
      ticket_date:String,
    }
);



module.exports=seviper.model('Report Ticket',ticket_model);