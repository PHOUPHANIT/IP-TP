<script setup>
</script>

<template>
  <div>
    <div class="form">
        <h2>Login Form</h2>
        <form action="/action_page.php" method="post">
          <div class="imgcontainer">
            <img src="../assets/avatar.png" alt="Avatar" class="avatar">
          </div>
        
          <div class="container">
            <label for="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required>
        
            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required>
                
            <button type="submit">Login</button>
            <label>
              <input type="checkbox" checked="checked" name="remember"> Remember me
            </label>
          </div>
        
          <div class="container" style="background-color:#f1f1f1">
            <button type="button" class="cancelbtn">Cancel</button>
            <span class="psw">Forgot <a href="#">password?</a></span>
          </div>
        </form>
       </div>
  </div>
</template>

<style scoped>
body {
  font-family: Arial, Helvetica, sans-serif;
}
form {
  border: 3px solid #f1f1f1;
}

.parent-container {
  display: flex;
  justify-content: space-between;
}
.HomePage {
  width: 100%;
  height: 100%;
  margin-top: 10%;
}
.image {
  position: relative;
  text-align: center;
}
img {
  position: relative;
  text-align: center;
}
.buttonHomePage {
  display: flex;
  justify-content: center;
}
.login {
  width: 100px;
  margin: 10px;
  background-color: bisque;
  color: black;
}
.register {
  width: 100px;
  margin: 10px;
}
.signup {
  position: relative;
  top: 50px;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

button {
  background-color: #04aa6d;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  opacity: 0.8;
}

.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
}

img.avatar {
  width: 40%;
  border-radius: 50%;
}

.container {
  padding: 16px;
}

span.psw {
  float: right;
  padding-top: 16px;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
  .cancelbtn {
    width: 100%;
  }
}
</style>
