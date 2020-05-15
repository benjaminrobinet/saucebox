<template>
    <div v-on:click="play" class="sound">
        <div class="sound-inner">
            <div class="thumbnail">
                <img :src="thumbnail.url" :alt="thumbnail.alt">
            </div>
            <div class="data">
                <div class="left">
                    <div class="name">{{ title }}</div>
                    <div class="author">{{ author }}</div>
                </div>
                <div class="right">
                    <div ref="duration" class="duration"><span v-if="duration">{{duration}}s</span></div>
                    <div class="key">
                        <svg viewBox="0 0 50 50">
                            <circle ref="circle" cx="25" cy="25" r="24"/>
                        </svg>
                        <span>{{shortcut}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {gsap} from 'gsap';
    import {Howl} from 'howler';
    import moment from 'moment';

    export default {
        name: "Sound",
        mounted() {
            this.initSVG();

            this.audio.once('load', () => {
                this.buildDuration();
                this.buildPlayingTimeline();
            })
        },
        props: ['sound'],
        methods: {
            play() {
                this.playingTimeline.seek(0);
                this.playingTimeline.play();
                this.audio.play();
            },
            initSVG() {
                this.circleLength = this.$refs.circle.getTotalLength();
                this.$refs.circle.style.strokeDashoffset = this.circleLength + 'px';
                this.$refs.circle.style.strokeDasharray = this.circleLength + 'px';
            },
            buildPlayingTimeline() {
                this.playingTimeline.fromTo(this.$refs.circle, {stroke: 'rgba(255, 255, 255, 0)'}, {
                    stroke: 'rgba(255,255,255,1)',
                    duration: 0.2,
                    ease: 'none'
                })
                this.playingTimeline.fromTo(this.$refs.circle, {strokeDashoffset: this.circleLength}, {
                    strokeDashoffset: 0,
                    duration: this.duration,
                    ease: 'none'
                }, '<')
                this.playingTimeline.to(this.$refs.circle, {
                    stroke: 'rgba(255,255,255,0)',
                    duration: 0.2,
                    ease: 'none'
                }, '-=.2')
            },
            buildDuration() {
                this.duration = moment.duration(this.audio.duration(), 'seconds').seconds();
            }
        },
        watch: {
            duration(){
                gsap.fromTo(this.$refs.duration, {opacity: 0}, {opacity: 1, duration: 0.1, ease: 'none'});
            }
        },
        data() {
            return {
                circleLength: 0,
                playingTimeline: gsap.timeline({paused: true}),
                duration: 0
            }
        },
        computed: {
            data() {
                return this.sound.data;
            },
            title() {
                return this.data.title[0].text
            },
            author() {
                return this.data.author[0].text
            },
            thumbnail() {
                return this.data.thumbnail
            },
            shortcut(){
                return this.data.key[0].text.charAt(0).toLocaleUpperCase();
            },
            key(){
                return this.data.key[0].text.charAt(0).toLocaleLowerCase();
            },
            audio() {
                return new Howl({src: [this.data.sound.url]});
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

        @include medium {
            width: 33.33%;
            padding-bottom: 33.33%;
        }

        @include large {
            width: 25%;
            padding-bottom: 25%;
        }

        @include hover {
            .sound-inner .thumbnail::after {
                opacity: 0.6;
            }
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

                &:after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgb(0, 0, 0);
                    background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 50%);
                    opacity: 0.5;
                    transition: opacity 100ms linear;
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

                @include small {
                    padding: 10px 5px;
                }

                @include large {
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

                        svg {
                            position: absolute;
                            top: 0;
                            left: 0;
                            right: 0;
                            bottom: 0;
                            transform: rotate3d(0, 0, 1, -90deg);

                            circle {
                                fill: rgba(255, 255, 255, 0.5);
                                stroke-width: 2px;
                                stroke: rgba(255, 255, 255, 1);
                            }
                        }

                        @include large {
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
