window.util = (() => {
    function generateUniqueId(table) {
        return Date.now().toString(36) + Math.random().toString(36).slice(2);
    }

    function addRow(table, newRowData) {
        table.push(newRowData)
        return table;
    }

    function removeSong(table, id) {
        for (let i = 0; i < table.length; i++) {
            if (table[i].id === id) {
                table.splice(i, 1)
            }
        }
        return table;
    }

    function updateRow(table, id, updateSong) {
        let num;
        for (let i = 0; i < table.length; i++) {
            if (table[i].id === id) {
                num = i;
                break;
            }
        }
        Object.assign(table[num], updateSong)
        return table;
    }

    function checkTime(i) {
        if (i < 10) {
            i = '0' + i;
        }
        return i;
    }

    return {
        generateUniqueId,
        updateRow,
        removeSong,
        addRow,
        checkTime
    }
})();