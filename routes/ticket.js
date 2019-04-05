var use_expresss=require('express');
var my_router=use_expresss.Router();
var ticketModel=require('../models/TicketSchema');

my_router.get('/',(req,res)=>    //landing page for the ticket route
{
    res.send('This is the ticket page')
});


my_router.get('/maketicket/:person/:problem/:des',(req,res)=>   //creates a ticket
{
ticketModel.create({person_reporting:req.params.person, problem_description:req.params.problem, ticket_date:req.params.des,},(err,results)=>
    {
        if(err) res.send(err);
        else res.send(results);
    });
});


my_router.get('/alltickets',(req,res)=>   //list all tickets
{
    ticketModel.find({},(err,results)=>
    {
       if (err) res.send(err);
       else res.send(results);
    });
});






module.exports=my_router;