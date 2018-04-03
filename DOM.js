<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
	</head>
	<body>
			username:<input type="text" id="username"/><br/>
			password:<input type="password" id="password"/></br>
			<button type="submit" onclick="return check()">Login</button>
		<script language="JavaScript">
			function check(){
				var username= document.getElementById("username").value;
				var password= document.getElementById("password").value;
				if(username==""||password==""){
					alert("账号或密码不能为空！");
					return false;
				}else if(username!="123"||password!="123"){
					document.getElementById("username").value="";
					document.getElementById("password").value="";
					alert("账号或密码错误！");
					return false;
				}else{
					alert("恭喜您登录成功！");
				}
				return true;
			}
		</script>
	</body>
</html>
