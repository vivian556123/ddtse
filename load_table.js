function createAudioHTML(path, flat) {
  if (flat) {
    return '<audio controls controlslist="nodownload" class="px-1" style="width: 36vw;"> <source src=' +
        path +
        ' type="audio/wav">Your browser does not support the audio element.</audio>';
  }
  return '<audio controls controlslist="nodownload" class="px-1"> <source src=' +
      path +
      ' type="audio/wav">Your browser does not support the audio element.</audio>';
}

function createFigureHTML(path, flat) {
  if (flat) {
    return '<img src=' + path + ' style="width: 9vw;">';
  }
  return '<img src=' + path + '>';
}




function generatemulti_noisyTable(tableId, filenames, page) {
  let numPerPage = 3;
  let table = document.getElementById(tableId + '-operation');
  let nrRows = table.rows.length;
  for (let i = 1; i < nrRows; i++) {
    table.deleteRow(1);
  }
  const prefix = 'multi_noisy_spec_wav/';
  const end_idx = page * numPerPage;
  for (let i = (page - 1) * numPerPage; i < end_idx; i++) {
    // for each i, insert two rows
    //let row = table.insertRow(i % numPerPage + 1);
    let row = table.insertRow((i % numPerPage) *2 + 1);
    let row2 = table.insertRow((i % numPerPage*2) + 2);
    
    row.style.height = '80px';
    //row2.style.height = '80px';
    if (i < filenames.length) {
      let cell = row.insertCell(0);
      let cell2 = row2.insertCell(0)
      let reg = /[0-9]+/g;
      let command = filenames[i].replace(reg,"");
      //cell.innerHTML = command.replaceAll('_', ' ');
      //cell.innerHTML = filenames[i]
      //cell.innerHTML = prefix + filenames[i].replace("samples/","samples/mixture_")+".wav"
      cell.innerHTML = filenames[i]
      cell.style.textAlign = "center";
      cell2.innerHTML = " "
      cell2.style.textAlign = "center";

      cell = row.insertCell(1);
      cell2 = row2.insertCell(1)
      cell2.innerHTML = createFigureHTML(prefix+ "mixture_" + filenames[i]+".png", true)
      cell2.style.textAlign = "center";
      cell.innerHTML = createAudioHTML(prefix +"mixture_"+ filenames[i]+".wav", false);
      cell.style.textAlign = "center";

      cell = row.insertCell(2);
      cell2 = row2.insertCell(2)
      cell2.innerHTML = createFigureHTML(prefix+ "gt_" + filenames[i]+".png", true)
      cell2.style.textAlign = "center";
      cell.innerHTML = createAudioHTML(prefix +"gt_"+ filenames[i]+".wav", false);
      cell.style.textAlign = "center";

      cell = row.insertCell(3);
      cell2 = row2.insertCell(3)
      cell2.innerHTML = createFigureHTML(prefix+ "DDCEM_" + filenames[i]+".png", true)
      cell2.style.textAlign = "center";
      cell.innerHTML = createAudioHTML(prefix +"DDCEM_"+ filenames[i]+".wav", false);
      cell.style.textAlign = "center";

      cell = row.insertCell(4);
      cell2 = row2.insertCell(4)
      cell2.innerHTML = createFigureHTML(prefix+ "DPCCN_" + filenames[i]+".png", true)
      cell2.style.textAlign = "center";
      cell.innerHTML = createAudioHTML(prefix +"DPCCN_"+ filenames[i]+".wav", false);
      cell.style.textAlign = "center";

      cell = row.insertCell(5);
      cell2 = row2.insertCell(5)
      cell2.innerHTML = createFigureHTML(prefix+ "DiffSep_" + filenames[i]+".png", true)
      cell2.style.textAlign = "center";
      cell.innerHTML = createAudioHTML(prefix +"DiffSep_"+ filenames[i]+".wav", false);
      cell.style.textAlign = "center";
    } else {
      let cell = row.insertCell(0);
      cell.innerHTML = '<br>';
      cell = row.insertCell(1);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(2);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(3);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(4);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(5);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
    }
  }
}


