document.addEventListener("DOMContentLoaded", () => {
  let favCountEl = document.getElementById("favCount");
  let coinCountEl = document.getElementById("coinCount");
  let historyContainer = document.querySelector(".space-y-3");
  let clearBtn = document.querySelector(".clear-btn");
  let copyCounterBtn = document.getElementById("copyCounterBtn");

  let favCount = 0;
  let coins = 100;
  let copyCount = 0;

  // Heart Button Functionality
  document.querySelectorAll(".fav-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      favCount++;
      favCountEl.textContent = favCount;
      btn.querySelector("i").classList.remove("fa-regular");
      btn.querySelector("i").classList.add("fa-solid", "text-red-500");
    });
  });

  //Call Button Functionality

  document.querySelectorAll(".call-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const card = e.target.closest(".bg-white");
      const serviceName = card.querySelector("h2").textContent;
      const serviceeName = card.querySelector("p").textContent;
      const serviceNumber = card.querySelector("p.text-2xl").textContent;

      if (coins < 20) {
        alert("⚠️ আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে 20 কয়েন লাগবে।");

        return;
      }

      coins -= 20;
      coinCountEl.textContent = coins;

      alert(`📞 Calling ${serviceeName} ${serviceNumber}...`);

      const time = new Date().toLocaleTimeString();
      const historyItem = document.createElement("div");
      historyItem.className =
        "flex justify-between items-center bg-gray-50 p-2 rounded-lg";
      historyItem.innerHTML = `
              <div>
                <p class=" ">${serviceName}</p>
                <p class="text-xs text-gray-500">${serviceNumber}</p>
              </div>
              <span class="text-xs  ">${time}</span>
            `;
      historyContainer.prepend(historyItem);
    });
  });

  document.querySelectorAll(".copy-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const card = e.target.closest(".bg-white");
      const serviceNumber = card.querySelector("p.text-2xl").textContent;

      navigator.clipboard
        .writeText(serviceNumber)
        .then(() => {
          copyCount++;
          copyCounterBtn.textContent = copyCount + " Copy";
          alert(`নম্বর কপি হয়েছে: ${serviceNumber}`);
        })
        .catch(() => alert("❌ Failed to copy!"));
    });
  });

  // Clear History Button
  clearBtn.addEventListener("click", () => {
    historyContainer.innerHTML = "";
  });
});
