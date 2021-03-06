# Employee CRUD
https://frozen-tor-62924.herokuapp.com/



## Users  
---

### GET /users
Return a list of all users 

### GET /users/:id
Return the specified user

### PUT /users
Update the user, remember to pass the _rev

### POST /users
Insert a new user and assign an ID to it

### Schema
  _id: uuid autogenerated ( required for updating/putting/deleting )  
  _rev: required for updating/putting/deleting
  
  username    
  > min: 1  
  > max: 255  
  > required  

  password  
  > string  
  > min: 6

## Employees
---

### GET /empoloyees
Return a list of all empoloyees 

### GET /empoloyees/:id
Return the specified employee

### PUT /empoloyees
Update the employee, remember to pass the _rev

### POST /empoloyees
Insert a new employee and assign an ID to it

### Schema
  _id: uuid autogenerated ( required for updating/putting/deleting )  
  _rev: required for updating/putting/deleting
  
  name: the name of employee    
  > min: 1  
  > max: 255  
  > required  

  pid: personal id of employee  
  > integer  
  > min: 1
  > required  

  eid: email id
  > min: 1  
  > max: 255  
  > required