function generatemulti_cleanTable(tableId, filenames, page) {
  let numPerPage = 3;
  let table = document.getElementById(tableId + '-operation');
  let nrRows = table.rows.length;
  for (let i = 1; i < nrRows; i++) {
    table.deleteRow(1);
  }
  const prefix = 'multi_clean_spec_wav/';
  const end_idx = page * numPerPage;
  for (let i = (page - 1) * numPerPage; i < end_idx; i++) {
    // for each i, insert two rows
    //let row = table.insertRow(i % numPerPage + 1);
    let row = table.insertRow((i % numPerPage) *2 + 1);
    let row2 = table.insertRow((i % numPerPage*2) + 2);
    
    row.style.height = '80px';
    //row2.style.height = '80px';
    if (i < filenames.length) {
      let cell = row.insertCell(0);
      let cell2 = row2.insertCell(0)
      let reg = /[0-9]+/g;
      let command = filenames[i].replace(reg,"");
      //cell.innerHTML = command.replaceAll('_', ' ');
      //cell.innerHTML = filenames[i]
      //cell.innerHTML = prefix + filenames[i].replace("samples/","samples/mixture_")+".wav"
      cell.innerHTML = filenames[i]
      cell.style.textAlign = "center";
      cell2.innerHTML = " "
      cell2.style.textAlign = "center";

      cell = row.insertCell(1);
      cell2 = row2.insertCell(1)
      cell2.innerHTML = createFigureHTML(prefix+ "mixture_" + filenames[i]+".png", true)
      cell2.style.textAlign = "center";
      cell.innerHTML = createAudioHTML(prefix +"mixture_"+ filenames[i]+".wav", false);
      cell.style.textAlign = "center";

      cell = row.insertCell(2);
      cell2 = row2.insertCell(2)
      cell2.innerHTML = createFigureHTML(prefix+ "gt_" + filenames[i]+".png", true)
      cell2.style.textAlign = "center";
      cell.innerHTML = createAudioHTML(prefix +"gt_"+ filenames[i]+".wav", false);
      cell.style.textAlign = "center";

      cell = row.insertCell(3);
      cell2 = row2.insertCell(3)
      cell2.innerHTML = createFigureHTML(prefix+ "DDCEM_" + filenames[i]+".png", true)
      cell2.style.textAlign = "center";
      cell.innerHTML = createAudioHTML(prefix +"DDCEM_"+ filenames[i]+".wav", false);
      cell.style.textAlign = "center";

      cell = row.insertCell(4);
      cell2 = row2.insertCell(4)
      cell2.innerHTML = createFigureHTML(prefix+ "DPCCN_" + filenames[i]+".png", true)
      cell2.style.textAlign = "center";
      cell.innerHTML = createAudioHTML(prefix +"DPCCN_"+ filenames[i]+".wav", false);
      cell.style.textAlign = "center";

      cell = row.insertCell(5);
      cell2 = row2.insertCell(5)
      cell2.innerHTML = createFigureHTML(prefix+ "DiffSep_" + filenames[i]+".png", true)
      cell2.style.textAlign = "center";
      cell.innerHTML = createAudioHTML(prefix +"DiffSep_"+ filenames[i]+".wav", false);
      cell.style.textAlign = "center";
    } else {
      let cell = row.insertCell(0);
      cell.innerHTML = '<br>';
      cell = row.insertCell(1);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(2);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(3);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(4);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(5);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
    }
  }
}




function generatesingle_noisyTable(tableId, filenames, page) {
  let numPerPage = 3;
  let table = document.getElementById(tableId + '-operation');
  let nrRows = table.rows.length;
  for (let i = 1; i < nrRows; i++) {
    table.deleteRow(1);
  }
  const prefix = 'single_enh_spec_wav/';
  const end_idx = page * numPerPage;
  for (let i = (page - 1) * numPerPage; i < end_idx; i++) {
    // for each i, insert two rows
    //let row = table.insertRow(i % numPerPage + 1);
    let row = table.insertRow((i % numPerPage) *2 + 1);
    let row2 = table.insertRow((i % numPerPage*2) + 2);
    
    row.style.height = '80px';
    //row2.style.height = '80px';
    if (i < filenames.length) {
      let cell = row.insertCell(0);
      let cell2 = row2.insertCell(0)
      let reg = /[0-9]+/g;
      let command = filenames[i].replace(reg,"");
      //cell.innerHTML = command.replaceAll('_', ' ');
      //cell.innerHTML = filenames[i]
      //cell.innerHTML = prefix + filenames[i].replace("samples/","samples/mixture_")+".wav"
      cell.innerHTML = filenames[i].split("_")[0]
      cell.style.textAlign = "center";
      cell2.innerHTML = " "
      cell2.style.textAlign = "center";

      cell = row.insertCell(1);
      cell2 = row2.insertCell(1)
      cell2.innerHTML = createFigureHTML(prefix+ "mixture_" + filenames[i]+".png", true)
      cell2.style.textAlign = "center";
      cell.innerHTML = createAudioHTML(prefix +"mixture_"+ filenames[i]+".wav", false);
      cell.style.textAlign = "center";

      cell = row.insertCell(2);
      cell2 = row2.insertCell(2)
      cell2.innerHTML = createFigureHTML(prefix+ "gt_" + filenames[i]+".png", true)
      cell2.style.textAlign = "center";
      cell.innerHTML = createAudioHTML(prefix +"gt_"+ filenames[i]+".wav", false);
      cell.style.textAlign = "center";

      cell = row.insertCell(3);
      cell2 = row2.insertCell(3)
      cell2.innerHTML = createFigureHTML(prefix+ "DDCEM_" + filenames[i]+".png", true)
      cell2.style.textAlign = "center";
      cell.innerHTML = createAudioHTML(prefix +"DDCEM_"+ filenames[i]+".wav", false);
      cell.style.textAlign = "center";

      cell = row.insertCell(4);
      cell2 = row2.insertCell(4)
      cell2.innerHTML = createFigureHTML(prefix+ "DCCRN_" + filenames[i]+".png", true)
      cell2.style.textAlign = "center";
      cell.innerHTML = createAudioHTML(prefix +"DCCRN_"+ filenames[i]+".wav", false);
      cell.style.textAlign = "center";

      cell = row.insertCell(5);
      cell2 = row2.insertCell(5)
      cell2.innerHTML = createFigureHTML(prefix+ "SGMSE_" + filenames[i]+".png", true)
      cell2.style.textAlign = "center";
      cell.innerHTML = createAudioHTML(prefix +"SGMSE_"+ filenames[i]+".wav", false);
      cell.style.textAlign = "center";
    } else {
      let cell = row.insertCell(0);
      cell.innerHTML = '<br>';
      cell = row.insertCell(1);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(2);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(3);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(4);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(5);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
    }
  }
}

