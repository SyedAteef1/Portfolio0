

var crsrblr   =document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    
    crsrblr.style.left=dets.x-130+"px"
    crsrblr.style.top=dets.y-130+"px"
    crsr.style.transitionDelay="2s"
})

gsap.to("#nav",{
    backgroundColor:"black",
    duration:0.5,
    height:"60px",
    
    
    scrollTrigger:{
        
        trigger:"#nav",
        scroller:"body",
        
        
        start:"top -5%",
        end:"",
        scrub:1,
    }
})

gsap.to("#main",{

    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -10%",
        end:"top -70%",
        scrub:2
        
    }
})
gsap.from("#cont1",{
    transform:"translateX(200px)",
    scrollTrigger:{
        trigger:"#cont",
        scroller:"body",
        start:"top -10px",
        end:"top -150px",
        
        scrub:3
    }
})
gsap.from("#cont0",{
    transform:"translateY(200px)",
    scrollTrigger:{
        trigger:"#cont",
        scroller:"body",
        start:"top -10px",
        end:"top -150px",
        
        scrub:3
    }
})
gsap.from("#cont2",{
    transform:"translateY(-200px)",
    scrollTrigger:{
        trigger:"#cont",
        scroller:"body",
        start:"top -10px",
        end:"top -150px",
        
        scrub:3
    }
})
gsap.from("#cont3",{
    transform:"translateX(-200px)",
    scrollTrigger:{
        trigger:"#cont",
        scroller:"body",
        start:"top -10px",
        end:"top -150px",
        
        scrub:3
    }
})
gsap.from("#cont4",{
    transform:"translateX(-200px)",
    transform:"translateY(-200px)",
    scrollTrigger:{
        trigger:"#cont",
        scroller:"body",
        start:"top -10px",
        end:"top -150px",
        
        scrub:3
    }
})
Shery.imageEffect('#anime',{style:5, config:{"a":{"value":0,"range":[0,30]},"b":{"value":-0.28,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.3024775315358563},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.24,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}} ,gooey :true})
