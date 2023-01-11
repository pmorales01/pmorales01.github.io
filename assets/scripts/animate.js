const div = document.getElementById('btn-container')

const subjects = [["HTML, CSS, JS", './web-dev-projects.html'],
    ["PHP, SQL", '#'],
    ["C++", '#'],
    ["C", '#'],
    ["x86 Assembly", '#'],
    ["Python", '#']]

for (let i = 0; i < subjects.length; ++i) {
    const btn = document.createElement('button')
    btn.classList = 'btn btn-primary bg-success hover:bg-red-600 animate-wobble'
    const anchor = document.createElement('a')
    anchor.textContent = subjects[i][0]
    anchor.href = subjects[i][1]
    anchor.classList = 'text-xl font-bold w-full hover:text-white'
    btn.append(anchor)
    div.append(btn)
}

