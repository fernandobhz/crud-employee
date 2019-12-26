# Employee CRUD
https://frozen-tor-62924.herokuapp.com/

## GET /empoloyees
Return a list of all empoloyees 

## GET /empoloyees/:id
Return the specified employee

## PUT /empoloyees
Update the employee, remember to pass the _rev

## POST /empoloyees
Insert a new employee and assign an ID to it

## Schema
  _id: uuid autogenerated ( required for updating/putting )  
  _rev: needed for updating/putting_
  
  name: the name of employee    
    min: 1  
    max: 255  
    required  

  pid: personal id of employee  
    integer  
    min: 1
    required  

  eid: email id
    min: 1  
    max: 255  
    required

  password  
  string  
  min: 6
