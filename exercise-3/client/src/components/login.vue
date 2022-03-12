<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      msg: "",
      input_color: "",
    };
  },
  methods: {
    async created() {
      // POST request using fetch with async/await
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: this.email, password: this.password }),
      };

      //post data to api
      const response = await fetch(
        "http://localhost:3001/login",
        requestOptions
      );

      const data = await response.json();
      console.log("data: ", data);

      //check password and email matched or correct
      if (data.status == "true") {
        location.href = "./home";
      } else {
        this.msg = data.message;
        this.input_color = "rgba(240,0,0,.8)";
      }
    },
  },
};
</script>

<template>
  <div>
    <div class="form">
        <h2>Login Form</h2>
        <form method="post">
          <div class="imgcontainer">
            <img src="../assets/avatar.png" alt="Avatar" class="avatar">
          </div>
        
          <div class="container">
            <label for="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" id="email" v-model="email" required>
        
            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="password" id="password" v-model="password" @keyup.enter="created()" required>
                
            <button type="submit" @click="created()" id="btn_login">Login</button>
            <label>
              <input type="checkbox" checked="checked" name="remember"> Remember me
            </label>
          </div>
        
          <div class="container-cancel">
            <button type="button" class="cancelbtn">Cancel</button>
            <span class="psw">Forgot <a href="http://#">password?</a></span>
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
.container-cancel {
   width: 100%;
   padding-left: 16px;
   padding-right: 16px;
   background-color:#f1f1f1;
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