function generateEditTable(tableId, filenames, page) {
  let numPerPage = 4;
  let table = document.getElementById(tableId + '-operation');
  let nrRows = table.rows.length;
  for (let i = 1; i < nrRows; i++) {
    table.deleteRow(1);
  }
  const prefix = 'music/edit_' + tableId + '/';
  const end_idx = page * numPerPage;
  for (let i = (page - 1) * numPerPage; i < end_idx; i++) {
    let row = table.insertRow(i % numPerPage + 1);
    row.style.height = '80px';
    if (i < filenames.length) {
      let cell = row.insertCell(0);
      let reg = /[0-9]+/g;
      let command = filenames[i].replace(reg,"");
      cell.innerHTML = command.replaceAll('_', ' ');
      cell.style.textAlign = "center";

      cell = row.insertCell(1);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_source.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(2);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_target.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(3);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_instructme.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(4);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_audit.wav', false);
      cell.style.textAlign = "center";
    } else {
      let cell = row.insertCell(0);
      cell.innerHTML = '<br>';
      cell = row.insertCell(1);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(2);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(3);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(4);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
    }
  }
}

function generateDiversityTable(tableId, filenames, page) {
  let numPerPage = 4;
  let table = document.getElementById(tableId + '-operation');
  let nrRows = table.rows.length;
  for (let i = 1; i < nrRows; i++) {
    table.deleteRow(1);
  }
  const prefix = 'music/edit_' + tableId + '/';
  const end_idx = page * numPerPage;
  for (let i = (page - 1) * numPerPage; i < end_idx; i++) {
    let row = table.insertRow(i % numPerPage + 1);
    row.style.height = '80px';
    if (i < filenames.length) {
      let cell = row.insertCell(0);
      let reg = /[0-9]+/g;
      let command = filenames[i].replace(reg,"");
      cell.innerHTML = command.replaceAll('_', ' ');
      cell.style.textAlign = "center";

      cell = row.insertCell(1);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_source.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(2);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_target.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(3);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_instructme1.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(4);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_instructme2.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(5);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_instructme3.wav', false);
      cell.style.textAlign = "center";
    } else {
      let cell = row.insertCell(0);
      cell.innerHTML = '<br>';
      cell = row.insertCell(1);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(2);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(3);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(4);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(5);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
    }
  }
}



function generateRemixTable(tableId, filenames, page) {
  let numPerPage = 4;
  let table = document.getElementById(tableId + '-operation');
  let nrRows = table.rows.length;
  for (let i = 1; i < nrRows; i++) {
    table.deleteRow(1);
  }
  const prefix = 'music/remix_' + tableId + '/';
  const end_idx = page * numPerPage;
  for (let i = (page - 1) * numPerPage; i < end_idx; i++) {
    let row = table.insertRow(i % numPerPage + 1);
    row.style.height = '80px';
    if (i < filenames.length) {
      let cell = row.insertCell(0);
      let reg = /[0-9]+/g;
      let command = filenames[i].replace(reg,"");
      // if (tableId != 'genre'){
      //   let command = 'remix this music';
      // }
      cell.innerHTML = command.replaceAll('_', ' ').replaceAll('r and b', 'r&b');

      // cell.innerHTML = 'remix this music'
      cell.style.textAlign = "center";

      cell = row.insertCell(1);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_source_acc.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(2);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_source_melody.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(3);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_target_acc.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(4);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_target_melody.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(5);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_instructme_acc.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(6);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_instructme_melody.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(7);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_audit_acc.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(8);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_audit_melody.wav', false);
      cell.style.textAlign = "center";

    } else {
      let cell = row.insertCell(0);
      cell.innerHTML = '<br>';
      cell = row.insertCell(1);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(2);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(3);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(4);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(5);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(6);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(7);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(8);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
    }
  }
}



