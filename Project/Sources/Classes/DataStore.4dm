Class extends DataStoreImplementation


exposed Function authentify($email : Text; $password : Text) : Boolean
	If (($email="") && ($password=""))
		return Session:C1714.setPrivileges(["guest"; "guestPromoted"])
	End if 
	var $employee : cs:C1710.EmployeeEntity:=ds:C1482.Employee.query("email = :1"; $email).first()
	If ($employee#Null:C1517)
		If (Verify password hash:C1534($password; $employee.password))
			Use (Session:C1714.storage)
				Session:C1714.storage.payLoad:=New shared object:C1526("UUID"; $employee.ID; "login"; $employee.email)
			End use 
			Case of 
				: ($employee.role="Admin")
					return Session:C1714.setPrivileges("administrate")
				: ($employee.role="Manager")
					return Session:C1714.setPrivileges("manage")
				: ($employee.role="Employee")
					return Session:C1714.setPrivileges("employ")
			End case 
			Web Form:C1735.setMessage("Authentication successful")
			
		Else 
			Web Form:C1735.setError("Authentication failed")
		End if 
	Else 
		Web Form:C1735.setError("Authentication failed")
	End if 
	
	//Adds a CSS class to a WebForm component dynamically
exposed Function setCss($serverRef : Text; $cssClass : Text)
	var $component : 4D:C1709.WebFormItem
	$component:=Web Form:C1735[$serverRef]
	$component.addCSSClass($cssClass)
	
	//Shows or hides a “no data” state based on data length
exposed Function noDATA($serverRef : Text; $cssClass : Text; $selectedLength : Variant)
	var $component : 4D:C1709.WebFormItem
	$component:=Web Form:C1735[$serverRef]
	If ($selectedLength=0)
		$component.addCSSClass($cssClass)
	Else 
		$component.removeCSSClass($cssClass)
	End if 
	
	//Dynamically removes a CSS class from a WebForm component
exposed Function removeCss($serverRef : Text; $cssClass : Text)
	var $component : 4D:C1709.WebFormItem
	$component:=Web Form:C1735[$serverRef]
	$component.removeCSSClass($cssClass)
	
	//Resolves the post-login landing page based on the user’s role.
exposed Function Login() : Text
	var $user : cs:C1710.EmployeeEntity:=ds:C1482.Employee.getCurrentUser()
	var $page : Text
	Case of 
		: ($user.role="Admin")
			$page:="AdminVue"
		: ($user.role="Employee")
			$page:="EmployeeVue"
		: ($user.role="Manager")
			$page:="ManagerVue"
		Else 
			$page:="NotFound"
	End case 
	return $page
	
	// Returns a breadcrumb string starting with "Home/" followed by the given path
exposed Function breadcrumbs($path : Text) : Text
	return "Home/"+$path
	
exposed Function displayToRole($currentUser : cs:C1710.EmployeeEntity)
	Case of 
		: ($currentUser.role="Employee")
			Web Form:C1735["addHolidayButton"].hide()
			Web Form:C1735["editHolidayButton"].hide()
			Web Form:C1735["addLeaveTypeButton"].hide()
			Web Form:C1735["deleteLeaveTypeButton"].hide()
			Web Form:C1735["deleteTeamButton"].hide()
			Web Form:C1735["addTeamButton"].hide()
			Web Form:C1735["employeeSB"].hide()
			Web Form:C1735["leaveActions"].hide()
			Web Form:C1735["teamSB"].hide()
			Web Form:C1735["teamButton"].hide()
			Web Form:C1735["updateLeaveTypeButton"].hide()
			Web Form:C1735["filterCalendarByEmp"].hide()
		: ($currentUser.role="Manager")
			Web Form:C1735["addHolidayButton"].hide()
			Web Form:C1735["editHolidayButton"].hide()
			Web Form:C1735["addLeaveTypeButton"].hide()
			Web Form:C1735["deleteLeaveTypeButton"].hide()
			Web Form:C1735["deleteTeamButton"].hide()
			Web Form:C1735["addTeamButton"].hide()
			Web Form:C1735["teamSB"].hide()
			Web Form:C1735["teamButton"].hide()
			Web Form:C1735["updateLeaveTypeButton"].hide()
	End case 
	
exposed Function landingDetailPage($currentUser : cs:C1710.EmployeeEntity) : Text
	If ($currentUser.role="Employee")
		return "LeavesDetailEmployee"
	Else 
		return "LeavesDetailManager"
	End if 
	
exposed Function getManifestObject() : Object
	var $manifestFile : 4D:C1709.File
	var $manifestObject : Object
	$manifestFile:=File:C1566("/PACKAGE/Project/Sources/Shared/manifest.json")
	$manifestObject:=JSON Parse:C1218($manifestFile.getText())
	return $manifestObject
	
	
exposed Function generateData()
	var $generateData : cs:C1710.GenerateData:=cs:C1710.GenerateData.new()
	$generateData.dropData()
	$generateData.createData()
	Web Form:C1735.setMessage("Data generated!")
	
	
exposed Function getCredentials() : Object
	var $jsonFile : 4D:C1709.File
	var $text : Text
	var $fileContent : Object
	$jsonFile:=File:C1566("/PROJECT/Sources/Shared/assets/credentials/env.json")
	If ($jsonFile.exists)
		$text:=$jsonFile.getText()
		$fileContent:=JSON Parse:C1218($text; 38)
		return $fileContent
	Else 
		return Null:C1517
	End if 
	
	