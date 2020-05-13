<template>
    <div v-on:click="play" class="sound">
        <div class="sound-inner">
            <div class="thumbnail">
                <img src="https://images.unsplash.com/photo-1588418009167-e30d02643d63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                     alt="">
            </div>
            <div class="data">
                <div class="left">
                    <div class="name">Proute</div>
                    <div class="author">Victor la grosse merde</div>
                </div>
                <div class="right">
                    <div class="duration">2s</div>
                    <div class="key">
                        <svg viewBox="0 0 50 50">
                            <circle ref="circle" cx="25" cy="25" r="24"/>
                        </svg>
                        <span>J</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {gsap} from 'gsap';

    export default {
        name: "Sound",
        mounted() {
          this.initSVG();
          this.buildPlayingTimeline();

        },
        methods: {
            play: function() {
                this.playingTimeline.play();
            },
            initSVG: function(){
                this.circleLength = this.$refs.circle.getTotalLength();
                this.$refs.circle.style.strokeDashoffset = this.circleLength + 'px';
                this.$refs.circle.style.strokeDasharray = this.circleLength + 'px';
            },
            buildPlayingTimeline: function(){
                this.playingTimeline.fromTo(this.$refs.circle, {strokeDashoffset: this.circleLength}, {strokeDashoffset: 0, duration: 1, ease: 'power4.out'})
            }
        },
        data: function () {
            return {
                circleLength: 0,
                playingTimeline: gsap.timeline({paused: true})
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../scss/mixins";

    .sound {
        width: 50%;
        padding-bottom: 50%;
        position: relative;
        cursor: pointer;

        @include medium{
            width: 33.33%;
            padding-bottom: 33.33%;
        }

        @include large{
            width: 25%;
            padding-bottom: 25%;
        }

        .sound-inner {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;

            .thumbnail {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;

                &:before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgb(0, 0, 0);
                    background: linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 50%);
                }

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }

            .data {
                height: 100%;
                width: 100%;
                position: relative;

                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                align-items: flex-end;
                justify-content: space-between;

                color: white;

                font-size: 14px;
                padding: 7.5px 2.5px;

                @include small{
                    padding: 10px 5px;
                }

                @include large{
                    font-size: 20px;
                }

                .left {
                    padding: 0 5px;

                    .name {
                        font-weight: 700;
                    }

                    .author {
                    }
                }

                .right {
                    padding: 0 5px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    .key {
                        margin-top: 5px;
                        width: 30px;
                        height: 30px;
                        display: flex;
                        flex-direction: row;
                        flex-wrap: nowrap;
                        justify-content: center;
                        align-items: center;
                        border-radius: 50%;
                        position: relative;

                        svg{
                            position: absolute;
                            top: 0;
                            left: 0;
                            right: 0;
                            bottom: 0;
                            transform: rotate3d(0, 0, 1, -90deg);

                            circle{
                                fill: rgba(255, 255, 255, 0.5);
                                stroke-width: 2px;
                                stroke: rgba(255, 255, 255, 1);
                            }
                        }

                        @include large{
                            width: 50px;
                            height: 50px;
                        }

                        span {
                            color: white;
                        }
                    }
                }
            }
        }
    }
</style>