function generateRemixGuideTable(tableId, filenames, page) {
  let numPerPage = 4;
  let table = document.getElementById(tableId + '-operation');
  let nrRows = table.rows.length;
  for (let i = 1; i < nrRows; i++) {
    table.deleteRow(1);
  }
  const prefix = 'music/remix_' + tableId + '/';
  const end_idx = page * numPerPage;
  for (let i = (page - 1) * numPerPage; i < end_idx; i++) {
    let row = table.insertRow(i % numPerPage + 1);
    row.style.height = '80px';
    if (i < filenames.length) {
      let cell = row.insertCell(0);
      let reg = /[0-9]+/g;
      let command = filenames[i].replace(reg,"");
      // if (tableId != 'genre'){
      //   let command = 'remix this music';
      // }
      // cell.innerHTML = command.replaceAll('_', ' ');
      cell.innerHTML = 'remix this music'
      cell.style.textAlign = "center";

      cell = row.insertCell(1);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_source_acc.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(2);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_source_melody.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(3);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_target_acc.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(4);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_target_melody.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(5);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_instructme_acc.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(6);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_instructme_melody.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(7);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_audit_acc.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(8);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_audit_melody.wav', false);
      cell.style.textAlign = "center";

    } else {
      let cell = row.insertCell(0);
      cell.innerHTML = '<br>';
      cell = row.insertCell(1);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(2);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(3);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(4);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(5);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(6);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(7);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(8);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
    }
  }
}



function generateRealTable(tableId, filenames, songnames, page) {
  let numPerPage = 4;
  let table = document.getElementById(tableId + '-operation');
  let nrRows = table.rows.length;
  for (let i = 1; i < nrRows; i++) {
    table.deleteRow(1);
  }
  const prefix = 'music/edit_' + tableId + '/';
  const end_idx = page * numPerPage;
  for (let i = (page - 1) * numPerPage; i < end_idx; i++) {
    let row = table.insertRow(i % numPerPage + 1);
    row.style.height = '80px';
    if (i < filenames.length) {
      let cell = row.insertCell(0);
      let reg = /[0-9]+/g;
      let command = filenames[i].replace(reg,"");
      cell.innerHTML = command.replaceAll('_', ' ');
      cell.style.textAlign = "center";

      cell = row.insertCell(1);
      let title = songnames[i];
      cell.innerHTML = title;
      cell.style.textAlign = "center";

      cell = row.insertCell(2);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_source.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(3);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_instructme.wav', false);
      cell.style.textAlign = "center";

    } else {
      let cell = row.insertCell(0);
      cell.innerHTML = '<br>';
      cell = row.insertCell(1);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(2);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(3);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
    }
  }
}


function generateDiversityRemixTable(tableId, filenames, page) {
  let numPerPage = 4;
  let table = document.getElementById(tableId + '-operation');
  let nrRows = table.rows.length;
  for (let i = 1; i < nrRows; i++) {
    table.deleteRow(1);
  }
  const prefix = 'music/remix_' + tableId + '/';
  const end_idx = page * numPerPage;
  for (let i = (page - 1) * numPerPage; i < end_idx; i++) {
    let row = table.insertRow(i % numPerPage + 1);
    row.style.height = '80px';
    if (i < filenames.length) {
      let cell = row.insertCell(0);
      let reg = /[0-9]+/g;
      let command = filenames[i].replace(reg,"");
      // if (tableId != 'genre'){
      //   let command = 'remix this music';
      // }
      cell.innerHTML = command.replaceAll('_', ' ');
      cell.style.textAlign = "center";

      cell = row.insertCell(1);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_source_acc.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(2);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_source_melody.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(3);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_target_acc.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(4);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_target_melody.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(5);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_instructme1_acc.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(6);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_instructme1_melody.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(7);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_instructme2_acc.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(8);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_instructme2_melody.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(9);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_instructme3_acc.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(10);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_instructme3_melody.wav', false);
      cell.style.textAlign = "center";

    } else {
      let cell = row.insertCell(0);
      cell.innerHTML = '<br>';
      cell = row.insertCell(1);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(2);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(3);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(4);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(5);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(6);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(7);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(8);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(9);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(10);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
    }
  }
}


