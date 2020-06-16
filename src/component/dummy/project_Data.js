export const projectData = {
  "0": {
    title: "SDN DDoS Detection",
    content:
      "Launch and detect DDoS attak on SDN environment with applying entropy fomular",
    subcontent:
      "Launch traffic by sending packets from random IP with using Scapy which is python-based packet manipulation tool for computer networks. Used entropy function to calculate entropy with the probability of destination IP occurred in the window. Compare this calculated value with threshold value that we set as 0.5. Briefly described, entropy is calculated every 50 packets in window. There is a threshold number we specified (0.5), if the calculated entropy value is lower than this threshold then we increment the count. When the count value reaches 5 during repeating this process, we consider it as DDoS attack. Because it means the number of packets with the same destination IP was very often so the entropy value was less than 0.5 is frequently counted that cause finally reaching count 5 which detects as DDoS. If it doesn’t reach 5 that means, it’s not DDoS.",
    image: "./sdn.png",
    tags: ["Python", "Scapy", "Mininet"]
  },
  "1": {
    title: "Chat Bot",
    content:
      "Create Chatbot on Facebook messenger to communicate with customers looking for futher information",
    subcontent:
      "Chatbot created with using Python, answering customer's questions and they can leave their query with simply leaving their email in the chat.",
    image: "./chatbot.png",
    tags: ["Python", "Bothub", "Json"]
  },
  "2": {
    title: "Steganography PGM",
    content:
      "Extract hidden messages in steganographic PGM images with using C.",
    subcontent:
      "Made the tool to Extract hidden messages in steganographic PGM images with using C. The message pixels within the image have a greyscale value which differs from all other pixels in the image, so knowing this pixel value allows the receiver to process the image so the message can be revealed. Used Brute Forct to find hidden values in PGM.",
    image: "./pgm.png",
    tags: ["C"]
  },
  "3": {
    title: "Study in Ireland Website",
    content:
      "Design Website to introduce about Education in Ireland for international students ",
    subcontent:
      "Website about Education in Ireland for international Student. This website is available in English and Korean. ",
    image: "./ireland.png",
    tags: ["HTML/CSS", "JavaScript", "PHP"]
  },

  "4": {
    title: "RTC(Real Time Clock) Project",
    content: "RTC Shown with 7-Segment Display",
    subcontent:
      "Make a seven segment display count up in using an interrupt routine to make all the digits display as if they were on simultaneously while also creating a one second digit update.",
    subcontent1:
      "To begin we declare all our ports and variables, then under “Start” we clear ports and set the displays to 0. Then in main we call the function “table”, set the display and call the while loop. In “table” we have all the bits for the numbers and then lastly we have the interrupt routine which uses context saving and multiple if statements that decrement CLKCNT, move 150 to CLKCNT and increment the next digit while clearing the last digit.",
    image: "./7seg.png",
    tags: ["C", "Assembly", "Flowcode", "Ardunio"]
  },
  "5": {
    title: "Traffic Light Display",
    content:
      "Create a working set of traffic lights using both assembly code and flow code.",
    subcontent:
      "The idea is that two pairs of lights called North/South and East/West are to run from green and yellow to red in order while pedestrian lights are red and then repeat the cycle. At the end of the cycle the program will check for input from a switch, if there is no input the lights will continue as usual, however if there was input then a flag indicating so will be set which is then read by the input checker which then sets both sets of lights to red and turns on pedestrian lights to green which later flash quickly and then turn off beginning the cycle again until there is input. ",
    image: "./traffic.png",
    tags: ["C", "Assembly", "Flowcode", "Ardunio"]
  },
  "6": {
    title: "Networkig with Zigbee",
    content:
      "Create four nodes onth the Zigbee network and add sleep mode on node2",
    subcontent:
      "Create four nodes onto the Zigbee network and see how they communicate across the new network. The routner node, like the coordinator is capable of forwarding messages to remote nodes. It is also similar in that it too can act as a parent to sleeping end device noted. Each node that joins the network by connecting directly to another node is referred to as a child of that node. In this four-node network exercise, each node in the network is assigned a name. Once the four nodes have successfully established communications with each other, can monitor the exchanges between the two end device.",
    subcontent1:
      "To consume less power, we added sleep mode on our node 2. The device will be placed in sleep mode whenever it is not being used. When a node is asleep, it can’t communicate with, or be contacted by the network. When a sleeping node wakes up, the first thing that it must do is to check whether its parent node has any buffered message.",
    image: "./zigbee.png",
    tags: ["Zigbee", "Flowcode"]
  },
  "7": {
    title: "Access Data Using RFID Reader",
    content: "Pressing keys can increment and decremet data on RFID card ",
    subcontent:
      "Made the program detect the presence of a Mifare transponder, read the transponders UID, read data from 5 of the trasonpder’s memory, disply the 4 bytes of data on the LCD, check to see when a key on the keypad is pressed. Write the value of the key pressed to the transponder memory with using the Write_RFID_Buffer and Write_RFID_Block functions, check that the new data has been transferred successfully and check to see if the  or # keys have been pressed. if the  key is pressed, the value stored in the transponder memory will be incremented with using Increment_RFID_Value macro otherwise if the # key is pressed, the value stored will be decremented with using the Decrement_RFID_Vaule macro.",
    image: "./rfid.png",
    tags: ["RFID", "Flowcode"]
  },
  "8": {
    title: "ParkRunner Program",
    content:
      "Calculate and outputs the results on client and server prgram using TCP networking",
    subcontent:
      "The client program reads the text file, instantiates the data in the program which assign barcode and calcaulte how many times are their laps, and which park they went. Then ransfers these data to server. Then server calculates and outputs the fastest female and the fastest male. Finally, this project is ended with analyzing TCP flow from the Wireshark.",
    image: "./parkrunner.png",
    tags: ["Java", "Wireshark"]
  }
};
