<template>
    <div class="sounds-wrapper" v-on:keypress="onKeyPress">
        <Sound v-for="sound in sounds" ref="sounds" :key="sound.id" :sound="sound"/>
    </div>
</template>

<script>
    import Sound from "@/components/Sound";

    export default {
        name: "Sounds",
        components: {
            Sound,
        },
        mounted() {
            window.addEventListener('keypress', this.onKeyPress);
        },
        beforeDestroy() {
            window.removeEventListener('keypress', this.onKeyPress);
        },
        methods: {
            onKeyPress(e){
                let soundComponent = this.$refs.sounds.find(component => {
                    return e.key.toLocaleLowerCase() === component.key;
                })

                if(soundComponent) soundComponent.play();
            }
        },
        computed: {
            sounds() {
                return this.$store.getters["sounds/getAllSounds"]
            }
        },
        created() {
            this.$store.dispatch('sounds/fetchAllSounds');
        }
    }
</script>

<style scoped lang="scss">
    .sounds-wrapper {

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: flex-start;
    }
</style>
