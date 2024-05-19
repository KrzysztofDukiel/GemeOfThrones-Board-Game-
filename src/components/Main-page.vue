<script >


</script>

<template>

<section class="welcome vh-100">
    <div class="welcome_background"></div>

    <div class="welcome_container">
        <h1>Welcome to my Board Game</h1>

        <i>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio recusandae maxime ea repudiandae repellat eius nihil! Nesciunt, voluptates enim. Iusto similique omnis eum quis obcaecati architecto tenetur molestiae sapiente atque?
        </i>
    </div>
</section>
<section class="welcome vh-100">
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit
    </p>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit
    </p>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit
    </p>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit
    </p>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit
    </p>

</section>

</template>

<style lang="scss" scoped>
.welcome {
    position: relative;
    color: white;

    &_background {
        position: absolute;
        inset: 0;
        z-index: 0;
        height: 100%;
        filter: brightness(0.55);
        background-image: url(../assets/images/epic-throne.webp);
		background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }

    &_container {
        width: clamp(300px, 80%, 800px);
        margin: 0 auto;
        position: relative;
        height: 100%;
        z-index: 3;
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        align-items: center;
    }
}

</style>
