Class extends Entity


exposed Function create($newLeave : cs:C1710.LeaveEntity)
	var $saved : Object
	If (This:C1470.content#Null:C1517)
		This:C1470.creationDate:=Current date:C33()
		This:C1470.creationHour:=Current time:C178()
		This:C1470.leave:=$newLeave
		This:C1470.by:=ds:C1482.Employee.getCurrentUser()
		$saved:=This:C1470.save()
		If ($saved.success)
			Web Form:C1735.setMessage("Comment added successfully!")
		Else 
			Web Form:C1735.setError("Error while adding the comment!")
		End if 
	End if 
	