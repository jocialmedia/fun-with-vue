<template>
    <div id="nav">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
               <router-link class="navbar-brand" to="/">Fun with Vue</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/about">About</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/components">Components</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>

<router-view />
</template>

<script>
    export default {
        name: 'NavBar',
        components: {}
    }
</script>

<style>
    #nav {
        margin-bottom: 30px;
    }
</style>