(()=>{"use strict";const n=()=>'\n        <div class="Error404">\n            <h2>Error 404</h2>\n        </div>\n    ',a={"/":()=>'\n    <div class="Characters">\n        <article class="Characters-item">\n            <a href="#/1">\n                <img src="image" alt="name"/>\n                <h2>Name</h2>\n            </a>\n        </article>\n    </div>\n    ',"/:id":()=>'\n    <div class="Characters-inner">\n        <article class="Character-card">\n            <img src="image" alt"name">\n            <h2>Name</h2>\n        </article>\n        <article class="Character-card">\n            <h3>Epsiodes:</h3>\n            <h3>Status:</h3>\n            <h3>Species:</h3>\n            <h3>Gender</h3>\n            <h3>Origin:</h3>\n            <h3>Last Location:</h3>\n        </article>\n    </div>\n    ',"/Contact":"contact"},e=async()=>{const e=document.getElementById("Header"),t=document.getElementById("Content");e.innerHTML=await'\n    <div class="Header-main">\n    <div class="Header-logo">\n        <h1>\n            <a href="/">\n                100tifi.co\n            </a>\n        </h1>\n    </div>\n\n    <div class="Header-nav">\n        <a href="#/about/">\n        </a>\n    </div>\n    </div>\n    ';let i=location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/",r=await(n=>n.length<=3?"/"===n?n:"/:id":`/${n}`)(i),c=a[r]?a[r]:n;t.innerHTML=await c()};window.addEventListener("load",e),window.addEventListener("hashchange",e)})();