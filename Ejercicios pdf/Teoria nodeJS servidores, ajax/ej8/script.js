document.addEventListener("DOMContentLoaded", function(event) {
    let performedActionSpan = document.getElementById('performed-action');
    let widthSpan = document.getElementById('window-width');
    let heightSpan = document.getElementById('window-height');

    function btn_clicked_left() {
        performedActionSpan.textContent = "You have left clicked the button";
    }

    function btn_clicked_right(ev) {
        performedActionSpan.textContent  = "You have right clicked the button";
        ev.preventDefault();
        return false;
    }

    function setWindowSizes() {
        widthSpan.textContent = window.innerWidth;
        heightSpan.textContent = window.innerHeight;
    }

    setWindowSizes();


    document.getElementById('aclickear').addEventListener('click', btn_clicked_left);

    document.getElementById('aclickear').addEventListener('contextmenu', function(ev) {
        btn_clicked_right(ev);
    });

    window.addEventListener('resize', function() {
        setWindowSizes();
    });


    function setImgStatus() {
        let imgStatus = document.getElementById('image-status');
        imgStatus.textContent = 'Ready';
    }

    setImgStatus();
});
