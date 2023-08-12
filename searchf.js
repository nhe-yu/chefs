function searchTable() {
    var input = document.getElementById("rInput").value.trim().toUpperCase();
    var table = document.getElementById("rTable");
    var rows = table.getElementsByTagName("tr");

    for (var i = 0; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName("td");
        var headerRow = table.getElementsByTagName("tr")[0];
        var matchFound = false;

        for (var j = 0; j < cells.length; j++) {
            var cellContent = cells[j].innerHTML.toUpperCase();
            var headerContent = headerRow.getElementsByTagName("th")[j].innerHTML.toUpperCase();

            if (matchesSearch(input, cellContent, headerContent)) {
                matchFound = true;
                break; // No need to continue checking other cells
            }
        }

        if (matchFound || rows[i].id === "rTableHeader") {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
}

function matchesSearch(searchTerm, cellContent, headerContent) {
    var searchTerms = searchTerm.split(" ");
    var number = parseFloat(searchTerms[0]);

    if (isNaN(number)) {
        return cellContent.indexOf(searchTerm) > -1 || headerContent.indexOf(searchTerm) > -1;
    } else {
        var term = searchTerms.slice(1).join(" ");

        if (term.includes("-")) {
            var range = term.split("-");
            var minRange = parseFloat(range[0]);
            var maxRange = parseFloat(range[1]);

            return !isNaN(minRange) && !isNaN(maxRange) && number >= minRange && number <= maxRange && headerContent.indexOf(term) > -1;
        } else {
            return cellContent.indexOf(number) > -1 && headerContent.indexOf(term) > -1;
        }
    }
}
