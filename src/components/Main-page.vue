<script >


</script>

<template>
<div class="background_main">
    <div class="container">
        <div class="content">
            <div class="content_info">
                <h1>Welcome to my board game</h1>
                <h2>What it is about</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo maxime unde qui error beatae mollitia sunt doloribus atque aspernatur cupiditate. Ea dolores possimus quam repellendus, eveniet sequi? Doloribus, a accusamus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur sint nostrum, nesciunt ipsum quo cupiditate vero laudantium fuga eius quae est maxime ratione nam sed nulla repudiandae consequuntur rerum fugiat, laborum commodi doloremque. Voluptatibus quam ullam provident dolor culpa pariatur.</p>
                <button>show map</button>
            </div>
            <div>
                <div class="content_rules">
                    <h3>Rules</h3>
                    
                </div>
                <div class="content_me">
                    <h3>About me</h3>
                    <p>I'm small programist who is trying to develop his skills and also create his favorite game with few chanages.</p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style >

.background_main {
    background-image: url(../assets/denerys_on-thron.jpg);
    margin-top: 0;
    height: 800px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;

}
.content {
    display: flex;
    justify-content: space-evenly;
    /* align-items: center; */
    background-color: white;
    opacity: .7;
    padding-inline: 60px;
    border-radius: 20px;
}
 h1 {
    color: black;
}
.content_info {
    max-width: 400px;
    margin: 20px 50px 0 0;
}
.content_me {
    max-width: 200px;
    margin-top: 40px;
}

</style>
