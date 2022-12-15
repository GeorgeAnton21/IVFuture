let libButton = document.getElementById("lib-button");
      let libIt = function() {
        let storyDiv = document.getElementById("story");
        let noun = document.getElementById("noun").value;
        let adjective = document.getElementById("adjective").value;
        let person = document.getElementById("person").value;
        storyDiv.innerHTML =""+noun+" realy likes "+adjective+" "  +person +".";
      };
      libButton.addEventListener("click", libIt);