function generateMultiTable(tableId, filenames, page) {
  let numPerPage = 2;
  let table = document.getElementById(tableId + '-operation');
  let nrRows = table.rows.length;
  for (let i = 1; i < nrRows; i++) {
    table.deleteRow(1);
  }
  const prefix = 'music/edit_' + tableId + '/';
  const end_idx = page * numPerPage;
  for (let i = (page - 1) * numPerPage; i < end_idx; i++) {
    let row = table.insertRow(i % numPerPage + 1);
    row.style.height = '80px';
    if (i < filenames.length) {
      let cell = row.insertCell(0);
      let reg = /[0-9]+/g;
      let command = filenames[i].replace(reg,"");
      cell.innerHTML = command.replaceAll('_', ' ');
      cell.style.textAlign = "center";

      cell = row.insertCell(1);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_source.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(2);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_round1.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(3);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_round2.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(4);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_round3.wav', false);
      cell.style.textAlign = "center";
    } else {
      let cell = row.insertCell(0);
      cell.innerHTML = '<br>';
      cell = row.insertCell(1);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(2);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(3);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
    }
  }
}


function generateLongTable(tableId, filenames, page) {
  let numPerPage = 10;
  let table = document.getElementById(tableId + '-operation');
  let nrRows = table.rows.length;
  for (let i = 1; i < nrRows; i++) {
    table.deleteRow(1);
  }
  const prefix = 'music/edit_' + tableId + '/';
  const end_idx = page * numPerPage;
  for (let i = (page - 1) * numPerPage; i < end_idx; i++) {
    let row = table.insertRow(i % numPerPage + 1);
    row.style.height = '80px';
    if (i < 10) {
      let cell = row.insertCell(0);
      let reg = /[0-9]+/g;
      let command = filenames[i].replace(reg,"");
      cell.innerHTML = command.replaceAll('_', ' ');
      cell.style.textAlign = "center";
      if (i % 2 === 0){
        cell = row.insertCell(1);
        cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_30s_source.wav', false);
        cell.style.textAlign = "center";

        cell = row.insertCell(2);
        cell.innerHTML = '30s';
        cell.style.textAlign = "center";

        cell = row.insertCell(3);
        cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_30s_instructme.wav', false);
        cell.style.textAlign = "center";

        cell = row.insertCell(4);
        cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_30s_audit.wav', false);
        cell.style.textAlign = "center";
      } else {
        cell = row.insertCell(1);
        cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_60s_source.wav', false);
        cell.style.textAlign = "center";

        cell = row.insertCell(2);
        cell.innerHTML = '60s';
        cell.style.textAlign = "center";

        cell = row.insertCell(3);
        cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_60s_instructme.wav', false);
        cell.style.textAlign = "center";

        cell = row.insertCell(4);
        cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_60s_audit.wav', false);
        cell.style.textAlign = "center";
      }
      
    } else {
      let cell = row.insertCell(0);
      cell.innerHTML = '<br>';
      cell = row.insertCell(1);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(2);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(3);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(4);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
    }
  }

  for (let j = (page - 1) * numPerPage+1; j < end_idx; j += 2){
    table.rows[j].cells[1].rowSpan = 2;
    table.rows[j + 1].deleteCell(1);
    table.rows[j].cells[0].rowSpan = 2;
    table.rows[j + 1].deleteCell(0);
  }
}


add = [
  'add_acoustic_guitar_1',
  'add_bass_42',
  'add_drum_kit_47',
  'add_acoustic_guitar_11',
  'add_piano_16',
  'add_drum_kit_49',
  'add_drum_kit_55',
  'add_piano_19',
  'add_piano_25',
  'add_rhythm_acoustic_guitar_0',
]
remove = ['remove_drum_kit_109', 'remove_drum_kit_110', 'remove_bass_96', 'remove_piano_76', 'remove_drum_kit_107', 'remove_electric_piano_83', 'remove_acoustic_guitar_68', 'remove_rhythm_acoustic_guitar_69', 'remove_acoustic_guitar_62', 'remove_piano_79']
extract = ['extract_drum_kit_172', 'extract_drum_kit_166', 'extract_rhythm_acoustic_guitar_123', 'extract_bass_153', 'extract_electric_piano_136', 'extract_piano_141', 'extract_piano_142', 'extract_acoustic_guitar_126', 'extract_drum_kit_178', 'extract_rhythm_acoustic_guitar_128']
replace = ['replace_rhythm_acoustic_guitar_with_drum_kit_202', 'replace_bass_with_piano_207', 'replace_bass_with_drum_kit_219', 'replace_bass_with_electric_guitar_236', 'replace_acoustic_guitar_with_drum_kit_189', 'replace_pedal_steel_guitar_with_bass_181', 'replace_pedal_steel_guitar_with_drum_kit_192', 'replace_bass_with_electric_guitar_227', 'replace_drum_kit_with_bass_239', 'replace_bass_with_electric_guitar_182']

