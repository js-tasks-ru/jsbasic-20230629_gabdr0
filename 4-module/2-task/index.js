function makeDiagonalRed(table) {
  for ( const tr of table.rows ) {
    const trIndex = tr.rowIndex;
    for ( const td of tr.cells ) {
      if ( trIndex === td.cellIndex ) {
        td.style.backgroundColor = "red";
      }
    }
  }
}
