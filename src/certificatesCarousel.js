// services carousel
let certificates = [
  {
    image: "images/skills/skill1.png",
    CertificateDesc: "AI & Machine Learning Fundamentals"
  },
  {
    image: "images/skills/skill2.png",
    CertificateDesc: "Data Science Math Skills"
  },
  {
    image: "images/skills/skill3.jpg",
    CertificateDesc: "Introduction To Python"
  },
  {
    image: "images/skills/skill4.jpg",
    CertificateDesc: "Introduction To HTML"
  },
  {
    image: "images/skills/skill5.jpg",
    CertificateDesc: "Introduction To CSS"
  },
  {
    image: "images/skills/skill6.png",
    CertificateDesc: "Stanford University's Code in Place"
  },
  {
    image: "images/skills/skill7.jpeg",
    CertificateDesc: "Skill Development Session"
  },
  {
    image: "images/skills/skill8.jpeg",
    CertificateDesc: "Worked as Vice-President of CLUSTER at CSEKU"
  },
  {
    image: "images/skills/skill9.jpeg",
    CertificateDesc: "Industrial Trainning at Appstick"
  },
]

let index = 0;
let timeId;

function certificatesCarouselRun(index) {
  const certificateItem = document.querySelector(".service-item");
  
  certificateItem.innerHTML = `<div
              class="certificate-content h-[30vh] md:h-screen w-[80vw] bg-contain bg-center bg-no-repeat mt-[5vh] mx-[10vw] border border-blue-100 rounded-xl animate-slide"
              style="background-image: url('${certificates[index].image}')"
            >
              <div
                class="certificate-desc text-center bg-[rgba(235,235,235,0.45)] rounded-xl p-5 shadow-2xl mt-[30vh] mx-auto mb-[10vh] md:mt-[100vh] md:w-100"
              >
                <p class="text-blue-900 font-bold text-sm md:text-xl">
                  ${certificates[index].CertificateDesc}
                </p>
              </div>
              
            </div>`;

  
  

  if(index == certificates.length - 1) {
    index = 0;
  } else {
    index++;
  }

  timeId = setTimeout(() => {
    certificatesCarouselRun(index);
  }, 8000);
  
}

certificatesCarouselRun(index);
