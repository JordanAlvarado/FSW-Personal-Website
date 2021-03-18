let aboutMe = document.querySelector('#About-Me')
let professionalBackground = document.querySelector('#Professional-Background')
let techExperience = document.querySelector('#Tech-Experience')
let contact = document.querySelector('#Contact')

aboutMe.addEventListener("click", () => {
 let paragraph = document.querySelector('p.body')
 paragraph.innerText = "My name is Jordan Alvarado! I am an amateur software enginner, looking to further improve my craft, with a side passion of playing the violin! My childhood was influenced thanks to my grandfather having owned his own computer repair shop. As I got older, I became interested in coding, and proceeded to start taking classes in order to learn about the technology industry. I joined the robotics club during my junior and senior year of high school. There I learned how to program robots. The robots I helped build were entered into battle competitions, with one even taking third place."
 let heading = document.querySelector('h2')
 heading.innerText = "About Me"
})

professionalBackground.addEventListener('click', () => {
 let paragraph = document.querySelector('p.body')
 paragraph.innerText = "After graduating from NPower, I went on to complete a 6 month internship with JP Morgan Chase & Co. While at JP Morgan I was placed with Team Voyager. I assisted in two projects developing financial analytic software using Java. I worked with the programming environment IntelliJ. I also utilized and worked with Gaia as a safe space to test the program."
 let heading = document.querySelector('h2')
 heading.innerText = "Professional Background"
})

techExperience.addEventListener('click', () =>{
 let paragraph = document.querySelector('p.body')
 paragraph.innerText = "Some tech I have used during my time both in and out of school is Java, HTML, CSS, JavaScript, and Gaia."
 let heading = document.querySelector('h2')
 heading.innerText = "Tech Experience"
})

contact.addEventListener("click", () => {
 let paragraph = document.querySelector('p.body')
 paragraph.innerText = "You can email me at jordan.alvarado@me.com, or call (973)-767-3411 to get into contact with me."
 let heading = document.querySelector('h2')
 heading.innerText = "Ways To Contact Me"
})

//Make a function that holds both of the query selectors for both Paragraph and heading :D