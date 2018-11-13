console.log("Hello")
const player = videojs('my-video',{
    sources:[{ src: "http://www.html5videoplayer.net/videos/toystory.mp4"}],
    loop:true,
    muted:true,
    width:"600",
    height:"300",
    controls:true
});

player.ITMAN_title({
    text: 'IT邦幫忙鐵人賽',
    opacity: 0.6
});
