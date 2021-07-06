<template>
    <div class="top-bar">
        <div class="title"><i class="fas fa-tasks logo"></i>Fire TODO List</div>
        <div class="nav-links">
            <router-link to="/">Home</router-link> |
            <router-link to="/todo">Todo</router-link>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .top-bar{
        position: absolute;
        top: 0;
        left: 0;
        height: 75px;
        width: 100%;
        background: rgb(44, 140, 179);
        color: white;
    }

    /* .top-bar router-link{
        pos
    } */
    .title{
        /* position: absolute;
        top: 0px;
        right: 50%; */
        font-size: 22px;
        transform: translate(-5px, 0px);
        margin: 12px 0px;
    }
    .logo{
        margin-right: 1rem;
        margin-left: 1rem;
    }
</style>