instr = ['remix_with_guitar_drums_piano_synth_lead_20', 'remix_with_drums_guitar_bass_3', 'remix_with_drums_piano_12', 'remix_with_bass_drum_strings_1', 'remix_with_bass_guitar_drums_2', 'remix_with_guitar_strings_drums_bass_10', 'remix_with_piano_drums_strings_bass_guitar_11', 'remix_with_guitar_strings_synth_pad_bass_piano_13', 'remix_with_guitar_drums_bass_piano_strings_17', 'remix_with_bass_synth_lead_strings_piano_drums_18']
//['remix_this_music_11', 'remix_this_music_20', 'remix_this_music_17', 'remix_this_music_2', 'remix_this_music_13', 'remix_this_music_12', 'remix_with_bass_drum_strings_1', 'remix_this_music_10', 'remix_this_music_3', 'remix_this_music_18']
// ['remix_with_guitar_drums_piano_synth_lead_20', 'remix_with_drums_piano_guitar_bass_3', 'remix_with_drums_piano_12', 'remix_with_bass_piano_strings_1', 'remix_with_bass_guitar_drums_2', 'remix_with_guitar_piano_strings_drums_bass_10', 'remix_with_piano_drums_strings_bass_guitar_11', 'remix_with_guitar_strings_synth_pad_bass_piano_13', 'remix_with_guitar_drums_bass_piano_strings_17', 'remix_with_bass_synth_lead_strings_piano_drums_18']

genre = ['remix_to_pop_genre_10', 'remix_to_blues_genre_5', 'remix_to_r_and_b_genre_14', 'remix_to_funk_genre_3', 'remix_to_soul_genre_6', 'remix_to_alternative_genre_2', 'remix_to_r_and_b_genre_12', 'remix_to_rock_genre_9', 'remix_to_disco_genre_15', 'remix_to_pop_genre_13']

soft = ['remix_with_piano_drums_guitar_bass_14', 'remix_with_bass_piano_guitar_drums_9', 'remix_with_piano_drums_bass_guitar_23']
// ['remix_this_music_9', 'remix_this_music_23', 'remix_this_music_14']
// ['remix_with_piano_drums_guitar_bass_14', 'remix_with_bass_piano_guitar_drums_9', 'remix_with_piano_drums_bass_guitar_23']

happy = ['remix_with_bass_drums_guitar_piano_53', 'remix_with_bass_0', 'remix_with_drums_bass_guitar_18']
// ['remix_this_music_18', 'remix_this_music_53', 'remix_this_music_0']
// ['remix_with_bass_drums_guitar_piano_53', 'remix_with_bass_0', 'remix_with_drums_bass_guitar_18']
dedit = ['add_piano_16', 'add_acoustic_guitar_1', 'add_drum_kit_49', 'replace_bass_with_electric_guitar_236', 'replace_bass_with_drum_kit_219', 'replace_bass_with_piano_207']

dremix = ['remix_to_pop_genre_25', 'remix_to_alternative_genre_2', 'remix_with_drums_guitar_bass_29', 'remix_with_drums_piano_12', 'remix_with_bass_synth_lead_drums_31', 'remix_to_pop_genre_10']

sedit = ['remove_drum_kit_107', 'extract_piano_141', 'extract_rhythm_acoustic_guitar_123', 'extract_drum_kit_166', 'remove_piano_76', 'remove_acoustic_guitar_62']

multi = ['audit', 'instructme']

long = ['add_rhythm_acoustic_guitar_1', 'add_rhythm_acoustic_guitar_1', 'extract_electric_guitar_8', 'extract_electric_guitar_8', 'add_bass_3', 'add_bass_3', 'add_electric_drum_kit_0', 'add_electric_drum_kit_0', 'remove_piano_6', 'remove_piano_6']

real = ['add_rhythm_acoustic_guitar_0', 'add_string_sections_1', 'replace_acoustic_guitar_with_piano_2', 'replace_violin_with_piano_5', 'replace_piano_with_acoustic_guitar_6', 'remove_electric_guitar_71', 'extract_electric_guitar_7', 'remove_drum_kit_8', 'add_bass_9', 'add_electric_drum_kit_10']

