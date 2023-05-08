<template>
    <div class="popup-container">
        <div class="section ">
            <div class="button">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Profile">
                    <circle cx="12" cy="7" r="4.5" stroke="currentColor"></circle>
                    <path d="M3.5 21.5v-4.34C3.5 15.4 7.3 14 12 14s8.5 1.41 8.5 3.16v4.34" stroke="currentColor" stroke-linecap="round"></path>
                </svg>
                
                <div class="menu-name">My page</div>
            </div>
        </div>

        <div class="section">
            <div class="button">
                <div class="signout-section">
                    <div class="signout-text">Sign out</div>
                    <p> user@email.com</p>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

.popup-container {
    z-index: 700;
    border-radius: 4px;
    box-shadow: rgb(230, 230, 230) 0px 1px 4px;
    border: 1px solid rgb(230, 230, 230);
    box-sizing: border-box;
}

.section {
    padding: 18px 0;
    border-bottom: 1px solid rgb(230, 230, 230);
    display: block;
}

.button {
    padding: 8px 24px;
    align-items: center;
    display: flex;
    text-align: left;
    cursor: pointer;
    width: 100%;
}

*, *:before, *:after {
    box-sizing: inherit;
}

svg {
    vertical-align: middle;
    width: 24;
    height: 24;
    fill: none;
}

svg:not(:root) {
    overflow-clip-margin: content-box;
    overflow: hidden;
}

.menu-name {
    margin-left: 16px;
    display: block;
}

.logout-section {
    display: flex;
    flex-direction: column;
    text-align: left;
}

.signout-text {
    margin-bottom: 4px;
}

p {
    font-size: 0.9rem;
}

</style>