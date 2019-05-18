<template>
    <div class="container">
        <div id="login">
            <h2>Login to <span  style="color: rgb(143, 63, 209);" >Sync</span></h2>
            <form @submit.prevent>
                <div id="username">
                    <label for="username">username:
                        <input type="text" name="username" id="username">
                    </label>
                </div>
                <div id="password">
                    <label for="password">password:
                        <input type="password" name="password" id="password">
                    </label>
                </div>
                <div id="submit">
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
.container {
    width: 80%;
    margin: 0 auto;
    text-align:center;
}
#login {
    margin-top: 20%;
}
input {
   padding: 15px;
   border: 1px solid rgb(143, 63, 209);;
   border-radius:5px;
   margin-bottom: 10px;
   outline: none;
   font-size: 20px;
}
label {
    font-size: 20px;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
button {
  background-color: rgb(143, 63, 209);
  border-radius: 50px;
  border-width: 0;
  box-shadow: rgba(0, 12, 32, .04) 0 0 1px 0, rgba(10, 31, 68, .1) 0 3px 4px 0;
  color: rgb(255, 255, 255);
  cursor: pointer;
  display: inline-block;
  font-size: 1em;
  height: 50px;
  line-height: 50px;
  padding: 0 25px;
  outline: none;
  margin-bottom: 4px;
}
</style>
