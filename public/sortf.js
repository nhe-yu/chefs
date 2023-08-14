function sortTableByColumn(column) {
    const table = document.getElementById("rTable");
    let sorting = true;
    let sortDirection = "ascending";
    let switchcount = 0;
    
    while (sorting) {
        sorting = false;
        const rows = table.rows;
        let shouldSwitch = false;
        let i;

        for (i = 1; i < rows.length - 1; i++) {
            const x = rows[i].querySelector(`td:nth-child(${column + 1})`);
            const y = rows[i + 1].querySelector(`td:nth-child(${column + 1})`);

            const compareResult = sortDirection === "ascending"
                ? x.textContent.toLowerCase() > y.textContent.toLowerCase()
                : x.textContent.toLowerCase() < y.textContent.toLowerCase();

            if (compareResult) {
                shouldSwitch = true;
                break;
            }
        }

        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            sorting = true;
            switchcount++;
        } else if (switchcount === 0 && sortDirection === "ascending") {
            sortDirection = "descending";
            sorting = true;
        }
    }
}
