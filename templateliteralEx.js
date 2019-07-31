//Look at syntax:

  const generateHTML = (rows) => {
    return rows.map(row => `
    <div class='row'></div>
    `).join('');
    };

 //This generates:   <div class='row'></div>


 /**************************************/
//Look at syntax:
  const generateHTML = (rows) => {
    return rows.map(row => `
    <div class='row'>
      ${ row.map( cell => `<div class='cell'>
        ${ cell } </div>`).join('')}
      </div>
      `).join('');
  };

  //This generates:
    <div class='row'>
      <div class='cell'>
        0 </div><div class='cell'>
        0 </div><div class='cell'>
        0 </div>
      </div>

