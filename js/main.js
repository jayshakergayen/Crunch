function a_function() {
    var jobs = ["Fast food employee. Ask the employee there for a job application or get one online. If they like your results they will call you for an interview. If you pass you got the job!",
    "Odd jobs. Post an ad on the internet or just go door-to-door and tell people that you can weed their garden.",
    "Commuinity Life guard. Go to your community pool or local pool and ask them for the job.",
    "Customer service representative. Send your prefered company a resume, if they like it they will call you for an interview, if you pass you got the job ",
    "Interviewer. Call a proffesor, employee or any other person. Develop a questionare and ask them. Upload it to the internet and see what people think.",
    "Podcaster. All you need is a recording software, talk about something you like and then just upload it to the internet!",
    "Internet personality. Upload videos to the interenet. If people like them they will follow you and you will start to grow an audience!",
    "Music artist. Download a free music editor, make a thumbnail/poster cover and see what people think!",
    "Artist and designer. Find a photo editor and upload it to the internet, see what people think.",
    "Cleaner. Post an ad on the interent and say you can clean their house/room/garage etc.",
    "Dog Walker. Go door-to-door and ask people if you can walk their dog. This might seem like a low-paying job but if you can walk dogs the full day the money can really add up.",
    "Baby-sitter. If you post an ad on the interenet and someone sees it, then the money you can make can add up with the more children your baby-sitting.",
    "Carpenter. Now this one is a bit more difficult but if you look up some tutorials and if you build a decent dining table and chairs it could be worth $300 or even more!",
    "Teacher. Even if it's a substitute teacher or an assistant teacher you will be killing two birds with one stone. #1 you will be making money and #2 you will be able to learn something the higher grades you teach",
    "A niche job. Find something your good at and find someone who wants you to do it for them",
    
    ];
    
    let random = Math.floor(Math.random() * jobs.length);
    console.log(jobs.length);
    document.getElementById("para").innerHTML = jobs[random];
}

