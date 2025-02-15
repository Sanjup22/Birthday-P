document.addEventListener("DOMContentLoaded", function () {
            const welcomeButton = document.querySelector(".welcome-button");
            const welcomeText = document.querySelector(".welcome");
            const animationContainer = document.querySelector(".animation-container");
            const birthdaySong = document.getElementById("birthday-song");

            welcomeButton.addEventListener("click", function () {
                
                welcomeText.style.display = "none";

                let boxText = document.createElement("div");
                boxText.classList.add("box-text");
                boxText.innerHTML = "Kholo kholo click kro box pr 🤭😁";
                animationContainer.appendChild(boxText);
                boxText.style.display = "block";

            
                let boxAnimation = document.createElement("dotlottie-player");
                boxAnimation.setAttribute("src", "https://lottie.host/06b14361-08d2-4955-a190-e2195bc7d0cf/TspRbQTsVK.lottie");
                boxAnimation.setAttribute("background", "transparent");
                boxAnimation.setAttribute("speed", "1");
                boxAnimation.setAttribute("style", "width: 300px; height: 300px;");
                boxAnimation.setAttribute("loop", "true");
                boxAnimation.setAttribute("autoplay", "true");

                
                animationContainer.appendChild(boxAnimation);

                
                boxAnimation.addEventListener("click", function () {
                    
                    boxAnimation.remove();
                    boxText.style.display = "none";

                    
                    birthdaySong.play();

            
                    let birthdayText = document.createElement("div");
                    birthdayText.classList.add("birthday-text");
                    birthdayText.innerHTML = "❤️ HAPPYYYY BIRTHDAYY PRASHUU ❤️😊";
                    animationContainer.appendChild(birthdayText);
                    birthdayText.style.display = "block";


                    let cakeAnimation = document.createElement("dotlottie-player");
                    cakeAnimation.setAttribute("src", "https://lottie.host/716427c7-a471-4281-9e20-e4147075f6a9/8JvWhEAw4l.lottie"); // Replace with any cake Lottie animation
                    cakeAnimation.setAttribute("background", "transparent");
                    cakeAnimation.setAttribute("speed", "1");
                    cakeAnimation.setAttribute("style", "width: 300px; height: 300px;");
                    cakeAnimation.setAttribute("loop", "true");
                    cakeAnimation.setAttribute("autoplay", "true");

                    animationContainer.appendChild(cakeAnimation);

                    
                    startConfetti();
                });
            });

            function startConfetti() {
                let duration = 3 * 1000; 
                let end = Date.now() + duration;

                (function frame() {
                    confetti({
                        particleCount: 5,
                        angle: 60,
                        spread: 55,
                        origin: { x: 0 }
                    });
                    confetti({
                        particleCount: 5,
                        angle: 120,
                        spread: 55,
                        origin: { x: 1 }
                    });

                    if (Date.now() < end) {
                        requestAnimationFrame(frame);
                    }
                   
                })();
            }
        });
   
