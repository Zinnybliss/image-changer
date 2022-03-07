// get the variables
// addeventlisteners
// you implement change image.
const picChange = document.getElementById("change-pic")
const btnElement = document.getElementById("btn")
const imgElement = document.getElementById("imgBig")
const pic_image = ["5399474.jpeg", "chelsea wallpaper.jpeg", "Chelsea-FC-Logo-background.jpeg", "images.jpeg", "wallpaper.jpeg"

]

btnElement.addEventListener("click", function(e){
   let picImageRandom = Math.floor(Math.random()*pic_image.length)
   let newImage = pic_image[picImageRandom]
      imgElement.src=`./Pic image/${newImage}`
})
