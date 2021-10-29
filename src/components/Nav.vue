<template>
    <header>
        <div class="logo">
            <img src="../assets/images/shared/logo.svg" alt="Logo">
        </div>
        <div class="line"></div>
        <a href="#" class="right sidenav-trigger" id="open-btn"><img src="../assets/images/shared/icon-hamburger.svg" alt="Open menu"></a>
        <nav id="nav-bar">
            <a href="#" class="sidenav-close" id="close-btn"><img src="../assets/images/shared/icon-close.svg" alt="Close menu"></a>
            <ul>
                <li><router-link :to="'/'"><span>00</span>Home</router-link></li>
                <li><router-link :to="'/destination'"><span>01</span>Destination</router-link></li>
                <li><router-link :to="'/crew'"><span>02</span>Crew</router-link></li>
                <li><router-link :to="'/technologies'"><span>03</span>Technologies</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'NavBar',
    mounted() {
        var navBar = document.getElementById('nav-bar');
        var openBtn = document.getElementById('open-btn');
        var closeBtn = document.getElementById('close-btn');
        openBtn.addEventListener('click', function() {
            navBar.style.height = '100%';
        })
        closeBtn.addEventListener('click', function() {
            navBar.style.height = '0';
        })
    }
}
</script>