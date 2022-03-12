<template>
    <div class="parent-container">
      <div class="form">
        <div class="imgcontainer">
            <h2>You're in Home Page.</h2>
            Well done 😍 
        </div>
        <div class="container">
          <a href="/"><button type="submit" >Back to Login</button></a>
        </div>
      </div>
    </div>
</template>

<style>

      form {
        border: 3px solid #f1f1f1;
      }

      .parent-container {
        display: flex;
        justify-content: space-between;
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
      .imgcontainer {
        text-align: center;
        margin: 24px 0 12px 0;
        position: relative;
        top: 30%;
      }

      img.avatar {
        width: 40%;
        border-radius: 50%;
      }

      .container {
        padding: 16px;
        width: 530px;
        position: relative;
        top: 30%;
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
      }
</style>