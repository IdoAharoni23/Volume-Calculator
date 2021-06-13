// הגדרת משתנים
const inputR = document.querySelector("#inp-r")
const volumeS = document.querySelector(".volume")
const btn = document.querySelector(".btn")
const canvas = document.querySelector("canvas")
const clear = document.querySelector(".clear-btn")

// הגדרת הקנבאס
const c= canvas.getContext("2d")


// הגדרת האירוע שמתרחש כאשר לוחצים על כפתור החישוב

btn.addEventListener("click", function(e){
    e.preventDefault()
    // הגדרת משתנה בשם "ראד" עבור האינפוט
    let rad = document.querySelector("#inp-r").value

    // כאשר הרדיוס לא חוקי הדפדפן יגיב בהתאם
    if (rad <= 0 || rad == NaN) {
        volumeS.textContent = "The number must be number greater than 0"

    // במידה והרדיוס חוקי אז- 
    } else{
    // הגדרת משתנה לחישוב הנפח 
    let vol = (4 * (Math.PI) * (rad **3))/4
    volumeS.textContent = "The volume is : "+vol+""
    }

    // טרם יצירת הקנבאס נוודא שהרדיוס קטן מ300 או שווה בכדי שיכנס בקנבאס
    if (rad <= 300) {
        c.beginPath()
    c.arc(300,300, rad, 0, Math.PI*2, false)
    c.strokeStyle= "#9AE908"
    c.lineWidth=2.5;
    c.stroke()
    }
    // במידה והרדיוס גדול מדי עבור הקנבאס 
    else{
        alert("the max radius is 300")
    }
    

})

// הגדרת כפתור ניקוי הקנבאס
clear.addEventListener("click", function(){
    c.clearRect(0,0, 600, 600)
    volumeS.textContent = "The volume is : "

})


