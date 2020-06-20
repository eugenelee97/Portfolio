(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{51:function(e,t,a){e.exports=a(75)},75:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(11),o=a.n(r),s=a(104),l=a(43),c=Object(l.a)({typography:{fontFamily:"Raleway, Arial"},breakpoints:{values:{xs:0,sm:800,md:960,lg:1200,xl:1920}}}),h=a(90),d=a(25),m=Object(h.a)((function(e){return{nav_block:{flexGrow:1},nav_bar:{background:"#fafafa",boxShadow:"none"},nav_lastL:{color:d.a[400],fontWeight:"bold"},nav_logo:{flexGrow:1,color:"black",fontWeight:"bold"}}})),u=a(91),g=a(92),p=a(93),f=a(19),b=a(94),w=a(95),y=function(e){var t=e.abtRef,a=e.pjRef,n=m(),r=function(e){window.scrollTo({behavior:"smooth",top:e.current.offsetTop})};return i.a.createElement("div",{className:n.nav_block},i.a.createElement(u.a,{position:"fixed",className:n.nav_bar,color:"transparent"},i.a.createElement(g.a,{disableGutters:!0},i.a.createElement(p.a,null,i.a.createElement(f.a,{variant:"h6",className:n.nav_logo},"Eugeni",i.a.createElement("span",{className:n.nav_lastL},"e")),i.a.createElement(b.a,{onClick:function(){return r(t)}},"About Me"),i.a.createElement(b.a,{onClick:function(){return r(a)}},"Project"),i.a.createElement(w.a,{color:"inherit",href:"./EugeneResume.pdf",target:"_blank"},i.a.createElement(b.a,null,"Download CV"))))))},v=function(e){var t=e.name,a=e.link,n=e.year;return i.a.createElement(f.a,{variant:"body2",color:"textSecondary"},"Copyright \xa9 ",i.a.createElement(w.a,{color:"inherit",href:a,target:"_blank"},t)," ".concat(n,"."))},k=Object(h.a)((function(e){return{footer:{marginTop:"auto",backgroundColor:"dark"===e.palette.type?e.palette.grey[800]:e.palette.grey[200]},footer_text:{textAlign:"left",padding:e.spacing(3,2)}}})),E=function(){var e=k(),t=(new Date).getFullYear();return i.a.createElement("footer",{className:e.footer},i.a.createElement(g.a,{className:e.footer_text,disableGutters:!0},i.a.createElement(f.a,{variant:"body1"},"This is Eugene Lee's Portfolio Website."),i.a.createElement(v,{name:"Eugene Lee",link:"https://www.linkedin.com/in/iameugenelee/",year:t})))},x=a(97),_=a(96),C=Object(h.a)((function(e){return{img_block:{textAlign:"center"},img:{width:"100%",maxWidth:"540px"},main_block:{display:"flex",flexDirection:"column",padding:e.spacing(20,0,16,0)},main_text:{textAlign:"left"},tag:{display:"flex",justifyContent:"left",flexWrap:"wrap",marginTop:"10px","& > *":{margin:e.spacing(.6)}},text_lastL:{color:d.a[400],fontWeight:"bold"},text_bold:{lineHeight:"20px",marginBottom:"30px"},skill_h:{marginTop:"20px",fontWeight:"bold",fontSize:"18px"}}})),S=function(){var e=C();return i.a.createElement(_.a,{className:e.img_block,item:!0,sm:12,md:6},i.a.createElement("img",{className:e.img,src:"./Eugene.png",alt:""}))},D=a(106),N=function(e){var t=e.skills,a=C();return i.a.createElement("div",{className:a.tag},t.map((function(e){return i.a.createElement(D.a,{label:e})})))},T=["HTML/CSS","PHP","JavaScript","Java","ReactJS","Python","C","Assembly","CCNA certificated","Software Defined Network","AWS","Ardunio","Zigbee","RFID","Wireless AP/Router"],j=function(){var e=C();return i.a.createElement(_.a,{item:!0,sm:12,md:6},i.a.createElement(f.a,{variant:"h3",component:"h1"},"About ",i.a.createElement("span",{className:e.text_lastL},"Me")),i.a.createElement(f.a,{className:e.text_bold,variant:"h6",component:"h2",gutterBottom:!0},"Hi, I'm Eugene Lee. I'm an Aspiring Software Engineer."),i.a.createElement(f.a,{className:e.text_bold,variant:"body1",gutterBottom:!0},"Recently, I graduated with a First class in Networking Technologies which helped introduce me into the world of Computer Science. During my time studying, I have been exposed to Agile practices, Networking engineering as well as Web and Software Development. I am very passionate about learning and taking on new challenges therefore I have been spending my spare time learning React and Node and have attended many extracurricular programming activities."),i.a.createElement(f.a,{className:e.skill_h,variant:"h6",component:"h4"},"What Skill I Have"),i.a.createElement(N,{skills:T}))},I=Object(n.forwardRef)((function(e,t){var a=C();return i.a.createElement("div",{ref:t,className:a.main_block},i.a.createElement(g.a,{component:"main"},i.a.createElement(x.a,null),i.a.createElement(_.a,{container:!0,className:a.main_text},i.a.createElement(j,null),i.a.createElement(S,null))))})),R=a(40),P=a.n(R),W=(a(72),Object(h.a)((function(e){return{card_block:{borderRadius:30,boxShadow:"none",marginBottom:"40px"},card_media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},card_tags:{marginTop:"8px",marginRight:"6px"},pj_block:{background:" linear-gradient(217deg, #F0C1DF, #FCEEDF, #F8CACA)",margin:"0 auto",padding:e.spacing(0,2)},pj_title:{marginBottom:"20px",display:"flex",alignItems:"center"},pj_container:{padding:e.spacing(10,0)},pj_img:{width:"50px"},pj_font:{marginLeft:"10px",fontWeight:"bold",fontSize:"28px"}}}))),F=a(41),A=a(44),O=a(3),L=a(98),B=a(99),M=a(100),G=a(101),J=a(102),H=a(103),V=a(105),z=a(42),Z=a.n(z),q=function(e){var t=e.tags,a=W();return t.map((function(e){return i.a.createElement(D.a,{className:a.card_tags,size:"small",label:e})}))},U=function(e){var t=e.title,a=e.image,n=e.content,r=e.subcontent,o=e.subcontent1,s=e.tags,l=W(),c=i.a.useState(!1),h=Object(A.a)(c,2),d=h[0],m=h[1];return i.a.createElement(g.a,null,i.a.createElement(L.a,{className:l.card_block},i.a.createElement(B.a,{title:i.a.createElement(f.a,{variant:"h6"},t),subheader:i.a.createElement(q,{tags:s})}),i.a.createElement(M.a,{className:l.card_media,image:a,title:"Image"}),i.a.createElement(G.a,null,i.a.createElement(f.a,{variant:"body2",color:"textSecondary",component:"p"},n)),i.a.createElement(J.a,{disableSpacing:!0},i.a.createElement(H.a,{className:Object(O.a)(l.expand,Object(F.a)({},l.expandOpen,d)),onClick:function(){m(!d)},"aria-expanded":d,"aria-label":"show more"},i.a.createElement(Z.a,null))),i.a.createElement(V.a,{in:d,timeout:"auto",unmountOnExit:!0},i.a.createElement(G.a,null,i.a.createElement(f.a,{paragraph:!0},r),i.a.createElement(f.a,{paragraph:!0},o)))))},K={desktop:{breakpoint:{max:3e3,min:1024},items:3,partialVisibilityGutter:40},mobile:{breakpoint:{max:800,min:0},items:1,partialVisibilityGutter:30},tablet:{breakpoint:{max:1024,min:800},items:2,partialVisibilityGutter:30}},Y=Object(n.forwardRef)((function(e,t){var a=e.list,n=W();return i.a.createElement("div",{ref:t,className:n.pj_block},i.a.createElement(g.a,{className:n.pj_container,disableGutters:!0},i.a.createElement("div",{className:n.pj_title},i.a.createElement("img",{className:n.pj_img,src:"./projectLogo.png",alt:""}),i.a.createElement(f.a,{className:n.pj_font},"Projects")),i.a.createElement(P.a,{additionalTransfrom:0,arrows:!1,autoPlay:!0,autoPlaySpeed:5e3,centerMode:!1,containerClass:"container-padding-bottom",draggable:!0,focusOnSelect:!0,infinite:!0,keyBoardControl:!0,minimumTouchDrag:80,renderButtonGroupOutside:!1,renderDotsOutside:!1,responsive:K,showDots:!0,slidesToSlide:1,swipeable:!0},Object.values(a).map((function(e){return i.a.createElement(U,Object.assign({},e,{key:e.id}))})))))})),$={0:{title:"SDN DDoS Detection",content:"Launch and detect DDoS attak on SDN environment with applying entropy fomular",subcontent:"Launch traffic by sending packets from random IP with using Scapy which is python-based packet manipulation tool for computer networks. Used entropy function to calculate entropy with the probability of destination IP occurred in the window. Compare this calculated value with threshold value that we set as 0.5. Briefly described, entropy is calculated every 50 packets in window. There is a threshold number we specified (0.5), if the calculated entropy value is lower than this threshold then we increment the count. When the count value reaches 5 during repeating this process, we consider it as DDoS attack. Because it means the number of packets with the same destination IP was very often so the entropy value was less than 0.5 is frequently counted that cause finally reaching count 5 which detects as DDoS. If it doesn\u2019t reach 5 that means, it\u2019s not DDoS.",image:"./sdn.png",tags:["Python","Scapy","Mininet"]},1:{title:"Chat Bot",content:"Create Chatbot on Facebook messenger to communicate with customers looking for futher information",subcontent:"Chatbot created with using Python, answering customer's questions and they can leave their query with simply leaving their email in the chat.",image:"./chatbot.png",tags:["Python","Bothub","Json"]},2:{title:"Steganography PGM",content:"Extract hidden messages in steganographic PGM images with using C.",subcontent:"Made the tool to Extract hidden messages in steganographic PGM images with using C. The message pixels within the image have a greyscale value which differs from all other pixels in the image, so knowing this pixel value allows the receiver to process the image so the message can be revealed. Used Brute Forct to find hidden values in PGM.",image:"./pgm.png",tags:["C"]},3:{title:"Study in Ireland Website",content:"Design Website to introduce about Education in Ireland for international students ",subcontent:"Website about Education in Ireland for international Student. This website is available in English and Korean. ",image:"./ireland.png",tags:["HTML/CSS","JavaScript","PHP"]},4:{title:"RTC(Real Time Clock) Project",content:"RTC Shown with 7-Segment Display",subcontent:"Make a seven segment display count up in using an interrupt routine to make all the digits display as if they were on simultaneously while also creating a one second digit update.",subcontent1:"To begin we declare all our ports and variables, then under \u201cStart\u201d we clear ports and set the displays to 0. Then in main we call the function \u201ctable\u201d, set the display and call the while loop. In \u201ctable\u201d we have all the bits for the numbers and then lastly we have the interrupt routine which uses context saving and multiple if statements that decrement CLKCNT, move 150 to CLKCNT and increment the next digit while clearing the last digit.",image:"./7seg.png",tags:["C","Assembly","Flowcode","Ardunio"]},5:{title:"Traffic Light Display",content:"Create a working set of traffic lights using both assembly code and flow code.",subcontent:"The idea is that two pairs of lights called North/South and East/West are to run from green and yellow to red in order while pedestrian lights are red and then repeat the cycle. At the end of the cycle the program will check for input from a switch, if there is no input the lights will continue as usual, however if there was input then a flag indicating so will be set which is then read by the input checker which then sets both sets of lights to red and turns on pedestrian lights to green which later flash quickly and then turn off beginning the cycle again until there is input. ",image:"./traffic.png",tags:["C","Assembly","Flowcode","Ardunio"]},6:{title:"Networkig with Zigbee",content:"Create four nodes onth the Zigbee network and add sleep mode on node2",subcontent:"Create four nodes onto the Zigbee network and see how they communicate across the new network. The routner node, like the coordinator is capable of forwarding messages to remote nodes. It is also similar in that it too can act as a parent to sleeping end device noted. Each node that joins the network by connecting directly to another node is referred to as a child of that node. In this four-node network exercise, each node in the network is assigned a name. Once the four nodes have successfully established communications with each other, can monitor the exchanges between the two end device.",subcontent1:"To consume less power, we added sleep mode on our node 2. The device will be placed in sleep mode whenever it is not being used. When a node is asleep, it can\u2019t communicate with, or be contacted by the network. When a sleeping node wakes up, the first thing that it must do is to check whether its parent node has any buffered message.",image:"./zigbee.png",tags:["Zigbee","Flowcode"]},7:{title:"Access Data Using RFID Reader",content:"Pressing keys can increment and decremet data on RFID card ",subcontent:"Made the program detect the presence of a Mifare transponder, read the transponders UID, read data from 5 of the trasonpder\u2019s memory, disply the 4 bytes of data on the LCD, check to see when a key on the keypad is pressed. Write the value of the key pressed to the transponder memory with using the Write_RFID_Buffer and Write_RFID_Block functions, check that the new data has been transferred successfully and check to see if the \uf0be or # keys have been pressed. if the \uf0be key is pressed, the value stored in the transponder memory will be incremented with using Increment_RFID_Value macro otherwise if the # key is pressed, the value stored will be decremented with using the Decrement_RFID_Vaule macro.",image:"./rfid.png",tags:["RFID","Flowcode"]},8:{title:"ParkRunner Program",content:"Calculate and outputs the results on client and server prgram using TCP networking",subcontent:"The client program reads the text file, instantiates the data in the program which assign barcode and calcaulte how many times are their laps, and which park they went. Then ransfers these data to server. Then server calculates and outputs the fastest female and the fastest male. Finally, this project is ended with analyzing TCP flow from the Wireshark.",image:"./parkrunner.png",tags:["Java","Wireshark"]}},Q=function(){var e=Object(n.useRef)(),t=Object(n.useRef)();return i.a.createElement(s.a,{theme:c},i.a.createElement(y,{abtRef:e,pjRef:t}),i.a.createElement(I,{ref:e}),i.a.createElement(Y,{list:$,ref:t}),i.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,2]]]);
//# sourceMappingURL=main.fb27edc5.chunk.js.map