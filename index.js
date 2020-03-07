var projectImageLinks = [
    'assets/projects/mars-man.png',
    'assets/projects/image-classifier.jpg',
]
var projectDescription = [
    'Talk to Mars Man (Google action)',
    'Image Classifier in Browser',
]
var projectLinks = [
    'https://github.com/richardjob/mars-man',
    'https://github.com/richardjob/image-classifier',
]
var projectID = 0

var project = document.getElementById('project')
var img = document.getElementById('project-img')
var description = document.getElementById('project-txt')
var link = document.getElementById('project-link')



document.getElementById('previous').addEventListener("click", function (e) {
    e.preventDefault()
    if (projectID != 0) {
        project.classList.remove("w3-animate-right")
        project.classList.toggle("w3-animate-left")
        projectID = projectID - 1
        img.src = projectImageLinks[projectID]
        description.textContent = projectDescription[projectID]
        link.href = projectLinks[projectID]
    }
})


document.getElementById('next').addEventListener("click", function (e) {
    e.preventDefault()
    if (projectID < projectImageLinks.length - 1) {
        project.classList.remove("w3-animate-left")
        project.classList.toggle("w3-animate-right")
        projectID = projectID + 1
        img.src = projectImageLinks[projectID]
        description.textContent = projectDescription[projectID]
        link.href = projectLinks[projectID]
    }
})
