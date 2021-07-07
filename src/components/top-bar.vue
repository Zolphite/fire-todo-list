<template>
    <div class="top-bar">
        <div class="title"><i class="fas fa-tasks logo"></i>Fire TODO List</div>
        <div class="nav-links">
            <router-link to="/">Home</router-link> |
            <router-link to="/todo">Todo</router-link>
            <div v-if="is_signed_in == true" class="display-hud text-capitalize">
                welcome {{username}}
            </div>
            <a v-if="is_signed_in == true" class="logout-btn text-capitalize" @click="LogoutUser">
                    Log Out
            </a>
            <div v-if="is_signed_in == false" class="loged-out-links">
                <router-link to="/login" class="login-btn text-capitalize px-2">
                    Login
                </router-link>
                |
                <router-link to="/register" class="register-btn text-capitalize px-2">
                    Register
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from '../utilities/firebase'

export default {
    props: ['is_signed_in','authUser', 'username'],
    methods: {
        LogoutUser () {
            firebase.auth().signOut().then(() => {
                // console.log('Logged out');
                this.$router.push("/login");
            }).catch((error) => {
                console.log(error);
            });
        }
    }
}
</script>

<style>
    .top-bar{
        position: absolute;
        top: 0;
        left: 0;
        height: 70px;
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
        margin-top: 6px;
    }
    .logo{
        margin-right: 1rem;
        margin-left: 1rem;
    }
    .display-hud{
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        left: 0;
        margin-left: 22px;
        font-size: 22px;
        color: rgb(158, 255, 255);
    }
    .logout-btn{
        color: rgb(62, 82, 255)!important;
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        right: 0;
        margin-right: 22px;
    }
    .logout-btn:hover{
        cursor: pointer;
        color: rgb(0, 26, 255)!important;
    }
    .loged-out-links{
        color: white;
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        right: 0;
        margin-right: 22px;
    }
    
    .login-btn{
        color: rgb(62, 82, 255)!important;
    }
    .login-btn:hover{
        cursor: pointer;
        color: rgb(0, 26, 255)!important;
    }
    .register-btn{
        color: rgb(62, 82, 255)!important;
    }
    .register-btn:hover{
        cursor: pointer;
        color: rgb(0, 26, 255)!important;
    }
</style>