title = ['Lost Woods', 'Gugur Bunga', 'Zelda', "Twilight - Bella's Lullaby", 'Dolphin Dance', 'Fall Sounds', 'Fall Sounds', 'Amas Veritas', 'Aşk-ı Memnu Jenerik Müziği', "Eline Kleine Nachtmusik-Mov't 1-M'"]

melody = ['add_bass_0', 'remove_drum_kit_1', 'replace_drum_kit_with_piano_2', 'remove_drum_kit_3']

melody_t = ['菊花台', '麦浪', '月亮不曾奔我而来', 'Lover']

// generateEditTable('add', add  , 1);

pagelist = ["noisy_female-male-samples","noisy_male-male-samples","noisy_female-female-samples"]
//noisy_filelist = ["noisy_female-male-samples/1089-134686-0007_1995-1836-0000","noisy_female-male-samples/2300-131720-0041_1284-1180-0023","noisy_female-male-samples/5142-36377-0005_6930-81414-0019","noisy_male-male-samples/1089-134686-0007_7021-85628-0018","noisy_male-male-samples/2300-131720-0036_7176-92135-0006","noisy_male-male-samples/5105-28240-0017_6930-81414-0015","noisy_female-female-samples/121-127105-0011_4970-29095-0009","noisy_female-female-samples/121-127105-0028_4507-16021-0025","noisy_female-female-samples/6829-68769-0012_1284-1181-0001"]
noisy_filelist = ["1089-134686-0007_1995-1836-0000","2300-131720-0041_1284-1180-0023","5142-36377-0005_6930-81414-0019","1089-134686-0007_7021-85628-0018","2300-131720-0036_7176-92135-0006","5105-28240-0017_6930-81414-0015","121-127105-0011_4970-29095-0009","121-127105-0028_4507-16021-0025","6829-68769-0012_1284-1181-0001"]
generatemulti_noisyTable('leying', noisy_filelist  , 1);


//clean_filelist = ["clean_female-male-samples/2830-3980-0072_3575-170457-0021","clean_female-male-samples/4992-41806-0015_260-123440-0020","clean_female-male-samples/5142-36377-0002_6930-75918-0002","clean_male-male-samples/1089-134691-0025_8224-274384-0005","clean_male-male-samples/260-123286-0023_2830-3980-0030","clean_male-male-samples/8224-274381-0013_1320-122617-0013","clean_female-female-samples/121-127105-0011_4970-29095-0009","clean_female-female-samples/3575-170457-0009_8555-284447-0023","clean_female-female-samples/8555-284447-0004_5683-32879-0000"]
clean_filelist = ["2830-3980-0072_3575-170457-0021","4992-41806-0015_260-123440-0020","5142-36377-0002_6930-75918-0002","1089-134691-0025_8224-274384-0005","260-123286-0023_2830-3980-0030","8224-274381-0013_1320-122617-0013","121-127105-0011_4970-29095-0009","3575-170457-0009_8555-284447-0023","8555-284447-0004_5683-32879-0000"]
generatemulti_cleanTable('leying-clean', clean_filelist  , 1);


enh_filelist =  ['1089-134686-0034_5639-40744-0005','1320-122617-0021_5105-28233-0002','2830-3980-0052_8455-210777-0035']
generatesingle_noisyTable('leying-enh', enh_filelist  , 1);


// generateEditTable('remove', remove  , 1);
// generateEditTable('extract', extract  , 1);
// generateEditTable('replace', replace  , 1);

// generateRemixTable('instr', instr  , 1);
// generateRemixTable('genre', genre  , 1); 
// generateRemixGuideTable('soft', soft  , 1);
// generateRemixGuideTable('happy', happy  , 1);
// generateDiversityTable('dedit', dedit  , 1);
// generateDiversityRemixTable('dremix', dremix  , 1);
// generateDiversityTable('sedit', sedit  , 1);
// generateRealTable('real', real, title, 1);
// generateRealTable('melody', melody, melody_t, 1);
// generateMultiTable('multi', multi  , 1);
// generateLongTable('long', long  , 1);

$(document).ready(function() {
  for (let i = 1; i <= 3; i++) {
    let id = '#leying-' + i;
    $(id).click(function() {
      generatemulti_noisyTable(
          'leying',
          noisy_filelist, i);
      $(id).parent().siblings().removeClass('active');
      $(id).parent().addClass('active');
      return false;
    });
  }
});

$(document).ready(function() {
  for (let i = 1; i <= 3; i++) {
    let id = '#leying-clean-' + i;
    $(id).click(function() {
      generatemulti_cleanTable(
          'leying-clean',
          clean_filelist, i);
      $(id).parent().siblings().removeClass('active');
      $(id).parent().addClass('active');
      return false;
    });
  }
});


