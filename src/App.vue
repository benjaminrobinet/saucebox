<template>
    <main id="app">
        <Sounds />
    </main>
</template>

<script>
    import Sounds from "@/components/Sounds";

    export default {
        name: 'App',
        components: {
            Sounds,
        }
    }
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
    @import "scss/app";
</style>
