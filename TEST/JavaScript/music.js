window.musicModel = (() => {

    const util = window.util;
    const dataManager = window.dataManager;
    let loadedTable = null;
    const DATA_KEY = "musicProperties";

    function loadData(needRefresh){
        if(!loadedTable || needRefresh){
            return dataManager.readTableFromStore(DATA_KEY);
        }
        return loadedTable;
    }

    function saveData(newData){
        return dataManager.writeTableToStore(DATA_KEY, newData);
    }
    
    function isValidId(songId){
        let data = loadData();
        for(let i = 0; i < data.length; i++){
            if(data[i].id === songId){
                return true;
            }
        }
        return false;
    }

    function addSong(newSong){
        let data = loadData();
        let addedSong = {
            id: newSong.id,
            title: newSong.title,
            artist: newSong.artist,
            extension: newSong.extension
        }
        util.addRow(data, addedSong);
        saveData(data);
    }

    function updateSong(checkID, obj){
        let data = loadData();
        util.updateRow(data, checkID, obj);
        saveData(data);
    }

    function removeSong(checkID){
        let data = loadData();
        util.removeSong(data, checkID);
        saveData(data);
    }

    function getInputFields(){
        return INPUT_FIELDS;
    }

    return {
        getTable: loadData,
        getInputFields,
        addSong,
        updateSong,
        removeSong,
        isValidId,
    }

})();