// $(document).ready(function() {
//   for (let i = 1; i <= 3; i++) {
//     let id = '#remove-operation-' + i;
//     $(id).click(function() {
//       generateEditTable(
//           'remove',
//           remove, i);
//       $(id).parent().siblings().removeClass('active');
//       $(id).parent().addClass('active');
//       return false;
//     });
//   }
// });

// $(document).ready(function() {
//   for (let i = 1; i <= 3; i++) {
//     let id = '#extract-operation-' + i;
//     $(id).click(function() {
//       generateEditTable(
//           'extract',
//           extract, i);
//       $(id).parent().siblings().removeClass('active');
//       $(id).parent().addClass('active');
//       return false;
//     });
//   }
// });

// $(document).ready(function() {
//   for (let i = 1; i <= 3; i++) {
//     let id = '#replace-operation-' + i;
//     $(id).click(function() {
//       generateEditTable(
//           'replace',
//           replace, i);
//       $(id).parent().siblings().removeClass('active');
//       $(id).parent().addClass('active');
//       return false;
//     });
//   }
// });

// $(document).ready(function() {
//   for (let i = 1; i <= 3; i++) {
//     let id = '#instr-operation-' + i;
//     $(id).click(function() {
//       generateRemixTable(
//           'instr',
//           instr, i);
//       $(id).parent().siblings().removeClass('active');
//       $(id).parent().addClass('active');
//       return false;
//     });
//   }
// });

// $(document).ready(function() {
//   for (let i = 1; i <= 3; i++) {
//     let id = '#genre-operation-' + i;
//     $(id).click(function() {
//       generateRemixTable(
//           'genre',
//           genre, i);
//       $(id).parent().siblings().removeClass('active');
//       $(id).parent().addClass('active');
//       return false;
//     });
//   }
// });

// $(document).ready(function() {
//   for (let i = 1; i <= 1; i++) {
//     let id = '#soft-operation-' + i;
//     $(id).click(function() {
//       generateRemixGuideTable(
//           'soft',
//           soft, i);
//       $(id).parent().siblings().removeClass('active');
//       $(id).parent().addClass('active');
//       return false;
//     });
//   }
// });

// $(document).ready(function() {
//   for (let i = 1; i <= 1; i++) {
//     let id = '#happy-operation-' + i;
//     $(id).click(function() {
//       generateRemixGuideTable(
//           'happy',
//           happy, i);
//       $(id).parent().siblings().removeClass('active');
//       $(id).parent().addClass('active');
//       return false;
//     });
//   }
// });

// $(document).ready(function() {
//   for (let i = 1; i <= 2; i++) {
//     let id = '#dedit-operation-' + i;
//     $(id).click(function() {
//       generateDiversityTable(
//           'dedit',
//           dedit, i);
//       $(id).parent().siblings().removeClass('active');
//       $(id).parent().addClass('active');
//       return false;
//     });
//   }
// });

// $(document).ready(function() {
//   for (let i = 1; i <= 2; i++) {
//     let id = '#dremix-operation-' + i;
//     $(id).click(function() {
//       generateDiversityRemixTable(
//           'dremix',
//           dremix, i);
//       $(id).parent().siblings().removeClass('active');
//       $(id).parent().addClass('active');
//       return false;
//     });
//   }
// });


// $(document).ready(function() {
//   for (let i = 1; i <= 2; i++) {
//     let id = '#sedit-operation-' + i;
//     $(id).click(function() {
//       generateDiversityTable(
//           'sedit',
//           sedit, i);
//       $(id).parent().siblings().removeClass('active');
//       $(id).parent().addClass('active');
//       return false;
//     });
//   }
// });

// $(document).ready(function() {
//   for (let i = 1; i <= 3; i++) {
//     let id = '#real-operation-' + i;
//     $(id).click(function() {
//       generateRealTable(
//           'real',
//           real, title, i);
//       $(id).parent().siblings().removeClass('active');
//       $(id).parent().addClass('active');
//       return false;
//     });
//   }
// });


// $(document).ready(function() {
//   for (let i = 1; i <= 1; i++) {
//     let id = '#multi-operation-' + i;
//     $(id).click(function() {
//       generateMultiTable(
//           'multi',
//           multi, i);
//       $(id).parent().siblings().removeClass('active');
//       $(id).parent().addClass('active');
//       return false;
//     });
//   }
// });


// // $(document).ready(function() {
// //   for (let i = 1; i <= 1; i++) {
// //     let id = '#long-operation-' + i;
// //     $(id).click(function() {
// //       generateLongTable(
// //           'long',
// //           long, i);
// //       $(id).parent().siblings().removeClass('active');
// //       $(id).parent().addClass('active');
// //       return false;
// //     });
// //   }
// // });
