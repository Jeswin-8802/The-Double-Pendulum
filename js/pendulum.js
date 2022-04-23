var isClosed = true

function openNav() {
    document.getElementById("mySidenav").style.width = "250px"
    document.getElementById("mySidenav").style.padding = "1%"
    document.getElementById("overlay").style.padding = "2%"
    document.getElementById("main").style.marginLeft = "250px"
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)"
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0"
    document.getElementById("main").style.marginLeft= "0"
    document.getElementById("mySidenav").style.padding = "0"
    document.getElementById("overlay").style.padding = "0"
    document.body.style.backgroundColor = "rgba(0,0,0,0)"
}

function Nav() {
    if (isClosed) {
        openNav()
        isClosed = false
    } else {
        closeNav()
        isClosed = true
    }
}

const canvas = document.getElementById("myCanvas")
const ctx = canvas.getContext("2d")
ctx.canvas.width = window.innerWidth
ctx.canvas.height = window.innerHeight
const width = canvas.width
const height = canvas.height

canvas.addEventListener('click', () => {
    closeNav()
    isClosed = true
})

ctx.strokeStyle = "#AAAAAA"
ctx.translate(width / 2, 7 * height / 15)

var grd = ctx.createRadialGradient(0, 0, 10, 0, 0, height / 2)
grd.addColorStop(0, "#e1fff1")
grd.addColorStop(1, "#f6ffe5")

var a1 = Math.PI / 1.9,
    a2 = Math.PI / 1.9,
    r1 = width > height ? height / 4.2 : width / 4.2,
    r2 = r1,
    m1 = 20,
    m2 = 20,
    g = 1,
    a1_v = 0,
    a2_v = 0,
    a1_a = 0,
    a2_a = 0,
    speed = 1.25,
    l_ratio = 30,
    m_ratio = 50,
    gravity = true,
    show_pendulum = true,
    arr_len = 25,
    trace = []

function fillCircle(x, y, radius, fillcolor) {
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.arc(x, y, radius, 0, 2 * Math.PI)
    ctx.closePath()
    ctx.fillStyle = fillcolor
    ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
    ctx.lineWidth = 2
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.stroke()
}

function tracePath() {
    trace.push([r1 * Math.sin(a1) + r2 * Math.sin(a2), r1 * Math.cos(a1) + r2 * Math.cos(a2)])
    while (trace.length > arr_len)
        trace.shift()

    var i = 0, tempM = 10
    trace.forEach((arr) => {
        fillCircle(arr[0], arr[1], parseInt(tempM), "#256d4a" + (i.toString(16).length == 1 ? "0" + i.toString(16) : i.toString(16)))
        i += parseInt(255 / arr_len)
        tempM += (m2 - 10) / arr_len
    })
}

document.getElementById('apply').addEventListener('click', () => {
    if (document.getElementById("length-ratio").value != l_ratio) {
        l_ratio = document.getElementById("length-ratio").value
        let temp = r1
        r1 = (r1 + r2) * l_ratio / 60
        r2 = (temp + r2) * (60 - l_ratio) / 60
    }
    if (document.getElementById("mass-ratio").value != m_ratio) {
        m_ratio = document.getElementById("mass-ratio").value
        m1 = 10 + (m_ratio / 5)
        m2 = 10 + (100 - m_ratio) / 5
    }
    if (document.getElementById("gravity").checked != gravity) {
        gravity = document.getElementById("gravity").checked
        g = gravity ? 1 : 0
    }
    if (document.getElementById("show_pendulum").checked != show_pendulum)
        show_pendulum = document.getElementById("show_pendulum").checked
})

requestAnimationFrame(draw)

function draw() {
    ctx.save()

    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.clearRect(0, 0, width, height)

    ctx.restore()
    
    let num1 = -g * (2 * m1 + m2) * Math.sin(a1)
    let num2 = -m2 * g * Math.sin(a1 - 2 * a2)
    let num3 = -2 * Math.sin(a1 - a2) * m2
    let num4 = a2_v * a2_v * r2 + a1_v * a1_v * r1 * Math.cos(a1-a2)
    let den = r1 * (2 * m1 + m2 - m2 * Math.cos(2 * a1 - 2 * a2))
  
    // Following equations derived from http://www.physicsandbox.com/projects/double-pendulum.html
  
    a1_a = (num1 + num2 + num3 * num4) / den
  
    num1 = 2 * Math.sin(a1 - a2)
    num2 = a1_v * a1_v * r1 * (m1 + m2)
    num3 = g * (m1 + m2) * Math.cos(a1)
    num4 = a2_v * a2_v * r2 * m2 * Math.cos(a1 - a2)
    den = r2 * (2 * m1 + m2 - m2 * Math.cos(2 * a1 - 2 * a2))
  
    a2_a = (num1 * (num2 + num3 + num4)) / den

    if (show_pendulum) {
        drawLine(0, 0, r1 * Math.sin(a1), r1 * Math.cos(a1))
        drawLine(r1 * Math.sin(a1), r1 * Math.cos(a1), r1 * Math.sin(a1) + r2 * Math.sin(a2), r1 * Math.cos(a1) + r2 * Math.cos(a2))

        arr_len = 25
        tracePath()

        fillCircle(r1 * Math.sin(a1), r1 * Math.cos(a1), m1, grd)
        fillCircle(r1 * Math.sin(a1) + r2 * Math.sin(a2), r1 * Math.cos(a1) + r2 * Math.cos(a2), m2, grd)
    
        fillCircle(0, 0, 7, "#FFFFFF")
        fillCircle(0, 0, 3, "#000000")
    } else {
        arr_len = 50
        tracePath()
    }
  
    a1_v += a1_a / speed
    a2_v += a2_a / speed
    a1 += a1_v
    a2 += a2_v
  
    requestAnimationFrame(draw)
}