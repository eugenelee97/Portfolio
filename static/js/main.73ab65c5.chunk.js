(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{54:function(e,t,a){e.exports=a(78)},78:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(11),o=a.n(i),s=a(118),l=a(45),c=Object(l.a)({typography:{fontFamily:"Raleway, Arial"},breakpoints:{values:{xs:0,sm:800,md:960,lg:1200,xl:1920}}}),h=a(104),d=a(105),m=a(107),u=a(21),g=a(108),p=a(19),f=a.n(p),b=a(109),w=a(106),y=Object(h.a)((function(e){return{root:{flexGrow:1},bar:{background:"#fafafa",boxShadow:"none"},other:{color:f.a[400],fontweight:"bold"},title:{flexGrow:1,color:"black",fontWeight:"bold"}}}));function v(e){var t=e.abtRef,a=e.pjRef,n=y(),i=function(e){window.scrollTo({behavior:"smooth",top:e.current.offsetTop})};return r.a.createElement("div",{className:n.root},r.a.createElement(d.a,{position:"fixed",className:n.bar},r.a.createElement(w.a,{disableGutters:!0},r.a.createElement(m.a,null,r.a.createElement(u.a,{variant:"h6",className:n.title},"Eugeni",r.a.createElement("span",{className:n.other},"e")),r.a.createElement(g.a,{onClick:function(){return i(t)}},"About Me"),r.a.createElement(g.a,{onClick:function(){return i(a)}},"Project"),r.a.createElement(b.a,{color:"inherit",href:"./EugeneResume.pdf",target:"_blank"},r.a.createElement(g.a,null,"Download CV"))))))}function E(){return r.a.createElement(u.a,{variant:"body2",color:"textSecondary"},"Copyright \xa9 ",r.a.createElement(b.a,{color:"inherit",href:"https://www.linkedin.com/in/iameugenelee/",target:"_blank"},"Eugene Lee")," ",(new Date).getFullYear(),".")}var k=Object(h.a)((function(e){return{footer:{marginTop:"auto",backgroundColor:"dark"===e.palette.type?e.palette.grey[800]:e.palette.grey[200]},footer_text:{textAlign:"left",padding:e.spacing(3,2)}}}));function x(){var e=k();return r.a.createElement("footer",{className:e.footer},r.a.createElement(w.a,{className:e.footer_text,disableGutters:!0},r.a.createElement(u.a,{variant:"body1"},"This is Eugene Lee's Portfolio Website."),r.a.createElement(E,null)))}var C=a(111),S=a(110),D=Object(h.a)((function(e){return{imgBlock:{textAlign:"center"},img:{width:"100%",maxWidth:"540px"}}}));function N(){var e=D();return r.a.createElement(S.a,{className:e.imgBlock,item:!0,sm:12,md:6},r.a.createElement("img",{className:e.img,src:"./Eugene.png",alt:""}))}var T=Object(h.a)((function(e){return{skill_h:{marginTop:"20px",fontWeight:"bold",fontSize:"18px"},skill:{color:f.a[400],fontWeight:"bold"}}}));function j(){var e=T();return r.a.createElement(u.a,{className:e.skill_h,variant:"h6",component:"h4"},"What Skill I Have")}var I=a(120),R=Object(h.a)((function(e){return{tag:{display:"flex",justifyContent:"left",flexWrap:"wrap",marginTop:"10px","& > *":{margin:e.spacing(.6)}}}}));function P(){var e=R();return r.a.createElement("div",{className:e.tag},["HTML/CSS","PHP","JavaScript","Java","ReactJS","Python","C","Assembly","CCNA certificated","Software Defined Network","AWS","Ardunio","Zigbee","RFID","Wireless AP/Router"].map((function(e){return r.a.createElement(I.a,{label:e})})))}var O=Object(h.a)((function(e){return{other:{color:f.a[400],fontWeight:"bold"},about_main:{lineHeight:"20px",marginBottom:"30px"},bold:{lineHeight:"20px",marginBottom:"30px"}}}));function W(){var e=O();return r.a.createElement(S.a,{item:!0,sm:12,md:6},r.a.createElement(u.a,{variant:"h3",component:"h1"},"About ",r.a.createElement("span",{className:e.other},"Me")),r.a.createElement(u.a,{className:(e.about_main,e.bold),variant:"h6",component:"h2",gutterBottom:!0},"Hi, I'm Eugene Lee. I'm an Aspiring Software Engineer."),r.a.createElement(u.a,{className:e.about_main,variant:"body1",gutterBottom:!0},"Recently, I graduated with a First class in Networking Technologies which helped introduce me into the world of Computer Science. During my time studying, I have been exposed to Agile practices, Networking engineering as well as Web and Software Development. I am very passionate about learning and taking on new challenges therefore I have been spending my spare time learning React and Node and have attended many extracurricular programming activities."),r.a.createElement(j,null),r.a.createElement(P,null))}var F=Object(h.a)((function(e){return{root:{display:"flex",flexDirection:"column",padding:e.spacing(20,0,16,0)},main:{margin:"0 auto"},about:{textAlign:"left"}}})),A=Object(n.forwardRef)((function(e,t){var a=F();return r.a.createElement("div",{ref:t,className:a.root},r.a.createElement(C.a,null),r.a.createElement(w.a,{component:"main"},r.a.createElement(S.a,{container:!0,className:a.about},r.a.createElement(W,null),r.a.createElement(N,null))))})),B=a(42),_=a(46),L=a(3),M=a(112),G=a(113),H=a(114),J=a(115),V=a(116),z=a(119),Z=a(117),q=a(43),U=a.n(q),K=Object(h.a)((function(e){return{root:{borderRadius:30,boxShadow:"none",marginBottom:"40px"},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},projectTags:{marginTop:"8px",marginRight:"6px"}}})),Y=function(e){var t=e.tags,a=K();return t.map((function(e){return r.a.createElement(I.a,{className:a.projectTags,size:"small",label:e})}))},$=function(e){var t=e.title,a=e.image,n=e.content,i=e.subcontent,o=e.subcontent1,s=e.tags,l=K(),c=r.a.useState(!1),h=Object(_.a)(c,2),d=h[0],m=h[1];return r.a.createElement(w.a,null,r.a.createElement(M.a,{className:l.root},r.a.createElement(G.a,{title:r.a.createElement(u.a,{variant:"h6"},t),subheader:r.a.createElement(Y,{tags:s})}),r.a.createElement(H.a,{className:l.media,image:a,title:"Image"}),r.a.createElement(J.a,null,r.a.createElement(u.a,{variant:"body2",color:"textSecondary",component:"p"},n)),r.a.createElement(V.a,{disableSpacing:!0},r.a.createElement(Z.a,{className:Object(L.a)(l.expand,Object(B.a)({},l.expandOpen,d)),onClick:function(){m(!d)},"aria-expanded":d,"aria-label":"show more"},r.a.createElement(U.a,null))),r.a.createElement(z.a,{in:d,timeout:"auto",unmountOnExit:!0},r.a.createElement(J.a,null,r.a.createElement(u.a,{paragraph:!0},i),r.a.createElement(u.a,{paragraph:!0},o)))))},Q=a(44),X=a.n(Q),ee=(a(77),Object(h.a)((function(e){return{root:{background:" linear-gradient(217deg, #F0C1DF, #FCEEDF, #F8CACA)",margin:"0 auto",padding:e.spacing(0,2)},title:{marginBottom:"20px",display:"flex",alignItems:"center"},container:{padding:e.spacing(10,0)},img:{width:"50px"},project:{marginLeft:"10px",fontWeight:"bold",fontSize:"28px"}}}))),te={desktop:{breakpoint:{max:3e3,min:1024},items:3,partialVisibilityGutter:40},mobile:{breakpoint:{max:800,min:0},items:1,partialVisibilityGutter:30},tablet:{breakpoint:{max:1024,min:800},items:2,partialVisibilityGutter:30}},ae=Object(n.forwardRef)((function(e,t){var a=e.list,n=ee();return r.a.createElement("div",{ref:t,className:n.root},r.a.createElement(w.a,{className:n.container,disableGutters:!0},r.a.createElement("div",{className:n.title},r.a.createElement("img",{className:n.img,src:"./projectLogo.png",alt:""}),r.a.createElement(u.a,{className:n.project},"Projects")),r.a.createElement(X.a,{additionalTransfrom:0,arrows:!1,autoPlay:!0,autoPlaySpeed:5e3,centerMode:!1,className:"",containerClass:"container-padding-bottom",dotListClass:"",draggable:!0,focusOnSelect:!0,infinite:!0,itemClass:"",keyBoardControl:!0,minimumTouchDrag:80,renderButtonGroupOutside:!1,renderDotsOutside:!1,responsive:te,showDots:!0,sliderClass:"",slidesToSlide:1,swipeable:!0},Object.values(a).map((function(e){return r.a.createElement($,Object.assign({},e,{key:e.id}))})))))})),ne={0:{title:"SDN DDoS Detection",content:"Launch and detect DDoS attak on SDN environment with applying entropy fomular",subcontent:"Launch traffic by sending packets from random IP with using Scapy which is python-based packet manipulation tool for computer networks. Used entropy function to calculate entropy with the probability of destination IP occurred in the window. Compare this calculated value with threshold value that we set as 0.5. Briefly described, entropy is calculated every 50 packets in window. There is a threshold number we specified (0.5), if the calculated entropy value is lower than this threshold then we increment the count. When the count value reaches 5 during repeating this process, we consider it as DDoS attack. Because it means the number of packets with the same destination IP was very often so the entropy value was less than 0.5 is frequently counted that cause finally reaching count 5 which detects as DDoS. If it doesn\u2019t reach 5 that means, it\u2019s not DDoS.",image:"./sdn.png",tags:["Python","Scapy","Mininet"]},1:{title:"Chat Bot",content:"Create Chatbot on Facebook messenger to communicate with customers looking for futher information",subcontent:"Chatbot created with using Python, answering customer's questions and they can leave their query with simply leaving their email in the chat.",image:"./chatbot.png",tags:["Python","Bothub","Json"]},2:{title:"Steganography PGM",content:"Extract hidden messages in steganographic PGM images with using C.",subcontent:"Made the tool to Extract hidden messages in steganographic PGM images with using C. The message pixels within the image have a greyscale value which differs from all other pixels in the image, so knowing this pixel value allows the receiver to process the image so the message can be revealed. Used Brute Forct to find hidden values in PGM.",image:"./pgm.png",tags:["C"]},3:{title:"Study in Ireland Website",content:"Design Website to introduce about Education in Ireland for international students ",subcontent:"Website about Education in Ireland for international Student. This website is available in English and Korean. ",image:"./ireland.png",tags:["HTML/CSS","JavaScript","PHP"]},4:{title:"RTC(Real Time Clock) Project",content:"RTC Shown with 7-Segment Display",subcontent:"Make a seven segment display count up in using an interrupt routine to make all the digits display as if they were on simultaneously while also creating a one second digit update.",subcontent1:"To begin we declare all our ports and variables, then under \u201cStart\u201d we clear ports and set the displays to 0. Then in main we call the function \u201ctable\u201d, set the display and call the while loop. In \u201ctable\u201d we have all the bits for the numbers and then lastly we have the interrupt routine which uses context saving and multiple if statements that decrement CLKCNT, move 150 to CLKCNT and increment the next digit while clearing the last digit.",image:"./7seg.png",tags:["C","Assembly","Flowcode","Ardunio"]},5:{title:"Traffic Light Display",content:"Create a working set of traffic lights using both assembly code and flow code.",subcontent:"The idea is that two pairs of lights called North/South and East/West are to run from green and yellow to red in order while pedestrian lights are red and then repeat the cycle. At the end of the cycle the program will check for input from a switch, if there is no input the lights will continue as usual, however if there was input then a flag indicating so will be set which is then read by the input checker which then sets both sets of lights to red and turns on pedestrian lights to green which later flash quickly and then turn off beginning the cycle again until there is input. ",image:"./traffic.png",tags:["C","Assembly","Flowcode","Ardunio"]},6:{title:"Networkig with Zigbee",content:"Create four nodes onth the Zigbee network and add sleep mode on node2",subcontent:"Create four nodes onto the Zigbee network and see how they communicate across the new network. The routner node, like the coordinator is capable of forwarding messages to remote nodes. It is also similar in that it too can act as a parent to sleeping end device noted. Each node that joins the network by connecting directly to another node is referred to as a child of that node. In this four-node network exercise, each node in the network is assigned a name. Once the four nodes have successfully established communications with each other, can monitor the exchanges between the two end device.",subcontent1:"To consume less power, we added sleep mode on our node 2. The device will be placed in sleep mode whenever it is not being used. When a node is asleep, it can\u2019t communicate with, or be contacted by the network. When a sleeping node wakes up, the first thing that it must do is to check whether its parent node has any buffered message.",image:"./zigbee.png",tags:["Zigbee","Flowcode"]},7:{title:"Access Data Using RFID Reader",content:"Pressing keys can increment and decremet data on RFID card ",subcontent:"Made the program detect the presence of a Mifare transponder, read the transponders UID, read data from 5 of the trasonpder\u2019s memory, disply the 4 bytes of data on the LCD, check to see when a key on the keypad is pressed. Write the value of the key pressed to the transponder memory with using the Write_RFID_Buffer and Write_RFID_Block functions, check that the new data has been transferred successfully and check to see if the \uf0be or # keys have been pressed. if the \uf0be key is pressed, the value stored in the transponder memory will be incremented with using Increment_RFID_Value macro otherwise if the # key is pressed, the value stored will be decremented with using the Decrement_RFID_Vaule macro.",image:"./rfid.png",tags:["RFID","Flowcode"]},8:{title:"ParkRunner Program",content:"Calculate and outputs the results on client and server prgram using TCP networking",subcontent:"The client program reads the text file, instantiates the data in the program which assign barcode and calcaulte how many times are their laps, and which park they went. Then ransfers these data to server. Then server calculates and outputs the fastest female and the fastest male. Finally, this project is ended with analyzing TCP flow from the Wireshark.",image:"./parkrunner.png",tags:["Java","Wireshark"]}},re=function(){var e=Object(n.useRef)(),t=Object(n.useRef)();return r.a.createElement(s.a,{theme:c},r.a.createElement(v,{abtRef:e,pjRef:t}),r.a.createElement(A,{ref:e}),r.a.createElement(ae,{list:ne,ref:t}),r.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(re,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[54,1,2]]]);
//# sourceMappingURL=main.73ab65c5.chunk.js.map