<template>
    <div class="container">
        <div id="event">
            <span id="name">
                <h4 style="color: rgb(143, 63, 209);">kn</h4>
            </span>
            <span id="decription">
            </span>
            <span id="location">
                <p><span style="color: rgb(143, 63, 209); font-weight: bold;">Location:</span> on</p>
            </span>
            <span id="date">
                <p><span style="color: rgb(143, 63, 209);  font-weight: bold;">Date:</span> jin<span
                        style="color: rgb(143, 63, 209);  font-weight: bold;"> Time</span>onon</p>
            </span>
        </div>
    </div>
</template>

<style scoped>
.container {
    width: 80%;
    margin: 0 auto;
    text-align:center;
}
#event {
  border: 2px solid rgb(143, 63, 209);
  border-radius: 20px;
  margin-top: 20px;
}

@media only screen and (min-width: 700px) {
    #event {
        margin-left: 20%;
        margin-right:  20%;
    }
}
</style>

