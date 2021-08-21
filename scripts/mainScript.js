// responsive container

var container = document.getElementById('container').style,win = window

const resize = (str)=>{
    container.width = `${win.innerWidth}px`
    container.height = `${win.innerHeight}px`
    if (str === 're'){
        if (win.innerWidth > 535){
            expand()
        }
        if (win.innerWidth < 535){
            collpase()
        }
    }
}

win.onresize = e=>{
    resize('re')
}

resize('set')

// responsive navbar

document.getElementById('navToggle').addEventListener('click',e=>{
    console.log('here');
    document.getElementById('navToggle').style.display = 'none'
    document.getElementById('navList').style.display = 'grid'
    document.getElementById('leave').style.display = 'block'
})

document.getElementById('leave').addEventListener('click',e=>{
    document.getElementById('navToggle').style.display = 'grid'
    document.getElementById('navList').style.display = 'none'
    document.getElementById('leave').style.display = 'none'
})

const expand = ()=>{
    document.getElementById('navToggle').style.display = 'none'
    document.getElementById('navList').style.display = 'block'
    document.getElementById('leave').style.display = 'none'
}

const collpase = ()=>{
    document.getElementById('navToggle').style.display = 'block'
    document.getElementById('navList').style.display = 'none'
    document.getElementById('leave').style.display = 'none'
}

// add section
document.addEventListener('click',e=>{
    if (document.activeElement.id === 'addLogo'){
        var note = document.getElementById('note').value
        addNote(note)
    }
})

document.addEventListener('keyup',e=>{
    if (e.code === 'Enter' && document.activeElement.id === 'note'){
        var note = document.getElementById('note').value
        addNote(note)
    }
})

function addNote(note){
    if (note === '' || note == null || note == undefined){
        var noteee = 'This note is empty'
    }else {
        var noteee = note
    }
    if (document.body.getAttribute('theme') === 'light'){
        var bg = 'plainWhite',text = 'lightText'
    }else if (document.body.getAttribute('theme') === 'dark'){
        var bg = 'plainDark',text = 'darkText'
    }else {
        console.log('Error: theme not detected')
        var bg = '',text = ''
    }
    document.getElementById('landingPage').innerHTML += `
    <div class="section secondryColor">
        <div class="sectionInner ${bg} addSection">
            <div style="display: grid;place-items: center;text-align:center">
                <h2 class="${text}">${noteee}</h2>
            </div>
        </div>
    </div>`
}

//switch theme mode 

document.getElementById('dark').addEventListener('click',e=>{
    document.querySelectorAll('.plainWhite').forEach(element=>{
        element.classList.replace('plainWhite','plainDark')
    })
    document.querySelectorAll('.lightInput').forEach(element=>{
        element.classList.replace('lightInput','darkInput')
    })
    document.querySelectorAll('.lightText').forEach(element=>{
        element.classList.replace('lightText','darkText')
    })
    document.body.setAttribute('theme','dark')
    document.getElementById('dark').style.display = 'none'
    document.getElementById('light').style.display = 'inline'
})

document.getElementById('light').addEventListener('click',e=>{
    document.querySelectorAll('.plainDark').forEach(element=>{
        element.classList.replace('plainDark','plainWhite')
    })
    document.querySelectorAll('.darkInput').forEach(element=>{
        element.classList.replace('darkInput','lightInput')
    })
    document.querySelectorAll('.darkText').forEach(element=>{
        element.classList.replace('darkText','lightText')
    })
    document.body.setAttribute('theme','light')
    document.getElementById('light').style.display = 'none'
    document.getElementById('dark').style.display = 'inline'
})