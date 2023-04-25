const header=document.createElement("header")
const nav=document.createElement("nav")
const ul=document.createElement("li")

const home=document.createElement("li")
const about=document.createElement("li")
const blog=document.createElement("li")
const contact=document.createElement("li")


const sectiona=document.createElement("section")
const sectionb=document.createElement("section")
const sectionc=document.createElement("section")
const sectiond=document.createElement("section")


home.innerText="Home"
about.innerText="About"
blog.innerText="Blog"
contact.innerText="Contact"


document.body.append(header)

header.append(nav)
nav.append(ul)


ul.append(home)
ul.append(about)
ul.append(blog)
ul.append(contact)


document.body.appendChild(header)
document.body.appendChild(sectiona)
document.body.appendChild(sectionb)
document.body.appendChild(sectionc)
document.body.appendChild(sectiond)


sectiona.append("Home")
sectionb.append("About")
sectionc.append("Blog")
sectiond.append("Contact")



ul.style.display="flex"
ul.style.height="10vh"
ul.style.justifyContent="space-around"
ul.style.backgroundColor="#000"
ul.style.alignItems="center"
ul.style.color="#fff"
ul.style.listStyle="none"


sectiona.style.height="100vh"
sectiona.style.display="flex"
sectiona.style.alignItems="center"
sectiona.style.justifyContent="center"
sectiona.style.fontSize="20px"
sectiona.style.fontWeight="bolder"
sectiona.style.border="1px dashed #000"



sectionb.style.height="100vh"
sectionb.style.display="flex"
sectionb.style.alignItems="center"
sectionb.style.justifyContent="center"
sectionb.style.fontSize="20px"
sectionb.style.fontWeight="bolder"
sectionb.style.border="1px dashed #000"



sectionc.style.height="100vh"
sectionc.style.display="flex"
sectionc.style.alignItems="center"
sectionc.style.justifyContent="center"
sectionc.style.fontSize="20px"
sectionc.style.fontWeight="bolder"
sectionc.style.border="1px dashed #000"



sectiond.style.height="100vh"
sectiond.style.display="flex"
sectiond.style.alignItems="center"
sectiond.style.justifyContent="center"
sectiond.style.fontSize="20px"
sectiond.style.fontWeight="bolder"
sectiond.style.border="1px dashed #000"




