const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => io.observe(el));

window.onload = function() {
  const openStatus = document.getElementById('openStatus');
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const currentDay = currentTime.getDay(); 
  if (currentHour >= 13 && currentHour < 20) {
      openStatus.textContent = "Open now";
    
  } else if(currentHour >= 20 && currentHour < 22) {
      openStatus.textContent = "Closing Soon";
      openStatus.style.backgroundColor = "#C9824A";
      openStatus.style.color = "#F5F0E8";
     
  } else if(currentHour >= 11 && currentHour < 13) {
      openStatus.textContent = "Opening Soon";
      openStatus.style.backgroundColor = "#E6C88A";
  }
    else {
      openStatus.textContent = "Closed now :(";
      openStatus.style.backgroundColor = "var(--coffee)";
      openStatus.style.color = "#F5F0E8";
      openStatus.style.borderColor = "var(--coffee)";
  }}

  /* locations */
 /* ---------- Locations ---------- */

document.addEventListener("DOMContentLoaded", async () => {

    const searchInput = document.getElementById("searchInput");
    const branchList = document.getElementById("branchList");
    const emptyState = document.getElementById("emptyState");
    const filterButtons = [...document.querySelectorAll(".filter-btn")];

    let cards = [];
    let activeFilter = "all";

    async function loadBranches() {

        const response = await fetch("../data/branch.json");
        branches = await response.json();

        branchList.innerHTML = "";

        branches.forEach(branch => {

            const article = document.createElement("article");

            article.className = "branch-card";

            article.dataset.city = branch.city.toLowerCase();
            article.dataset.name = (`brew & co. ${branch.branch}`).toLowerCase();
            article.dataset.status = branch.status;
            article.onclick = () => branchClick(branch.id);
            article.style.cursor = "pointer";

            article.innerHTML = `
                <div class="d-flex justify-content-between align-items-start gap-3">

                    <div>

                        <h3 class="branch-title">
                           ${branch.city}
                        </h3>

                        <p class="branch-address">
                            ${branch.address}
                        </p>

                    </div>
                </div>

                <div class="branch-meta">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
</svg>
                        ${branch.hours}
                    </span>
                </div>
            `;

            branchList.appendChild(article);

        });

        cards = [...branchList.querySelectorAll(".branch-card")];

        applyFilters();
    }

    function applyFilters() {

        const query = searchInput.value.trim().toLowerCase();

        let visibleCount = 0;

        cards.forEach(card => {

            const name = card.dataset.name;
            const city = card.dataset.city;
            const status = card.dataset.status;

            const matchesQuery =
                query === "" ||
                name.includes(query) ||
                city.includes(query) ||
                card.textContent.toLowerCase().includes(query);

            const matchesFilter =
                activeFilter === "all" ||
                status === activeFilter;

            const show = matchesQuery && matchesFilter;

            card.classList.toggle("d-none", !show);

            if (show) visibleCount++;

        });

        emptyState.classList.toggle("d-none", visibleCount !== 0);

    }

    searchInput.addEventListener("input", applyFilters);

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            filterButtons.forEach(btn =>
                btn.classList.remove("active")
            );

            button.classList.add("active");

            activeFilter = button.dataset.filter;

            applyFilters();

        });

    });

    await loadBranches();

});

branchClick = (id) => {
    const branch = branches.find(b => b.id === id); 
    //console.log(branch.address);
    branchAddress = encodeURIComponent(branch.address);
    document.getElementById("mapIframe").src = `https://www.google.com/maps?q=${branchAddress}&output=embed`;
    document.querySelector(".map-title").textContent=branch.branch;
  };