// This should be implemented in snipt.net when editing.

editor_fullscreen = function() {
    e = document.getElementsByClassName("editor")[0];
    e.style.position = "fixed";
    e.style.top = 40 + "px";
    e.style.left = 0 + "px";
    e.style.width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) + "px";
    e.style.height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) + "px";
    document.getElementsByClassName("CodeMirror")[0].style.height = "100%";
    //document.getElementsByClassName("ruler bottom-x")[0].style.display = "none";
};
// editor_fullscreen();
