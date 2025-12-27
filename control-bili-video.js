// user script
// @name control-bili-video
// @namespace   wds_wyl.com
// @version     1.0.0
// @description     control-bili-video
// @author      201647997@qq.com
// @match       *://*
// @icon
// @grant
(
    () => {
    "use strict";
    let vEable = localStorage.getItem("vEable") === "true";
    if (vEable) {
        const video = document.querySelector("video");
        if (video) {
            setTimeout(() => {
                video.pause();
            }, 1000);
        }
    }
    let btnArea = document.querySelector(".right-ctnr");
    let btn = document.createElement("button");
    btn.id = "remove-bili-video";
    btn.innerText = vEable ? "播放视频" : "暂停视频";
    btn.addEventListener("click", function () {
        vEable = !vEable;
        localStorage.setItem("vEable", vEable);
        btn.innerText = vEable ? "暂停视频" : "播放视频";
        const video = document.querySelector("video");
        if (vEable) {
            video.play();
        } else {
            video.pause();
        }
    });
    btnArea.insertBefore(btn,btnArea.children[0]);
})();
