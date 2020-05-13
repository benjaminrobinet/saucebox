<template>
    <div class="sounds-wrapper">
        <Sound :data="{author: 'test', name: 'test name', duration: '2400'}"/>
        <Sound :data="{author: 'test', name: 'test name', duration: '2400'}"/>
        <Sound :data="{author: 'test', name: 'test name', duration: '2400'}"/>
        <Sound :data="{author: 'test', name: 'test name', duration: '2400'}"/>
        <Sound :data="{author: 'test', name: 'test name', duration: '2400'}"/>
        <Sound :data="{author: 'test', name: 'test name', duration: '2400'}"/>
        <Sound :data="{author: 'test', name: 'test name', duration: '2400'}"/>
        <Sound :data="{author: 'test', name: 'test name', duration: '2400'}"/>
        <Sound :data="{author: 'test', name: 'test name', duration: '2400'}"/>
        <Sound :data="{author: 'test', name: 'test name', duration: '2400'}"/>
        <Sound :data="{author: 'test', name: 'test name', duration: '2400'}"/>
        <Sound :data="{author: 'test', name: 'test name', duration: '2400'}"/>
    </div>
</template>

<script>
    import Sound from "@/components/Sound";

    export default {
        name: "Sounds",
        components: {
            Sound,
        },
    }
</script>

<style scoped lang="scss">
    .sounds-wrapper{

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: flex-start;
    }
</style>
