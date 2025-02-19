// Function to create and insert the navbar
function insertNavbar() {
  // Define the HTML for the navbar
  const navbarHTML = `
  
    <style>
        @import"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap";:root{--base-clr: linear-gradient( 140deg, rgb(28, 28, 28), rgb(0, 0, 0) 50%, rgb(28, 28, 28) 100% );--base-clr2: #1c1e2e;--line-clr: #42434a;--hover-clr: #222533;--text-clr: #e6e6ef;--accent-clr: #6a7fff;--secondary-text-clr: #b0b3c1;--size-xxs: .5rem;--size-xs: .75rem;--size-sm: .875rem;--size-base: 1rem;--size-lg: 1.125rem;--size-xl: 1.25rem;--size-2xl: 1.5rem;--size-3xl: 1.875rem;--size-4xl: 2.25rem;--size-5xl: 3rem;--size-6xl: 3.75rem;--size-7xl: 4.5rem;--size-8xl: 6rem;--size-9xl: 8rem;--size-10xl: 10rem}*{margin:0;padding:0;box-sizing:border-box;line-height:calc(1em + .5rem);animation:fadeIn .5s ease forwards;transition:.3s;-ms-overflow-style:none;scrollbar-width:none}*::-webkit-scrollbar{display:none}iframe{min-height:100vh;margin-left:60px;min-width:calc(100vw - 60px);border-radius:0;border:none}.container{width:100%;margin-inline:auto;padding-inline:.5rem;background-color:var(--base-clr)}.blobs{position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:-1;pointer-events:none}.blob1{position:absolute;bottom:30px;right:60px;width:500px;height:500px;z-index:1}.blob2{position:absolute;top:20px;left:40px;width:600px;height:600px;z-index:1}.blob3{position:absolute;bottom:20px;left:360px;width:450px;height:450px;z-index:1}.blob4{position:absolute;top:40px;right:520px;width:550px;height:550px;z-index:1}.-blur{filter:blur(50px);z-index:0}@media (min-width: 475px){.blob1{bottom:5px;right:10px;width:200px;height:200px}.blob2{top:10px;left:20px;width:250px;height:250px}.blob3{bottom:10px;left:50px;width:250px;height:250px}.blob4{top:10px;right:100px;width:275px;height:275px}}@media (min-width: 640px){.blob1{bottom:15px;right:25px;width:300px;height:300px}.blob2{top:25px;left:50px;width:350px;height:350px}.blob3{bottom:30px;left:80px;width:350px;height:350px}.blob4{top:25px;right:150px;width:400px;height:400px}}@media (min-width: 768px){.blob1{position:absolute;bottom:30px;right:60px;width:500px;height:500px;z-index:1}.blob2{position:absolute;top:20px;left:40px;width:600px;height:600px;z-index:1}.blob3{position:absolute;bottom:20px;left:360px;width:450px;height:450px;z-index:1}.blob4{position:absolute;top:40px;right:520px;width:550px;height:550px;z-index:1}}html{font-family:Poppins,Segoe UI,Tahoma,Geneva,Verdana,sans-serif;line-height:1.5rem}body{min-height:100vh;min-width:100vw;background:var(--base-clr);color:var(--text-clr);overflow-x:hidden}#sidebar{z-index:100;position:absolute;box-sizing:border-box;height:100vh;width:250px;padding:5px 1em;background:var(--base-clr);border-right:1px solid var(--line-clr);top:0;align-self:start;transition:.3s ease-in-out;overflow:hidden;text-wrap:nowrap}#sidebar.close{z-index:100;padding:5px;width:60px}#sidebar ul{z-index:100;list-style:none}#sidebar>ul>li:first-child{z-index:100;display:flex;justify-content:flex-end;.logo{background:linear-gradient(90deg,gold,orange,#ff4500);-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-weight:700;text-shadow:0 0 5px rgba(255,215,0,.6),0 0 10px rgba(255,165,0,.4),0 0 15px rgba(255,69,0,.3)}}#sidebar ul li.active a{z-index:100;color:var(--accent-clr);background:linear-gradient(140deg,#191e3a,#263172,#191e3a);svg{z-index:100;fill:var(--accent-clr)}}#sidebar a,#sidebar .dropdown-btn,#sidebar .logo{border-radius:.5em;padding:.85em;text-decoration:none;color:var(--text-clr);display:flex;align-items:center;cursor:pointer;gap:1em;margin-bottom:5px}.dropdown-btn{z-index:100;width:100%;text-align:left;background:none;font:inherit;border:none;cursor:pointer}#sidebar svg{z-index:100;flex-shrink:0;margin:auto;display:block;fill:var(--text-clr)}#sidebar a span,#sidebar .dropdown-btn span{z-index:100;flex-grow:1}#sidebar a:hover,#sidebar .dropdown-btn:hover{z-index:100;cursor:pointer;background:linear-gradient(140deg,#1e2231ce,#282f47ce,#1e2231ce)}#sidebar .sub-menu{display:grid;z-index:100;grid-template-rows:0fr;transition:.3s ease-in-out;>div{overflow:hidden}}#sidebar .sub-menu.show{grid-template-rows:1fr}.dropdown-btn svg{transition:.2s ease}.rotate svg:last-child{rotate:180deg}#sidebar .sub-menu a{padding-left:2em}#toggle-btn{margin-left:auto;padding:1em;border:none;border-radius:.5em;background:none;cursor:pointer;svg{transition:rotate .15s ease}}#toggle-btn:hover{background-color:var(--hover-clr)}main{padding:min(30px,7%)}main p{color:var(--secondary-text-clr);margin-top:5px;margin-bottom:15px}.separator{height:1px;background-color:#4a4a4a91;margin-bottom:5px;border:none}@media (max-width: 800px){body{grid-template-columns:1fr}.separator{display:none}iframe{min-height:100vh;margin-left:0;min-width:100vw;border-radius:0;border:none}main{padding:2em 1em 60px}.container{border:none;padding:0}#sidebar{left:0;z-index:100;position:absolute;height:60px;width:100%;border-right:none;border-top:1px solid var(--line-clr);padding:0;top:unset;bottom:0;>ul{padding:0;display:grid;grid-auto-columns:60px;grid-auto-flow:column;align-items:center;justify-content:center;overflow-x:scroll}ul li{height:100%}ul a,ul .dropdown-btn{width:60px;height:60px;padding:0;border-radius:0;margin-bottom:0;justify-content:center}ul li span,ul li:first-child,.dropdown-btn svg:last-child{display:none}ul li .sub-menu.show{position:fixed;bottom:60px;left:0;box-sizing:border-box;height:60px;width:100%;background-color:var(--hover-clr);border-top:1px solid var(--line-clr);display:flex;justify-content:center;>div{overflow-x:auto}li{display:inline-flex}a{box-sizing:border-box;padding:1em;width:auto;justify-content:center}}}}h2,p{margin-top:1em}.discord-link{color:#2836ffb3;text-decoration:none;background:linear-gradient(90deg,#505cff,#3340ffb3);-webkit-background-clip:text;-webkit-text-fill-color:transparent;text-shadow:0 0 5px rgba(51,64,255,.7),0 0 10px rgba(51,64,255,.7)}.e{position:relative}.container{width:100%;margin-inline:auto;padding-inline:.5rem}.btn{display:inline-block;background-color:#fff;color:var(--clr-dark);padding:.5em 1em;font-weight:500;border-radius:6px;line-height:1.75rem;text-decoration:none;transition:.2s ease-in-out}.btn:hover{transform:translateY(2px);background-color:#a8a8a8}btn:focus-visible{outline:solid var(--clr-text)}.section{margin-top:5rem}.title{text-transform:uppercase;margin-bottom:1rem;font-family:var(--font-secondary);color:var(--clr-text);font-size:var(--size-base)}@media (min-width: 475px){.container{max-width:475px}}@media (min-width: 640px){.container{max-width:640px}.title{font-size:var(--size-sm)}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}.section{margin-top:10rem}.title{font-size:var(--size-base)}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}@keyframes fadeIn{0%{opacity:0;transform:translateY(25px)}to{opacity:1;transform:translateY(0)}}
    #navbar {
            position: relative;
            background-color: #111;
            color: white;
            text-align: center;
            padding: 10px 0;
        }
        </style>
    <nav id="sidebar" class="close">
        <ul>
            <li> <a href="/"><span class="logo">Vasion Network</span></a> <a onclick="toggleSidebar();" id="toggle-btn" class="rotate"> <svg
                        xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                        fill="#e8eaed">
                        <path
                            d="m313-480 155 156q11 11 11.5 27.5T468-268q-11 11-28 11t-28-11L228-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l184-184q11-11 27.5-11.5T468-692q11 11 11 28t-11 28L313-480Zm264 0 155 156q11 11 11.5 27.5T732-268q-11 11-28 11t-28-11L492-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l184-184q11-11 27.5-11.5T732-692q11 11 11 28t-11 28L577-480Z">
                        </path>
                    </svg> </a> </li>
            <div class="separator"></div>
            <li class="active" id="indexli"> <a
                    onclick="document.querySelector('.active').classList.remove('active'); document.getElementById('frame').src = '/home'; document.getElementById('indexli').classList.add('active'); localStorage.setItem('page', 'home'); ">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                        fill="#e8eaed">
                        <path
                            d="M240-200h120v-200q0-17 11.5-28.5T400-440h160q17 0 28.5 11.5T600-400v200h120v-360L480-740 240-560v360Zm-80 0v-360q0-19 8.5-36t23.5-28l240-180q21-16 48-16t48 16l240 180q15 11 23.5 28t8.5 36v360q0 33-23.5 56.5T720-120H560q-17 0-28.5-11.5T520-160v-200h-80v200q0 17-11.5 28.5T400-120H240q-33 0-56.5-23.5T160-200Zm320-270Z">
                        </path>
                    </svg> <span>Home</span> </a> </li>
            <li id="dashboardli"> <a
                    onclick="document.getElementById('frame').src = '/dashboard'; document.querySelector('.active').classList.remove('active'); document.getElementById('dashboardli').classList.add('active'); localStorage.setItem('page', 'dashboard');  ">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                        fill="#e8eaed">
                        <path
                            d="M520-640v-160q0-17 11.5-28.5T560-840h240q17 0 28.5 11.5T840-800v160q0 17-11.5 28.5T800-600H560q-17 0-28.5-11.5T520-640ZM120-480v-320q0-17 11.5-28.5T160-840h240q17 0 28.5 11.5T440-800v320q0 17-11.5 28.5T400-440H160q-17 0-28.5-11.5T120-480Zm400 320v-320q0-17 11.5-28.5T560-520h240q17 0 28.5 11.5T840-480v320q0 17-11.5 28.5T800-120H560q-17 0-28.5-11.5T520-160Zm-400 0v-160q0-17 11.5-28.5T160-360h240q17 0 28.5 11.5T440-320v160q0 17-11.5 28.5T400-120H160q-17 0-28.5-11.5T120-160Zm80-360h160v-240H200v240Zm400 320h160v-240H600v240Zm0-480h160v-80H600v80ZM200-200h160v-80H200v80Zm160-320Zm240-160Zm0 240ZM360-280Z">
                        </path>
                    </svg> <span>Dashboard</span> </a> </li>
            <li id="appsli"
                onclick="document.getElementById('frame').src = '/a'; document.querySelector('.active').classList.remove('active'); document.getElementById('appsli').classList.add('active'); localStorage.setItem('page', 'apps');  ">
                <a> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                        fill="#000000">
                        <path
                            d="M240-160q-33 0-56.5-23.5T160-240q0-33 23.5-56.5T240-320q33 0 56.5 23.5T320-240q0 33-23.5 56.5T240-160Zm240 0q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm240 0q-33 0-56.5-23.5T640-240q0-33 23.5-56.5T720-320q33 0 56.5 23.5T800-240q0 33-23.5 56.5T720-160ZM240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400ZM240-640q-33 0-56.5-23.5T160-720q0-33 23.5-56.5T240-800q33 0 56.5 23.5T320-720q0 33-23.5 56.5T240-640Zm240 0q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Zm240 0q-33 0-56.5-23.5T640-720q0-33 23.5-56.5T720-800q33 0 56.5 23.5T800-720q0 33-23.5 56.5T720-640Z">
                        </path>
                    </svg> <span>Apps</span> </a> </li>
            <li id="gamesli"
                onclick="document.getElementById('frame').src = '/g'; document.querySelector('.active').classList.remove('active'); document.getElementById('gamesli').classList.add('active'); localStorage.setItem('page', 'games');  ">
                <a> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                        fill="#5f6368">
                        <path
                            d="M182-200q-51 0-79-35.5T82-322l42-300q9-60 53.5-99T282-760h396q60 0 104.5 39t53.5 99l42 300q7 51-21 86.5T778-200q-21 0-39-7.5T706-230l-90-90H344l-90 90q-15 15-33 22.5t-39 7.5Zm16-86 114-114h336l114 114q2 2 16 6 11 0 17.5-6.5T800-304l-44-308q-4-29-26-48.5T678-680H282q-30 0-52 19.5T204-612l-44 308q-2 11 4.5 17.5T182-280q2 0 16-6Zm482-154q17 0 28.5-11.5T720-480q0-17-11.5-28.5T680-520q-17 0-28.5 11.5T640-480q0 17 11.5 28.5T680-440Zm-80-120q17 0 28.5-11.5T640-600q0-17-11.5-28.5T600-640q-17 0-28.5 11.5T560-600q0 17 11.5 28.5T600-560ZM310-440h60v-70h70v-60h-70v-70h-60v70h-70v60h70v70Zm170-40Z">
                        </path>
                    </svg> <span>Games</span> </a> </li>
            <li id="settingsli"
                onclick="document.getElementById('frame').src = '/settings'; document.querySelector('.active').classList.remove('active'); document.getElementById('settingsli').classList.add('active'); localStorage.setItem('page', 'settings');  ">
                <a> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                        fill="#5f6368">
                        <path
                            d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z">
                        </path>
                    </svg> <span>Settings</span> </a> </li>
            <li> <a onclick="toggleSubMenu(this)" id="dropdownbttn" class="dropdown-btn"> <svg
                        xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                        fill="#5f6368">
                        <path
                            d="M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z">
                        </path>
                    </svg> <span>Developers</span> <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                        viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                        <path
                            d="M480-361q-8 0-15-2.5t-13-8.5L268-556q-11-11-11-28t11-28q11-11 28-11t28 11l156 156 156-156q11-11 28-11t28 11q11 11 11 28t-11 28L508-372q-6 6-13 8.5t-15 2.5Z">
                        </path>
                    </svg> </a>
                <ul class="sub-menu">
                    <div>
                        <li id="woofli"
                            onclick="document.getElementById('frame').src = '/woofplayz'; document.querySelector('.active').classList.remove('active'); document.getElementById('woofli').classList.add('active'); localStorage.setItem('page', 'woofplayz');">
                            <a>Woofplayz</a></li>
                        <li id="nobodyli"
                            onclick="document.getElementById('frame').src = '/nobodycares'; document.querySelector('.active').classList.remove('active'); document.getElementById('nobodyli').classList.add('active'); localStorage.setItem('page', 'nobodycares');">
                            <a>Nobodycares</a></li>
                        <li id="chatgptli"
                            onclick="document.getElementById('frame').src = '/chatgpt'; document.querySelector('.active').classList.remove('active'); document.getElementById('chatgptli').classList.add('active'); localStorage.setItem('page', 'chatgpt');">
                            <a>ChatGPT</a></li>
                    </div>
                </ul>
            </li>
            <div class="separator"></div>
            <li> <a href="https://discord.gg/m93HqTYS9M"> <svg role="img" height="24px" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <title>Discord</title>
                        <path
                            d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z">
                        </path>
                    </svg> <span>Discord</span> </a> </li>
            <li> <a href="https://github.com/Sunset-Network/Sunset-V3"> <svg role="img" height="24px"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <title>GitHub</title>
                        <path
                            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12">
                        </path>
                    </svg> <span>Github</span> </a> </li>
        </ul>
    </nav>
    <script src="/static/shared.js" defer></script>
    <script>
        document.addEventListener("DOMContentLoaded", (event) => {
            if (!window.screen.width <= '800') {
            } else {
                console.log('bitch')
                document.getElementById('sidebar').classList.remove('close')
            }
        });
        const toggleButton = document.getElementById("toggle-btn");
        const sidebar = document.getElementById("sidebar");

        function toggleSidebar() {
            if (sidebar.classList === "close") {
                localStorage.setItem("sidebarstatus", "closed");
            } else {
                localStorage.setItem("sidebarstatus", "open");
            }
            sidebar.classList.toggle("close");
            toggleButton.classList.toggle("rotate");

            closeAllSubMenus();
        }

        function toggleSubMenu(button) {
            if (!button.nextElementSibling.classList.contains("show")) {
                closeAllSubMenus();
            }

            button.nextElementSibling.classList.toggle("show");
            button.classList.toggle("rotate");

            if (sidebar.classList.contains("close")) {
                sidebar.classList.toggle("close");
                toggleButton.classList.toggle("rotate");
            }
        }

        function closeAllSubMenus() {
            Array.from(sidebar.getElementsByClassName("show")).forEach((ul) => {
                ul.classList.remove("show");
                ul.previousElementSibling.classList.add("rotate");
            });
        }
    </script>
  `;
  const navbarDiv = document.createElement('div');
  navbarDiv.innerHTML = navbarHTML;

  // Insert the navbar at the top of the body
  const body = document.body;
  body.insertBefore(navbarDiv, body.firstChild);

}

document.addEventListener("DOMContentLoaded", () => {
    insertNavbar();  // Insert navbar after DOM is ready
});
