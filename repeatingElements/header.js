document.write (`
    <div id="header">
        <a href="/index.html"><h1>Doodles By Cass</h1></a>
        <div id="navIcon"><img id="navIcon" src="/repeatingElements/navIcon.svg" alt="navigation icon"></div>
        <div id="nav">
            <a href="/shop.html">Shop</a>
            <a href="/portfolio.html">Portfolio</a>
        </div>
    </div>
    <script>
        document.getElementById("navIcon").addEventListener("click", showNav);
        document.body.addEventListener("resize", checkNav);
        function showNav() {
            var nav;
            nav = document.getElementById("nav");
            if (nav.style.display !== "block") {nav.style.display = "block";} else {nav.style.display = "none";}
        }
        function checkNav() {
            var navIcon;
            var nav;
            nav = document.getElementById("nav");
            navIcon = document.getElementById("navIcon");
            if (navIcon.style.display !== "block") {nav.style.display = "block";}
        }
    </script>
`);