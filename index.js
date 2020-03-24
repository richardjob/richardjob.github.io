var projectImageLinks = [
    'assets/projects/mars-man.webp',
    'assets/projects/image-classifier.webp',
    'assets/projects/guess-it.webp'
]
var projectDescription = [
    'Talk to Mars Man (Google action)',
    'Image Classifier in Browser',
    'Guess it, a Android number game'
]
var projectLinks = [
    'https://github.com/richardjob/mars-man',
    'https://github.com/richardjob/image-classifier',
    'https://github.com/richardjob/Guess_it',
]
var projectID = 0

var project = document.getElementById('project')
var img = document.getElementById('project-img')
var description = document.getElementById('project-txt')
var link = document.getElementById('project-link')



document.getElementById('previous').addEventListener("click", function (e) {
    e.preventDefault()
    if (projectID != 0) {
        projectID = projectID - 1
        img.src = projectImageLinks[projectID]
        description.textContent = projectDescription[projectID]
        link.href = projectLinks[projectID]
    }
})


document.getElementById('next').addEventListener("click", function (e) {
    e.preventDefault()
    if (projectID < projectImageLinks.length - 1) {
        projectID = projectID + 1
        img.src = projectImageLinks[projectID]
        description.textContent = projectDescription[projectID]
        link.href = projectLinks[projectID]
    }
})
