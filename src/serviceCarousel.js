// services carousel
let services = [
  {
    image: "images/services-imgs/services1.jpg",
    serviceName: "Web Development",
    serviceDesc: "Full-Stack Project Development Using Latest Technologies"
  },
  {
    image: "images/services-imgs/services2.jpg",
    serviceName: "AI / Machine Learning Services",
    serviceDesc: "Machine Learning Model Development\nAI Integration into Websites"
  },
  {
    image: "images/services-imgs/services3.jpg",
    serviceName: "Data Analysis & Visualization Services",
    serviceDesc: "Data cleaning, wrangling, preprocessing\nInteractive dashboards (Power BI, Tableau, Plotly Dash)"
  },
]

let index = 0;
let timeId;

function serviceCarouselRun(index) {
  const serviceItem = document.querySelector(".service-item");
  
  serviceItem.innerHTML = `<div
              class="service-content h-[60vh] md:h-[70vh] w-[80vw] bg-cover bg-center bg-no-repeat mt-[5vh] mx-[10vw] border rounded-xl shadow-lg shadow-blue-500 animate-slide"
              style="background-image: url('${services[index].image}')"
            >
              <div
                class="service-desc text-center bg-[rgba(0,0,0,0.44)] rounded-xl p-5 shadow-2xl mt-[20vh] mx-auto md:mt-[25vh] md:w-2/3 boder border-yellow-400"
              >
                <h3
                  class="text-blue-200 text-2xl tracking-widest font-semibold mb-3"
                >
                  ${services[index].serviceName}
                </h3>
                <p class="text-blue-100 text-sm md:text-xl">
                  ${services[index].serviceDesc}
                </p>
              </div>
              
            </div>`;

  
  

  if(index == services.length - 1) {
    index = 0;
  } else {
    index++;
  }

  timeId = setTimeout(() => {
    serviceCarouselRun(index);
  }, 8000);
  
}

serviceCarouselRun(index);
