README for Lab 6 - Messages
Steven Manwaring 
10/22/15

I think all aspects have been correctly implemented. 
I did not collaborate with anyone on this assignment.
I spent about 3 hours on this assignment.

 "Is it possible to request the data from a different origin (e.g., http://messagehub.herokuapp.com/) or from your local machine (from file:///) from using XMLHttpRequest? Why or why not?"

 Answer: 
 Given the fact that part two of the lab functioned with the code I wrote, it appears that it is possible to request data from a different origin.  However, this seems to conflict with the single origin policy, which XMLHttpRequest apparently follows. I'm a little confused by this, but based on the readings, I assume this sort of request is viewed as an exception to the rule like the <img> tag.  I.e. it falls under this statement from the stack exchange article: "If it's a GET or POST request which meets certain limits (which the makers of the standard have determined to add no extra risk for CSRF attacks) then the browser just passes the request through."  Do these limits have anything to do with the type or quantity of data that is being requested?  Is it also accurate to say that the way we are requesting data in this lab is not especially secure?  