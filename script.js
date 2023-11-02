 
        // function to change color of navigation

         
        // Get all the navigation tabs
        const navTabs = document.querySelectorAll('.nav-item');

        // Function to handle tab click
        function handleTabClick(event) {

          
           // Remove the 'active' class from all tabs
          document.querySelectorAll('.nav-link').forEach(tab => tab.classList.remove('active'));

          // Add the 'active' class to the clicked tab
          event.target.classList.add('active');
        
        }

        // Add a click event listener to each navigation tab
        navTabs.forEach(tab => {
          tab.addEventListener('click', handleTabClick);
        });





        //function to call frames to the main body
         document.addEventListener('DOMContentLoaded', function () {

            const iframeLinks = document.querySelectorAll('a[href^="#iframe"]');

            iframeLinks.forEach(function (link) {
                link.addEventListener('click', function (event) {
                    event.preventDefault();
                    const targetIframeId = this.getAttribute('href').slice(1); // Remove the '#'
                    const allIframes = document.querySelectorAll('iframe');
                    allIframes.forEach(function (iframe) {
                        iframe.style.display = 'none';
                    });
                    const targetIframe = document.getElementById(targetIframeId);
                    if (targetIframe) {
                        targetIframe.style.display = 'block';
                    }
                });
                });
        });



        // search function

        document.addEventListener("DOMContentLoaded", function() {
            const menuItems = document.getElementById("menuItems");
            const searchInput = document.getElementById("searchInput");
            const noMatchMessage = document.getElementById("noMatchMessage");

            document.getElementById("searchForm").addEventListener("submit", function(event) {
                event.preventDefault();
                const searchTerm = searchInput.value.toLowerCase();
                let matchFound = false;

                // Iterate through both top-level and dropdown menu items
                const allMenuItems = Array.from(menuItems.querySelectorAll("li"));
                for (const menuItem of allMenuItems) {
                    const menuText = menuItem.textContent.toLowerCase();

                    if (menuText.includes(searchTerm)) {
                        // If the menu item is in the dropdown, open the dropdown first
                        if (menuItem.classList.contains("dropdown-item")) {
                            const parentDropdown = menuItem.closest(".dropdown");
                            if (parentDropdown) {
                                parentDropdown.querySelector(".dropdown-toggle").click();
                            }
                        }

                        // Scroll to the found menu item
                        menuItem.querySelector("a").click();
                        matchFound = true;
                        break; // Stop searching after the first match
                    }
                }

                // Display no match message if no matching menu item is found
                if (!matchFound) {
                    noMatchMessage.style.display = "block";
                } else {
                    noMatchMessage.style.display = "none";
                }
            });
        });